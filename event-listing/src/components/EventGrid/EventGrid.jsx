import React from 'react';
import { Event } from './../Event/Event';
import style from './EventGrid.module.css';

export const EventGrid = () => {
  return (
    <div className={style.eventgrid}>
      <Event />
    </div>
  );
};
