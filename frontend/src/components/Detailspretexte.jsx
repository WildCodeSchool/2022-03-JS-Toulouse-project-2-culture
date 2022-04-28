import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { GrTableAdd } from "react-icons/gr";
import MapDetailEvent from "./MapDetailEvent";
import "./Detailspretexte.css";
import CardThemeHeart from "./CardThemeHeart";
import "./CardTheme.css";
import dateConverter from "./functions";

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
  }, [eventDetail]);

  const [isFavorite, setIsfavorite] = useState(false);

  const handlefavorite = () => {
    setIsfavorite(!isFavorite);
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
                  {dateConverter(eventDetail.fields.date_debut)}
                </h4>
              </div>
              <CardThemeHeart
                isFavorite={isFavorite}
                handlefavorite={handlefavorite}
              />
            </div>
            <h1>{eventDetail.fields.titre}</h1>
            <p>{eventDetail.fields.thematique}</p>
            <p id="textdate">{eventDetail.fields.date}</p>
            <p className="textaligndescription">
              {eventDetail.fields.description}
            </p>
            <p>Adresse : {eventDetail.fields.adresse}</p>
            <p>Site internet :</p>
            <a href={eventDetail.fields.url}>{eventDetail.fields.url}</a>
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
