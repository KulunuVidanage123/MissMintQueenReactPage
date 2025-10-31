import React from 'react';
import Rectangle from '../assets/Rectangle.png';
import RectangleText from '../assets/RectangleText.png';

const Rectangle_Shape: React.FC = () => {
  return (
    <div className="relative w-[95vw] h-[80px] sm:h-[100px] rounded-[20px] overflow-hidden">
      <img
        src={Rectangle}
        alt="Rectangle"
        className="w-[95vw] h-full rounded-[20px] object-cover"
      />
      {/* Animated text */}
      <div className="absolute top-1/2 left-0 w-[3600px] animate-slide-seamless -translate-y-1/2">
        <img
          src={RectangleText}
          alt="Rectangle Text"
          className="inline-block"
          style={{ width: '1600px', height: '52px', objectFit: 'contain' }}
        />
        <img
          src={RectangleText}
          alt="Rectangle Text"
          className="inline-block ml-4"
          style={{ width: '1600px', height: '52px', objectFit: 'contain' }}
        />
      </div>
    </div>
  );
};

export default Rectangle_Shape;
