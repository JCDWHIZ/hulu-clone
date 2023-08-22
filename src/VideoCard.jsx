import React, { useState } from "react";
import "./videocard.css";
import { FaThumbsUp } from "react-icons/fa";

const base_Url = "https://image.tmdb.org/t/p/original/";

function VideoCard({
  overview,
  original_title,
  poster_path,
  backdrop_path,
  vote_count,
  media_type,
  release_date,
  first_air_date,
  name,
  onClick,
}) {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleCardClick = () => {
    setOverlayVisible(true);
  };

  return (
    <div className="videocard" onClick={onClick}>
      <img
        src={`${base_Url}${backdrop_path || poster_path}`}
        alt="Movie Pics"
      />

      <div className="videocardtext">
        <p>{overview.substring(0, 70)}....</p>
        <h2>{original_title || name}</h2>
        <p className="videocard_stats">
          {media_type && `${media_type} `}
          {release_date || first_air_date}
          <FaThumbsUp />
          {vote_count} likes
        </p>
      </div>

      {/* Overlay */}
      {overlayVisible && <div className="overlay" />}
    </div>
  );
}

export default VideoCard;
