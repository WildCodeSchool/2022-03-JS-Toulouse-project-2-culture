import React from "react";
import "./Ou.css";
import Map from "../components/Map";
import Searchbar from "../components/Searchbar";
import "../components/Map.css";

function Ou(props) {
  const { selectedPlace, setSelectedPlace, events } = props;
  return (
    <div className="AskPlaceContainer">
      <h3>Où ?</h3>
      <Searchbar
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
      />
      <Map events={events} />
    </div>
  );
}

export default Ou;
