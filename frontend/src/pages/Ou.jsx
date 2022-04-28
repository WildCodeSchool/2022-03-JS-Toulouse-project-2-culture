import React from "react";
import "./Ou.css";
import Map from "../components/Map";
import Searchbar from "../components/Searchbar";
import listEvent from "../components/event";

function Ou(props) {
  const { events } = props;
  return (
    <div className="AskPlaceContainer">
      <h3>Où ?</h3>
      <Searchbar events={listEvent.records} />
      <Map events={events} className="MapCont" />
    </div>
  );
}

export default Ou;
