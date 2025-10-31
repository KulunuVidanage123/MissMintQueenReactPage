// src/Sections/AboutUs.tsx
import React from 'react';
import Halftree from '../assets/Halftree.png';
import Queen2 from '../assets/Queen2.png';
import Flowerbush from '../assets/Flowerbush.png';
import Leaf from '../assets/leaf.png';
import BottomBlack from '../assets/bottomblack.png';
import AboutUsParagraph from '../components/AboutUsParagraph';
import TelegramIcon from '../assets/TelegramIcon.png';
import Icon1 from '../assets/Icon1.png';
import Icon2 from '../assets/Icon2.png';
import XIcon from '../assets/XIcon.png';
import JoinNowButton from '../components/join_now_button';

const AboutUs: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0f6e5fff] pt-20 overflow-visible min-h-screen">
      {/* ===== MOBILE VIEW ===== */}
      <div className="flex flex-col items-center text-center lg:hidden relative z-10">
        {/* ABOUT US Title */}
        <h1
          className="text-4xl sm:text-5xl font-bold text-white mb-6 relative z-20"
          style={{ fontFamily: 'Jura, sans-serif' }}
        >
          ABOUT US
        </h1>

        {/* Paragraph */}
        <div className="max-w-[85%] sm:max-w-[550px] mb-6 text-[14px] sm:text-[15px] leading-relaxed relative z-20 text-white">
          <AboutUsParagraph />
        </div>

        {/* Queen2 Image */}
        <img
          src={Queen2}
          alt="Queen 2"
          className="w-[380px] sm:w-[480px] object-contain mb-4 self-start ml-4 relative z-10"
        />

        {/* Leaf Image */}
        <img
          src={Leaf}
          alt="Leaf"
          className="absolute right-12 bottom-[120px] w-[100px] h-[180px] object-contain z-10"
        />

        {/* Halftree Image */}
        <img
          src={Halftree}
          alt="Half Tree"
          className="absolute right-0 top-0 h-full w-auto object-cover z-0"
        />

        {/* Bottom black bar */}
        <img
          src={BottomBlack}
          alt=""
          className="absolute bottom-0 left-0 w-full h-[200px] object-fill z-10"
        />
      </div>

      {/* ===== DESKTOP / TABLET VIEW ===== */}
      <div className="hidden lg:block relative w-full h-[650px] lg:h-[600px] xl:h-[850px] 2xl:h-[1200px]">
        {/* ABOUT US Title */}
        <h1
          className="absolute top-[30px] left-[220px] text-[80px] xl:text-[90px] font-bold text-white"
          style={{ fontFamily: 'Jura, sans-serif' }}
        >
          ABOUT US
        </h1>

        {/* Paragraph */}
        <div className="absolute top-[180px] left-[120px] max-w-[700px] xl:max-w-[750px]">
          <AboutUsParagraph />
        </div>

        {/* Telegram + Icon1 + XIcon + Icon2 */}
        <div className="absolute top-[420px] left-[320px] flex items-center space-x-4">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1"
          >
            <img src={TelegramIcon} alt="Telegram" className="w-[70px] h-[70px]" />
          </a>

          <button
            type="button"
            className="transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1 focus:outline-none"
          >
            <img src={Icon1} alt="Icon 1" className="w-[70px] h-[70px]" />
          </button>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1"
          >
            <img src={XIcon} alt="X (Twitter)" className="w-[70px] h-[70px]" />
          </a>

          <button
            type="button"
            className="transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1 focus:outline-none"
          >
            <img src={Icon2} alt="Icon 2" className="w-[70px] h-[70px]" />
          </button>
        </div>

        {/* Join Now Button */}
        <div className="absolute top-[540px] left-[480px] transform -translate-x-1/2 z-10">
          <JoinNowButton />
        </div>

        {/* Flowerbush */}
        <img
          src={Flowerbush}
          alt="Flower Bush"
          className="absolute -bottom-[100px] xl:-bottom-[0px] left-[0px] w-[360px] h-[320px] object-contain"
        />

        {/* Half Tree */}
        <img
          src={Halftree}
          alt="Half Tree"
          className="absolute -bottom-20 xl:bottom-[50px] right-0 w-[500px] h-[700px] object-cover z-0"
        />

        {/* Leaf */}
        <img
          src={Leaf}
          alt="Leaf"
          className="absolute bottom-[60px] xl:bottom-[70px] right-[100px] w-[130px] h-[230px] object-contain"
        />

        {/* Queen2 */}
        <img
          src={Queen2}
          alt="Queen 2"
          className="absolute w-[580px] h-[580px] object-contain"
          style={{
            left: '1050px',
            top: '120px',
          }}
        />

        {/* Bottom black bar */}
        <img
          src={BottomBlack}
          alt=""
          className="absolute -bottom-[130px] xl:-bottom-[0px] left-0 w-full xl:h-[225px] h-[260px] object-fill"
        />
      </div>
    </section>
  );
};

export default AboutUs;
