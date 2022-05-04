import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { GrTableAdd } from "react-icons/gr";
import MapDetailEvent from "./MapDetailEvent";
import "./Detailspretexte.css";
import CardThemeHeart from "./CardThemeHeart";
import "./CardTheme.css";
import { dateJJMMConverter } from "./functions";

function Detailspretext() {
  const [eventDetail, setEventDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://data.laregion.fr/api/records/1.0/search/?dataset=agendas-participatif-des-sorties-en-occitanie&facet=recordid&refine.recordid=${id}`
      )
      .then((response) => response.data)
      .then((data) => {
        setEventDetail(data.records[0]);
      });
  }, []);

  const includedFavorite = () => {
    return Object.values(window.localStorage).includes(id);
  };
  const [isFavorite, setIsfavorite] = useState(includedFavorite());

  const handlefavorite = () => {
    if (includedFavorite()) {
      setIsfavorite(false);
      window.localStorage.removeItem(
        Object.keys(window.localStorage).find(
          (key) => window.localStorage[key] === id
        )
      );
    } else {
      setIsfavorite(true);
      window.localStorage.setItem(`favorite${window.localStorage.length}`, id);
    }
  };

  return (
    <div className="boxcontainer">
      {eventDetail !== null ? (
        <div>
          <div className="box" id="boxtext">
            <div
              className={`alignimgfav themeimg${
                eventDetail.fields.thematique ===
                "Vides Grenier / Brocantes / Foires et salons"
                  ? "Brocantes"
                  : eventDetail.fields.thematique
              }`}
            >
              <div className="datedebutevent">
                <h4
                  className={`datedebuteventthemecolor${
                    eventDetail.fields.thematique ===
                    "Vides Grenier / Brocantes / Foires et salons"
                      ? "Brocantes"
                      : eventDetail.fields.thematique
                  }`}
                >
                  {dateJJMMConverter(eventDetail.fields.date_debut)}
                </h4>
              </div>
              <CardThemeHeart
                isFavorite={isFavorite}
                handlefavorite={handlefavorite}
              />
            </div>
            <h1>{eventDetail.fields.titre}</h1>
            <p className="thematique">{eventDetail.fields.thematique}</p>
            <p id="textdate">{eventDetail.fields.date}</p>
            <p className="textaligndescription">
              {eventDetail.fields.description}
            </p>
            <p className="adress">Adresse : {eventDetail.fields.adresse}</p>
            <p className="website">Site internet :</p>
            <a className="websitelink" href={eventDetail.fields.url}>
              {eventDetail.fields.url}
            </a>
            <div className="box" id="img">
              <MapDetailEvent
                coordinates={eventDetail.fields.geo_shape.coordinates}
                popupTitle={eventDetail.fields.titre}
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

            <ul>
              <Link to="/">
                <button type="submit">
                  <span>Retour à l&apos;accueil</span>
                </button>
              </Link>
            </ul>
          </div>
          <p id="sharesociallink">Partager</p>
          <div className="box" id="sociallink">
            <FaFacebook className="facebookicon" />
            <FaInstagramSquare className="instagramicon" />
            <FaTwitter className="twittericon" />
            <FaLinkedin className="linkedinicon" />
          </div>
        </div>
      ) : (
        "Chargement"
      )}
    </div>
  );
}

export default Detailspretext;
