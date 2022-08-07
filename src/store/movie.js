// eslint-disable-next-line
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  moviesList: [],
  search: "",
};

export const fetshMovies = createAsyncThunk();

const movieSlise = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.moviesList.push(action.payload);
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setMoviesList: (state, action) => {
      state.moviesList = action.payload;
    },
  },
});

export const { addMovie, setSearch, setMoviesList } = movieSlise.actions;
export default movieSlise.reducer;
