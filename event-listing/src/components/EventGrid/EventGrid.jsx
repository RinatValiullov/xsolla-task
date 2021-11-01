import React from 'react';
import { Event } from './../Event/Event';
import style from './EventGrid.module.css';

export const EventGrid = ({ events }) => {
  return (
    <div className={style.eventgrid}>
      {
        events.map(event => {
          return <Event
            key={event.id}
            eventDate={event.date.substr(0, 2)}
            eventTitle={event.name}
          />;
        })
      }
    </div>
  );
};
