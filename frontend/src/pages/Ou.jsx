import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Ou.css";
import Map from "../components/Map";
import Searchbar from "../components/Searchbar";
import "../components/Map.css";

function Ou(props) {
  const { selectedPlace, setSelectedPlace, setMapLocation, events } = props;
  const [mapEvents, setMapEvent] = useState(events);

  return (
    <div className="AskPlaceContainer">
      <motion.div initial={{ x: "100%" }} animate={{ x: "0" }}>
        <h3>Où ?</h3>
        <Searchbar
          selectedPlace={selectedPlace}
          setSelectedPlace={setSelectedPlace}
          setMapEvent={setMapEvent}
          events={events}
        />
        <Map events={mapEvents} setMapLocation={setMapLocation} />
      </motion.div>
    </div>
  );
}

export default Ou;
