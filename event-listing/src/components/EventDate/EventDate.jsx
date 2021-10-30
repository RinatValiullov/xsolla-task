import React from 'react';
import style from './EventDate.module.css';

export const EventDate = ({ date }) => {
  return (
    <div className={style.eventdate}>
      {date}
    </div>
  );
};
