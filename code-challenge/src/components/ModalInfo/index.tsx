import React, { useEffect } from "react";
import { Modal, Spin, Empty, message } from 'antd';
import { useSelector } from "react-redux";

import { MovieDataType, MovieReducerType } from "../../models/MovieInfoType";
import { isObjectEmpty } from "../../helpers/validate";

import MovieImage from "../MovieThumbnail/MovieImage";
import MovieInfoItem from './MovieInfoItem';
import './styles.css';

interface Props {
  isDetailMovieModal: boolean,
  setIsDetailMovieModal: (isDetailModal: boolean) => void;
}

const BASE_URL_IMAGE = process.env.REACT_APP_API_IMAGE;

const ModalInfo = ({ setIsDetailMovieModal, isDetailMovieModal }: Props) => {
  const { movie } = useSelector((state: MovieDataType) => state);
  const { isLoading, movieInfo, errors }: MovieReducerType = movie;

  const handleCancel = () => {
    setIsDetailMovieModal(false);
  }

  useEffect(() => {
    if (errors) {
      message.info(errors);
    }
  }, [errors]);

  return (
    <Modal width={800} centered onCancel={handleCancel} visible={isDetailMovieModal} footer={null}>
      <div className="movie-detail-wrapper">
        {
          isLoading ? <Spin /> : (
            isObjectEmpty(movie) ? (<Empty />) : (
              movieInfo?.title && movieInfo?.poster_path && <MovieImage altImg={movieInfo.title} imageUrl={`${BASE_URL_IMAGE}${movieInfo?.poster_path}`} />
            )
          )
        }
        <div className="movie-detail-content-group">
          {(movieInfo?.title) && <h2 className="movie-name">{movieInfo?.title}</h2>}
          {movieInfo?.release_date && <MovieInfoItem labelName='Release Date:' content={movieInfo?.release_date} />}
          {movieInfo?.vote_count && <MovieInfoItem labelName='Release vote count:' content={movieInfo?.vote_count} />}
          {movieInfo?.runtime && <MovieInfoItem labelName='Time (minutes):' content={movieInfo?.runtime} />}
          {movieInfo?.overview && <MovieInfoItem content={movieInfo?.overview} />}
        </div>
      </div>
    </Modal>
  )
};

export default ModalInfo;