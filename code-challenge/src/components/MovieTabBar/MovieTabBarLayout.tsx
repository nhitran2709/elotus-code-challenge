import React, { useState } from 'react';
import { Tabs } from 'antd';

import './styles.css';
import { useSelector } from 'react-redux';
import { MovieListDataType } from '../../models/movieListTypes';
import MovieThumbnailList from '../MovieThumbnail/MovieThumbnailList';
import ModalInfo from '../ModalInfo';

const MovieTabBarLayout = () => {
  const { movies } = useSelector((state: MovieListDataType) => state);

  const [isDetailMovieModal, setIsDetailMovieModal] = useState(false);

  const { movieList } = movies;

  const items = new Array(3).fill(null).map((labelName, i) => {
    const id = String(i + 1);

    return {
      label: `Popular Movies`,
      key: id,
      children: (
        <MovieThumbnailList movieList={movieList} setIsDetailMovieModal={setIsDetailMovieModal} />
      ),
    };
  });

  return (
    <section className="movie-tabbar-layout card-container">
      <ModalInfo isDetailMovieModal={isDetailMovieModal} setIsDetailMovieModal={setIsDetailMovieModal} />
      <Tabs
        className='movie-tabbar'
        type="card"
        items={items || []}
      />
    </section>
  )
};

export default MovieTabBarLayout;