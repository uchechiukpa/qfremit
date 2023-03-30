import React from "react";
import Features from "./features/features";
import Footer from "./footer/footer";
import GetStarted from "./get-started/get-started";
import Header from "./header/header";
import Operations from "./how-it-works/how-it-works";
import LandingPage from "./landingPage/landingpage";
import Services from "./services/services";
import './index.css';

function HomePage() {
  return (
    <div className="homepage-div">
      <Header/>
      <LandingPage />
      <Services />
      <Features />
      <Operations />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default HomePage;
