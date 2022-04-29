import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CardTheme from "./CardTheme";

import "./carousel.css";
import "./CardTheme.css";
import { dateJJMMConverter } from "./functions";

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
  return (
    <div className="showcase">
      <h2>Vos pretextes</h2>
      <h3>Intello...</h3>
      <div className="carousel-container">
        <Carousel showThumbs={false} showStatus={false}>
          {eventsCulture.length > 0
            ? eventsCulture.map((event) => (
                <div key={event.recordid}>
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
        </Carousel>
      </div>
      <h3>Ecolo...</h3>
      <div className="carousel-container">
        <Carousel showThumbs={false} showStatus={false}>
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
        </Carousel>
      </div>

      <h3>Sportif...</h3>
      <div className="carousel-container">
        <Carousel showThumbs={false} showStatus={false}>
          {eventsSport.length > 0
            ? eventsSport.map((event) => (
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
              ))
            : "Pas de résultats"}
        </Carousel>
      </div>
      <h3>Flanneur...</h3>
      <div className="carousel-container">
        <Carousel showThumbs={false} showStatus={false}>
          {eventsBrocantes.length > 0
            ? eventsBrocantes.map((event) => (
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
              ))
            : "Pas de résultats"}
        </Carousel>
      </div>
      <h3>Autres...</h3>
      <div className="carousel-container">
        <Carousel showThumbs={false} showStatus={false}>
          {eventsAutres.length > 0
            ? eventsAutres.map((event) => (
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
              ))
            : "Pas de résultats"}
        </Carousel>
      </div>
    </div>
  );
}

export default CardShowResults;
