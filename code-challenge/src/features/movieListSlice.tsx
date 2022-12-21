import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieList } from "../apis/fetchMovieListApi";
import { MovieReducerType } from "../models/movieListTypes";

const initialState: MovieReducerType = {
  movieList: null,
  isLoading: false,
  errors: null
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovieList.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMovieList.fulfilled]: (state, action) => {
      state.movieList = action.payload;
      state.isLoading = false;
    },
    [fetchMovieList.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.error;
    }
  }
})

export default moviesSlice.reducer;
