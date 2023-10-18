import React, { useEffect } from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "../Header/navbar1";
import Carousel from "../components/nukacarousel";
import TabbedHome from "../components/TabbedHome";
import FlexWrap from "../components/multiplecard";
import NewSeries from "../section/Credit";
import Footer from "../Footer/footer";
import Ads from "../components/Ads/bottom-ads";
import PopUpAds from "../components/Ads/popup-ads";

const MySlider = () => {
  // Renamed the locally defined Slider component
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return <SlickSlider {...settings}></SlickSlider>;
};

const Home = () => {
  useEffect(() => {
    document.title = "ReactFlix | Home";
  }, []);

  return (
    <section
      className="slider4 mbr-embla cid-tEzwvrEiry"
      style={{ backgroundColor: "#8E95A5",width:"100vw" }}
      id="slider4-2j"
    >
      <Navbar />
      <Carousel
        autoplay={true}
        wrapAround={true}
        speed={1000}
        slidesToShow={1}
      ></Carousel>
      <TabbedHome />
      <FlexWrap />
      <NewSeries />
      <PopUpAds />
      <Ads />
      <Footer />
    </section>
  );
};

export default Home;
