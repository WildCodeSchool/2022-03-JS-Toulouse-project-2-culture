import React from "react";
import "./Searchbar.css";
import Logo from "./Logo";

function Searchbar(props) {
  const { placeChoice, setUserPlace } = props;
  // const { eventsSearch } = props;
  const display = (e) => {
    e.preventDefault();
    setUserPlace("");
  };

  return (
    <div className="search-page">
      <form className="search-container">
        <input
          className="searchbar"
          placeholder="OÙ ?"
          value={placeChoice}
          onChange={(e) => setUserPlace(e.target.value)}
        />
        <button type="button" onClick={display}>
          <Logo />
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
