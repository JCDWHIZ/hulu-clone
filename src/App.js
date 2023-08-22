import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import requests from "./requests";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGU0YTI1YTM2Y2JiMzM4YTU4ZDI3NWJkMjk5ZjE5NSIsInN1YiI6IjY0ZGY4MGFkNWFiODFhMDEzOTE5ZjEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KNnnkb4bhn9TUHztGv3Um34OURmSm5eOxqyc2spBtwA",
    },
  };

  useEffect(() => {
    setLoading(true);

    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  }, []);

  const fetchTrending = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=",
      options
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  console.log(movies);

  const fetchTrending1 = () => {
    fetch("https://api.themoviedb.org/3/movie/upcoming", options)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  const fetchTrending2 = () => {
    fetch("https://api.themoviedb.org/3/movie/popular", options)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  const fetchTrending3 = () => {
    fetch("https://api.themoviedb.org/3/tv/top_rated", options)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  const fetchTrending4 = () => {
    fetch("https://api.themoviedb.org/3/discover/movie", options)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  if (error) {
    return (
      <h1 style={{ fontWeight: "bolder", fontsize: "40px", color: "white" }}>
        Error fetching Data, Check your Data Connection and ty again
      </h1>
    );
  }
  return (
    <div className="app">
      <Header />
      <Nav
        fetchTrending={fetchTrending}
        popular={fetchTrending1}
        action={fetchTrending2}
        top_rated1={fetchTrending3}
        movie1={fetchTrending4}
      />
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2
            style={{ fontWeight: "bolder", fontsize: "40px", color: "white" }}
          >
            loading....
          </h2>
        </div>
      ) : (
        <Results movies={movies} />
      )}
    </div>
  );
}

export default App;
