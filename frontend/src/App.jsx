import Map from "./components/Map";
import CardShowList from "./components/CardShowList";
import "./App.css";
import listEvent from "./components/event";
import CalendarEvent from "./components/CalendarEvent";
import CardShowResults from "./components/CardShowResults";
import Navbar from "./components/Navbar";
import Events from "./components/Events";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <CalendarEvent />
        <h3>Ou ?</h3>
        <CardShowResults />
        <CardShowList events={listEvent.records} />
        <Events event={listEvent.records[4]} />
      </div>
      <div className="Map-cont">
        <Map />
      </div>
    </>
  );
}

export default App;
