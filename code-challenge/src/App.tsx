import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';

import { fetchMovieList } from './apis/fetchMovieListApi';
import { MovieListDataType } from './models/movieListTypes';

import HomeScreen from './screens/Homepage';

const App = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state: MovieListDataType) => state);

  const { errors, isLoading } = movies;

  useEffect(() => {
    dispatch(fetchMovieList())
  }, [dispatch]);

  useEffect(() => {
    !!errors && message.info(errors);
  }, [errors])

  return (
    <div className="App">
      <HomeScreen isLoading={isLoading}/>
    </div>
  );
}

export default App;
