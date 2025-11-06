// src/components/Footer.tsx
import React from 'react';
import BGImage5 from '../assets/BGImage5.png';
import FooterContent from '../components/FooterContent';
import TelegramIconImg from '../assets/TelegramIcon.png';
import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png'; 
import XIcon from '../assets/XIcon.png';

const Footer: React.FC = () => {
  return (
    <section
      className="h-[55vh] bg-cover bg-center flex flex-col items-center justify-start pt-4"
      style={{ backgroundImage: `url(${BGImage5})` }}
    >
      <FooterContent />
      <div className="flex items-center space-x-5 mt-4">
        {/* Telegram Icon */}
        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1"
        >
          <img
            src={TelegramIconImg}
            alt="Telegram"
            className="w-[55px] h-[55px] sm:w-[73px] sm:h-[73px]"
          />
        </a>

        {/* Icon1 */}
        <img
          src={Icon1}
          alt="Icon 1"
          className="w-[55px] h-[55px] sm:w-[73px] sm:h-[73px]"
        />

        {/* X (Twitter) Icon */}
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1"
        >
          <img
            src={XIcon}
            alt="X (Twitter)"
            className="w-[55px] h-[55px] sm:w-[73px] sm:h-[73px]"
          />
        </a>

        {/* Icon2 */}
        <img
          src={Icon2}
          alt="Icon 2"
          className="w-[55px] h-[55px] sm:w-[73px] sm:h-[73px]"
        />
      </div>
    </section>
  );
};

export default Footer;