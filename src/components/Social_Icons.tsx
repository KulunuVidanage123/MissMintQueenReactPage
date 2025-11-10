import React from 'react';
import TelegramIcon from '../assets/TelegramIcon.png';
import XIcon from '../assets/XIcon.png';

const Social_Icons: React.FC = () => {
  return (
    <>
      <style>
        {`
          /* ↓↓↓ Reduce sizes ONLY for screens 300px and below ↓↓↓ */
          @media (max-width: 300px) {
            .social-icons-container {
              transform: scale(0.8);
            }

            .social-button {
              width: 200px !important;
              height: 45px !important;
              font-size: 16px !important;
            }

            .social-icon-img {
              width: 45px !important;
              height: 45px !important;
            }
          }
        `}
      </style>

      <div className="flex items-center space-x-4 sm:space-x-6 social-icons-container">
        <button
          className="w-[250px] sm:w-[290px] h-[55px] sm:h-[61px] rounded-[15px] text-white font-bold text-[20px] sm:text-[24px] transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:bg-[#083028] hover:shadow-lg social-button"
          style={{
            backgroundColor: '#0A4037',
            fontFamily: 'Jura, sans-serif',
          }}
        >
          BUY NOW
        </button>

        {/* Social Icons */}
        <div className="flex space-x-4 sm:space-x-6">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1"
          >
            <img
              src={TelegramIcon}
              alt="Telegram"
              className="w-[55px] h-[55px] sm:w-[73px] sm:h-[73px] social-icon-img"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1"
          >
            <img
              src={XIcon}
              alt="X (Twitter)"
              className="w-[55px] h-[55px] sm:w-[73px] sm:h-[73px] social-icon-img"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Social_Icons;