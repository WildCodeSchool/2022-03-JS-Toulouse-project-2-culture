import React from "react";
import "./Favoris.css";

function Favoris() {
  const listFavorite = Object.values(window.localStorage);
  return (
    <div className="favContainer">
      <h3>Vos favoris</h3>
      {listFavorite.map((fav) => (
        <li>{fav}</li>
      ))}
    </div>
  );
}

export default Favoris;
