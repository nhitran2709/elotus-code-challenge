import React from "react";
import { Rate } from 'antd';

interface Props {
  rating: number,
  releaseDate: string
}

const MovieInfoItem = ({ rating, releaseDate }: Props) => (
  <>
    <Rate defaultValue={rating} disabled />
    <p className='movie-release-date'>{releaseDate}</p>
  </>
);

export default MovieInfoItem;