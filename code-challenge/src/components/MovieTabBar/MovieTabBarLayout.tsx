import React from 'react';
import { Tabs } from 'antd';

import './styles.css';
import MovieThumbnail from '../MovieThumbnail';

const items = new Array(3).fill(null).map((labelName, i) => {
  const id = String(i + 1);

  return {
    label: `${labelName} Movies`,
    key: id,
    children: (
      <div className='movie-thumbnail-list'>
        <MovieThumbnail altImg='movie' imgUrl='/' movieName='Avatar' description='Info' />
        <MovieThumbnail altImg='movie' imgUrl='/' movieName='Avatar' description='Info' />
        <MovieThumbnail altImg='movie' imgUrl='/' movieName='Avatar' description='Info' />
        <MovieThumbnail altImg='movie' imgUrl='/' movieName='Avatar' description='Info' />
      </div>
    ),
  };
});

const MovieTabBarLayout = () => (
  <section className="movie-tabbar-layout card-container">
    <Tabs
      className='movie-tabbar'
      type="card"
      items={items}
    />
  </section>
);

export default MovieTabBarLayout;