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
  }, [events]);

  const getCities = (events) => {
    return events
      .map((event) => event.city)
      .filter((city, index, self) => self.indexOf(city) === index);
  };

  const getMonths = (events) => {
    return events
      .map((elem) => {
        return new Date(
          elem.date.split(".").reverse().join("-")
        ).toLocaleDateString("en-US", { month: "long" });
      })
      .filter((month, index, self) => self.indexOf(month) === index)
      .sort((a, b) => {
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ];
        return months.indexOf(a) - months.indexOf(b);
      })
      .map((date) => ({ value: date }));
  };

  const filterMonths = (month) => {
    console.log(month);
  };

  return (
    <div className="App">
      <Header text="Event Listing" />
      <Filter
        events={events}
        filterMonths={filterMonths}
        getCities={getCities}
        getMonths={getMonths}
      />
      <EventGrid events={events} />
    </div>
  );
}

export default App;
