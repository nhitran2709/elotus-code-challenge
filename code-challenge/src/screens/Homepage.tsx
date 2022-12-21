import React from "react";
import { Spin } from "antd";

import Header from "../components/Header.tsx";
import MovieCollection from "../components/MovieCollection";
import MovieTabBarLayout from "../components/MovieTabBar/MovieTabBarLayout";
import SearchInput from "../components/SearchInput";

interface Props {
  isLoading: boolean,
}

const HomeScreen = ({ isLoading }: Props) => {
  return (
    <div>
      <Header />
      <MovieCollection />
      <SearchInput />
      {isLoading ? <Spin /> : <MovieTabBarLayout />}
    </div>
  )
};

export default HomeScreen;