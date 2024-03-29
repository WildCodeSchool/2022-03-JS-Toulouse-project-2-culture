import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CardTheme from "./CardTheme";
import "./carousel.css";
import "./CardTheme.css";
import { dateJJMMConverter, stringStyliser } from "./functions";

function CardShowResults(props) {
  const { events } = props;

  const eventsCulture = events.filter(
    (event) => event.fields.thematique === "Culture"
  );
  const eventsEnvironnement = events.filter(
    (event) => event.fields.thematique === "Environnement"
  );
  const eventsSport = events.filter(
    (event) => event.fields.thematique === "Sport"
  );
  const eventsBrocantes = events.filter(
    (event) =>
      event.fields.thematique === "Vides Grenier / Brocantes / Foires et salons"
  );
  const eventsAutres = events.filter(
    (event) =>
      event.fields.thematique !==
        "Vides Grenier / Brocantes / Foires et salons" &&
      event.fields.thematique !== "Culture" &&
      event.fields.thematique !== "Environnement" &&
      event.fields.thematique !== "Sport"
  );
  return (
    <div className="showcase">
      <motion.div
        className="motion-div"
        initial={{ x: "100%" }}
        animate={{ x: "0" }}
      >
        <h3>Vos pretextes</h3>
        <h4 className="pretextCat">Intello...</h4>
        <div>
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            autoPlay
            infiniteLoop
          >
            {eventsCulture.length > 0 ? (
              eventsCulture.map((event) => (
                <div key={event.recordid} className="carousel-card">
                  <CardTheme
                    date={dateJJMMConverter(event.fields.date_debut)}
                    isFavorite={false}
                    stylecard="Culture"
                    recordid={event.recordid}
                  />
                  <Link
                    className="recordidlink"
                    to={`/event/${event.recordid}`}
                  >
                    <div className="CardThemeTitle">
                      <p className="legend">
                        {stringStyliser(event.fields.titre, 45)}
                      </p>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <h5>Oups... pas de résultats</h5>
            )}
          </Carousel>
        </div>
        <h4 className="pretextCat">Ecolo...</h4>
        <div>
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            autoPlay
            infiniteLoop
          >
            {eventsEnvironnement.length > 0 ? (
              eventsEnvironnement.map((event) => (
                <div key={event.recordid}>
                  <CardTheme
                    key={event.recordid}
                    date={dateJJMMConverter(event.fields.date_debut)}
                    isFavorite={false}
                    stylecard="Environnement"
                    recordid={event.recordid}
                  />
                  <Link
                    className="recordidlink"
                    to={`/event/${event.recordid}`}
                  >
                    <div className="CardThemeTitle">
                      <p className="legend">
                        {stringStyliser(event.fields.titre, 45)}
                      </p>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <h5>Oups... pas de résultats</h5>
            )}
          </Carousel>
        </div>
        <h4 className="pretextCat">Sportif...</h4>
        <div>
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            autoPlay
            infiniteLoop
          >
            {eventsSport.length > 0 ? (
              eventsSport.map((event) => (
                <div key={event.recordid}>
                  <CardTheme
                    key={event.recordid}
                    date={dateJJMMConverter(event.fields.date_debut)}
                    isFavorite={false}
                    stylecard="Sport"
                    recordid={event.recordid}
                  />
                  <Link
                    className="recordidlink"
                    to={`/event/${event.recordid}`}
                  >
                    <div className="CardThemeTitle">
                      <p className="legend">
                        {stringStyliser(event.fields.titre, 45)}
                      </p>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <h5>Oups... pas de résultats</h5>
            )}
          </Carousel>
        </div>
        <h4 className="pretextCat">Flanneur...</h4>
        <div>
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            autoPlay
            infiniteLoop
          >
            {eventsBrocantes.length > 0 ? (
              eventsBrocantes.map((event) => (
                <div key={event.recordid}>
                  <CardTheme
                    key={event.recordid}
                    date={dateJJMMConverter(event.fields.date_debut)}
                    isFavorite={false}
                    stylecard="Brocantes"
                    recordid={event.recordid}
                  />
                  <Link
                    className="recordidlink"
                    to={`/event/${event.recordid}`}
                  >
                    <div className="CardThemeTitle">
                      <p className="legend">
                        {stringStyliser(event.fields.titre, 45)}
                      </p>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <h5>Oups... pas de résultats</h5>
            )}
          </Carousel>
        </div>
        <h4 className="pretextCat">Autres...</h4>
        <div>
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            autoPlay
            infiniteLoop
          >
            {eventsAutres.length > 0 ? (
              eventsAutres.map((event) => (
                <div key={event.recordid}>
                  <CardTheme
                    key={event.recordid}
                    date={dateJJMMConverter(event.fields.date_debut)}
                    isFavorite={false}
                    stylecard="Autres"
                    recordid={event.recordid}
                  />
                  <Link
                    className="recordidlink"
                    to={`/event/${event.recordid}`}
                  >
                    <div className="CardThemeTitle">
                      <p className="legend">
                        {stringStyliser(event.fields.titre, 45)}
                      </p>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <h5>Oups... pas de résultats</h5>
            )}
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
}

export default CardShowResults;
