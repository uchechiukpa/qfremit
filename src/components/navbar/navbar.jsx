import React from "react";
import "./navbar.css";
import logo from "./swiftTransferLogo.png";
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>SwiftTransfer</h1>
      </div>
      <div className="menu">
        <ul>
          <li>
            Home
          </li>
          <li className="dropdown">
            Countries
            <ul className="dropdown-content">
              <li>
                Country 1
              </li>
              <li>
                Country 2
              </li>
              <li>
                Country 3
              </li>
            </ul>
          </li>
          <li>
            Help
          </li>
          <li>
            Contact
          </li>
        </ul>
      </div>
      <div className="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
