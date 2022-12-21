export interface MovieInfoType {
  adult: boolean,
  id: number | null,
  imdb_id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string | null,
  release_date: string | null,
  runtime: number | null,
  status: string,
  tagline: string,
  title: string | null,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export interface MovieReducerType {
  movieInfo: MovieInfoType | null,
  isLoading: boolean,
  errors: string | null
}

export interface MovieDataType {
  movie: MovieReducerType
}