import { createSlice } from "@reduxjs/toolkit";

import { fetchMovieInfo } from "../apis/fetchMovieInfo";
import { MovieReducerType } from "../models/MovieInfoType";

const initialState: MovieReducerType = {
  movieInfo: null,
  isLoading: false,
  errors: null
}

const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovieInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMovieInfo.fulfilled]: (state, action) => {
      state.movieInfo = action.payload;
      state.isLoading = false;
    },
    [fetchMovieInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.error;
    }
  }
})

export default moviesSlice.reducer;
