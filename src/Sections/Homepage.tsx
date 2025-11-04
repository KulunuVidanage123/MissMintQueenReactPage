import React from 'react';
import BGImage1 from '../assets/BGImage1.png';
import Queen3 from '../assets/Queen3.png';
import BGtext from '../assets/BGtext.png';
import HomePageContent from '../components/HomePageContent';
import Logos from '../components/Logos';

const Homepage: React.FC = () => {
  return (
    <section
      className="relative w-full h-[140vh] lg:h-[100vh]"
      style={{
        backgroundImage: `url(${BGImage1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* --- MOBILE & TABLET VIEW --- */}
      <div className="flex flex-col items-center justify-center text-center lg:hidden relative z-20 px-4 py-10 space-y-6">
        {/* HomePageContent on top */}
        <div className="w-full">
          <HomePageContent />
        </div>

        {/* BGtext below content */}
        <div className="flex justify-center mt-6">
          <img
            src={BGtext}
            alt="Background Text"
            className="w-[250px] h-auto object-contain"
          />
        </div>

        {/* Queen3 image below BGtext */}
        <div className="flex justify-center mt-10">
          <img
            src={Queen3}
            alt="Queen"
            className="w-[300px] h-auto object-contain"
          />
        </div>

        {/* Logos at bottom (smaller in mobile/tablet view) */}
        <div className="absolute -bottom-40 mt-6 scale-75">
          <Logos />
        </div>
      </div>

      {/* --- LAPTOP / DESKTOP VIEW (LG and above) --- */}
      <div className="hidden lg:block relative w-full h-full z-10">
        <div className="relative z-10 h-full flex flex-col justify-center">
          <HomePageContent />
          <div className="ml-[450px] mt-6">
            <img
              src={Queen3}
              alt="Queen"
              className="w-[250px] h-[350px] object-cover"
            />
          </div>
        </div>

        {/* BGtext image on the right */}
        <div className="absolute right-80 top-[45%] z-10">
          <img
            src={BGtext}
            alt="Background Text"
            className="w-[420px] h-[220px] object-cover"
          />
        </div>

        {/* Overlaid Logos at the bottom center */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <Logos />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
