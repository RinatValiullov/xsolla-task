import React from 'react';
import { BiBookmark } from "react-icons/bi";
import style from './Bookmark.module.css';

export const Bookmark = () => {
  return (
    <div className={style.bookmark}>
      <BiBookmark />
    </div>
  );
};
