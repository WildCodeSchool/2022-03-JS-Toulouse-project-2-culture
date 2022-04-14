import "./App.css";
import CardShowList from "./components/CardShowList";
import listEvent from "./components/event";

function App() {
  return (
    <div className="App">
      <h2> Composant CardShowcase2 : liste mappée à partir de tableau</h2>
      <CardShowList events={listEvent.records} />
    </div>
  );
}

export default App;
