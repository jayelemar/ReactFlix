import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { FaPlayCircle } from 'react-icons/fa';

const Slide = styled.div`
  width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  margin: 200px 10px;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;

  /* Define styles for the play button */
  .play-button {
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    font-size: 20px; /* Adjust the size of the play button */
    color:  #e50914; /* Adjust the color */
  }

  &:hover {
    transform: scale(1.05);

    /* Show the play button on hover */
    .play-button {
      display: block;
    }
  }
`;


const SlideImage = styled.img`
  width: 100%;
  height: 450px;
`;

const SectionWrapper = styled.section`
  background-color: black;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const Heading = styled.h2`
  color: white;
  font-family: "Gotham", sans-serif;
  text-align: center;
  font-size: 50px;
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  z-index: 1;
`;

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "80px",
        slidesToShow: 3,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,
        afterChange: function (index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        },
      };
    return (
      <SectionWrapper
        style={{
          background: "#000000",
          background: "linear-gradient(to top, #000000 50%, #12104A 100%)",
        }}
      >
        <Heading>Discover Something New</Heading>
        <Slider {...settings}>
          {/* Slides */}
          <Slide>
            <SlideImage src="/images/lou.jpg" alt="number 1" />
            <div className="play-button" href="/playing">Watch<FaPlayCircle /></div>
          </Slide>
          <Slide>
            <SlideImage src="/images/lou.jpg" alt="number 1" />
            <div className="play-button" href="/playing">Watch<FaPlayCircle /></div>
          </Slide>
          <Slide>
            <SlideImage src="/images/lou.jpg" alt="number 1" />
            <div className="play-button" href="/playing">Watch<FaPlayCircle /></div>
          </Slide>
          <Slide>
            <SlideImage src="/images/lou.jpg" alt="number 1" />
            <div className="play-button" href="/playing">Watch<FaPlayCircle /></div>
          </Slide>
          <Slide>
            <SlideImage src="/images/lou.jpg" alt="number 1" />
            <div className="play-button" href="/playing">Watch<FaPlayCircle /></div>
          </Slide>
          <Slide>
            <SlideImage src="/images/lou.jpg" alt="number 1" />
            <div className="play-button" href="/playing">Watch<FaPlayCircle /></div>
          </Slide>
        </Slider>
      </SectionWrapper>
    );
  }
}
