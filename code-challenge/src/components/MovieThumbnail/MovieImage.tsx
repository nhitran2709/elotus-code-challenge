import React from 'react';
import { Image } from 'antd';

interface Props {
  altImg: string,
  imageUrl: string
}

const MovieImage = ({ altImg, imageUrl }: Props) => (
  <Image
    alt={altImg}
    preview={false}
    width='100%'
    src={imageUrl}
  />
);

export default MovieImage;