import React from "react";
import "react-calendar/dist/Calendar.css";
import "./AskDate.css";

import CalendarEvent from "../components/CalendarEvent";

function AskDate() {
  return (
    <div className="AskDateContainer">
      <CalendarEvent />
      <a href="" className="BtnNext">
        Suivant &gt;
      </a>
    </div>
  );
}

export default AskDate;
