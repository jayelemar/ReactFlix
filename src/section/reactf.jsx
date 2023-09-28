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
    margin: 20px; /* Add margin to every slide */
    `;

    const SlideImage = styled.img`
    width: 350px;
    height: 450px;
    `;
    const SectionWrapper = styled.section`
    background-color: black;
    height: 100vh; /* 100% of the viewport height */
    width: 100vw; /* 100% of the viewport width */
    `;
    const Heading = styled.h2`
    color: white;
    font-family: "Gotham", sans-serif;
    text-align: center;
  `;

    export default class SwipeToSlide extends Component {
    render() {
        const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        autoplay: true, // Add auto-swipe
        autoplaySpeed: 2000, // Auto-swipe interval in milliseconds (2 seconds)
        afterChange: function (index) {
            console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
        };
        return (
        <SectionWrapper style={{ backgroundColor: "black", marginTop: "-20px" }}>
            <Heading style={{ color: "white", fontFamily: "Gotham", }}>
            Discover Something New
            </Heading>
            <Slider {...settings}>
            <Slide>
                <SlideImage src="/images/lou.jpg" alt="number 1" />
            </Slide>
            <Slide>
                <SlideImage src="/images/lou.jpg" alt="number 1" />
            </Slide>
            <Slide>
                <SlideImage src="/images/lou.jpg" alt="number 1" />
            </Slide>
            <Slide>
                <SlideImage src="/images/lou.jpg" alt="number 1" />
            </Slide>
            <Slide>
                <SlideImage src="/images/lou.jpg" alt="number 1" />
            </Slide>
            <Slide>
                <SlideImage src="/images/lou.jpg" alt="number 1" />
            </Slide>
            <Slide>
                <SlideImage src="/images/lou.jpg" alt="number 1" />
            </Slide>
            <Slide>
                <SlideImage src="/images/lou.jpg" alt="number 1" />
            </Slide>
            <Slide>
                <SlideImage src="/images/lou.jpg" alt="number 1" />
            </Slide>
            </Slider>
        </SectionWrapper>
        );
    }
    }
