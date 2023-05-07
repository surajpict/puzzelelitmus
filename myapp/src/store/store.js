import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducer';
import { apiSlice } from './apiSlice';

export const store = configureStore({
    reducer : {
        user : userSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})