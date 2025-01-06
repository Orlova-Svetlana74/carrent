import React from 'react';
import s from './formRent.module.css';

const Formrent = () => {
  return (
    <div className={s.fonpicture}>
      <div className={s.blockstyle}>
        <h2 className={s.titletext}>Арендовать авто прямо сейчас!</h2>
        <div className={s.blockcontent}>
          <div className={s.blocktext}>
            <p className={s.textcontent}>
              Dizrental в Москве предлагает широкий выбор моделей от ведущих
              производителей, таких как Mercedes, BMW, Audi . Клиенты могут
              выбирать между спортивными автомобилями, роскошными седанами или
              эксклюзивными внедорожниками, чтобы насладиться комфортом и
              эстетикой этих превосходных машин.
            </p>
            <p className={s.text}>
              Благодаря услугам аренды, каждый желающий может ощутить себя
              владельцем такого автомобиля на несколько дней или даже на
              несколько часов, без необходимости покупки и обслуживания.
            </p>
          </div>

          <div className={s.formreg}>
            <input className={s.name}></input>
            <label className={s.varchois}>Введите имя</label>

            <input className={s.name}></input>
            <label className={s.varchois}>Ваш телефон</label>

            <button className={s.buttonrent}>Забронировать</button>
            
            <input className={s.checkbox} type="checkbox"></input>
            <label className={s.varchois}>
              Отправляя форму, я соглашаюсь с политикой обработки персональных
              данных
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Formrent;
