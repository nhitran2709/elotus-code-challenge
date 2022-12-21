import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import { useDispatch } from 'react-redux';

import { fetchMovieInfo } from '../../apis/fetchMovieInfo';

import MovieImage from './MovieImage';
import MovieInfoItem from './MovieInfoItem';
import './styles.css';

const { Meta } = Card;

interface Props {
  altImg: string,
  imgUrl: string,
  movieName: string,
  rating: number,
  releaseDate: string,
  setIsDetailMovieModal: (isDetailMovieModal: boolean) => void,
  id: string
}

const BASE_URL_IMAGE = process.env.REACT_APP_API_IMAGE;

const MovieThumbnail = ({
  altImg,
  imgUrl,
  movieName,
  rating,
  releaseDate,
  setIsDetailMovieModal,
  id,
}: Props) => {
  const dispatch = useDispatch();

  const [movieId, setMovieId] = useState('');
  const imageUrl = `${BASE_URL_IMAGE}${imgUrl}`;

  useEffect(() => {
    movieId !== '' && dispatch(fetchMovieInfo(movieId))
  }, [dispatch, movieId])

  const handleClickOnCard = (e: any) => {
    const id = e.currentTarget.id;

    setMovieId(id);
    setIsDetailMovieModal(true);
  }

  return (
    <Row gutter={[40, 16]}>
      <Col span={6} style={{ marginTop: "15px" }}>
        <Card
          id={id}
          onClick={handleClickOnCard}
          className='movie-card-info'
          hoverable
          style={{ width: 240, height: 500 }}
          cover={<MovieImage altImg={altImg} imageUrl={imageUrl} />}
        >
          <Meta
            className='movie-general-info'
            title={movieName}
            description={<MovieInfoItem releaseDate={releaseDate} rating={rating} />} />
        </Card>
      </Col>
    </Row>
  )
};

export default MovieThumbnail;