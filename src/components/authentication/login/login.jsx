import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
        <h1>Welcome Again!</h1>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          <h2>Email or Phone number</h2>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email or phone number"
          />
          <h2>Password</h2>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="password-toggle"
              onClick={handleShowPasswordToggle}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="remember-me-container">
            {/* <label htmlFor="rememberMeCheckbox">
              <input
                type="checkbox"
                id="rememberMeCheckbox"
                checked={rememberMe}
                onChange={handleRememberMeToggle}
              />
              Remember Me
            </label> */}
            <a href="/forgotpassword" className="pt-6">Forget Password?</a>
          </div>
          <button type="submit" className="continue-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
