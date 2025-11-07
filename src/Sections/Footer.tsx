// src/components/Footer.tsx
import React, { useEffect, useState } from 'react';
import BGImage5 from '../assets/BGImage5.png';
import FooterBG from '../assets/FooterBG.png';
import FooterContent from '../components/FooterContent';

const Footer: React.FC = () => {
  const [bgImage, setBgImage] = useState<string>(BGImage5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile view
        setBgImage(FooterBG);
      } else {
        // Desktop and tablet view
        setBgImage(BGImage5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <style>
        {`
          @media (max-width: 767px) {
            .footer-section {
              height: 60vh !important;
            }
          }
          @media (min-width: 768px) and (max-width: 1023px) {
            .footer-section {
              height: 68vh !important;
            }
          }
        `}
      </style>

      <section
        className="relative h-[55vh] bg-cover bg-center flex flex-col items-center justify-start pt-4 md:h-[60vh] sm:h-[50vh] footer-section"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <FooterContent />
      </section>
    </>
  );
};

export default Footer;