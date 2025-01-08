import React from 'react';
import s from './formQuestions.module.css';
import girl from '../img/girl.png';

const Formquestions = () => {
  return (
    <div className={s.fonpicture}>
      <div className={s.girlpicture}>
        <img className={s.girl} src={girl} alt="girl" />
      </div>
      <div className={s.blockform}>
        <h2 className={s.title}>Остались вопросы?</h2>
        <p className={s.textcontent}>
          Менеджер свяжется с вами в течение 15 минут и сможет ответить на все
          интересующие вопросы +7 (499) 110-20-47
        </p>
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
  );
};
export default Formquestions;
