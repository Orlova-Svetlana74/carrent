import React from 'react';
import s from './rentCars.module.css';
import redcar from '../img/redcar.png';
import rul from '../img/rul.png';

const Rentcars = () => {
  return (
    <div className={s.fonpicture}>
      <div className={s.bloccontener}>
        <div className={s.blockstyle}>
          <div className={s.blocitem}>
            <h2 className={s.title}>Car hire in Dubai for different budget</h2>
            <p className={s.subtitle}>
              We guarantee that you get technically sound, clean car with a full
              tank, comfortable interior. Our staff will independently pick up
              the car at the expiration of the rental term at the specified
              location.
            </p>
            <p className={s.subsubtitle}>
              We strive to make car rental in Dubai affordable for everyone.
              That's why you can rent cars in our office: Economy. Sedans and
              SUVs you can rent from 149 AED ($40) per day.Comfort. Sports cars,
              vans, SUVs, sedans with comfortable saloon can be rented from 219
              AED ($59) per day.Premium. Premium SUVs and prestigious
              convertibles can be rent from AED 439 ($119) per day.
            </p>
          </div>
          <img className={s.redcar} src={redcar} alt="car" />
        </div>
        <div className={s.blockstyle}>
          <img className={s.rul} src={rul} alt="car" />
          <div className={s.blocitem}>
            <h2 className={s.title}>Аренда машин в Москве</h2>
            <p className={s.subtitle}>
              Для получения более подробной информации о прокате авто можно
              посетить наш офис, оставить заявку на сайте или позвонить по
              телефону 7 (499) 110-20-47
            </p>
            <p className={s.subsubtitle}>
              Мы всегда рады помочь Вам по любым вопросам и обеспечить
              качественным авто.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rentcars;
