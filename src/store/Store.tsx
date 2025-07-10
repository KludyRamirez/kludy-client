import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AuthReducer from '../features/slice/Auth';
import { Auth } from '../features/api/Auth';
import { Project } from '../features/api/Project';
import { Badge } from '../features/api/Badge';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, AuthReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    [Auth.reducerPath]: Auth.reducer,
    [Project.reducerPath]: Project.reducer,
    [Badge.reducerPath]: Badge.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      Auth.middleware,
      Project.middleware,
      Badge.middleware
    ),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
