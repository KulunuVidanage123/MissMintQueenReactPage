import React from 'react';
import FooterIcons from './FooterIcons';

const FooterContent: React.FC = () => {
  return (
    <>
      <style>
        {`
          @media (max-width: 320px) {
            .footer-paragraph {
              font-size: 10px !important;
            }
          }

          /* Move content downward only on tablet view (768px–1023px) */
          @media (min-width: 768px) and (max-width: 1023px) {
            .footer-wrapper {
              margin-top: 60px !important;
            }
          }

          /* Hover effect for Footer Icons */
          .footer-icons-container img,
          .footer-icons-container svg {
            transition: transform 0.3s ease, filter 0.3s ease;
          }

          .footer-icons-container img:hover,
          .footer-icons-container svg:hover {
            transform: scale(1.15);
            filter: brightness(1.3);
          }
        `}
      </style>

      <div className="flex flex-col items-center py-8 px-8 sm:px-8 md:px-12 lg:px-20 text-center footer-wrapper">
        {/* Title */}
        <h1
          className="
            text-[22px] 
            sm:text-[28px] 
            md:text-[36px] 
            lg:text-[42px]
            font-bold text-white mb-6 md:mb-8
          "
          style={{ fontFamily: 'Jura, sans-serif' }}
        >
          MISSMINTQUEEN
        </h1>

        {/* Paragraph */}
        <p
          className="
            text-[12px]        
            sm:text-[14px] 
            md:text-[16px]
            lg:text-[18px]
            font-bold text-white 
            leading-relaxed 
            max-w-6xl
            footer-paragraph
          "
          style={{ fontFamily: 'Jura, sans-serif' }}
        >
          MissMintQueen is here, fresh and fabulous! Sprouting from the garden of green dreams, she brings power, style, and minty magic to the blockchain. With her glowing charm and eco-energy, she’s ready to refresh the crypto world. But beware—MissMintQueen doesn’t play nice with dusty old tokens. She rules with sparkle, sass, and unstoppable confidence.
        </p>

        {/* Social Icons */}
        <div className="my-8 lg:mt-16 footer-icons-container">
          <FooterIcons />
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center -mt-6 sm:mt-0">
          <p
            className="
              text-[12px] 
              sm:text-[14px] 
              md:text-[16px]
              font-bold text-white
            "
            style={{ fontFamily: 'Jura, sans-serif' }}
          >
            © Copyright 2025 All rights reserved by MISSMINTQUEEN
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterContent;