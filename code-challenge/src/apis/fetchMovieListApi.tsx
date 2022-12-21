import { createAsyncThunk } from "@reduxjs/toolkit";
import { END_POINTS } from "./endpoints";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const baseURL = `${BASE_URL}${END_POINTS.POPULAR}?api_key=${API_KEY}`;
const name = 'movies/fetchMovieList';

export const fetchMovieList: any = createAsyncThunk(
  name,
  async () => fetch(baseURL).then((response) => response.json())
)
