import React, { useEffect } from "react";
import "./Searchbar.css";

function Searchbar(props) {
  const {
    selectedPlace,
    setSelectedPlace,
    setMapEvent,
    events,
    eventFiltered,
  } = props;

  useEffect(() => {
    setMapEvent(
      events.filter((event) =>
        event?.fields?.commune
          ?.toLowerCase()
          .includes(selectedPlace.toLowerCase())
      )
    );
    // setMapEvent(
    //   events.filter((event) =>
    //     event?.fields?.commune
    //       ?.toLowerCase()
    //       .includes(selectedPlace.toLowerCase())
    //   )
    // );
  }, [selectedPlace]);

  function onSubmit(e) {
    e.preventDefault();
  }
  console.log(eventFiltered);
  return (
    <form className="search-container" onSubmit={onSubmit}>
      <input
        className="searchbar"
        placeholder="OÙ ?"
        value={selectedPlace}
        onChange={(e) => {
          setSelectedPlace(e.target.value);
        }}
      />
      {/* <span>{eventFiltered[0]?.fields.commune}</span>
      <span>{eventFiltered[1]?.fields.commune}</span>
      <span>{eventFiltered[2]?.fields.commune}</span> */}
    </form>
  );
}

export default Searchbar;
