import React, { forwardRef } from 'react';
import s from './cars.module.css';
import bmv from '../img/bmvx2.png';
import vnedor from '../img/vnedor.png';
import biznes from '../img/biznes.png';
import sportcar from '../img/sportcar.png';
import premium from '../img/premium.png';
import comfort from '../img/comfort.png';
import kia from '../img/kia.png';
import lexus from '../img/lexus.png';
import jaguar from '../img/jaguar.png';
import toyota from '../img/toyota.png';
import mochnost from '../img/mochnost.png';
import toplivo from '../img/toplivo.png';
import Blockinfo from '../components/blockInfo';

const Cars = forwardRef((props, ref) => {
  return (
    <div className={s.blockparc}>
      <div className={s.title}>
        <h2 ref={ref} className={s.titleparc}>Наш автопарк</h2>
        <button className={s.buttonlook}>Смотреть все</button>
      </div>

      <button className={s.buttonvnedorcar}>
        <img className={s.pictcar} src={vnedor} alt="car" />
        Внедорожники
      </button>
      <button className={s.buttoncar}>
        <img className={s.pictcar} src={biznes} alt="car" />
        Бизнес
      </button>
      <button className={s.buttoncar}>
        <img className={s.pictcar} src={sportcar} alt="car" />
        Спорткар
      </button>
      <button className={s.buttoncar}>
        <img className={s.pictcar} src={premium} alt="car" />
        Премиум
      </button>
      <button className={s.buttoncar}>
        <img className={s.pictcar} src={comfort} alt="car" />
        Комфорт
      </button>
      <div className={s.carsparc}>
        <div className={s.boxcar}>
          <img className={s.car} src={bmv} alt="car" />
          <p className={s.marcacars}>BMW X2, 2021</p>
          <p className={s.characteristic}>
            <img className={s.toplivo} src={toplivo} alt="car" /> 2,3 л/бензин{' '}
            <img className={s.mochnost} src={mochnost} alt="car" /> 317 л.с.
          </p>
          <div className={s.buttunprise}>
            <button className={s.buttonrent}>Забронировать</button>
            <p className={s.price}>От 7150 руб/сут</p>
          </div>
        </div>
        <div className={s.boxcar}>
          <img className={s.car} src={kia} alt="car" />
          <p className={s.marcacars}>Kia Sportage, 2022</p>
          <p className={s.characteristic}>
            <img className={s.toplivo} src={toplivo} alt="car" /> 2,3 л/бензин{' '}
            <img className={s.mochnost} src={mochnost} alt="car" /> 317 л.с.
          </p>
          <div className={s.buttunprise}>
            <button className={s.buttonrent}>Забронировать</button>
            <p className={s.price}>От 7150 руб/сут</p>
          </div>
        </div>
        <div className={s.boxcar}>
          <img className={s.car} src={lexus} alt="car" />
          <p className={s.marcacars}>Lexus IS, 2018</p>
          <p className={s.characteristic}>
            <img className={s.toplivo} src={toplivo} alt="car" /> 2,3 л/бензин{' '}
            <img className={s.mochnost} src={mochnost} alt="car" /> 317 л.с.
          </p>
          <div className={s.buttunprise}>
            <button className={s.buttonrent}>Забронировать</button>
            <p className={s.price}>От 7150 руб/сут</p>
          </div>
        </div>
        <div className={s.boxcar}>
          <img className={s.car} src={jaguar} alt="car" />
          <p className={s.marcacars}>Jaguar XF, 2012</p>
          <p className={s.characteristic}>
            <img className={s.toplivo} src={toplivo} alt="car" /> 2,3 л/бензин{' '}
            <img className={s.mochnost} src={mochnost} alt="car" /> 317 л.с.
          </p>
          <div className={s.buttunprise}>
            <button className={s.buttonrent}>Забронировать</button>
            <p className={s.price}>От 7150 руб/сут</p>
          </div>
        </div>
        <div className={s.boxcar}>
          <img className={s.car} src={toyota} alt="car" />
          <p className={s.marcacars}>Toyota RAV4, 2017</p>
          <p className={s.characteristic}>
            <img className={s.toplivo} src={toplivo} alt="car" /> 2,3 л/бензин{' '}
            <img className={s.mochnost} src={mochnost} alt="car" /> 317 л.с.
          </p>
          <div className={s.buttunprise}>
            <button className={s.buttonrent}>Забронировать</button>
            <p className={s.price}>От 7150 руб/сут</p>
          </div>
        </div>
        <div className={s.boxcar}>
          <img className={s.car} src={bmv} alt="car" />
          <p className={s.marcacars}>BMW X2, 2021</p>
          <p className={s.characteristic}>
            <img className={s.toplivo} src={toplivo} alt="car" /> 2,3 л/бензин{' '}
            <img className={s.mochnost} src={mochnost} alt="car" /> 317 л.с.
          </p>
          <div className={s.buttunprise}>
            <button className={s.buttonrent}>Забронировать</button>
            <p className={s.price}>От 7150 руб/сут</p>
          </div>
        </div>

        <div className={s.boxcar}>
          <img className={s.car} src={bmv} alt="car" />
          <p className={s.marcacars}>BMW X2, 2021</p>
          <p className={s.characteristic}>
            <img className={s.toplivo} src={toplivo} alt="car" /> 2,3 л/бензин{' '}
            <img className={s.mochnost} src={mochnost} alt="car" /> 317 л.с.
          </p>
          <div className={s.buttunprise}>
            <button className={s.buttonrent}>Забронировать</button>
            <p className={s.price}>От 7150 руб/сут</p>
          </div>
        </div>
        <div className={s.boxcar}>
          <img className={s.car} src={bmv} alt="car" />
          <p className={s.marcacars}>BMW X2, 2021</p>
          <p className={s.characteristic}>
            <img className={s.toplivo} src={toplivo} alt="car" /> 2,3 л/бензин{' '}
            <img className={s.mochnost} src={mochnost} alt="car" /> 317 л.с.
          </p>
          <div className={s.buttunprise}>
            <button className={s.buttonrent}>Забронировать</button>
            <p className={s.price}>От 7150 руб/сут</p>
          </div>
        </div>
        <div className={s.boxcar}>
          <img className={s.car} src={bmv} alt="car" />
          <p className={s.marcacars}>BMW X2, 2021</p>
          <p className={s.characteristic}>
            <img className={s.toplivo} src={toplivo} alt="car" /> 2,3 л/бензин{' '}
            <img className={s.mochnost} src={mochnost} alt="car" /> 317 л.с.
          </p>
          <div className={s.buttunprise}>
            <button className={s.buttonrent}>Забронировать</button>
            <p className={s.price}>От 7150 руб/сут</p>
          </div>
        </div>
      </div>
      <Blockinfo />
    </div>
  );
});
export default Cars;
