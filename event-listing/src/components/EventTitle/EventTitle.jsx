import React from 'react';
import style from './EventTitle.module.css';

export const EventTitle = ({ title }) => {
  return (
    <div className={style.eventtitle}>
      {title}
    </div>
  );
};
