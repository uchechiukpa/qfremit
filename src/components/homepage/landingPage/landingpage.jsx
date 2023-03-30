import React from "react";
import {Link} from 'react-router-dom'
import "./landingpage.css";
import landingPage from "./landingpage.png";
import usicon from "./usicon.png";
import ukicon from "./ukicon.png";
import seperator from "./seperator.png";
import downicon from "./downicon.png";

const LandingPage = () => {
  return (
    <div className="flex flex-col sm:px-8 max-w-7xl sm:w-full mx-auto bg-white landing-page-container">
      <div className=" flex flex-row sm:flex-col lg:justify-between justify-center items-center">
        <div className="lg:basis-2/5 md:basis-1/2 sm:basis-1/2 lg:pl-5 md:pl-5">
          <h1 className="text-5xl md:text-4xl sm:text-4xl text-maincolor font-bold sm:w-4/5">
            Send money globally, hassle-free with just a few clicks ands at
            competitive rates!
          </h1>
          <p className="text-brown leading-loose mt-4">
            SwiftTransfer is an online service that allows you to send money
            anywhere with our safe and secure platform at no extra fees, with a
            smartphone, tablet or a computer.
          </p>
          <div className="mt-4">
          <Link to='/login'>
            <button className="landing-page-login-button">Login</button>
          </Link>
          <Link to='/signup'>
            <button className="landing-page-signup-button">Sign Up</button>
          </Link>
          </div>
        </div>

        <div className="flex basis-1/2 lg:justify-end md:justify-end sm:justify-center">
          <img src={landingPage} className="md:scale-75 sm:scale-75" alt="people" />
        </div>
      </div>

      <div className="flex flex-row lg:justify-between lg:items-center md:justify-between md:items-center sm:flex-col lg:px-8 md:px-8 lg:mt-8 md:mt-8">
        <div className="flex flex-row justify-between py-4 lg:basis-1/2 md:basis-1/2">
          <div className=" sm:basis-1/2">
            <p className="font-medium">You send</p>
            <h1 className="font-semibold text-3xl">50.00</h1>
          </div>
          <div className="basis-2/5">
            <p className="text-brown text-right text-xs">United States Dollar </p>
            <div className="flex flex-row justify-between items-center">
              <img src={usicon} alt="usIcon" />
              <h3 className="font-semibold text-3xl">USD</h3>
              <img src={downicon} alt="downIcon" />
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:basis-1/4 md:basis-1/4">
          <img src={seperator} alt="seperator" />
        </div>

        <div className="flex flex-row justify-between py-4 lg:basis-1/2 md:basis-1/2">
          <div className="sm:basis-1/2">
            <p className="font-medium">You Get</p>
            <h1 className="font-semibold text-3xl">40.00</h1>
          </div>
          <div className="basis-2/5">
            <p className="text-brown text-right text-xs">Great Britain Pounds</p>
            <div className="flex flex-row justify-between items-center">
              <img src={ukicon} alt="ukicon" />
              <h3 className="font-semibold text-3xl">GBP</h3>
              <img src={downicon} alt="downIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
