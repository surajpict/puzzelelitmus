import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:8080';

export const apiSlice = createApi({
    baseQuery : fetchBaseQuery({ baseUrl : baseURI}),
    endpoints : builder => ({
        
        getUser : builder.query({
            // get: 'http://localhost:8080/api/labels'
            query : () => '/api/user',
            providesTags: ['user']
        }),
        // add new Transaction
        addUser : builder.mutation({
            query : (initialUser) => ({
                  // post: 'http://localhost:8080/api/transaction'
                url: '/api/user',
                method: "POST",
                body: initialUser
            }),
            invalidatesTags: ['user']
        })

    })
})

export default apiSlice;