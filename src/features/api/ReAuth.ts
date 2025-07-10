import {
  fetchBaseQuery,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn, BaseQueryApi } from '@reduxjs/toolkit/query';
import type { RootState } from '../../store/Store';
import { logout, refreshTokens } from '../slice/Auth';
import { Mutex } from 'async-mutex';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const BaseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api: BaseQueryApi, extraOptions) => {
  // 1) Try the initial request
  let result = await baseQuery(args, api, extraOptions);

  // 2) If we get a 401, attempt to refresh
  if (result.error && 'status' in result.error && result.error.status === 401) {
    // If no other refresh is in progress, acquire the mutex and refresh
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshToken = (api.getState() as RootState).auth.refreshToken;
        // Call the refresh endpoint
        const refreshResult = await baseQuery(
          {
            url: '/auth/refresh',
            method: 'POST',
            body: { token: refreshToken },
          },
          api,
          extraOptions
        );

        if (refreshResult.data) {
          // Update Redux with the new tokens
          api.dispatch(
            refreshTokens(
              refreshResult.data as {
                accessToken: string;
                refreshToken: string;
              }
            )
          );
          // Retry the original request
          result = await baseQuery(args, api, extraOptions);
        } else {
          // Refresh failed – log the user out
          api.dispatch(logout());
        }
      } finally {
        release();
      }
    } else {
      // Wait for the ongoing refresh to complete, then retry original
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};
