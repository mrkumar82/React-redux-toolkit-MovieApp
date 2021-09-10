import React, { useEffect } from "react";
import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../api/MovieApi";
import { APIKey } from "../api/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovie } from "../../Store/Reducer";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const resp = await movieApi
        .get(`?apikey=${APIKey}&s=Harry&type=movie`)
        .catch((error) => {
          console.log(error);
        });
      dispatch(addMovie(resp.data.Search));
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <h5>Movies</h5>
      <MovieListing />
    </div>
  );
}

export default Home;
