// interfaces/Movie.ts
export interface Movie {
    name: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    first_air_date: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}


export interface HalfRatingProps {
    rating?: number;
    disabled?: boolean;
  }
  


export interface MovieCardProps {
    fromSearch: boolean;
    movie: Movie;
}

interface Genre {
    id: number;
    name: string;
}

export interface MoviesPageProps {
    movies: Movie[];
    genres: Genre[];
    page: number;
    totalPages: number;
}