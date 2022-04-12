import React from "react";
import "./cardTheme.css";

function CardTheme(props) {
  return (
    <div>
      <div className={`CardTheme ${props.stylecard}`}>
        <div className="CardThemeHeader">
          <div className="CardThemeHeaderDate">
            <h4>01/04</h4>
          </div>
          <img
            className="heartLogo"
            src="/src/assets/logo/heart-white.png"
            alt="logo coeur"
          />
        </div>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}

export default CardTheme;
