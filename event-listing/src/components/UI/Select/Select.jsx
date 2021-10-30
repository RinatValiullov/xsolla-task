import React from 'react';
import style from './Select.module.css';

const Select = ({ options, defaultOption, label, value, onChange }) => {
  return (
    <>
      <label htmlFor="city-select">{label}</label>
      <select id="city-select" value={value} onChange={event => onChange(event.target.value)}>
        {options.map(option =>
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        )}
      </select>
    </>
  );
};

export { Select };
