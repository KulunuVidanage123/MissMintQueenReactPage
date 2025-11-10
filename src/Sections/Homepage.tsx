import React from 'react';
import BGImage3 from '../assets/BGImage3.png';
import BGImage3mobile from '../assets/BGImage3mobile.png';
import Queen3 from '../assets/Queen3.png';
import BGtext from '../assets/BGtext.png';
import HomePageContent from '../components/HomePageContent';
import Logos from '../components/Logos';

const Homepage: React.FC = () => {
  return (
    <section
      id="tokenomics" 
      className="relative w-full h-[140vh] lg:h-[100vh] min-h-[100vh]">
      {/* Background for desktop/tablet */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block"
        style={{
          backgroundImage: `url(${BGImage3})`,
        }}
      />

      {/* Background for mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat block sm:hidden"
        style={{
          backgroundImage: `url(${BGImage3mobile})`,
        }}
      />

      {/* MOBILE & TABLET */}
      <div
        className="flex flex-col items-center justify-center text-center lg:hidden relative z-20 px-4 py-10 space-y-6 translate-y-10 sm:translate-y-0"
      >
        {/* ↑ Added translate-y-10 to move content lower only in mobile view */}

        <div className="w-full">
          <HomePageContent />
        </div>

        <div className="flex justify-center mt-6">
          <img
            src={BGtext}
            alt="Background Text"
            className="w-[250px] h-auto object-contain"
          />
        </div>

        {/* Queen3 image */}
        <div className="flex justify-center mt-10">
          <img
            src={Queen3}
            alt="Queen"
            className="w-[300px] h-auto object-contain animate-jiggle"
          />
        </div>

        {/* Logos — flush to bottom on mobile */}
        <div className="absolute -bottom-[260px] left-1/2 transform -translate-x-1/2 z-20 scale-75">
          <Logos />
        </div>
      </div>

      {/* LAPTOP / DESKTOP VIEW */}
      <div className="hidden lg:block relative w-full h-full z-10">
        <div className="relative z-10 h-full flex flex-col justify-center">
          <HomePageContent />
          <div className="ml-[450px] mt-6">
            <img
              src={Queen3}
              alt="Queen"
              className="w-[250px] h-[350px] object-cover animate-jiggle"
            />
          </div>
        </div>

        {/* BGtext image */}
        <div className="absolute right-80 top-[45%] z-10">
          <img
            src={BGtext}
            alt="Background Text"
            className="w-[420px] h-[220px] object-cover"
          />
        </div>

        {/* Overlaid Logos */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <Logos />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
