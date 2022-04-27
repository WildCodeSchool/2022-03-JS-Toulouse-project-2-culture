import React from "react";
import "react-calendar/dist/Calendar.css";
import "./Quand.css";
import CalendarEvent from "../components/CalendarEvent";

function Quand(props) {
  const { selectedDate, setSelectedDate, eventArrayFromAPI } = props;
  return (
    <div className="AskDateContainer">
      <CalendarEvent
        events={eventArrayFromAPI}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
}

export default Quand;
