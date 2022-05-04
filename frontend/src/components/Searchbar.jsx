import React, { useEffect } from "react";
import "./Searchbar.css";
import Logo from "./Logo";

function Searchbar(props) {
  const { selectedPlace, setSelectedPlace, setMapEvent, events } = props;
  const display = (e) => {
    e.preventDefault();
    setSelectedPlace("");
  };

  useEffect(() => {
    if (selectedPlace) {
      setMapEvent(
        events.filter((event) => event.fields.commune === selectedPlace)
      );
    }
  }, [selectedPlace]);

  return (
    <div className="search-page">
      <form className="search-container">
        <input
          className="searchbar"
          placeholder="OÙ ?"
          value={selectedPlace}
          onChange={(e) => {
            setSelectedPlace(e.target.value);
          }}
        />
        <button type="button" onClick={display}>
          <Logo />
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
