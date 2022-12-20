import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const name = 'movie/fetchMovieInfo';

export const fetchMovieInfo: any = createAsyncThunk(
  name,
  async (movieId: number) => await fetch(`${BASE_URL}${movieId}?api_key=${API_KEY}`).then((response) => response.json())
)
