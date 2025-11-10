import React from 'react';
import BGImage4 from '../assets/BGImage4.png';
import BGImage4mobile from '../assets/BGImage4mobile.png'; 
import topblack2 from '../assets/topblack2.png';
import CardContent from '../components/CardContent';
import flower1 from '../assets/flower1.png';
import flower2 from '../assets/flower2.png';
import flower3 from '../assets/flower3.png';

const Cards: React.FC = () => {
  return (
    <section 
      id="how-to-buy"
      className="relative w-full overflow-hidden min-h-[150vh] md:min-h-[70vh]">
      {/* Mobile Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${BGImage4mobile})` }}
      />

      {/* Desktop/Tablet Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${BGImage4})` }}
      />

      {/* Top black image */}
      <img
        src={topblack2}
        alt=""
        className="absolute -top-16 left-0 w-full h-auto hidden md:block"
        style={{ maxHeight: '200px' }}
      />

      {/* Title */}
      <h1
        className="absolute top-16 md:top-26 left-1/2 transform -translate-x-1/2 text-black font-bold z-10 text-center whitespace-nowrap md:whitespace-normal"
        style={{
          fontFamily: 'Jura, sans-serif',
          fontSize: 'clamp(32px, 6vw, 70px)',
        }}
      >
        HOW TO BUY
      </h1>

      {/* Cards */}
      <div className="relative z-10 pt-24 mt-16 md:mt-0 md:pt-0 md:absolute md:top-[40%] md:w-full">
        <CardContent />
      </div>

      <div className="relative flex flex-col items-center justify-center mt-24 md:hidden">
        {/* Bottom center flower */}
        <img
          src={flower3}
          alt="Flower3"
          className="absolute -bottom-[100px] left-1/2 transform -translate-x-1/2 w-[240px] h-auto object-contain max-[440px]:w-[180px]"
        />

        {/* Left and right flowers */}
        <div className="flex justify-between w-full px-[12px] mt-[1px]">
          <img
            src={flower1}
            alt="Flower1"
            className="flower-pair w-[220px] h-auto object-contain max-[440px]:w-[160px]"
          />
          <img
            src={flower2}
            alt="Flower2"
            className="flower-pair w-[220px] h-auto object-contain max-[440px]:w-[160px]"
          />
        </div>
      </div>

      <style>
        {`
          @media (max-width: 342px) {
            .flower-pair {
              display: none !important;
            }
          }
        `}
      </style>
      
    </section>
  );
};

export default Cards;