import React from "react";
import "./landingpage.css";
import landingPage from "./landingpage.png";
import usicon from "./usicon.png";
import seperator from "./seperator.png";
import downicon from "./downicon.png";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="landing-page-section">
        <div className="landing-page-div">
          <h1>Send Money abroad at competitive rates</h1>
          <p>
            SwiftTransfer is an online service that allows you to send money
            anywhere with our safe and secure platform at no extra fees, with a
            smartphone, tablet or a computer.
          </p>
          <div className="landing-page-button-div">
            <button className="landing-page-login-button">Login</button>
            <button className="landing-page-signup-button">Sign Up</button>
          </div>
        </div>

        <div>
          <img src={landingPage} alt="people" />
        </div>
      </div>

      <div className="exchange-rate-div-container">
        <div className="exchange-rate-div">
          <div className=" exchange-rate-column exchange-rate-sender">
            <div className=" exchange-rate-amount">
              <p>You send</p>
              <h1>50.00</h1>
            </div>
            <div className="exchange-rate-currency">
              <p>United States Dollar </p>
              <div className="exchange-rate-div-currency">
                <img src={usicon}  alt="usIcon"/>
                <h3>USD</h3>
                <img src={downicon} alt="downIcon" />
              </div>
            </div>
          </div>

          <div className="exchange-rate-column exchange-rate-seperator">
            <img src={seperator}  alt="seperator" />
          </div>

          <div className="exchange-rate-column exchange-rate-receiever">
            <div className="exchange-rate-amount">
              <p>You Get</p>
              <p>40.00</p>
            </div>
            <div className="exchange-rate-currency">
              <p>United States Dollar </p>
              <div className="exchange-rate-div-currency">
                <img src={usicon} alt="usIcon" />
                <h3>USD</h3>
                <img src={downicon} alt="downIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
