import React from 'react';
import { Tabs } from 'antd';

import './styles.css';

const items = new Array(3).fill(null).map((labelName, i) => {
  const id = String(i + 1);

  return {
    label: `${labelName} Movies`,
    key: id,
    children: (
      <>
      </>
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