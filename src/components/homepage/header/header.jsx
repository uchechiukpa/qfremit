import React from "react";
import headerlogo from  "./logo.png"
import "./header.css";

function Header() {
  return (
    <div className="header-flex-container">
        <div className="logo-container">
            <img src={headerlogo} alt="header-logo" className="header-logo" />
            <h3>Swift Transfer</h3>
        </div>
        <div className="header-list">
            <a>Home</a>
            <a>Countries</a>
            <a>Help</a>
            <a>Contact</a>
        </div>


    </div>
  );
}

export default Header;