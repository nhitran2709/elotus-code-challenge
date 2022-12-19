import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

interface Props {
  altImg: string,
  imgUrl: string,
  movieName: string,
  description: string,
}

const MovieThumbnail = ({
  altImg,
  imgUrl,
  movieName,
  description
}: Props) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt={altImg} src={imgUrl} />}
  >
    <Meta title={movieName} description={description} />
  </Card>
);

export default MovieThumbnail;