import React, { useEffect } from "react";
import "./Searchbar.css";

function Searchbar(props) {
  const { selectedPlace, setSelectedPlace, setMapEvent, events } = props;

  useEffect(() => {
    if (selectedPlace) {
      setMapEvent(
        events.filter((event) => event.fields.commune === selectedPlace)
      );
    }
  }, [selectedPlace]);

  return (
    <form className="search-container">
      <input
        className="searchbar"
        placeholder="OÙ ?"
        value={selectedPlace}
        onChange={(e) => {
          setSelectedPlace(e.target.value);
        }}
      />
    </form>
  );
}

export default Searchbar;
