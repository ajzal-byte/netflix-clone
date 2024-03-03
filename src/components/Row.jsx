import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import "./css/Row.css";

const Row = ({ title, fetchURL, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchURL]);
  return (
    <div className="row">
      <h2 style={{ color: "white" }}>{title}</h2>
      <div className="row__posters">
        {movies?.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`https://image.tmdb.org/t/p/original${
                  isLargeRow ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie?.title || movie?.name || movie?.original_name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
