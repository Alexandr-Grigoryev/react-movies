import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as moviesAPI from "../services/movies-api";
// import styles from "./MovieCastView.module.css";

export default function MovieReviewsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.fetchMovieReviews(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <div>
          {movie.total_results === 0 && <p>no reviews</p>}
          <ul>
            {movie.results.map((item) => (
              <li key={item.id}>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
