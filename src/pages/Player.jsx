import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import Navbar from "../Header/navbar";
import VideoPlayer from "../section/VideoPlayer"
import MovieDetails from "../section/moviedetails";
import Similar from "../section/Similar"
import Parallax from "../section/Parallax"
import Footer from "../Footer/footer";

const StyledContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #000;
  margin-bottom: 10px;
`;



const FullScreenVideo = ({ videoSrc }) => {
  return (
    <StyledContainer>
      <Navbar />
     <VideoPlayer/>
      <MovieDetails />
      <Similar/>
      <Parallax/>
      <Footer />
    </StyledContainer>
  );
};

export default FullScreenVideo;
