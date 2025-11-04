// src/App.tsx
import React from 'react';
import Navbar from './Sections/Navbar';
import Slider from './Sections/Slider';
import AboutUs from './Sections/AboutUs';
import HeroTitle from './Sections/HeroTitle';
import Homepage from './Sections/Homepage';
import Cards from './Sections/Cards';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <AboutUs />
      <HeroTitle />
      <Homepage />
      <Cards />
      {/* Other sections can go below */}
    </>
  );
};

export default App;