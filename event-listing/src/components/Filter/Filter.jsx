import React from 'react';
import style from './Filter.module.css';
import { Select } from '../UI/Select/Select';

const Filter = ({ events }) => {

  const getMonth = (date) => {
    return new Date(date.split('.').reverse().join('-')).toLocaleDateString('en-US', { month: 'long' });
  };

  return (
    <div className={style.filter}>
      <Select
        label="City"
        onChange={() => 'city'}
        options={events.map(event => ({ value: event.city }))}
      />
      <Select
        label="Month"
        onChange={() => 'month'}
        options={events.map(event => (
          {
            value: getMonth(event.date)
          }
        ))}
      />
    </div>
  );
};

export { Filter };
