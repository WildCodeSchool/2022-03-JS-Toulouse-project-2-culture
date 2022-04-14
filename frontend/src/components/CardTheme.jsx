import React, { useState } from "react";
import "./CardTheme.css";
import CardThemeHeart from "./CardThemeHeart";

function CardTheme({ title, date, stylecard }) {
  const [isFavorite, setIsfavorite] = useState(false);
  const handlefavorite = () => {
    setIsfavorite(!isFavorite);
  };

  return (
    <div>
      <div className={`CardTheme ${stylecard}`}>
        <div className="CardThemeHeader">
          <div className="CardThemeHeaderDate">
            <h4>{date}</h4>
          </div>
          <CardThemeHeart
            isFavorite={isFavorite}
            handlefavorite={handlefavorite}
          />
        </div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default CardTheme;
