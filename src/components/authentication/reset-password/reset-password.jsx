import React, { useState } from "react";
import "./reset-password.css";
import logo from "../logo.png";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    setPasswordValid(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        event.target.value
      )
    );
    setPasswordTouched(true);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    setConfirmPasswordValid(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        event.target.value
      )
    );
    setConfirmPasswordTouched(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-header">
        <img className="reset-password-logo" src={logo} alt="logo" />
        <h1 className="reset-password-logo-title">QF Remit</h1>
      </div>
      <div className="reset-password-box">
      <h1 className="reset-password-title">Reset your Password</h1>
        <h2 className="reset-password-subtitle">Enter your new password</h2>
        <form className="reset-password-form" onSubmit={handleSubmit}>
          <div className="reset-password-inputs">
            <div className="reset-password-input-container">
              <label className="reset-password-label" htmlFor="password">
                Password
              </label>
              <div className="reset-password-input-container-with-icon">
                <input
                  className="reset-password-input"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChangePassword}
                  onBlur={() => setPasswordTouched(true)}
                />
                {passwordValid && passwordTouched ? (
                  <span className="reset-password-check">&#10003;</span>
                ) : (
                  passwordTouched && (
                    <span className="reset-password-close">&#10005;</span>
                  )
                )}
              </div>
            </div>
            <div className="reset-password-input-container">
              <label
                className="reset-password-label"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <div className="reset-password-input-container-with-icon">
                <input
                  className="reset-password-input"
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  value={confirmPassword}
                  onChange={handleChangeConfirmPassword}
                  onBlur={() => setConfirmPasswordTouched(true)}
                />
                {confirmPasswordValid && confirmPasswordTouched ? (
                  <span className="reset-password-check">&#10003;</span>
                ) : (
                  confirmPasswordTouched && (
                    <span className="reset-password-close">&#10005;</span>
                  )
                )}
              </div>
            </div>
          </div>
          <p className="reset-password-hint">
            Password must contain a minimum of 8 characters, with an uppercase
            letter, a lowercase letter, a number, and a special character.
          </p>
          <button className="reset-password-button" type="submit">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
