// components/MovieCard.tsx
import React from "react";
import Image from "next/image";
import moment from "moment";
import { MovieCardProps } from "../interfaces/Movie";

import HalfRating from "./HalfRating";
import MovieReviews from "./MovieReviews";

import posterImg from "../assets/no-poster.png";


const MovieCard: React.FC<MovieCardProps> = ({ fromSearch, movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="card card-compact bg-base-100 shadow-xl cursor-pointer">
      <figure>
        <Image
          src={movie.poster_path ? posterUrl : posterImg}
          alt={movie.name || movie.title}
          width={100}
          height={140}
          className="object-cover h-48 w-full hover:opacity-50 transition-all ease-in-out duration-500"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-[20px] font-bold w-64 truncate hover:opacity-50">
          {movie.name || movie.title}
        </h2>
        <p className="text-gray-700 text-base max-h-[100px] overflow-y-hidden">
          {movie.overview}
        </p>
        <p className="font-medium text-slate-500">
          Released Date:{" "}
          {moment(movie.first_air_date || movie.release_date).format(
            "MMM D, YYYY"
          )}
        </p>
        <HalfRating rating={movie.vote_average / 2} disabled />
        {movie.vote_average} ({movie.vote_count} votes)
        {fromSearch && <MovieReviews movieId={movie.id} />}
      </div>
    </div>
  );
};

export default MovieCard;
