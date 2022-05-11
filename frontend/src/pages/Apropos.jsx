import React from "react";
import "./Apropos.css";
import logo from "../assets/logo/NOPELOGO.png";
import WCSlogo from "../assets/img/Wild-Code-School-logo.png";

function Apropos() {
  return (
    <div className="fav-container">
      <h4>&quot;Ca te dit le concert de Kaaris ce week-end ?&quot;</h4>
      <h1 className="welcomeTitle">Nope !</h1>
      <img id="mainLogo" src={logo} alt="logo Nope" />
      <h3>Votre alibi culturel en 3 clics !</h3>
      <div className="credits">
        <img id="wildLogo" src={WCSlogo} alt="logo school" />
        <p> © Wild Code School - 2022</p>
      </div>
    </div>
  );
}

export default Apropos;
