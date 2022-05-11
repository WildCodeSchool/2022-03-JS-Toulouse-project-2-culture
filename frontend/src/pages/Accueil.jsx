import React from "react";
import "./Accueil.css";
import logo from "../assets/logo/NOPELOGO.png";

function Accueil() {
  return (
    <div className="welcome">
      <h1 className="welcomeTitle">NOPE</h1>
      <img id="mainLogo" src={logo} alt="logo Nope" />
    </div>
  );
}

export default Accueil;
