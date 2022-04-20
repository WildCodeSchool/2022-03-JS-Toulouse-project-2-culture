import React from "react";
import Detailspretext from "./Detailspretexte";

function Events(props) {
  const { event } = props;
  return (
    <div className="App">
      <Detailspretext
        thematique={event.fields.thematique}
        name={event.fields.titre}
        date={event.fields.date}
        description={event.fields.description}
        url={event.fields.url}
        adresse={event.fields.adresse}
        coordmap={event.fields.geo_shape}
      />
      )
    </div>
  );
}

export default Events;
