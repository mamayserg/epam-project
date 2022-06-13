import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { movies } from "../constants/movies"

const initialState = {
  moviesList: movies,
  search: ''
}

export const fetshMovies = createAsyncThunk()

const movieSlise = createSlice({
  name: "movies",
  initialState,
  reducers: {
  addMovie: (state, action) => {
    state.moviesList.push({...action.payload, id: 8946})
  },
  setSearch: (state , action) =>{
    state.search = action.payload
  },
  
},

})

export const  { addMovie, setSearch } = movieSlise.actions
export default movieSlise.reducer