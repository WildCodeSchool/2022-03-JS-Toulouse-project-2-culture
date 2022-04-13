import React from "react";
import "./cardTheme.css";

function CardTheme({ title, stylecard }) {
  return (
    <div>
      <div className={`CardTheme ${stylecard}`}>
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
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default CardTheme;
