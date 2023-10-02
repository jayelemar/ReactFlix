import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

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
  transition: transform 0.3s ease, height 0.3s ease; /* Add transition for height */

  /* Define styles for the play button */
  .play-button {
    position: absolute;
    bottom: 5%; /* Adjust to 90% from the bottom */
    left: 50%;
    transform: translateX(-50%); /* Center horizontally */
    display: none; /* Hide the play button by default */
    align-items: center;
    font-size: 20px;
    color: #e50914;
    width: 20px;
    height: 20px;
    background-color: rgba(0, 0, 0, 0.5); /* Add a semi-transparent background */
    border-radius: 50%; /* Make it round */
  }

  &:hover {
    height: 500px; /* Adjust the height to your preference */
    transform: translateY(-25px); /* Push the card slightly up */
    
    .play-button {
      display: flex; /* Display the play button on hover */
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
const CustomIcon = styled.img`
  width: 20px; /* Adjust the width as needed */
  height: 20px; /* Adjust the height as needed */
  margin-right: 5px;
`;
export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "80px",
      slidesToShow: 4,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 3000, // Autoplay every 3 seconds (3000 milliseconds)
      speed: 500, // Animation speed (optional)
      pauseOnHover: true, // Pause autoplay on hover (optional)
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
  <SlideImage src="/images/saw.jpg" alt="number 1" />
  <a href="/player" className="play-button">
    Watch <CustomIcon src="/images/play.svg" alt="Play Icon" />
  </a>
</Slide>
<Slide>
  <SlideImage src="/images/mi.jpg" alt="number 1" />
  <a href="/player" className="play-button">
    Watch <CustomIcon src="/images/play.svg" alt="Play Icon" />
  </a>
</Slide>
<Slide>
  <SlideImage src="/images/gt.jpg" alt="number 1" />
  <a href="/player" className="play-button">
    Watch <CustomIcon src="/images/play.svg" alt="Play Icon" />
  </a>
</Slide>
<Slide>
  <SlideImage src="/images/sm.jpg" alt="number 1" />
  <a href="/player" className="play-button">
    Watch <CustomIcon src="/images/play.svg" alt="Play Icon" />
  </a>
</Slide>
<Slide>
  <SlideImage src="/images/fc.jpg" alt="number 1" />
  <a href="/player" className="play-button">
    Watch <CustomIcon src="/images/play.svg" alt="Play Icon" />
  </a>
</Slide>
<Slide>
  <SlideImage src="/images/lou.jpg" alt="number 1" />
  <a href="/player" className="play-button">
    Watch <CustomIcon src="/images/play.svg" alt="Play Icon" />
  </a>
</Slide>

        </Slider>
      </SectionWrapper>
    );
  }
}
