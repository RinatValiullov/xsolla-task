import React from 'react';
import style from './Event.module.css';
import { Bookmark } from './../UI/Bookmark/Bookmark';
import { EventDate } from './../EventDate/EventDate';
import { EventTitle } from './../EventTitle/EventTitle';

export const Event = () => {
  return (
    <div className={style.event}>
      <EventDate date={14} />
      <Bookmark />
      <EventTitle title="Rave Autumn" />
    </div>
  );
};
