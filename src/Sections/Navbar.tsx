import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import navimage from '../assets/navimage.png';
import navicon from '../assets/navicon.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  // Smooth scroll to section
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = ['about', 'tokenomics', 'how-to-buy', 'contract'];
      let current = '';
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const linkClasses = (id: string) =>
    `relative font-["Jura"] text-[20px] md:text-[24px] font-bold cursor-pointer transition-all duration-300 ease-in-out hover:text-emerald-200 ${
      activeSection === id ? 'text-emerald-200' : 'text-white'
    }`;

  return (
    <nav className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 text-white py-6 px-4">
      <div className="flex justify-between items-center">
        {/* Left side: Logo mobile view */}
        <div className="flex items-center space-x-2 sm:hidden">
          <img
            src={navimage}
            alt="Logo"
            className="w-[40px] h-[40px]"
          />
          <span className='font-["Jura"] text-[20px] font-bold'></span>
        </div>

        {/* button - small screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <img
              src={navicon}
              alt="Menu Icon"
              className="w-[40px] h-[40px]"
            />
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden sm:flex justify-start space-x-10 md:space-x-14 w-full sm:pl-8 md:pl-10 lg:pl-12">
          <span
            onClick={() => handleScroll('about')}
            className={linkClasses('about')}
          >
            About us
          </span>

          <span
            onClick={() => handleScroll('tokenomics')}
            className={linkClasses('tokenomics')}
          >
            Tokenomics
          </span>

          <span
            onClick={() => handleScroll('how-to-buy')}
            className={linkClasses('how-to-buy')}
          >
            How To Buy
          </span>

          <span
            onClick={() => handleScroll('contract')}
            className={linkClasses('contract')}
          >
            Contract
          </span>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="flex flex-col mt-4 space-y-4 sm:hidden items-center text-center">
          <span
            onClick={() => handleScroll('about')}
            className={linkClasses('about')}
          >
            About us
          </span>
          <span
            onClick={() => handleScroll('tokenomics')}
            className={linkClasses('tokenomics')}
          >
            Tokenomics
          </span>
          <span
            onClick={() => handleScroll('how-to-buy')}
            className={linkClasses('how-to-buy')}
          >
            How To Buy
          </span>
          <span
            onClick={() => handleScroll('contract')}
            className={linkClasses('contract')}
          >
            Contract
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;