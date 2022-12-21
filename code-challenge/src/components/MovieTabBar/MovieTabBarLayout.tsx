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

  const handleOnChangeTabs = (key: string) => {
    // Validate and handle fetch api equivalent with each key value
    // switch (key) {
    //   case 'Now Playing':

    //     break;
    //   case 'Top Rate':

    //     break;

    //   default:
    //     break;
    // }
  }

  const labelTabs = ['Popular', 'Now Playing', 'Top Rate']

  const items = labelTabs.map((item: string) => ({
    label: `${item} Movies`,
    key: item,
    children: (
      <MovieThumbnailList movieList={movieList} setIsDetailMovieModal={setIsDetailMovieModal} />
    ),
  }));

  return (
    <section className="movie-tabbar-layout card-container">
      <ModalInfo isDetailMovieModal={isDetailMovieModal} setIsDetailMovieModal={setIsDetailMovieModal} />
      <Tabs
        onChange={handleOnChangeTabs}
        className='movie-tabbar'
        type="card"
        items={items || []}
      />
    </section>
  )
};

export default MovieTabBarLayout;