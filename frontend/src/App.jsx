/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Background.scss";
import "./App.css";
import axios from "axios";
import Favoris from "./pages/Favoris";
import Apropos from "./pages/Apropos";
import Navbar from "./components/Navbar";
import Detailspretext from "./components/Detailspretexte";
import UserPath from "./components/userpath";

function App() {
  const [eventArrayFromAPI, setEventArrayfromAPI] = useState([]);

  useEffect(() => {
    const url =
      "https://data.laregion.fr/api/records/1.0/search/?dataset=agendas-participatif-des-sorties-en-occitanie&rows=400";
    axios.get(url).then((res) => setEventArrayfromAPI(res.data.records));
  }, []);

  return (
    <div className="App">
      <div id="background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
      <Navbar />
      <Router>
        <ul id="app-ul">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/nav">Navbar</Link>
          </li>
          <li>
            <Link to="/quand">Quand</Link>
          </li>
          <li>
            <Link to="/ou">Ou</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
        </ul>

        <Routes>
          <Route
            path="/"
            element={<UserPath eventArrayFromAPI={eventArrayFromAPI} />}
          />
          <Route
            path="/favoris"
            element={<Favoris eventArrayFromAPI={eventArrayFromAPI} />}
          />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/event/:id" element={<Detailspretext />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
