import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';

import Project from './Components/project/Project';
import Resume from './Components/resume/Resume';
import Features from './Components/layout/Features';
import Testimonial from './Components/testimonial/Testimonial';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import FooterBottom from './Components/footer/FooterBottom';

const App = () => {
  return (
  <div className="w-full h-auto bg-bodyColor text-lightText">
    <div className='max-w-8xl mx-auto px-20'>
      <Navbar/>
      
      <Banner/>
      <Features/>
      <Project/>
      <Resume/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <FooterBottom/>
  
    </div>

  </div>
  );
}

export default App;
