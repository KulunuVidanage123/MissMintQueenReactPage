// src/Sections/AboutUs.tsx
import React from 'react';
import Halftree from '../assets/Halftree.png';
import Queen2 from '../assets/Queen2.png';
import Flowerbush from '../assets/Flowerbush.png';
import Leaf from '../assets/leaf.png';
import BottomBlack from '../assets/bottomblack.png';
import AboutUsParagraph from '../components/AboutUsParagraph';
import TelegramIcon from '../assets/TelegramIcon.png';
import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png'; 
import XIcon from '../assets/XIcon.png';
import JoinNowButton from '../components/join_now_button'; 

const AboutUs: React.FC = () => {
  return (
    <section className="relative w-full h-auto lg:h-[800px] xl:h-[1200px] bg-[#0f6e5fff] pt-20 overflow-visible">

      <h1
        className="absolute top-35 left-[220px] text-[90px] font-bold text-white"
        style={{ fontFamily: 'Jura, sans-serif' }}
      >
        ABOUT US
      </h1>

      {/* Paragraph */}
      <div className="absolute top-[230px] left-20 max-w-[750px]">
        <AboutUsParagraph />
      </div>

      {/* Telegramicon + Icon1 + XIcon + Icon2 */}
      <div className="absolute top-[450px] left-[300px] flex items-center space-x-4">
        {/* Telegram */}
        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1"
        >
          <img
            src={TelegramIcon}
            alt="Telegram"
            className="w-[73px] h-[73px]"
          />
        </a>

        {/* Icon1 */}
        <button
          type="button"
          className="transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1 focus:outline-none"
        >
          <img
            src={Icon1}
            alt="Icon 1"
            className="w-[73px] h-[73px]"
          />
        </button>

        {/* X */}
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1"
        >
          <img
            src={XIcon}
            alt="X (Twitter)"
            className="w-[73px] h-[73px]"
          />
        </a>

        {/* Icon2 */}
        <button
          type="button"
          className="transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1 focus:outline-none"
        >
          <img
            src={Icon2}
            alt="Icon 2"
            className="w-[73px] h-[73px]"
          />
        </button>
      </div>

      {/* Join Now Button */}
      <div className="absolute top-[600px] left-[470px] transform -translate-x-1/2 z-10">
        <JoinNowButton />
      </div>

      {/* Flowerbush */}
      <img
        src={Flowerbush}
        alt="Flower Bush"
        className="absolute bottom-6 left-0 w-[400px] h-[350px] object-contain"
      />

      {/* Half Tree */}
      <img
        src={Halftree}
        alt="Half Tree"
        className="absolute bottom-10 right-0 w-[522px] h-[750px] object-cover z-0"
      />

      {/* Leaf */}
      <img
        src={Leaf}
        alt="Leaf"
        className="absolute bottom-40 right-16 w-[140px] h-[250px] object-contain"
      />

      {/* Queen2 */}
      <img
        src={Queen2}
        alt="Queen 2"
        className="hidden lg:block absolute w-[600px] h-[600px] object-contain"
        style={{
          left: '1050px',
          top: '170px',
        }}
      />

      {/* Bottom black bar */}
      <img
        src={BottomBlack}
        alt=""
        className="absolute bottom-0 left-0 w-full h-[291px] object-fill"
      />
    </section>
  );
};

export default AboutUs;