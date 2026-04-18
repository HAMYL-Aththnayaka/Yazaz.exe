import React from 'react';
import Hero from '../../components/Hero/Hero'; 
import About from '../../components/About/About';
import TimeLine from '../../components/TimeLine/TimeLine';
import MyWork from '../../components/MyWork/MyWork';
import Contact from '../../components/Contact/Contact';
import Services from '../../components/Services/Services';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <TimeLine />
      <MyWork />
      <Contact />
    </>
  );
};

export default Home;