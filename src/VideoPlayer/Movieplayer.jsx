import React from "react";

const MoviePlayer = ({ title, genre, description, videoURL }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row", // Align items horizontally
    alignItems: "flex-start", // Align items to the top
    background: "#f0f0f0", // Add your desired background color here
    padding: "20px", // Add some padding for spacing
    width: "100%", // Full width
    height: "100vh", // Full viewport height
  };

  const videoStyle = {
    flex: "1", // Allow the iframe to take up available space
    margin: "0 20px",
    height:"90%", 
    width:"90%",
  };

  return (
    <section style={{ height: "100vh", width: "100vw" }}>
      <div className="movie-player-container" style={containerStyle}>
        <div className="movie-player-video" style={videoStyle}>
          <iframe
            src={videoURL}
            title={title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="movie-player-details">
          <h2>{title}</h2>
          <p className="genre">{genre}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default MoviePlayer;
