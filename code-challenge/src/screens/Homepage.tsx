import React from "react";
import Header from "../components/Header.tsx";
import MovieCollection from "../components/MovieCollection";
import MovieTabBarLayout from "../components/MovieTabBar/MovieTabBarLayout";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <MovieCollection />
      <MovieTabBarLayout />
    </div>
  )
};

export default HomeScreen;