import React from "react";
import "./Detailspretexte.css";

function Detailspretexte({ name, date, description, url, adresse }) {
  return (
    <div className="boxcontainer">
      <div className="box" id="boxtext">
        <img
          className="entetephoto"
          src="./src/assets/parapluies.jpg"
          alt="photoparapluies"
        />
        <h1>{name}</h1>
        <p id="textdate">{date}</p>
        <p className="textalign">{description}</p>
        <p>Adresse : {adresse}</p>
        <p>Site internet :</p>
        <a href={url}>{url}</a>
        <div className="box" id="img">
          <img
            className="photomap"
            src="./src/assets/map.png"
            alt="streetmap"
          />
        </div>
      </div>
      <div className="box">
        <button type="submit">Ajouter à mon agenda</button>
      </div>
      <div className="box">
        <button type="submit">Partager</button>
      </div>
    </div>
  );
}

export default Detailspretexte;
