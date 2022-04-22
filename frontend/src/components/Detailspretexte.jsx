import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { GrTableAdd, GrFavorite } from "react-icons/gr";
import MapDetailEvent from "./MapDetailEvent";
import "./Detailspretexte.css";

function Detailspretext(props) {
  const {
    thematique,
    name,
    date,
    description,
    url,
    adresse,
    coordmap,
    datedebut,
  } = props;
  return (
    <div className="boxcontainer">
      <div className="box" id="boxtext">
        <div
          className={`alignimgfav themeimg${
            thematique === "Vides Grenier / Brocantes / Foires et salons"
              ? "Brocantes"
              : thematique
          }`}
        >
          <div className="datedebutevent">
            <h4
              className={`datedebuteventthemecolor${
                thematique === "Vides Grenier / Brocantes / Foires et salons"
                  ? "Brocantes"
                  : thematique
              }`}
            >
              {datedebut}
            </h4>
          </div>
          <GrFavorite id="favoriteicon" />
        </div>
        <h1>{name}</h1>
        <p>{thematique}</p>
        <p id="textdate">{date}</p>
        <p className="textaligndescription">{description}</p>
        <p>Adresse : {adresse}</p>
        <p>Site internet :</p>
        <a href={url}>{url}</a>
        <div className="box" id="img">
          <MapDetailEvent
            coordinates={coordmap.coordinates}
            popupTitle={name}
          />
        </div>
      </div>
      <div className="box-agenda">
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
