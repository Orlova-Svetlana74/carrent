import React from 'react';
import s from './treestepsRent.module.css';
import bid from '../img/bid.png';
import one from '../img/one.png';
import dogovor from '../img/dogovor.png';
import two from '../img/two.png';
import key from '../img/key.png';
import tree from '../img/tree.png';

const Treestepsrent = () => {
  return (
    <div className={s.blockcontent}>
      <h2 className={s.title}>Три шага, чтобы арендовать авто.</h2>
      <div className={s.blockitems}>
        <div className={s.boxcontent}>
          <img className={s.bid} src={bid} alt="bid" />
          <img className={s.one} src={one} alt="one" />
          <div className={s.itemstyle}>
            <h2 className={s.subtitle}>Подать заявку</h2>
            <p className={s.textcontent}>
              Оформляете заявку на сайте, связываетесь по телефону или в
              мессенджерах и бронируете автомобиль
            </p>
          </div>
        </div>
        <div className={s.boxcontent}>
          <img className={s.dogovor} src={dogovor} alt="dogovor" />
          <img className={s.two} src={two} alt="two" />
          <div className={s.itemstyle}>
            <h2 className={s.subtitle}>Договор</h2>
            <p className={s.textcontent}>
              Подписываете договор на аренду автомобиля, вносите оплату и
              страховой депозит
            </p>
          </div>
        </div>
        <div className={s.boxcontent}>
          <img className={s.key} src={key} alt="key" />
          <img className={s.tree} src={tree} alt="tree" />
          <div className={s.itemstyle}>
            <h2 className={s.subtitle}>Получение</h2>
            <p className={s.textcontent}>
              Забираете авто в нашем салоне или мы можем доставить в любую точку
              Москвы
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Treestepsrent;
