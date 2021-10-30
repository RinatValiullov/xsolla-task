import React from 'react';
import style from './Filter.module.css';
import { Select } from '../UI/Select/Select';

const Filter = () => {
  return (
    <div className={style.filter}>
      <Select
        label="City"
        onChange={() => 'city'}
        options={[
          { value: "Amsterdam", name: "city" },
          { value: "Berlin", name: "city" },
          { value: "Rim", name: "city" },
        ]}
      />
      <Select
        label="Month"
        onChange={() => 'month'}
        options={[
          { value: "September", name: "month" },
          { value: "September", name: "month" },
          { value: "November", name: "month" },
        ]}
      />
    </div>
  );
};

export { Filter };
