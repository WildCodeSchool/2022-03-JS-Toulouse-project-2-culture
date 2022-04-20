import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Quand from "./pages/Quand";
import "./App.css";
import Favoris from "./pages/Favoris";
import Apropos from "./pages/Apropos";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Router>
          <Navbar />
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
