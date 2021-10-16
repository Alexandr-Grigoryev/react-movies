import { useState, useEffect } from "react";
import {
  Link,
  useLocation,
  //  useRouteMatch
} from "react-router-dom";
import * as moviesfAPI from "../services/movies-api";
import PageHeading from "../components/PageHeading/PageHeading";

export default function HomeView() {
  // const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  const location = useLocation();

  console.log(location);

  useEffect(() => {
    moviesfAPI.fetchTrending().then(setMovies);
  }, []);

  return (
    <>
      <PageHeading text="Trending movies" />

      {movies && (
        <ul>
          {movies.results.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </Link>

              {/* <img src={movie.poster_path} alt={movie.title} /> */}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
