/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
// import Carousel from "react-slick";
import { dateJJMMConverter } from "./functions";
import CardTheme from "./CardTheme";
import "./carousel2.css";
// import "./CardTheme.css";

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
    <div className="Carousel">
      <h2> Vos pretextes</h2>
      <Slider {...settings}>
        <div className="carousel-container">
          <h3>Intello...</h3>
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
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default CardShowResults;
