/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";
import { get } from "../../data/httpClient";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./ContexMovieCard.css";

function ContextMovieCard() {
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
      console.log(data.results);
    });
  }, []);

  return (
    <ul className="ulcontainer">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default ContextMovieCard;
