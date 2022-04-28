import React from "react";
import "./Searchbar.css";
import Logo from "./Logo";

function Searchbar(props) {
  const { selectedPlace, setSelectedPlace } = props;
  const display = (e) => {
    e.preventDefault();
    setSelectedPlace("");
  };

  return (
    <div className="search-page">
      <form className="search-container">
        <input
          className="searchbar"
          placeholder="OÙ ?"
          value={selectedPlace}
          onChange={(e) => setSelectedPlace(e.target.value)}
        />
        <button type="button" onClick={display}>
          <Logo />
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
