import { createApi } from '@reduxjs/toolkit/query/react';
import { login, logout, refreshTokens } from '../slice/Auth';
import { BaseQueryWithReAuth } from './ReAuth';

export const Auth = createApi({
  reducerPath: 'Auth',
  baseQuery: BaseQueryWithReAuth,
  endpoints: (builder) => ({
    login: builder.mutation<
      { accessToken: string; refreshToken: string },
      { username: string; password: string }
    >({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(login(data));
        } catch (error) {
          console.error('Login failed:', error);
        }
      },
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'logout',
        method: 'POST',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;

          dispatch(logout());
        } catch (error) {
          console.error('Logout failed:', error);
        }
      },
    }),
    refresh: builder.mutation<
      { accessToken: string; refreshToken: string },
      { token: string }
    >({
      query: ({ token }) => ({
        url: 'refresh',
        method: 'POST',
        body: { token },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(refreshTokens(data));
        } catch (error) {
          console.error('Token refresh failed:', error);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRefreshMutation } =
  Auth;
