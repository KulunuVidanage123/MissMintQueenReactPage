import React from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';

const Logos: React.FC = () => {
  return (
    <div className="text-center">
      {/* "Partners" title */}

      <h2
        className="text-white font-bold text-[18px] md:text-[30px] mb-2 md:mb-6"
        style={{
          fontFamily: 'Jura, sans-serif',
        }}
      >
        Partners
      </h2>

      {/* Logos row */}
      <div className="flex justify-center items-center gap-2 md:gap-16 mt-28 md:mt-0">
        <img src={logo1} alt="Partner 1" className="h-20 w-auto md:h-32 md:w-auto" />
        <img src={logo2} alt="Partner 2" className="h-20 w-auto md:h-32 md:w-auto" />
        <img src={logo3} alt="Partner 3" className="h-20 w-auto md:h-32 md:w-auto" />
        <img src={logo4} alt="Partner 4" className="h-20 w-auto md:h-32 md:w-auto" />
        <img src={logo5} alt="Partner 5" className="h-20 w-auto md:h-32 md:w-auto" />
      </div>
    </div>
  );
};

export default Logos;
