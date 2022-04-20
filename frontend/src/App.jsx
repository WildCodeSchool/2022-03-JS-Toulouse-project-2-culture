import Map from "./components/Map";
import CardShowList from "./components/CardShowList";
import "./App.css";
import listEvent from "./components/event";
import CalendarEvent from "./components/CalendarEvent";
import CardShowResults from "./components/CardShowResults";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <CalendarEvent />
        <h3>Où ?</h3>
        <Searchbar />
        <CardShowResults />
        <CardShowList events={listEvent.records} />
        <Events event={listEvent.records[0]} />
      </div>
      <div className="Map-cont">
        <Map />
      </div>
    </>
  );
}

export default App;
