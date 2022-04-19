import React from "react";
import "../stylesheets/Header.css";
import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <div className="heading">
      <div className="logo">
          <img src={logo} alt="Efest" />
      </div>
      <div className="lefticons">
        <h1>What's in it?</h1>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
