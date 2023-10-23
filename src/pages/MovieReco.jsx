import React from "react";
import TabbedHome from "../components/compo/TabbedHome";
import SideBar from "../components/Header/sidenav"
import SectionAds from "../components/Ads/section-ads";
import Navbar from "../components/Header/navbar1";
import Intro from "../components/Cards/Intro_slider";
import Similar from "../components/section/Similar";
import Footer from "../components/Footer/footer";
function MovieRecommendations() {
  return (
    <section>
      <Navbar />
      <SideBar/>
      <Intro />
      <TabbedHome />
      <SectionAds />
      <Similar />
      <Footer />
    </section>
  );
}

export default MovieRecommendations;
