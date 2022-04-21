import Calendar from "react-calendar";

function CalendarEvent(props) {
  const { events, selectedDate, setselectedDate } = props;

  return (
    <div className="calendar-page">
      <h3>Quand ?</h3>
      <div className="calendar-container">
        <Calendar onChange={setselectedDate} value={selectedDate} />
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
          {
            events.filter(
              (event) =>
                selectedDate.toLocaleDateString("en-gb", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                }) >=
                  new Date(event.fields.date_debut).toLocaleDateString(
                    "en-gb",
                    {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    }
                  ) &&
                selectedDate.toLocaleDateString("en-gb", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                }) <=
                  new Date(event.fields.date_fin).toLocaleDateString("en-gb", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })
            ).length
          }
        </p>
      </div>
    </div>
  );
}

export default CalendarEvent;
