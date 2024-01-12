import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// layouts
import Layout from "../../components/Layout";

// components
import NoData from "../../components/NoData";
import MovieList from "../../components/MovieList";
import SkeletonLoading from "../../components/SkeletonLoading";
import Pagination from "../../components/Pagination";

// types
import { MoviesPageProps } from "../../interfaces/Movie";

// api
import api from "../../utils/api";

const MoviesPage: React.FC<MoviesPageProps> = ({ page }) => {
  const router = useRouter();

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const filterMovies = () => {
      let filtered = movies;

      if (selectedGenre) {
        filtered = filtered.filter((movie) =>
          movie.genre_ids.includes(parseInt(selectedGenre))
        );
      }

      if (selectedYear) {
        filtered = filtered.filter(
          (movie) =>
            movie.release_date && movie.release_date.startsWith(selectedYear)
        );
      }

      setFilteredMovies(filtered);
    };

    filterMovies();
  }, [movies, selectedGenre, selectedYear]);

  const fetchData = () => {
    setIsLoading(true);
    api.get("/genre/movie/list").then((res) => {
      setGenres([...res.data.genres]);
      api
        .get("/movie/popular", {
          params: { page },
        })
        .then((movRes) => {
          setMovies([...movRes.data.results]);
          setTotalPages(movRes.data.total_pages);
          setIsLoading(false);
        });
    });
  };

  const handlePageChange = async (newPage: number) => {
    setIsLoading(true); // Start loading
    try {
      // Update the URL with the new page number and wait for the navigation to complete
      await router.push(`/explorer/movies?page=${newPage}`);
    } finally {
      setIsLoading(false); // Stop loading regardless of the result
    }
  };

  return (
    <Layout title="TMDB | Movies">
      {/* Select options for genre and year */}
      <div className="flex gap-4 mb-8 justify-end">
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="">All Years</option>
          {/* Generate years dynamically or use a predefined list */}
          {[...Array(30)].map((_, index) => {
            const year = new Date().getFullYear() - index;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
      <h1 className="font-bold my-4 text-lg">Movies</h1>
      {isLoading ? (
        <SkeletonLoading />
      ) : (
        <>
          {filteredMovies.length > 0 ? (
            <>
              {/* Display filtered movies */}
              <MovieList movies={filteredMovies} />

              {/* Pagination controls */}
              <Pagination
                page={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <NoData />
          )}
        </>
      )}
    </Layout>
  );
};

export default MoviesPage;

export async function getServerSideProps(context) {
  const page = parseInt(context.query.page as string) || 1; // Default to page 1 if not specified

  return {
    props: {
      page,
    },
  };
}
