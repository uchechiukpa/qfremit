import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./signup.css";
import logo from "../logo.png";

function SignUp() {
  const [selectedUrl, setSelectedUrl] = useState(
    "https://www.qfremit.com/corporatesignup.html"
  );

  const handleRadioChange = (e) => {
    setSelectedUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUrl) {
      window.location.href = selectedUrl;
    } else {
      alert("Please select a signup option");
    }
  };

  return (
    <div className="lg:w-2/5 mx-auto lg:mt-40 shadow-maincolor bg-gray md:ml-5 sm:ml-5 md:mt-10 sm:mt-10">
      <div className="signin-password-header">
        <img className="signin-password-logo" src={logo} alt="logo" />
        <h1 className="signin-password-title">QF Remit</h1>
      </div>
      <div className="flex flex-col">
        <h1 className="text-maincolor text-2xl font">Sign up Confirmation</h1>
        <p className="font">
          Please confirm if it's an <span className="text-maincolor">Individual Sign Up</span> or a{" "}
          <span className="text-maincolor">Corporate Sign Up</span>
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col mt-10">
          <div>
            <input
              type="radio"
              value="https://www.qfremit.com/individualsignup.html"
              name="signup"
              onChange={handleRadioChange}
              defaultChecked
            />
            <label className="font ml-5">Individual Sign Up</label>
          </div>

          <div className="my-5">
            <input
              type="radio"
              value="https://www.qfremit.com/corporatesignup.html"
              name="signup"
              onChange={handleRadioChange}
            />
            <label className="font ml-5">Corporate Sign Up</label>
          </div>

          <button className="signin-password-button" type="submit">
            Submit
          </button>
          <Link to='/'>
            <button className="home-button">Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
