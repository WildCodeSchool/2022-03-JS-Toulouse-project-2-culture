import React, { useState } from "react";
import Logo from "./Logo";
import "./Navbar.css";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="navbar_logo">
        <Logo />
      </div>
      <ul className="navbar_links">
        <li className="navbar_item slideInDown-1">
          <a href="/" className="navbar_link">
            Accueil
          </a>
        </li>
        <li className="navbar_item slideInDown-2">
          <a href="/favoris" className="navbar_link">
            Favoris
          </a>
        </li>
        <li className="navbar_item slideInDown-3">
          <a href="/apropos" className="navbar_link">
            A propos
          </a>
        </li>
      </ul>
      <button type="button" className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-bar" />
      </button>
    </nav>
  );
}

export default Navbar;
