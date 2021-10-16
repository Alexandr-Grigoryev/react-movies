import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as moviesAPI from "../services/movies-api";
import styles from "./MovieCastView.module.css";

export default function MovieCastView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const BASE_URL = "//image.tmdb.org/t/p/w200";

  useEffect(() => {
    moviesAPI.fetchMovieCast(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <ul className={styles.cast}>
          {movie.cast.map((item) => (
            <li key={item.id}>
              {item.name}

              <img
                src={BASE_URL + item.profile_path}
                alt={`${item.name}`}
              ></img>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
