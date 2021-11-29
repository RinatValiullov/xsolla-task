import React from 'react';
import style from './Event.module.css';
import { Bookmark } from './../UI/Bookmark/Bookmark';
import { EventDate } from './../EventDate/EventDate';
import { EventTitle } from './../EventTitle/EventTitle';

export const Event = ({ eventDate, eventTitle, eventBg }) => {
  return (
    <div
      className={style.event}
      style={{ backgroundImage: `url(${eventBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <EventDate date={eventDate} />
      <Bookmark />
      <EventTitle title={eventTitle} />
    </div>
  );
};
