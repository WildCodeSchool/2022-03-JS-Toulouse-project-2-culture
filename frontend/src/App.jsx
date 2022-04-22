import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Quand from "./pages/Quand";
import Favoris from "./pages/Favoris";
import Apropos from "./pages/Apropos";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import CardShowResults from "./components/CardShowResults";
import CardShowList from "./components/CardShowList";
import Accueil from "./pages/Accueil";

function App() {
  const [eventArrayFromAPI, setEventArrayfromAPI] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [step1, setStep1] = useState(false);

  useEffect(() => {
    const url =
      "https://data.laregion.fr/api/records/1.0/search/?dataset=agendas-participatif-des-sorties-en-occitanie&rows=400";
    axios.get(url).then((res) => setEventArrayfromAPI(res.data.records));
  }, []);

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
          <Route path="/" element={<Accueil />} />

          <Route path="/nav" element={<Navbar />} />

          <Route
            path="/quand"
            element={
              <Quand
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                eventArrayFromAPI={eventArrayFromAPI}
                setStep1={setStep1}
              />
            }
          />
          <Route path="/map" element={<Map />} />
          <Route
            path="/quoi"
            element={<CardShowResults events={eventArrayFromAPI} />}
          />
          <Route
            path="/themelist"
            element={
              <CardShowList
                events={eventArrayFromAPI}
                thematique="Environnement"
              />
            }
          />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/apropos" element={<Apropos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
