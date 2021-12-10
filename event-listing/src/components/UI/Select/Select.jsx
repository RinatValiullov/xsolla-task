import React from 'react';
import style from './Select.module.css';

const Select = ({ options, label, value, onChange }) => {
  return (
    <div className={style.selectContainer}>
      <label htmlFor={label} className={style.labelFilter}>{label}:</label>
      <select
        className={style.selectFilter}
        id={label}
        value={value}
        onChange={event => onChange(event.target.value)}
      >
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
