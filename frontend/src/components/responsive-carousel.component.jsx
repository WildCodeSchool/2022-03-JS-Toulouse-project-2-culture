import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CardTheme from "./CardTheme";
import dateJJMMConverter from "./functions";
import "./carousel.css";
import "./CardTheme.css";

function ResponsiveCarouselComponent(props) {
  const { events } = props;
  return (
    <div className="carousel-container">
      <Carousel showThumbs={false} showStatus={false}>
        {events.map((event) => (
          <div>
            <CardTheme
              // key={event.recordid}
              title={event.fields.titre}
              date={dateJJMMConverter(event.fields.date_debut)}
              // isFavorite={false}
              stylecard={
                event.fields.thematique ===
                "Vides Grenier / Brocantes / Foires et salons"
                  ? "Brocantes"
                  : event.fields.thematique
              }
              recordid={event.recordid}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ResponsiveCarouselComponent;
