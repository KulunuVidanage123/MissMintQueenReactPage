// src/Sections/Slider.tsx
import React from 'react';
import BGImage1 from '../assets/BGImage1.png';
import Queen1 from '../assets/Queen1.png';
import QuestText from '../assets/QuestText.png';
import Social_Icons from '../components/Social_Icons'; 
import Rectangle_Shape from '../components/Rectangle_Shape';
import ParagraphText from '../components/ParagraphText';

const Slider: React.FC = () => {
  return (
    <section
      className="w-full max-w-full h-auto lg:h-[730px] xl:h-[960px] bg-cover bg-center bg-no-repeat relative flex flex-col lg:block"
      style={{ backgroundImage: `url(${BGImage1})` }}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <img
          src={Queen1}
          alt="Queen"
          className="absolute left-40 top-1/2 transform -translate-y-1/2 w-auto h-[650px] xl:h-[850px] max-w-full"
        />

        <div className="absolute top-10 right-40 flex flex-col items-end xl:left-[700px] xl:top-24">
          <img
            src={QuestText}
            alt="Quest Text"
            className="w-[1000px] h-[260px] xl:w-[1400px] xl:h-[350px] object-contain"
          />
          <ParagraphText />
        </div>

        <div 
          className="absolute xl:top-[650px] lg:bottom-[160px] xl:left-[1100px]"
          style={{
            right: '350px',
            bottom: '160px',
          }}
        >
          <Social_Icons />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col lg:hidden items-center justify-center text-center px-6 py-10 space-y-8">
        <img
          src={QuestText}
          alt="Quest Text"
          className="w-[90%] max-w-[600px] h-auto object-contain"
        />
        <ParagraphText />
        <div className="flex flex-col items-center space-y-6">
          <Social_Icons />
        </div>
        <img
          src={Queen1}
          alt="Queen"
          className="w-[80%] max-w-[450px] h-auto object-contain mt-4"
        />
      </div>

      {/* Rectangle_Shape */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-[100] pointer-events-none">
        <Rectangle_Shape />
      </div>
    </section>
  );
};

export default Slider;