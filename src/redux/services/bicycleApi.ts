import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Bicycle } from 'src/types/typeBicycle';

type BicycleTag = { type: 'Bicycle'; id: string };

export const bicycleApi = createApi({
    reducerPath: 'bicycleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:3333',
    }),
    tagTypes: ['Bicycle'],
    endpoints: (builder) => ({
        getBicycles: builder.query<Bicycle[], void>({
            query: () => '/bicycle',
            providesTags: (result) =>
                result
                    ?
                    [...result.map(({ id }) => ({ type: 'Bicycle' as const, id } as BicycleTag)), { type: 'Bicycle', id: 'LIST' }]
                    : [{ type: 'Bicycle', id: 'LIST' }],
        }),
        addBicycle: builder.mutation<Bicycle, Partial<Bicycle>>({
            query: (body) => ({
                url: '/bicycle',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Bicycle', id: 'LIST' }],
        }),
        updateBicycleStatus: builder.mutation<Bicycle, { id: string; status: string }>({
            query: ({ id, status }) => ({
                url: `/bicycle/${id}`,
                method: 'PUT',
                body: { id, status },
            }),
            invalidatesTags: [{ type: 'Bicycle', id: 'LIST' }],
        }),
        deleteBicycle: builder.mutation<{ success: boolean; id: string }, string>({
            query: (id) => ({
                url: `/bicycle/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Bicycle', id: 'LIST' }],
        }),
    }),
});

export const { useAddBicycleMutation, useGetBicyclesQuery, useUpdateBicycleStatusMutation, useDeleteBicycleMutation } = bicycleApi;

