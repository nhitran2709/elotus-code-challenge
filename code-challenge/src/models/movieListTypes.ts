export interface MovieInfoType {
  id: string,
  title: string,
  adult: boolean,
  poster_path: string,
  release_date: string,
  vote_count: number,
  vote_average: number,
  overview: string
}

export interface MovieListType {
  page: number,
  results: MovieInfoType[],
  total_pages: number,
  total_results: number
}

export interface MovieReducerType {
  movieList: null | MovieListType,
  isLoading: boolean,
  errors: null | string,
}

export interface MovieListDataType {
  movies: MovieReducerType
}