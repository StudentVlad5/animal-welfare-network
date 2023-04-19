import { configureStore } from '@reduxjs/toolkit';
import { reloadSlice } from './reload/slice';
import { breedsSlice } from './breeds/slice';
import { authReducer } from './auth/slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { modalReducer } from './modal/slice';

// Persisting token and role fields from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'permission'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    reload: reloadSlice.reducer,
    modal: modalReducer,
    breeds: breedsSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
