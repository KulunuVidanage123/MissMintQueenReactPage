// src/Sections/HeroTitle.tsx
import React from 'react';
import TopBlack from '../assets/topblack.png';
import BGImage2 from '../assets/BGImage2.png';
import HeroTitleContent from '../components/HeroTitleContent';
import Rectangle_Shape from '../components/Rectangle_Shape';

const HeroTitle: React.FC = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[60vh] lg:h-[60vh] xl:h-[80vh] 2xl:h-[90vh] overflow-visible z-20">
      {/* Mobile */}

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${BGImage2})` }}
      />

      {/* Top black bar */}
      <img
        src={TopBlack}
        alt=""
        className="absolute top-0 left-0 w-full h-[80px] sm:h-[90px] md:h-[120px] lg:h-[120px] xl:h-[100px] object-fill z-10"
      />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4 md:px-6">
        <div className="w-full flex flex-col items-center justify-center h-full md:h-auto">
          <HeroTitleContent />
        </div>
      </div>

      {/* Rectangle_Shape — now allowed to overlap next section */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-[30] pointer-events-none">
        <Rectangle_Shape />
      </div>
    </section>
  );
};

export default HeroTitle;
