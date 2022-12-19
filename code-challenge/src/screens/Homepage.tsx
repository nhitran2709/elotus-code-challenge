import React from "react";
import Header from "../components/Header.tsx";
import MovieCollection from "../components/MovieCollection";
import MovieTabBarLayout from "../components/MovieTabBar/MovieTabBarLayout";
import SearchInput from "../components/SearchInput";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <MovieCollection />
      <SearchInput />
      <MovieTabBarLayout />
    </div>
  )
};

export default HomeScreen;