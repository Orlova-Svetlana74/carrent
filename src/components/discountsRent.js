import React, { forwardRef } from 'react';
import s from './discountsRent.module.css';
import ellipse from '../img/ellipse.png';
import skidki from '../img/skidki.png';

const Discountsrent = forwardRef((props, ref) => {
  return (
    <div className={s.fonpicture}>
      <div className={s.blockstyle}>
        <h2 ref={ref} className={s.titletext}>Скидки и акции</h2>
        <div className={s.blockcontent}>
          <div className={s.blocktext}>
            <p className={s.textcontent}>
              Аренда элитных автомобилей в Москве предоставляет возможность
              воплотить мечты в реальность и создать незабываемые впечатления.
              Будь то эксклюзивная свадьба, впечатляющий деловой приезд или
              просто желание испытать роскошь и элегантность автомобиля
              премиум-класса, эта услуга открывает двери в мир высокого стиля и
              комфорта.
            </p>
            <p className={s.text}>
              Аренда элитных автомобилей в Москве - это возможность позволить
              себе немного роскоши и создать незабываемые моменты, которые
              останутся в памяти надолго.
            </p>
          </div>
          <div className={s.formreg}>
            <div className={s.stylediscounts}>
            <img className={s.skidkistyle} src={skidki} alt="car" />
              <div className={s.block}>
                <img className={s.ellipse} src={ellipse} alt="car" />
                <h2>Скидки постоянным клиентам</h2>
                <p>
                  Постоянным клиентам мы предоставляем скидки до 30% при
                  повторной аренде.
                </p>
              </div>
            </div>
            <button className={s.buttoncircle}>←</button>
            <button className={s.buttoncircle}>→</button>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Discountsrent;
