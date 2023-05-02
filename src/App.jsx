import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Testimonials from './components/testimonials/Testimonials';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ReactGA from 'react-ga';
import SportsSkills from './components/SportsSkills/SportsSkills';
import SportsServices from './components/SportsServices/SportsService';

ReactGA.initialize('G-C7B86W4PXW');

ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <main className='main'>
      <Header />
      <Home />
      <Portfolio />
      <SportsSkills />
      <Skills />
      <SportsServices />
      <Services />
      <Resume />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
