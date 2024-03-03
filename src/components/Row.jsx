import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import "./css/Row.css";
import YouTube from "react-youtube";
import toast from "react-hot-toast";

const Row = ({ title, fetchURL, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const handleTrailer = (id) => {
    if(urlId) return setUrlId(null)
    axios
      .get(
        `/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
      )
      .then((response) => {
        if (response.data.results.length !== 0)
          setUrlId(response.data.results[0]);
        else
          toast.error("Trailer not found", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
      })
      .catch(() =>
        toast.error("Trailer not found", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        })
      );
  };
  return (
    <div className="row">
      <h2 style={{ color: "white", marginTop: "10px" }}>{title}</h2>
      <div className="row__posters">
        {movies?.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                onClick={() => handleTrailer(movie.id)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original${
                  isLargeRow ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie?.title || movie?.name || movie?.original_name}
                title={movie?.title || movie?.name || movie?.original_name}
              />
            )
        )}
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
};

export default Row;
