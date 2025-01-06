import React from 'react';
import s from './footer.module.css';
import image from '../img/logoRent.png';
import telegr from '../img/watsupp.png';
import watsupp from '../img/telegr.png';

const Footer = () => {
  return (
    <div className={s.fonpicture}>
      <div className={s.footer}>
        <div className={s.blockstyle}>
          <a href="#">
            <img className={s.logo} src={image} alt="logo" />
          </a>
          <div className={s.boxtelefon}>
            <p className={s.telefnumber}>
              +7 (499) 110-20-47 Рабочие часы: с 10:00 до 20:00
            </p>
            <button className={s.buttoncall}>Заказать звонок</button>
          </div>
          <p className={s.adress}>
            г. Москва, Автомобильный проезд, д.3 стр.5
          </p>
          <p className={s.telefnumber}>info@dizrental.ru</p>

          <div className={s.telegrwats}>
            <img className={s.telegr} src={telegr} alt="telegr" />
            <img className={s.watsupp} src={watsupp} alt="watsupp" />
          </div>
        </div>
        <div className={s.styleclients}>
            <div className={s.stylebox}>
                <h2 className={s.clients}>Клиентам</h2>
                <p className={s.textcontent}>О нас</p>
                <p className={s.textcontent}>Условия</p>
                <p className={s.textcontent}>Отзывы</p>
                <p className={s.textcontent}>Статьи</p>
                <p className={s.textcontent}>Контакты</p>                
            </div>

            <div className={s.stylebox}>
                <h2 className={s.clients}>Автопарк</h2>
                <p className={s.textcontent}>Внедорожники</p>
                <p className={s.textcontent}>СпортКар</p>
                <p className={s.textcontent}>Бизнес</p>
                <p className={s.textcontent}>Премиум</p>
                <p className={s.textcontent}>Комфорт</p>                
            </div>

            <div className={s.stylebox}>
                <h2 className={s.clients}>Мероприятие</h2>
                <p className={s.textcontent}>На свадьбу</p>
                <p className={s.textcontent}>На фотосессию</p>
                <p className={s.textcontent}>На видеосъемку</p>
                <p className={s.textcontent}>На день рождение</p>                                
            </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
