import React from 'react';
import style from './Filter.module.css';
import { Select } from '../UI/Select/Select';

const Filter = ({ events, getCities, getMonths, filterMonths }) => {

  // const getCities = (events) => {
  //   return events
  //     .map(event => event.city)
  //     .filter((city, index, self) => self.indexOf(city) === index);
  // };

  // const getMonths = (events) => {
  //   return events
  //     .map(elem => {
  //       return new Date(
  //         elem.date
  //           .split('.')
  //           .reverse()
  //           .join('-'))
  //         .toLocaleDateString('en-US', { month: 'long' }
  //         );
  //     })
  //     .filter((month, index, self) => self.indexOf(month) === index)
  //     .sort((a, b) => {
  //       const months = ["January", "February", "March", "April", "May", "June",
  //         "July", "August", "September", "October", "November", "December"];
  //       return months.indexOf(a) - months.indexOf(b);
  //     })
  //     .map(date => ({ value: date }));
  // };

  return (
    <div className={style.filter}>
      <Select
        label="City"
        onChange={() => 'city'}
        options={
          getCities(events).map(city => ({ value: city }))
        }
      />
      <Select
        label="Month"
        onChange={filterMonths}
        options={
          getMonths(events)
        }
      />
    </div>
  );
};

export { Filter };
