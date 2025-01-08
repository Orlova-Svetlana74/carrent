import React from 'react';
import image from '../img/logoRent.png';
import s from './header.module.css';
import telegr from '../img/watsupp.png';
import watsupp from '../img/telegr.png';

const Header = ({ onScrollToAbout, onScrollToSkidki }) => {
  return (
    <div className={s.topheader}>
      <a href="#">
        <img className={s.logo} src={image} alt="logo" />
      </a>
      <h2 className={s.menu_item_text}>Москва</h2>
      <h2 className={s.menu_item_text}>Дубай</h2>
      <h2 className={s.menu_item_text} onClick={onScrollToAbout}>
        Подобрать авто
      </h2>
      <h2 className={s.menu_item_text} onClick={onScrollToSkidki}>
        Скидки и акции
      </h2>
      <h2 className={s.menu_item_text}>Цены</h2>
      <h2 className={s.menu_item_text}>О нас</h2>
      <h2 className={s.menu_item_text}>Контакты</h2>
      <img className={s.telegr} src={telegr} alt="telegr" />
      <img className={s.watsupp} src={watsupp} alt="watsupp" />
      <h2 className={s.menu_item_text}>+7 (499) 110-20-47</h2>
      <button className={s.buttoncall}>Заказать звонок</button>
    </div>
  );
};
export default Header;
