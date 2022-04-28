import React from "react";
import "./Ou.css";
import Map from "../components/Map";
import Searchbar from "../components/Searchbar";
import listEvent from "../components/event";
import "../components/Map.css";

function Ou(props) {
  const { selectedPlace, setSelectedPlace } = props;
  return (
    <div className="AskPlaceContainer">
      <h3>Où ?</h3>
      <Searchbar
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
      />
      <Map events={listEvent.records} />
    </div>
  );
}

export default Ou;
