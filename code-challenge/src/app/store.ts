import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import movieListSlice from '../features/movieListSlice';

export const store = configureStore({
  reducer: {
    movies: movieListSlice
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
