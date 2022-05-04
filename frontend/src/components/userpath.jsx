/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import Quand from "../pages/Quand";
import Accueil from "../pages/Accueil";
import Ou from "../pages/Ou";
import CardShowResults from "./CardShowResults";
import { filterByDate, filterByLocation } from "./functions";
import BtnNav from "./BtnNav";
import "../App.css";
import "../Background.scss";

function UserPath({ eventArrayFromAPI }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedPlace, setSelectedPlace] = useState("");
  const [step, setStep] = useState(0);

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
    <div>
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
      ) : (
        <CardShowResults
          events={filterByLocation(
            eventArrayFromAPI,
            selectedDate,
            selectedPlace
          )}
        />
      )}
      <BtnNav
        step={step}
        handleSubmitNext={handleSubmitNext}
        handleSubmitPrev={handleSubmitPrev}
      />
    </div>
  );
}

export default UserPath;
