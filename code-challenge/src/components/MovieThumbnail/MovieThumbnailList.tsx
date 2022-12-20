import React from "react";
import { Row } from 'antd';

import { MovieListType } from "../../models/movieListTypes";
import MovieThumbnail from ".";

interface Props {
  movieList: MovieListType | null,
  setIsDetailMovieModal: (isDetailMovieModal: boolean) => void;
}

const MovieThumbnailList = ({ movieList, setIsDetailMovieModal }: Props) => {

  return (
    <Row className='movie-thumbnail-list'>
      {
        movieList?.results && movieList?.results?.map(({ id, title, poster_path, vote_average, release_date }) => (
          <MovieThumbnail
            releaseDate={release_date}
            rating={vote_average}
            key={id}
            altImg={title}
            imgUrl={poster_path}
            movieName={title}
            setIsDetailMovieModal={setIsDetailMovieModal}
          />
        ))
      }
    </Row>
  )
};

export default MovieThumbnailList;