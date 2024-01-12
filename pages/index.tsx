import Link from "next/link";
import type { NextPage } from "next";
import { useState, useEffect } from "react";

// layouts
import Layout from "../components/Layout";

// components
import NoData from "../components/NoData";
import MovieList from "../components/MovieList";
import SearchBox from "../components/SearchBox";
import SkeletonLoading from "../components/SkeletonLoading";

// types
import { Movie } from "../interfaces/Movie";

// utils
import api, { getTrendingShows } from "../utils/api";

const Home: NextPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState<string>("");
  const [fromSearch, setFromSearch] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getTrendingShows().then((data) => {
      setMovies(data.results);
      setIsLoading(true);
    });
  }, []);

  useEffect(() => {
    try {
      setIsLoading(true);
      if (query !== "") {
        api
          .get("/search/movie", {
            params: {
              query,
            },
          })
          .then((res: any) => {
            console.log("res.data.results", res.data.results);
            setMovies(res.data.results);
            setFromSearch(true);
            setIsLoading(false);
          });
      } else {
        getTrendingShows().then((data) => {
          setMovies(data.results);
          setFromSearch(false);
          setIsLoading(false);
        });
      }
    } catch (error) {
      console.error("Error searching:", error);
    }
  }, [query]);

  return (
    <Layout title="TMDB | Home">
      <SearchBox onSearchByGenreAndYear={(q: string) => setQuery(q)} />
      <h1 className="font-bold my-4 text-lg">Trending TV shows for the previous 7 Days</h1>
      {isLoading ? (
        <SkeletonLoading />
      ) : (
        <>
          {movies.length > 0 ? (
            <MovieList movies={movies} fromSearch={fromSearch} />
          ) : (
            <NoData />
          )}
        </>
      )}
    </Layout>
  );
};

export default Home;
