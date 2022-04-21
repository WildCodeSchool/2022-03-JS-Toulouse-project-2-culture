import React from "react";
import "react-calendar/dist/Calendar.css";
import "./Quand.css";
import listEvent from "../components/event";
import CalendarEvent from "../components/CalendarEvent";

function Quand(props) {
  const { selectedDate, setselectedDate } = props;

  const handleSubmit = () => {
    console.log(`selected date is : ${selectedDate}`);
  };
  return (
    <div className="AskDateContainer">
      <CalendarEvent
        events={listEvent.records}
        selectedDate={selectedDate}
        setselectedDate={setselectedDate}
      />
      <button type="submit" className="BtnNext" onClick={handleSubmit}>
        Suivant &gt;
      </button>
    </div>
  );
}

export default Quand;
