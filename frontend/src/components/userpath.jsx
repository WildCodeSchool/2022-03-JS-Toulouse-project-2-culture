/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { motion } from "framer-motion";
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
  const [mapLocation, setMapLocation] = useState("");

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
        <motion.div initial={{ x: "100%" }} animate={{ x: "0" }}>
          <Quand
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            eventArrayFromAPI={eventArrayFromAPI}
          />
        </motion.div>
      ) : step === 2 ? (
        <motion.div initial={{ x: "100%" }} animate={{ x: "0" }}>
          <Ou
            events={filterByDate(eventArrayFromAPI, selectedDate)}
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace}
            mapLocation={mapLocation}
            setMapLocation={setMapLocation}
          />
        </motion.div>
      ) : (
        <motion.div initial={{ x: "100%" }} animate={{ x: "0" }}>
          <CardShowResults
            events={filterByLocation(
              eventArrayFromAPI,
              selectedDate,
              selectedPlace,
              mapLocation
            )}
          />
        </motion.div>
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
