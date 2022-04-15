import "./App.css";
import Map from "./components/Map";

import CardShowList from "./components/CardShowList";
import listEvent from "./components/event";
import Events from "./components/Events";

function App() {
  return (
    <>
      <Events />
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
