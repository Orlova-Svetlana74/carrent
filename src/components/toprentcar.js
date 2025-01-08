import React from 'react';
import s from './toprentcar.module.css';

const Toprentcar = () => {
  return (
    <div className={s.topblock}>
      <div className={s.fonpicture}>
        <h2 className={s.toptext}>Аренда авто в Москве</h2>
        <p className={s.ptext}>
          Прокат или аренда автомобиля с водителем или без
        </p>
      </div>
      <div className={s.rentalorder}>
        <h2 className={s.title}>Заказать аренду online</h2>
        <div className={s.rentalorder_choice}>
          <button className={s.startrent}>Начало аренды</button>
          <button className={s.finishrent}>Окончание аренды</button>
          <div className={s.rentalorder_choice_var}>
            <input type="checkbox"></input>
            <label className={s.varchois}>Внедорожник</label>
            <input type="checkbox"></input>
            <label className={s.varchois}>Спорт</label>

            <input type="checkbox"></input>
            <label className={s.varchois}>Бизнес</label>
            <input type="checkbox"></input>
            <label className={s.varchois}>Спорткар</label>

            <input type="checkbox"></input>
            <label className={s.varchois}>Премиум</label>
            <input type="checkbox"></input>
            <label className={s.varchois}>Комфорт</label>
          </div>
          <button className={s.findbutton}>Найти варианты</button>
        </div>
      </div>
    </div>
  );
};
export default Toprentcar;
