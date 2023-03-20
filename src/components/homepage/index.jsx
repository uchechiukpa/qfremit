import React from "react";
import Features from "./features/features";
import Operations from "./how-it-works/how-it-works";
import LandingPage from "./landingPage/landingpage";
import Services from "./services/services";

function HomePage() {
  return (
    <div>
      <LandingPage />
      <Services />
      <Features />
      <Operations />
    </div>
  );
}

export default HomePage;
