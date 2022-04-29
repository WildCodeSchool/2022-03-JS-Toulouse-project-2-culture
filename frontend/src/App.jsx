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
import CardShowResults from "./components/CardShowResults";
import Accueil from "./pages/Accueil";
// import listEvent from "./components/event";
import Detailspretext from "./components/Detailspretexte";
import BtnNext from "./components/BtnNext";
import BtnPrev from "./components/BtnPrev";
import { filterByDate, filterByLocation } from "./components/functions";

function App() {
  const [eventArrayFromAPI, setEventArrayfromAPI] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedPlace, setSelectedPlace] = useState("");
  // const selectedLocation = "Toulouse";

  const [step, setStep] = useState(0);
  useEffect(() => {
    const url =
      "https://data.laregion.fr/api/records/1.0/search/?dataset=agendas-participatif-des-sorties-en-occitanie&rows=400";
    axios.get(url).then((res) => setEventArrayfromAPI(res.data.records));
  }, []);

  const handleSubmitNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };
  const handleSubmitPrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const zerostep = () => setStep(0);
  return (
    <div className="App">
      <Navbar zerostep={zerostep} />
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
        </ul>

        <Routes>
          <Route path="/" element="" />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/ou" element={<Ou />} />
          <Route
            path="/ou"
            element={
              <Ou
                events={filterByDate(eventArrayFromAPI, selectedDate)}
                selectedPlace={selectedPlace}
                setSelectedPlace={setSelectedPlace}
              />
            }
          />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/event/:id" element={<Detailspretext />} />
        </Routes>

        {step === 0 ? (
          <Accueil />
        ) : step === 1 ? (
          <Quand
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            eventArrayFromAPI={eventArrayFromAPI}
          />
        ) : step === 2 ? (
          <Ou
            events={filterByDate(eventArrayFromAPI, selectedDate)}
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace}
          />
        ) : step === 3 ? (
          <CardShowResults
            events={filterByLocation(
              eventArrayFromAPI,
              selectedDate,
              selectedPlace
            )}
            handleSubmitNext={handleSubmitNext}
          />
        ) : (
          <Favoris />
        )}
        <div className="BtnContainer">
          {step > 0 && step < 3 ? (
            <BtnPrev step={step} handleSubmitPrev={handleSubmitPrev} />
          ) : (
            ""
          )}
          {step < 3 ? (
            <BtnNext step={step} handleSubmitNext={handleSubmitNext} />
          ) : (
            ""
          )}
        </div>
      </Router>
    </div>
  );
}

export default App;
