import {
  Switch,
  NavLink,
  Route,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
// import {} from "react-router-dom";
import PageHeading from "../components/PageHeading/PageHeading";
import MovieCastView from "./MovieCastView";
// import MovieReviewsView from "./MovieReviewsView";
import * as moviesAPI from "../services/movies-api";
import styles from "./MovieDetailsView.module.css";

const MovieReviewsView = lazy(() =>
  import("./MovieReviewsView" /* webpackChunkName: "MovieReviewsView" */)
);

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { path } = useRouteMatch();

  const history = useHistory();
  const location = useLocation();
  // console.log(path);
  // console.log(url);
  // console.log(location);

  const BASE_URL = "//image.tmdb.org/t/p/w300";

  useEffect(() => {
    moviesAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? `/`);
  };

  return (
    <>
      {movie && <PageHeading text={`Movie "${movie.title}" ${movieId}`} />}
      <button type="button" onClick={onGoBack}>
        Back
      </button>
      {movie && (
        <>
          <div className={styles.movieDetails}>
            <div>
              {" "}
              <img src={BASE_URL + movie.poster_path} alt={movie.title} />
              {/* <img src={BASE_URL + movie.backdrop_path} alt={movie.title} /> */}
            </div>

            <div>
              <h2>Overview</h2>
              <p className={styles.description}>{movie.overview}</p>
            </div>
          </div>
          {/* <p>{book.descr}</p> */}
        </>
      )}

      {movie && (
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${movieId}/cast`,
                state: { from: location?.state?.from ?? undefined },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${movieId}/reviews`,
                state: { from: location?.state?.from ?? undefined },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      )}

      {/* <hr /> */}

      {/* <Route path="/movies/:movieId/cast">{movie && <MovieCastView />}</Route> */}
      <Suspense fallback={<h1>Downloading</h1>}>
        <Switch>
          {" "}
          <Route path={`${path}/reviews`}>
            {movie && <MovieReviewsView />}
          </Route>
          {/* <p>test</p> */}
          <Route path={`${path}/cast`}>{movie && <MovieCastView />}</Route>
        </Switch>
      </Suspense>
    </>
  );
}
