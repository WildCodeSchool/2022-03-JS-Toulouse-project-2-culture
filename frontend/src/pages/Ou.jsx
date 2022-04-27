import React from "react";
import "./Ou.css";
import Searchbar from "../components/Searchbar";
import listEvent from "../components/event";

function Ou() {
  return (
    <div className="AskPlaceContainer">
      <h3>Où ?</h3>
      <Searchbar events={listEvent.records} />
      <a href="/" className="BtnNext">
        Suivant &gt;
      </a>
    </div>
  );
}

export default Ou;
