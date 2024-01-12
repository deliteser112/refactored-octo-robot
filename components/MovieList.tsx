// components/MovieList.tsx
import React from "react";
import { Movie } from "../interfaces/Movie";
import MovieCard from "./MovieCard";

interface MovieListProps {
  fromSearch?: boolean;
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ fromSearch, movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-red">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} fromSearch={fromSearch} />
      ))}
    </div>
  );
};

export default MovieList;
