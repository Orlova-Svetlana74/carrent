import React from 'react';
import s from './premiumCars.module.css';
import wedding from '../img/wedding.png';
import arrow from '../img/arrow.png';
import fotosessiy from '../img/fotosessiy.png';

const Premiumcars = () => {
  return (
    <div className={s.blockcontent}>
      <h2 className={s.title}>Аренда премиум автомобилей для мероприятий</h2>
      <div className={s.blockitems}>
        <div className={s.boxcontent}>
          <img className={s.wedding} src={wedding} alt="wedding" />
          <h2 className={s.subtitle}>Аренда авто на свадьбу</h2>
          <p className={s.textcontent}>
            Предоставляем в аренду премиальные автомобили для свадьбы с
            водителем
          </p>
          <button className={s.button}>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
        <div className={s.boxcontent}>
          <img className={s.fotosessiy} src={fotosessiy} alt="fotosessiy" />
          <h2 className={s.subtitle}>Аренда авто для фотосессий</h2>
          <p className={s.textcontent}>
            Предоставляем аренду премиальных автомобилей для фотосессий или
            видеосъемки
          </p>
          <button className={s.button}>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Premiumcars;
