import Map from "./components/Map";
import CardShowList from "./components/CardShowList";
import "./App.css";
import listEvent from "./components/event";
import CalendarEvent from "./components/CalendarEvent";

function App() {
  return (
    <>
      <div className="Map-cont">
        <Map />
      </div>
      <div className="App">
        <CalendarEvent />
        <CardShowList events={listEvent.records} />
      </div>
    </>
  );
}

export default App;
