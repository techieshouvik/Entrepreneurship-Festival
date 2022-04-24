import React, { useState } from "react";
import "../stylesheets/Header.css";
import logo from '../assets/images/logo.png'

const Header = () => {
  const [changeheader, setchangeheader] = useState(false)
  window.onscroll = () => {
    if (window.scrollY > 100) {
        setchangeheader(true)
    } else {
        setchangeheader(false)
    }
};
  return (
    <div className={(changeheader)?"heading heading_scroll":"heading"}>
      <div className="logo">
          <img src={logo} alt="Efest" className="logo_image"/>
      </div>
      <div className="lefticons">
      </div>
    </div>
  );
};

export default Header;
