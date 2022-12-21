import React from "react";

import './styles.css';

interface Props {
  content: string | number;
  labelName?: string
}

const MovieInfoItem = ({ labelName, content }: Props) => (
  <div className="movie-detail-item-wrap">
    {labelName && <span className="movie-info-lable">{labelName}</span>}
    <p className={labelName ? 'movie-info-data' : ''}>{content}</p>
  </div>
);

export default MovieInfoItem;