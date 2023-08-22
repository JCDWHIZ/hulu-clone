import React, { useState } from "react";
import "./results.css";
import VideoCard from "./VideoCard";
import axios from "axios";
import requests from "./requests";

function Results({ movies }) {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setOverlayVisible(true);
  };

  const base_Url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="results">
      {movies.map((moviereq) => (
        <div className="video-card-container" key={moviereq.id}>
          <VideoCard {...moviereq} onClick={() => handleCardClick(moviereq)} />
        </div>
      ))}
      {overlayVisible && (
        <div className="overlay" onClick={() => setOverlayVisible(false)}>
          <div className="overlay-content">
            {selectedMovie && (
              <>
                <div className="bigcard">
                  <img
                    src={`${base_Url}${
                      selectedMovie.backdrop_path || selectedMovie.poster_path
                    }`}
                    alt="Movie Pics"
                  />
                  <div className="bigcardtxt">
                    <h1>
                      {selectedMovie.original_title || selectedMovie.name}
                    </h1>
                    <p>{selectedMovie.overview}</p>
                    <div className="buttondiv">
                      <div className="btn1">
                        <h3>Learn More...</h3>
                      </div>
                      <div className="btn2">
                        <h3
                          onClick={
                            (window.location.href =
                              "https://signup.hulu.com/plans")
                          }
                        >
                          Watch now..
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Results;
