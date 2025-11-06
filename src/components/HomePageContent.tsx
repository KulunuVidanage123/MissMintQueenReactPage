import React from 'react';

const HomePageContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-4 md:pt-6 text-center px-4">
      {/* Title */}
      <h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-bold text-white mb-6 md:mb-8 lg:mb-10"
        style={{ fontFamily: 'Jura, sans-serif' }}
      >
        TOKENOMICS
      </h1>

      {/* Paragraph */}
      <p
        className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] font-bold text-white max-w-8xl leading-relaxed"
        style={{ fontFamily: 'Jura, sans-serif' }}
      >
        Made for stability, growth, and rewards, MMQ brings a cool and exciting world to life. With her minty magic, she creates a fun and strong ecosystem where everyone can enjoy and benefit. Here’s how her freshness is shared with the kingdom!
      </p>
    </div>
  );
};

export default HomePageContent;