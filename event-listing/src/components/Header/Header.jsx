import React from 'react';
import style from './Header.module.css';

export const Header = ({ text }) => {
  return (
    <h1 className={style.title}>
      {text}
    </h1>
  );
};
