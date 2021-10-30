import "./styles/App.css";
import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";

function App() {
  return (
    <div className="App">
      <Header text="Event Listing" />
      <Filter />
    </div>
  );
}

export default App;
