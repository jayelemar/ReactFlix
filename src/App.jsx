import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/loadinganime"; // Import your loading component

const IntroPage = lazy(() => import("./pages/IntroPage"));
const Home = lazy(() => import("./pages/Home"));
const Series = lazy(() => import("./pages/series"));
const Movie = lazy(() => import("./pages/movie"));
const Term = lazy(() => import("./pages/term"));
const Contact = lazy(() => import("./pages/contact"));
const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route
          path="/home"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              {" "}
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/series"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              {" "}
              <Series />
            </Suspense>
          }
        />
        <Route
          path="/movie"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              {" "}
              <Movie />
            </Suspense>
          }
        />
        <Route
          path="/term"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              {" "}
              <Term />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              {" "}
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              {" "}
              <Login />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
