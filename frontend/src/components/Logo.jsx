import React from "react";
import "./Logo.css";
import logo from "../assets/logo/NOPELOGO.png";

function Logo() {
  return (
    <div>
      <img className="logo" src={logo} alt="logo NOPE" />
    </div>
  );
}

export default Logo;
