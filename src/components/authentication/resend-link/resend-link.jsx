import React from "react";
import "./resend-link.css";
import Logo from '../logo.png'

const ResetLinkSent = () => {
  return (
    <div className="reset-link-sent-container">
      <div className="logo">
        <img src={Logo} alt="Logo" className="reset-link-sent-logo" />
        <h1>QF Remit</h1>
      </div>
      <div className="reset-link-sent-box">
        <div className="reset-link-sent-header">
          <h1 className="reset-link-sent-title">Reset Link Sent</h1>
        </div>
        <p className="reset-link-sent-text">
          We've sent an email to <strong>abeniakanni@gmail.com</strong> with a
          link to reset your password. Not you?{" "}
          <a href="/change-password">Change email address</a>
        </p>
        <p className="reset-link-sent-second-text">
          Didn't get the mail? Please confirm your email address is correct and
          hit <a href="/resend">resend</a>.
        </p>
      </div>
    </div>
  );
};

export default ResetLinkSent;
