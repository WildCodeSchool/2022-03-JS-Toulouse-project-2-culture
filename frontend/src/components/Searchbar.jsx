import React, { useEffect } from "react";
import "./Searchbar.css";

function Searchbar(props) {
  const { selectedPlace, setSelectedPlace, setMapEvent, events } = props;

  useEffect(() => {
    setMapEvent(
      events.filter((event) =>
        event?.fields?.commune
          ?.toLowerCase()
          .includes(selectedPlace.toLowerCase())
      )
    );
  }, [selectedPlace]);

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form className="search-container" onSubmit={onSubmit}>
        <input
          className="searchbar"
          placeholder="Tapez votre recherche ici..."
          value={selectedPlace}
          onChange={(e) => {
            setSelectedPlace(e.target.value);
          }}
        />
      </form>
      <p>Explorez à l&apos;aide de la carte</p>
    </div>
  );
}

export default Searchbar;
