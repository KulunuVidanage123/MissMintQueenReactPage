// src/Sections/AboutUs.tsx
import React from 'react';
import Halftree from '../assets/Halftree.png';
import Queen2 from '../assets/Queen2.png';
import Flowerbush from '../assets/Flowerbush.png';
import Flowerbush2 from '../assets/Flowerbush2.png';
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
    <section 
      id="about"
      className="relative w-full bg-[#0f6e5fff] pt-20 overflow-x-hidden overflow-visible md:overflow-visible min-h-screen">

      {/* MOBILE VIEW */}
      <div className="flex flex-col items-center text-center md:hidden relative z-10 h-screen overflow-hidden">
        <h1
          className="text-3xl sm:text-5xl font-bold text-white mb-2 relative z-20"
          style={{ fontFamily: 'Jura, sans-serif' }}
        >
          ABOUT US
        </h1>

        <div className="w-full px-4 sm:px-6 mb-6 text-[20px] sm:text-[20px] leading-relaxed relative z-20 text-white">
          <AboutUsParagraph />
        </div>

        <img
          src={Queen2}
          alt="Queen 2"
          className="absolute bottom-[25px] left-[1px] w-[400px] sm:w-[480px] h-auto object-contain z-10"
        />
        <img
          src={Leaf}
          alt="Leaf"
          className="absolute bottom-[180px] right-[40px] w-[80px] h-[80px] object-contain z-10"
        />
        <img
          src={Halftree}
          alt="Half Tree"
          className="absolute bottom-0 right-0 w-auto h-[960px] sm:h-[400px] object-cover z-0"
        />
        <img
          src={BottomBlack}
          alt=""
          className="absolute bottom-0 left-0 w-full h-[120px] object-fill z-10"
        />
      </div>

      {/* TABLET / LAPTOP VIEW */}
      <div className="hidden md:flex lg:hidden flex-col items-center text-center relative w-full z-10">
        <h1
          className="text-[60px] text-white font-bold mb-6"
          style={{ fontFamily: 'Jura, sans-serif' }}
        >
          ABOUT US
        </h1>

        <div className="w-full px-4 sm:px-6 mb-6">
          <AboutUsParagraph />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
          <JoinNowButton />
          <div className="flex items-center space-x-4">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1"
            >
              <img src={TelegramIcon} alt="Telegram" className="w-[60px] h-[60px]" />
            </a>
            <button
              type="button"
              className="inline-block transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1 focus:outline-none"
            >
              <img src={Icon1} alt="Icon 1" className="w-[60px] h-[60px]" />
            </button>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1"
            >
              <img src={XIcon} alt="X (Twitter)" className="w-[60px] h-[60px]" />
            </a>
            <button
              type="button"
              className="inline-block transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1 focus:outline-none"
            >
              <img src={Icon2} alt="Icon 2" className="w-[60px] h-[60px]" />
            </button>
          </div>
        </div>

        <img
          src={Queen2}
          alt="Queen 2"
          className="w-[580px] h-[580px] object-contain mb-10"
        />
        <img
          src={Halftree}
          alt="Half Tree"
          className="absolute right-0 top-0 h-full w-auto object-cover z-0"
        />
        <img
          src={Flowerbush}
          alt="Flower Bush"
          className="absolute bottom-0 left-0 w-[320px] h-[280px] object-contain"
        />
        <img
          src={BottomBlack}
          alt=""
          className="absolute bottom-0 left-0 w-full right-0 h-[200px] object-fill"
        />
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden lg:block relative w-full h-[650px] lg:h-[600px] xl:h-[970px] 2xl:h-[1200px]">
        <h1
          className="absolute top-[30px] left-[220px] text-[80px] xl:text-[90px] font-bold text-white"
          style={{ fontFamily: 'Jura, sans-serif' }}
        >
          ABOUT US
        </h1>

        <div className="absolute top-[180px] left-[120px] max-w-[700px] xl:max-w-[750px]">
          <AboutUsParagraph />
        </div>

        <div className="absolute top-[420px] left-[320px] flex items-center space-x-4">
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1">
            <img src={TelegramIcon} alt="Telegram" className="w-[70px] h-[70px]" />
          </a>
          <button type="button" className="inline-block transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1 focus:outline-none">
            <img src={Icon1} alt="Icon 1" className="w-[70px] h-[70px]" />
          </button>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1">
            <img src={XIcon} alt="X (Twitter)" className="w-[70px] h-[70px]" />
          </a>
          <button type="button" className="inline-block transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1 focus:outline-none">
            <img src={Icon2} alt="Icon 2" className="w-[70px] h-[70px]" />
          </button>
        </div>

        <div className="absolute top-[540px] left-[480px] transform -translate-x-1/2 z-10">
          <JoinNowButton />
        </div>

        <img
          src={Flowerbush}
          alt="Flower Bush"
          className="absolute -bottom-[100px] xl:-bottom-[0px] xl:-left-[3px] left-[0px] w-[360px] h-[320px] xl:w-[480px] xl:h-[420px] object-contain"
        />
        <img
          src={Flowerbush2}
          alt="Flower Bush"
          className="absolute -bottom-[150px] xl:-bottom-[40px] xl:left-[320px] left-[230px] w-[300px] h-[320px] xl:w-[380px] xl:h-[400px] object-contain"
        />
        <img
          src={Halftree}
          alt="Half Tree"
          className="absolute -bottom-20 xl:bottom-[40px] right-0 w-[500px] h-[700px] xl:w-[620px] xl:h-[950px] object-cover z-0"
        />
        <img
          src={Leaf}
          alt="Leaf"
          className="absolute bottom-[60px] xl:bottom-[260px] right-[100px] xl:right-[200px] w-[130px] h-[230px] object-contain"
        />
        <img
          src={Queen2}
          alt="Queen 2"
          className="absolute w-[580px] h-[580px] xl:w-[720px] xl:h-[820px] object-contain left-[1050px] xl:left-[1200px] top-[120px] xl:top-[110px]"
        />
        <img
          src={BottomBlack}
          alt=""
          className="absolute -bottom-[130px] xl:bottom-0 left-0 w-full xl:h-[225px] h-[260px] object-fill"
        />
      </div>
    </section>
  );
};

export default AboutUs;