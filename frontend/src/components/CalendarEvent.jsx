import Calendar from "react-calendar";
import { filterByDate } from "./functions";

function CalendarEvent(props) {
  const { events, selectedDate, setSelectedDate } = props;

  return (
    <div className="calendar-page">
      <h3>Quand ?</h3>
      <div className="calendar-container">
        <Calendar onChange={setSelectedDate} value={selectedDate} />
      </div>
      <div>
        <p>
          Date :
          {selectedDate.toLocaleDateString("en-gb", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </p>
        <p>
          nombre de pretextes disponibles :
          {filterByDate(events, selectedDate).length}
        </p>
      </div>
    </div>
  );
}

export default CalendarEvent;
