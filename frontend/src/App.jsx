// eslint-disable-next-line import/no-named-as-default
import Map from "./components/Map";

import "./App.css";
import CardShowList from "./components/CardShowList";
import listEvent from "./components/event";

function App() {
  return (
    <div className="Map-cont">
      <Map />
      <div className="App">
        <h2> Composant CardShowcase2 : liste mappée à partir de tableau</h2>
        <CardShowList events={listEvent.records} />
      </div>
    </div>
  );
}

export default App;
