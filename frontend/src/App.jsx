import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Quand from "./pages/Quand";
import "./App.css";
import Favoris from "./pages/Favoris";
import Apropos from "./pages/Apropos";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import CalendarEvent from "./components/CalendarEvent";
import listEvent from "./components/event";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <CalendarEvent />
        <h3>Où ?</h3>
        <Searchbar dateTableau={listEvent.records} />
        <Router>
          <Routes>
            <Route path="quand" element={<Quand />} />
            <Route path="favoris" element={<Favoris />} />
            <Route path="Apropos" element={<Apropos />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
