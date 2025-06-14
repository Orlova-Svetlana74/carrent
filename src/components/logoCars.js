import React from 'react';
import s from './logoCars.module.css';
import logocar from '../img/logocar.png';

const Logocars = () => {
  return (
    <div className={s.logocars}>
    <img className={s.logocar} src={logocar} alt="logocar" />  
    </div>
  );
};
export default Logocars;
