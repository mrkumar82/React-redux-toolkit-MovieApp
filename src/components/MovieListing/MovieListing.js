import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";

function MovieListing() {
  const { movies } = useSelector((state) => state.movies);
  return (
    <div>
      <div className="row d-flex">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieListing;
