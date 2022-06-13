import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  tagTypes: "movies",
  endpoints: (build) => ({
    getMovies: build.query({
      query: () => {
        return {url: 'movies'}
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
        validateStatus: (resp) => {
          return resp?.status === 204 ? false : true
        },
      }),
      invalidatesTags: [{type: "movies"}]
    }), 
   editMovie: build.mutation({
      query: (data) => ({
        url: `movies`,
        method: 'PUT',
        body: data,
        validateStatus: (resp) => {
          return resp?.status === 204 ? false : true
        },
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
