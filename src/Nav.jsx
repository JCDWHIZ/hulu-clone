import React from "react";
import "./nav.css";
import Results from "./Results";

function Nav({ fetchTrending, popular, action, top_rated1, movie1 }) {
  const top_rated =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=";

  return (
    <div className="nav">
      <h2 onClick={() => movie1()}>Trending</h2>
      <h2 onClick={() => fetchTrending()}>Top Rated</h2>
      <h2 onClick={() => popular()}>Action</h2>
      <h2 onClick={() => action()}>Movie</h2>
      <h2 onClick={() => top_rated1()}>Animation and Comedy</h2>
      <h2>Horror</h2>
      <h2>Romance</h2>
      <h2>Mystery</h2>
      <h2>Sci-fi</h2>
      <h2>Western</h2>
      <h2>Animation</h2>
    </div>
  );
}

export default Nav;
