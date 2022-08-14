import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import {Movie, MovieData} from "../interfaces/movie.interface"
export const serviceURL =  "http://localhost:4000/";

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: serviceURL,
  }),
  tagTypes:  ["movies"],
  endpoints: (build) => ({
    getMovies: build.query<Movie[], any>({
      query: (params) => {
        return {
        url: `movies`,
        params: params,
      }
      },
      transformResponse: (resp: Movie[]) =>{
        return resp
      },
      providesTags: ["movies"] 
    }),
    getMovie: build.query<Movie, string>({
      query: (id) => {
        return {url: `movies/${id}`}
      },
      transformResponse: (resp: Movie) =>{
        return resp
      }
    }),
    deleteMovie: build.mutation<Movie, number>({
      query: (id) => ({
        url: `movies/${id}`,
        method: 'DELETE',
        validateStatus: (resp) => {
          return resp?.status === 204 ? false : true
        },
      }),
      invalidatesTags: [{type: "movies"}]
    }),
    createMovie: build.mutation<MovieData, string>({
      query: (data) => ({
        url: `movies`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{type: "movies"}]
    }), 
   editMovie: build.mutation<Movie, string>({
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
  }: any = apiSlice;
