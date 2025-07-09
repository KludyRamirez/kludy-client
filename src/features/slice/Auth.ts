import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
};

const Auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
    refreshTokens: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const { login, logout, refreshTokens } = Auth.actions;
export default Auth.reducer;
