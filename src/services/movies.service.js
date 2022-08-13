import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const serviceURL =  "http://localhost:4000/";

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: serviceURL,
  }),
  tagTypes: "movies",
  endpoints: (build) => ({
    getMovies: build.query({
      query: (params) => {
        return {
        url: `movies`,
        params: params,
      }
      },
      transformResponse: (resp) =>{
        return resp
      },
      providesTags: ["movies"] 
    }),
    getMovie: build.query({
      query: (id) => {
        return {url: `movies/${id}`}
      },
      transformResponse: (resp) =>{
        return resp
      }
    }),
    deleteMovie: build.mutation({
      query: (id) => ({
        url: `movies/${id}`,
        method: 'DELETE',
        validateStatus: (resp) => {
          return resp?.status === 204 ? false : true
        },
      }),
      invalidatesTags: [{type: "movies"}]
    }),
    createMovie: build.mutation({
      query: (data) => ({
        url: `movies`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{type: "movies"}]
    }), 
   editMovie: build.mutation({
      query: (data) => ({
        url: `movies`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: [{type: "movies"}]
    })
  }),
});

export const {
    useGetMoviesQuery,
    useGetMovieQuery, 
    useDeleteMovieMutation,
    useCreateMovieMutation,
    useEditMovieMutation,
  } = apiSlice;
