import React, { useRef } from 'react';
import Header from '../components/header';
import Toprentcar from '../components/toprentcar';
import Cars from '../components/cars';
import Formrent from '../components/formRent';
import Premiumcars from '../components/premiumCars';
import Treestepsrent from '../components/treestepsent';
import Discountsrent from '../components/discountsRent';
import Causerent from '../components/causeRent';
import Rentcars from '../components/rentCars';
import Logocars from '../components/logoCars';
import Formquestions from '../components/formQuestions';
import Footer from '../components/footer';

const Main = () => {
  const aboutRef = useRef(null);
  const skidkiRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToSkidki = () => {
    if (skidkiRef.current) {
      skidkiRef.current.scrollIntoView({ behavior: 'smooth' });
    }
};
  return (
    <section>
      <Header onScrollToAbout={scrollToAbout} onScrollToSkidki={scrollToSkidki} />
      <Toprentcar />
      <Cars ref={aboutRef} />
      <Formrent />
      <Premiumcars />
      <Treestepsrent />
      <Discountsrent ref={skidkiRef} />
      <Causerent />
      <Rentcars />
      <Logocars />
      <Formquestions />
      <Footer />
    </section>
  );
};
export default Main;
