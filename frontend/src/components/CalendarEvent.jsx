import { useState } from "react";
import Calendar from "react-calendar";
import "./CalendarEvent.css";
import "react-calendar/dist/Calendar.css";

function CalendarEvent() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-page">
      <h3>Quand ?</h3>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p>
        <span className="bold">Date:</span> {date.toDateString()}{" "}
      </p>
    </div>
  );
}

export default CalendarEvent;
