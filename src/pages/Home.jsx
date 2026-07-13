import React from 'react';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import Skills from '../components/home/Skills';
import Stats from '../components/home/Stats';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import Projects from '../components/home/Projects';
const Home = () => {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <Skills />
      <Projects />
      <Stats />
      <Services />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default Home;