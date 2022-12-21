import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import movieInfoSlice from '../features/movieInfoSlice';
import movieListSlice from '../features/movieListSlice';

export const store = configureStore({
  reducer: {
    movies: movieListSlice,
    movie: movieInfoSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
