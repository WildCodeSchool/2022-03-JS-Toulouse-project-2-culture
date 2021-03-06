import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CardTheme.css";
import CardThemeHeart from "./CardThemeHeart";

function CardTheme({ title, date, stylecard, recordid, refresh }) {
  /**
   * If the recordid is in the localStorage, return true, otherwise return false.
   * @returns a boolean value.
   */
  const includedFavorite = () => {
    return Object.values(window.localStorage).includes(recordid);
  };
  const [isFavorite, setIsfavorite] = useState(includedFavorite());

  /**
   * If the recordid is already in localStorage, remove it. If it's not in localStorage, add it
   */
  const handlefavorite = () => {
    if (includedFavorite()) {
      setIsfavorite(false);
      window.localStorage.removeItem(
        Object.keys(window.localStorage).find(
          (key) => window.localStorage[key] === recordid
        )
      );
    } else {
      setIsfavorite(true);
      window.localStorage.setItem(
        `favorite${window.localStorage.length}`,
        recordid
      );
    }
    refresh();
  };

  return (
    <div>
      <div className={`CardTheme ${stylecard}`}>
        <div className="CardThemeHeader">
          <div className={`CardThemeHeaderDate${stylecard}`}>
            <h4 className="headerDate">{date}</h4>
          </div>
          <CardThemeHeart
            isFavorite={isFavorite}
            handlefavorite={handlefavorite}
          />
        </div>
        <Link className="recordidlink" to={`/event/${recordid}`}>
          <div className="CardThemeTitle">
            <h3>{title}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CardTheme;
