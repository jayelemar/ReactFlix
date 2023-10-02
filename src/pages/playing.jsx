import React from "react";
import styled from "styled-components";
import Navbar from "../Header/navbar";
import MovieDetails from "../section/moviedetails";
import Footer from "../Footer/footer1"
import { AiFillPlayCircle, AiFillStar } from "react-icons/ai";
import { BsClock } from "react-icons/bs";

// Define the styled components
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #000;
  margin-bottom:10px;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;


const FullScreenVideo = ({ videoSrc }) => {
  return (
    <Container>
      <Navbar />
      <Video controls autoPlay>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      <MovieDetails/>
      <Footer />
    </Container>
  );
};

export default FullScreenVideo;
