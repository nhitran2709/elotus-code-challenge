import React from 'react';
import { Card, Col, Row } from 'antd';

import './styles.css';
import MovieImage from './MovieImage';
import MovieInfoItem from './MovieInfoItem';
// import { useDispatch } from 'react-redux';

const { Meta } = Card;

interface Props {
  altImg: string,
  imgUrl: string,
  movieName: string,
  rating: number,
  releaseDate: string,
  setIsDetailMovieModal: (isDetailMovieModal: boolean) => void;
}

const BASE_URL_IMAGE = process.env.REACT_APP_API_IMAGE;

const MovieThumbnail = ({
  altImg,
  imgUrl,
  movieName,
  rating,
  releaseDate,
  setIsDetailMovieModal
}: Props) => {
  // const dispatch = useDispatch();
  const imageUrl = `${BASE_URL_IMAGE}${imgUrl}`;

  const handleClickOnCard = () => {
    setIsDetailMovieModal(true);
  }

  return (
    <Row gutter={[40, 16]}>
      <Col span={6} style={{ marginTop: "15px" }}>
        <Card
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