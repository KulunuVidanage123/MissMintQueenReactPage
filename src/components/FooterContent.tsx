// src/components/FooterContent.tsx
import React from 'react';

const FooterContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4">
      {/* Title */}
      <h1
        className="text-[24px] sm:text-[30px] md:text-[38px] font-bold text-white mb-6 md:mb-8"
        style={{ fontFamily: 'Jura, sans-serif' }}
      >
        MISSMINTQUEEN
      </h1>

      {/* Paragraph */}
      <p
        className="text-[14px] sm:text-[18px] md:text-[16px] font-bold text-white text-center max-w-6xl leading-relaxed"
        style={{ fontFamily: 'Jura, sans-serif' }}
      >
        MissMintQueen is here, fresh and fabulous! Sprouting from the garden of green dreams, she brings power, style, and minty magic to the blockchain. With her glowing charm and eco-energy, she’s ready to refresh the crypto world. But beware—MissMintQueen doesn’t play nice with dusty old tokens. She rules with sparkle, sass, and unstoppable confidence.
      </p>
    
    </div>

  );
};

export default FooterContent;