/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Quand from "./pages/Quand";
import Ou from "./pages/Ou";
import Favoris from "./pages/Favoris";
import Apropos from "./pages/Apropos";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import CardShowResults from "./components/CardShowResults";
import CardShowList from "./components/CardShowList";
import Accueil from "./pages/Accueil";
import listEvent from "./components/event";
import Detailspretext from "./components/Detailspretexte";
import BtnNext from "./components/BtnNext";
import BtnPrev from "./components/BtnPrev";
import { filterByDate, filterByLocation } from "./components/functions";

function App() {
  const [eventArrayFromAPI, setEventArrayfromAPI] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const selectedLocation = "Toulouse";

  const [step, setStep] = useState(0);
  useEffect(() => {
    const url =
      "https://data.laregion.fr/api/records/1.0/search/?dataset=agendas-participatif-des-sorties-en-occitanie&rows=400";
    axios
      .get(url)
      .then((res) => setEventArrayfromAPI(res.data.records))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmitNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  const handleSubmitPrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
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
            <Link to="/ou">Ou</Link>
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
          <Route path="/" element="" />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/ou" element={<Ou />} />
          <Route
            path="/quand"
            element={
              <Quand
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                eventArrayFromAPI={eventArrayFromAPI}
              />
            }
          />
          <Route
            path="/map"
            element={
              <Map
                events={filterByDate(eventArrayFromAPI, selectedDate)}
                className="MapCont"
              />
            }
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
          <Route path="/event/:id" element={<Detailspretext />} />
        </Routes>
      </Router>
      {step === 0 ? (
        <Accueil />
      ) : step === 1 ? (
        <Quand
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          eventArrayFromAPI={listEvent.records}
        />
      ) : step === 2 ? (
        <Ou events={listEvent.records} />
      ) : (
        <CardShowResults
          events={filterByLocation(
            listEvent.records,
            selectedDate,
            selectedLocation
          )}
        />
      )}
      <div className="BtnContainer">
        {step > 0 ? (
          <BtnPrev step={step} handleSubmitPrev={handleSubmitPrev} />
        ) : (
          ""
        )}
        {step <= 2 ? (
          <BtnNext step={step} handleSubmitNext={handleSubmitNext} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
