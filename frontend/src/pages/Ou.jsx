import React, { useState } from "react";
import "./Ou.css";
import Map from "../components/Map";
import Searchbar from "../components/Searchbar";
import "../components/Map.css";

function Ou(props) {
  const { selectedPlace, setSelectedPlace, setMapLocation, events } = props;
  const [mapEvents, setMapEvent] = useState(events);

  return (
    <div className="AskPlaceContainer">
      <h3>Où ?</h3>
      <Searchbar
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
        setMapEvent={setMapEvent}
        events={events}
      />
      <Map events={mapEvents} setMapLocation={setMapLocation} />
    </div>
  );
}

export default Ou;
