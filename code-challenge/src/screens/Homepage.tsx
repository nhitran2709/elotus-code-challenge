import React from "react";
import Header from "../components/Header.tsx";
import MovieTabBarLayout from "../components/MovieTabBar/MovieTabBarLayout";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <MovieTabBarLayout />
    </div>
  )
};

export default HomeScreen;