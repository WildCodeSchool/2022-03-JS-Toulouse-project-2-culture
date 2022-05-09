import React from "react";
import "./Apropos.css";

function Apropos() {
  return (
    <div className="fav-container">
      <h4>&quot;Ca te dit le concert de Kaaris ce week-end ?&quot;</h4>
      <h1>Nope !</h1>
      <img
        id="mainLogo"
        src="../src/assets/logo/NOPELOGO.png"
        alt="logo Nope"
      />
      <h3>Votre alibi culturel en 3 clics !</h3>
      <div className="credits">
        <img
          id="wildLogo"
          src="../src/assets/img/Wild-Code-School-logo.png"
          alt="logo school"
        />
        <p> © Wild Code School - 2022</p>
      </div>
    </div>
  );
}

export default Apropos;
