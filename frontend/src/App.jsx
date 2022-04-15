import Map from "./components/Map";
import CardShowList from "./components/CardShowList";
import "./App.css";
import listEvent from "./components/event";
import CalendarEvent from "./components/CalendarEvent";
import CardShowResults from "./components/CardShowResults";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <CalendarEvent />
        <h3>Ou ?</h3>
        <div className="Map-cont">
          <Map />
        </div>
        <CardShowResults />
        <CardShowList events={listEvent.records} />
      </div>
    </>
  );
}

export default App;
