import React from "react";
import Image1 from "./phone.png";
import apple from "./apple.png";
import google from "./google.png";
import "./get-started.css";

function GetStarted() {
  return (
    <div className="flex flex-row sm:flex-col px-5 mx-auto max-w-7xl lg:mt-20 md:mt-14 sm:mt-14 lg:justify-between md:justify-between  lg:items-center md:items-center ">
      <div className="">
        <h3 className="font-extrabold text-4xl text-maincolor">Get Started Now</h3>
        <p className="text-brown text-md pt-2">Bridging the gap, delivering your funds with ease.</p>
        <div className="flex pt-8">
          <img src={google} alt="google" className="get-started-google-store" />
          <img src={apple} alt="apple" className="get-started-app-store" />
        </div>
      </div>

      <div class="sm:pt-12">
        <img src={Image1} alt="Image1" />
      </div>
    </div>
  );
}

export default GetStarted;
