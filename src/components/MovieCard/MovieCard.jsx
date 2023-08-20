/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  // eslint-disable-next-line no-unused-vars
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className="movieCard">
      <Link className="movieCardLink" to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          src={imageUrl}
          alt={movie.title}
          className="movieImage"
        />
      </Link>
      <div>{movie.title}</div>
    </li>
  );
}

export default MovieCard;
