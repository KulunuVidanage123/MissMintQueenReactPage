// src/App.tsx
import React from 'react';
import Navbar from './Sections/Navbar';
import Slider from './Sections/Slider';
import AboutUs from './Sections/AboutUs';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <AboutUs />
      {/* Other sections can go below */}
    </>
  );
};

export default App;