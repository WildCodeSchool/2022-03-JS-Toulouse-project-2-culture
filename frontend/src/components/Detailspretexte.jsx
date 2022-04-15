import React from "react";
import "./Detailspretexte.css";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { GrTableAdd, GrFavorite } from "react-icons/gr";

function Detailspretext({ name, date, description, url, adresse }) {
  return (
    <div className="boxcontainer">
      <div className="box" id="boxtext">
        <div className="alignimgfav">
          <GrFavorite id="favoriteicon" />
        </div>
        <h1>{name}</h1>
        <p id="textdate">{date}</p>
        <p className="textaligndescription">{description}</p>
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
        <div>
          <GrTableAdd id="agenda" />
        </div>
        <button type="submit" id="btn-agenda">
          Ajouter à mon agenda
        </button>
      </div>

      <p id="sharesociallink">Partager</p>
      <div className="box" id="sociallink">
        <FaFacebook className="facebookicon" />
        <FaInstagramSquare className="instagramicon" />
        <FaTwitter className="twittericon" />
        <FaLinkedin className="linkedinicon" />
      </div>
    </div>
  );
}

export default Detailspretext;