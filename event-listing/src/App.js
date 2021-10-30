import "./styles/App.css";
import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";
import { EventGrid } from "./components/EventGrid/EventGrid";
import { DataService } from "./API/DataService";

function App() {
  // const [events, setEvents] = useState([]);

  return (
    <div className="App">
      <Header text="Event Listing" />
      <Filter />
      <EventGrid />
    </div>
  );
}

export default App;
