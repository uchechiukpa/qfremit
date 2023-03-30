import React, { useState } from "react";
import "./signup.css";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to submit form data goes here
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <h1 className="form-header">Create an Account</h1>
        <p className="form-link">
          Already have an account? <a href="/login">Sign in</a>
        </p>
        <form onSubmit={handleSubmit} className="form-group">
          <label htmlFor="firstName" className="form-label">
            First Name
            <input
              type="text"
              id="firstName"
              className="form-input"
              placeholder="Abenni"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </label>
          <label htmlFor="lastName" className="form-label">
            Last Name
            <input
              type="text"
              id="lastName"
              className="form-input"
              placeholder="abeniakanni@gmail.com"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </label>
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
            <input
              type="tel"
              id="phoneNumber"
              className="form-input"
              placeholder="08176545678"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </label>
          <label htmlFor="password" className="form-label">
            Password
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="••••••••••••"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
            <input
              type="password"
              id="confirmPassword"
              className="form-input"
              placeholder="••••••••••••"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </label>
          <p className="form-text">
            Password must contain a minimum of 8 characters, with an uppercase
            letter, a lowercase letter, a number and a special character.
          </p>
          <div className="form-checkbox">
            <input
              type="checkbox"
              id="emailUpdates"
              className="form-checkbox-input"
              checked={termsAgreed}
              onChange={() => setTermsAgreed(!termsAgreed)}
            />
            <label htmlFor="emailUpdates" className="form-checkbox-label">
              Please send me SwiftTransfer emails with updates, newsletters,
              special offers and other information
            </label>
          </div>
          <button type="submit" className="form-button">
            Continue
          </button>

          {/* <p className="form-footer">
          By continuing, you agree to our <a href="/termsofservice">Terms of Service</a> and
          acknowledge our <a href="privacypolicy">Privacy Policy</a>.
        </p> */}
        </form>

      </div>
    </div>
  );
}

export default SignUp;
