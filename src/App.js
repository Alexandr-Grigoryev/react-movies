import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";

import MovieDetailsView from "./views/MovieDetailsView";
import MovieSearchWiew from "./views/MovieSearchWiew";
import NotFoundView from "./views/NotFoundView";
import "./index.css";

// import HomeView from "./views/HomeView";
const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName: "home-view" */)
);

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h1>Downloading</h1>}>
        {/* <Suspense fallback={<Loader />}> */}
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MovieSearchWiew />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
