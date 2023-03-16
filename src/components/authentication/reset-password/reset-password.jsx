import React from 'react';
import './reset-password.css';

const ResetPassword = () => {
  return (
    <div className="reset-password-container">
      <div className="reset-password-header">
        <img src="logo.png" alt="Logo" className="reset-password-logo" />
        <h1 className="reset-password-title">Reset your password</h1>
      </div>
      <div className="reset-password-box">
        <p className="reset-password-subtitle">Enter your new password</p>
        <form className="reset-password-form">
          <div className="reset-password-form-group">
            <label htmlFor="password" className="reset-password-label">New password</label>
            <input type="password" name="password" id="password" className="reset-password-input" />
          </div>
          <div className="reset-password-form-group">
            <label htmlFor="confirm-password" className="reset-password-label">Confirm password</label>
            <input type="password" name="confirm-password" id="confirm-password" className="reset-password-input" />
          </div>
        </form>
        <p className="reset-password-hint">Password must contain a minimum of 8 characters, with an uppercase letter, a lowercase letter, a number and a special character.</p>
        <button className="reset-password-button">Reset password</button>
      </div>
    </div>
  );
};

export default ResetPassword;
