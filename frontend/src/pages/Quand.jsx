import React from "react";
import "react-calendar/dist/Calendar.css";
import "./Quand.css";
import listEvent from "../components/event";
import CalendarEvent from "../components/CalendarEvent";

function Quand() {
  return (
    <div className="AskDateContainer">
      <CalendarEvent events={listEvent.records} />
      <a href="/" className="BtnNext">
        Suivant &gt;
      </a>
    </div>
  );
}

export default Quand;
