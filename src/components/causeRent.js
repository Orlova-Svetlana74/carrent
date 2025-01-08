import React from 'react';
import s from './causeRent.module.css';
import strahovka from '../img/strahovka.png';
import cenovay from '../img/cenovay.png';
import avtopark from '../img/avtopark.png';
import oplata from '../img/oplata.png';
import skorost from '../img/skorost.png';

const Causerent = () => {
  return (
    <div className={s.textcontent}>
      <h2 className={s.text}>6 причин заказать аренду авто в DizRental</h2>
      <div className={s.blockcontent}>
        <div className={s.itemstyle}>
          <img className={s.strahovka} src={strahovka} alt="car" />
          <div>
            <h2 className={s.title}>Страховка</h2>
            <p className={s.textitem}>
              Все наши автомобили застрахованы по ОСАГО И КАСКО
            </p>
          </div>
        </div>
        <div className={s.itemstyle}>
          <img className={s.avtopark} src={avtopark} alt="car" />
          <div>
            <h2 className={s.title}>Автопарк</h2>
            <p className={s.textitem}>
              Весь автопарк в отличном состоянии и всегда пополняется новыми
              моделями
            </p>
          </div>
        </div>
        <div className={s.itemstyle}>
          <img className={s.cenovay} src={cenovay} alt="car" />
          <div>
            <h2 className={s.title}>Ценовая политика</h2>
            <p className={s.textitem}>
              Всегда доступные цены и приятные бонусы постоянным клиентам
            </p>
          </div>
        </div>
        <div className={s.itemstyle}>
          <img className={s.cenovay} src={cenovay} alt="car" />
          <div>
            <h2 className={s.title}>Ценовая политика</h2>
            <p className={s.textitem}>
              Всегда доступные цены и приятные бонусы постоянным клиентам
            </p>
          </div>
        </div>
        <div className={s.itemstyle}>
          <img className={s.oplata} src={oplata} alt="car" />
          <div>
            <h2 className={s.title}>Оплата</h2>
            <p className={s.textitem}>
              Любая удобная для вас форма оплаты (нал/безнал, банковский
              перевод)
            </p>
          </div>
        </div>
        <div className={s.itemstyle}>
          <img className={s.skorost} src={skorost} alt="car" />
          <div>
            <h2 className={s.title}>Скорость</h2>
            <p className={s.textitem}>
              Оформление аренды любого авто в течении не более 15 минут
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Causerent;
