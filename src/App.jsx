import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "../src/components/loadinganime"; // Import your loading component
const Users = lazy(() => import("./pages/users"));
const IntroPage = lazy(() => import("./pages/IntroPage"));
const Home = lazy(() => import("./pages/Home"));
const Series = lazy(() => import("./pages/series"));
const Movie = lazy(() => import("./pages/movie"));
const Anime = lazy(() => import("./pages/anime"));
const Term = lazy(() => import("./pages/term"));
const Contact = lazy(() => import("./pages/contact"));
const Login = lazy(() => import("../src/account/login"));
const Register = lazy(() => import("../src/account/register"));
const Player = lazy(() => import("../src/pages/playing"));
const Dashboard = lazy(() => import("../src/pages/dashboard"));
const Credit = lazy(() => import("./pages/credit"));


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
          path="/anime"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              {" "}
              <Anime />
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
        <Route
          path="/reg"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              {" "}
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/users"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              {" "}
              <Users />
            </Suspense>
          }
        />
         <Route
          path="/player"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              {" "}
              <Player />
            </Suspense>
          }
        />
         <Route
          path="/dashboard"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              {" "}
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/credit"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              {" "}
              <Credit />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
