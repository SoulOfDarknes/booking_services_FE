import { configureStore } from '@reduxjs/toolkit';
import { bicycleApi } from './services/bicycleApi';

export const store = configureStore({
    reducer: {
        [bicycleApi.reducerPath]: bicycleApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bicycleApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
