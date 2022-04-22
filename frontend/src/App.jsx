import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Quand from "./pages/Quand";
import Favoris from "./pages/Favoris";
import Apropos from "./pages/Apropos";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import CardShowResults from "./components/CardShowResults";
import listEvent from "./components/event";
import CardShowList from "./components/CardShowList";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
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
            <Link to="/map">Map</Link>
          </li>
          <li>
            <Link to="/quoi">Quoi</Link>
          </li>
          <li>
            <Link to="/themelist">Liste Theme</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/nav" element={<Navbar />} />
          <Route path="/quand" element={<Quand />} />
          <Route
            path="/map"
            element={<Map events={listEvent.records} className="MapCont" />}
          />
          <Route
            path="/quoi"
            element={<CardShowResults events={listEvent.records} />}
          />
          <Route
            path="/themelist"
            element={<CardShowList events={listEvent.records} />}
          />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/apropos" element={<Apropos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
