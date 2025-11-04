import React from 'react';
import BGImage2 from '../assets/BGImage2.png';
import topblack2 from '../assets/topblack2.png';
import mobilebottom from '../assets/mobilebottom.png';
import CardContent from '../components/CardContent';
import flower1 from '../assets/flower1.png';
import flower2 from '../assets/flower2.png';
import flower3 from '../assets/flower3.png';

const Cards: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden min-h-[28vh] md:min-h-[70vh] tablet:min-h-[120vh]"
      style={{
        backgroundImage: `url(${BGImage2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* top image */}
      <img
        src={topblack2}
        alt=""
        className="absolute -top-16 left-0 w-full h-auto md:block hidden"
        style={{ maxHeight: '200px' }}
      />

      {/* Title */}
      <h1
        className="absolute 
                    top-16 tablet:top-32 lg:top-40    /* increased padding for tablet & laptop */
                    md:left-1/2 md:transform md:-translate-x-1/2 
                    text-black font-bold z-10 text-center
                    left-0 right-0 md:static md:translate-x-0"
        style={{
          fontFamily: 'Jura, sans-serif',
          fontSize: 'clamp(32px, 6vw, 70px)',
        }}
      >
        HOW TO BUY
      </h1>

      {/* Card container */}
      <div
        className="relative z-10 md:absolute md:top-[40%] w-full 
                    mt-[220px] md:mt-0"
      >
        <CardContent />
      </div>

      {/* Mobile-only flower images */}
      <div className="relative flex flex-col items-center justify-center mt-20 md:hidden">
        <img
          src={flower3}
          alt=""
          className="absolute -bottom-[160px] left-1/2 transform -translate-x-1/2 w-[240px] h-auto object-contain"
        />

        {/* Flower1 and Flower2 below */}
        <div className="flex justify-between w-full px-[1px] mt-[1px]">
          <img
            src={flower1}
            alt=""
            className="w-[220px] h-auto object-contain"
          />
          <img
            src={flower2}
            alt=""
            className="w-[220px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Mobile bottom image */}
      <img
        src={mobilebottom}
        alt=""
        className="w-full h-auto object-cover mt-8 md:hidden"
      />
    </section>
  );
};

export default Cards;
