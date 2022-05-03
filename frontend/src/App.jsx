/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Quand from "./pages/Quand";
import Ou from "./pages/Ou";
import Favoris from "./pages/Favoris";
import Apropos from "./pages/Apropos";
import Navbar from "./components/Navbar";
import CardShowResults from "./components/CardShowResults";
import Accueil from "./pages/Accueil";
import Detailspretext from "./components/Detailspretexte";
import { filterByDate, filterByLocation } from "./components/functions";
import BtnNav from "./components/BtnNav";

function App() {
  const [eventArrayFromAPI, setEventArrayfromAPI] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedPlace, setSelectedPlace] = useState("");

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

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              step === 0 ? (
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
              ) : (
                <CardShowResults
                  events={filterByLocation(
                    eventArrayFromAPI,
                    selectedDate,
                    selectedPlace
                  )}
                />
              )
            }
          />
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
          <Route
            path="/favoris"
            element={<Favoris eventArrayFromAPI={eventArrayFromAPI} />}
          />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/event/:id" element={<Detailspretext />} />
        </Routes>
      </Router>
      <BtnNav
        step={step}
        handleSubmitNext={handleSubmitNext}
        handleSubmitPrev={handleSubmitPrev}
      />
    </div>
  );
}

export default App;
