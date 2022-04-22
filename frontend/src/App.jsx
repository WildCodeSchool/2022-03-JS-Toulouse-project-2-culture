/* eslint-disable no-nested-ternary */
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
import Events from "./components/Events";
import Accueil from "./pages/Accueil";
import listEvent from "./components/event";

function App() {
  const [eventArrayFromAPI, setEventArrayfromAPI] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [step, setStep] = useState(0);
  useEffect(() => {
    const url =
      "https://data.laregion.fr/api/records/1.0/search/?dataset=agendas-participatif-des-sorties-en-occitanie&rows=400";
    axios.get(url).then((res) => setEventArrayfromAPI(res.data.records));
  }, []);
  const handleSubmit = () => {
    setStep(step + 1);
  };
  return (
    <div className="App">
      {step === 0 ? (
        <Accueil />
      ) : step === 1 ? (
        <Quand
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          eventArrayFromAPI={eventArrayFromAPI}
        />
      ) : step === 2 ? (
        <Map events={listEvent.records} className="MapCont" />
      ) : (
        <CardShowResults events={listEvent.records} />
      )}

      <button type="submit" className="BtnNext" onClick={handleSubmit}>
        Suivant &gt;
      </button>
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
          <li>
            <Link to="/Event">Page event</Link>
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
                eventArrayFromAPI={listEvent.records}
              />
            }
          />
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
            element={
              <CardShowList
                events={listEvent.records}
                thematique="Environnement"
              />
            }
          />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route
            path="/Event"
            element={<Events event={listEvent.records[3]} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
