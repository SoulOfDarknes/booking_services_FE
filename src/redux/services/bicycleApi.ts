import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Bicycle } from 'src/types/typeBicycle';

export const bicycleApi = createApi({
    reducerPath: 'bicycleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NX_API_URL || 'http://localhost:3333',
    }),
    endpoints: (builder) => ({
        addBicycle: builder.mutation<Bicycle, Partial<Bicycle>>({
            query: (body) => ({
                url: '/bicycle',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useAddBicycleMutation } = bicycleApi;

