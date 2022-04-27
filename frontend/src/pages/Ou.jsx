import React from "react";
import "./Ou.css";
import Map from "../components/Map";
import Searchbar from "../components/Searchbar";
import listEvent from "../components/event";
import "../components/Map.css";

function Ou(props) {
  const { events } = props;
  return (
    <div className="AskPlaceContainer">
      <h3>Où ?</h3>
      <Searchbar eventsSearch={events} />
      <Map events={listEvent.records} />
      <a href="/" className="BtnNext">
        Suivant &gt;
      </a>
    </div>
  );
}

export default Ou;
