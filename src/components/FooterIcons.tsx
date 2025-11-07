// src/components/FooterIcons.tsx
import React from 'react';
import FooterIcon1 from '../assets/FooterIcon1.png';
import FooterIcon2 from '../assets/FooterIcon2.png';
import FooterIcon3 from '../assets/FooterIcon3.png';
import FooterIcon4 from '../assets/FooterIcon4.png';

const FooterIcons: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 py-4">
      <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
        <img 
          src={FooterIcon1} 
          alt="Telegram" 
          className="w-[55px] h-[55px] sm:w-[73px] sm:h-[73px] object-contain"
        />
      </a>
      <a href="#">
        <img 
          src={FooterIcon2} 
          alt="Icon 2" 
          className="w-[55px] h-[55px] sm:w-[73px] sm:h-[73px] object-contain"
        />
      </a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer">
        <img 
          src={FooterIcon3} 
          alt="X" 
          className="w-[55px] h-[55px] sm:w-[73px] sm:h-[73px] object-contain"
        />
      </a>
      <a href="#">
        <img 
          src={FooterIcon4} 
          alt="Icon 4" 
          className="w-[55px] h-[55px] sm:w-[73px] sm:h-[73px] object-contain"
        />
      </a>
    </div>
  );
};

export default FooterIcons;