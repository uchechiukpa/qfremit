import React from "react";
import "./forgotpassword.css";

function ForgotPassword() {
  return (
      <div className="forgot-password-container">
        <div className="forgot-password-box">
          <h1 className="forgot-password-header">Forgot your password?</h1>
          <p className="forgot-password-subheader">
            Enter your email address to get a reset link.
          </p>
          <form className="forgot-password-form">
            <div className="forgot-password-form-group">
              <label htmlFor="email" className="forgot-password-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="abeniakanni@email.com"
                className="forgot-password-input"
                required
              />
            </div>
            <div className="forgot-password-remember-link-container">
              <a href="amazon.com" className="forgot-password-remember-link">
                Remember now?
              </a>
            </div>
            <button type="submit" className="forgot-password-button">
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
  );
}

export default ForgotPassword;
