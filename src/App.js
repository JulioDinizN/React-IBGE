import SelectState from "./components/SelectState";
import SelectTown from "./components/SelectTown";
import CityOverview from "./components/CityOverview";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>React IBGE</h1>
      </div>
      <div className="selects">
        <SelectState />
        <SelectTown />
      </div>
      <CityOverview />
    </div>
  );
}

export default App;
