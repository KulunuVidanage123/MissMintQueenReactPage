// src/components/HeroTitleContent.tsx
import React from 'react';

const HeroTitleContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      {/* Title */}
      <h1
        className="text-[24px] sm:text-[30px] md:text-[38px] font-bold text-white mb-10 mt-2 md:mt-0"
        style={{ fontFamily: 'Jura, sans-serif' }}
      >
        WE BELIEVE IN MISSMINTQUEEN
      </h1>

      {/* Paragraph */}
      <p
        className="text-[14px] sm:text-[18px] md:text-[22px] font-bold text-white mb-10 max-w-6xl leading-relaxed"
        style={{ fontFamily: 'Jura, sans-serif' }}
      >
        MissMintQueen has already set her crown: With a heart full of minty magic, she’s dedicated to bringing freshness, growth, and grace to the crypto world. Join us and be part of the royal eco-loving community!
      </p>

      {/* Date/Signature Line */}
      <p
        className="text-[12px] sm:text-[16px] md:text-[22px] font-bold text-white"
        style={{ fontFamily: 'Jura, sans-serif' }}
      >
        @MissMintQueen | August 8, 2025
      </p>
    </div>
  );
};

export default HeroTitleContent;
