import React from 'react';
import './password-redirect.css';
import logo from "../logo.png";

const PasswordRedirect = () => {
  return (
    <div className="redirect-password-container">
      <div className="redirect-password-header">
        <img className="redirect-password-logo" src={logo} alt="logo" />
        <h1 className="redirect-password-title">QF Remit</h1>
      </div>
      <div className="redirect-password-box">
        <h2 className="redirect-password-subtitle">Password redirect</h2>
        <p className="redirect-password-message">You will now be redirected.</p>
      </div>
    </div>
  );
};

export default PasswordRedirect;

