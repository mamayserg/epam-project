import { configureStore } from "@reduxjs/toolkit"
import moviesReducer from "./movie"
import { apiSlice} from "../services/movies.service"
// import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
   [apiSlice.reducerPath]: apiSlice.reducer,
    movies: moviesReducer
  },
  middleware: (getDefaultMiddelvare) => {
    return getDefaultMiddelvare().concat(apiSlice.middleware)
  }
})

// setupListeners(store.dispatch)