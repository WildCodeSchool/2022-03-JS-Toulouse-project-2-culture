import React from "react";
import "./Searchbar.css";
import Logo from "./Logo";

function Searchbar() {
  return (
    <form className="search">
      <input className="searchbar" placeholder="OÙ ?" />
      <button type="button">
        <Logo />
      </button>
    </form>
  );
}

export default Searchbar;
