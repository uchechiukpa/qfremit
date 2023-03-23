import React from "react";
import Image1 from "./phone.png";
import apple from "./apple.png";
import google from "./google.png";
import "./get-started.css";

function GetStarted() {
  return (
    <div className="get-started-flex-container">
      <div className="get-started-left-div">
        <h3>Get Started Now</h3>
        <p>Bridging the gap, delivering your funds with ease.</p>
        <div className="get-started-app-google-store">
          <img src={google} alt="google" className="get-started-google-store" />
          <img src={apple} alt="apple" className="get-started-app-store" />
        </div>
      </div>

      <div class="get-started-image-container">
        <img src={Image1} alt="Image1" />
      </div>
    </div>
  );
}

export default GetStarted;
