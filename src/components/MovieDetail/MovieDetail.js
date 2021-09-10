import React, { useEffect, useState } from "react";
import movieApi from "../api/MovieApi";
import { APIKey } from "../api/MovieApiKey";

function MovieDetail(props) {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      const resp = await movieApi
        .get(`?apikey=${APIKey}&i=${props.match.params.id}&plot=full`)
        .catch((error) => {
          console.log("error", error);
        });
      setMovie(resp.data);
      setLoading(true);
    };
    fetchDetail();
  }, []);

  return (
    <div className="container pdt-20">
      {loading ? (
        <div className="row">
          <div className="col m4">
            <img src={movie.Poster} alt={movie.Title} className="fluid-img" />
          </div>
          <div className="col m8">
            <h5>{movie.Title}</h5>
            <p>{movie.Plot}</p>

            <div className="meta-info">
              <p>Released : {movie.Released}</p>
            </div>
          </div>
        </div>
      ) : (
        <h5>Loading...</h5>
      )}
    </div>
  );
}

export default MovieDetail;
