import { useState, useEffect } from "react";
import "./styles/App.css";
import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";
import { EventGrid } from "./components/EventGrid/EventGrid";
import { DataService } from "./API/DataService";

function App() {
  const [events, setEvents] = useState([]);

  const fetchList = () => {
    const res = DataService.getData();
    return res;
  };

  useEffect(() => {
    fetchList().then((data) => setEvents(data));
  }, []);

  return (
    <div className="App">
      <Header text="Event Listing" />
      <Filter events={events} />
      <EventGrid events={events} />
    </div>
  );
}

export default App;
