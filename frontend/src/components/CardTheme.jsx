import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CardTheme.css";
import CardThemeHeart from "./CardThemeHeart";

function CardTheme({ title, date, stylecard, recordid, handleSubmitNext }) {
  const [isFavorite, setIsfavorite] = useState(false);

  const handlefavorite = () => {
    setIsfavorite(!isFavorite);

    window.localStorage.setItem(
      `favorite${window.localStorage.length}`,
      recordid
    );
  };

  return (
    <div>
      <div className={`CardTheme ${stylecard}`}>
        <div className="CardThemeHeader">
          <div className={`CardThemeHeaderDate${stylecard}`}>
            <h4>{date}</h4>
          </div>
          <CardThemeHeart
            isFavorite={isFavorite}
            handlefavorite={handlefavorite}
          />
        </div>
        <h3>{title}</h3>

        <Link
          className="recordidlink"
          to={`/event/${recordid}`}
          onClick={handleSubmitNext}
        >
          Plus d&apos;informations
        </Link>
      </div>
    </div>
  );
}

export default CardTheme;
