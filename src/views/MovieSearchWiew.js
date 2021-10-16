import * as moviesAPI from "../services/movies-api";
import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

export default function MovieSearchWiew() {
  const [movies, setMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();
  const location = useLocation();

  // console.log(location);

  // const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (location.search === "" || location.search === "?query=") {
      return;
    }

    console.log(location.search);

    const query = new URLSearchParams(location.search).get("query");

    moviesAPI.fetchMovieSearch(query).then(setMovies);
  }, [location.search]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(location);
    // console.log(history);
    // console.log(searchQuery);

    history.push({ ...location, search: `query=${searchQuery}` });

    if (searchQuery === "") {
      return;
    }

    moviesAPI
      .fetchMovieSearch(searchQuery)
      .then(setMovies)
      .finally(setSearchQuery(""));
  };

  const handleChange = (evt) => {
    setSearchQuery(evt.currentTarget.value.toLowerCase());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="movieName"
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit">Найти</button>
      </form>
      <ul>
        {movies &&
          movies.results.map((item) => (
            <li key={item.id}>
              <Link
                to={{
                  pathname: `movies/${item.id}`,
                  state: { from: location },
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
