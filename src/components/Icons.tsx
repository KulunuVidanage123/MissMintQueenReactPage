// src/components/Icons.tsx
import React from 'react';
import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png';

const Icons: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Icons Row */}
      <div className="flex space-x-6">
        <img
          src={Icon1}
          alt="Icon 1"
          className="w-[73px] h-[73px] transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1"
        />
        <img
          src={Icon2}
          alt="Icon 2"
          className="w-[73px] h-[73px] transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1"
        />
      </div>
    </div>
  );
};

export default Icons;
