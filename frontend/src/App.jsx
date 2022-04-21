import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Quand from "./pages/Quand";
import "./App.css";
import Favoris from "./pages/Favoris";
import Apropos from "./pages/Apropos";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import listEvent from "./components/event";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Router>
          <Navbar />
          <div>
            <ul>
              <Link to="/components/Event">Page event</Link>
            </ul>
          </div>
          <Routes>
            <Route path="quand" element={<Quand />} />
            <Route path="favoris" element={<Favoris />} />
            <Route path="Apropos" element={<Apropos />} />
            <Route
              path="Event"
              element={<Events event={listEvent.records[0]} />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
