import { useState } from "react";
import Calendar from "react-calendar";

function CalendarEvent() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-page">
      <h3>Quand ?</h3>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p>
        <span className="bold">Date: {date.toDateString()}</span>
        {/* TODO <span className="bold">Pretextes disponible:  </span> */}
      </p>
    </div>
  );
}

export default CalendarEvent;
