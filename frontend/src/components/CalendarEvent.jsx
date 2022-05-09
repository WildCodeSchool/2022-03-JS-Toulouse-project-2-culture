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
          Date selectionnées -
          {selectedDate.toLocaleDateString("en-gb", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </p>
        <div className="PretextData">
          Pretextes disponibles
          <div className="PretextNumber">
            {filterByDate(events, selectedDate).length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarEvent;
