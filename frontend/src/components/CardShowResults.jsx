/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
// import Carousel from "react-slick";
import { dateJJMMConverter } from "./functions";
import CardTheme from "./CardTheme";
import "./carousel2.css";
import "./CardTheme.css";

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
    (event) => event.fields.thematique === "Autres"
  );
  /* eslint-disable react/jsx-props-no-spreading */
  // eslint-disable-next-line react/prefer-stateless-function
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="showcase">
      <h2>Vos pretextes</h2>
      <h3>Intello...</h3>
      <div className="carousel-container">
        <Slider {...settings}>
          {eventsCulture.length > 0
            ? eventsCulture.map((event) => (
                <div key={event.recordid} className="carousel-card">
                  <CardTheme
                    title={event.fields.titre}
                    date={dateJJMMConverter(event.fields.date_debut)}
                    isFavorite={false}
                    stylecard="Culture"
                    recordid={event.recordid}
                  />
                </div>
              ))
            : "Pas de résultats"}
        </Slider>
      </div>
      <h3>Ecolo...</h3>
      <div className="carousel-container">
        <Slider {...settings}>
          {eventsEnvironnement.length > 0
            ? eventsEnvironnement.map((event) => (
                <div key={event.recordid}>
                  <CardTheme
                    key={event.recordid}
                    title={event.fields.titre}
                    date={dateJJMMConverter(event.fields.date_debut)}
                    isFavorite={false}
                    stylecard="Environnement"
                    recordid={event.recordid}
                  />
                </div>
              ))
            : "Pas de résultats"}
        </Slider>
      </div>

      <h3>Sportif...</h3>
      <div className="carousel-container">
        {eventsSport.length > 0 ? (
          <Slider {...settings}>
            {eventsSport.map((event) => (
              <div key={event.recordid}>
                <CardTheme
                  key={event.recordid}
                  title={event.fields.titre}
                  date={dateJJMMConverter(event.fields.date_debut)}
                  isFavorite={false}
                  stylecard="Sport"
                  recordid={event.recordid}
                />
              </div>
            ))}
          </Slider>
        ) : (
          "Pas de résultats"
        )}
      </div>

      <h3>Flanneur...</h3>
      <div className="carousel-container">
        {eventsBrocantes.length > 0 ? (
          <Slider {...settings}>
            {eventsBrocantes.map((event) => (
              <div key={event.recordid}>
                <CardTheme
                  key={event.recordid}
                  title={event.fields.titre}
                  date={dateJJMMConverter(event.fields.date_debut)}
                  isFavorite={false}
                  stylecard="Brocantes"
                  recordid={event.recordid}
                />
              </div>
            ))}
          </Slider>
        ) : (
          "Pas de résultats"
        )}
      </div>
      <h3>Autres...</h3>
      <div className="carousel-container">
        {eventsAutres.length > 0 ? (
          <Slider {...settings}>
            {eventsAutres.map((event) => (
              <div key={event.recordid}>
                <CardTheme
                  key={event.recordid}
                  title={event.fields.titre}
                  date={dateJJMMConverter(event.fields.date_debut)}
                  isFavorite={false}
                  stylecard="Autres"
                  recordid={event.recordid}
                />
              </div>
            ))}
          </Slider>
        ) : (
          "Pas de résultats"
        )}
      </div>
    </div>
  );
}

export default CardShowResults;
