import Map from "./components/Map";
import CardShowList from "./components/CardShowList";
import "./App.css";
import listEvent from "./components/event";

function App() {
  return (
    <>
      <div className="Map-cont">
        <Map />
      </div>
      <div className="App">
        <h2> Composant CardShowcase2 : liste mappée à partir de tableau</h2>
        <CardShowList events={listEvent.records} />
      </div>
    </>
  );
}

export default App;
