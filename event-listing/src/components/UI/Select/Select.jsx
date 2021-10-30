import React from 'react';
import style from './Select.module.css';

const Select = ({ options, defaultOption, label, value, onChange }) => {
  return (
    <div className={style.selectContainer}>
      <label htmlFor="city-select" className={style.labelFilter}>{label}:</label>
      <select className={style.selectFilter} id="city-select" value={value} onChange={event => onChange(event.target.value)}>
        {options.map(option =>
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        )}
      </select>
    </div>
  );
};

export { Select };
