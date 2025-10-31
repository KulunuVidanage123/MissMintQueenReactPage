import React, { useState } from 'react';
import { X } from 'lucide-react';
import navimage from '../assets/navimage.png';
import navicon from '../assets/navicon.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <a
            href="#about"
            className='font-["Jura"] text-[20px] md:text-[24px] font-bold hover:text-emerald-200 transition-colors whitespace-nowrap'
          >
            About us
          </a>
          <a
            href="#tokenomics"
            className='font-["Jura"] text-[20px] md:text-[24px] font-bold hover:text-emerald-200 transition-colors whitespace-nowrap'
          >
            Tokenomics
          </a>
          <a
            href="#how-to-buy"
            className='font-["Jura"] text-[20px] md:text-[24px] font-bold hover:text-emerald-200 transition-colors whitespace-nowrap'
          >
            How To Buy
          </a>
          <a
            href="#contract"
            className='font-["Jura"] text-[20px] md:text-[24px] font-bold hover:text-emerald-200 transition-colors whitespace-nowrap'
          >
            Contract
          </a>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="flex flex-col mt-4 space-y-4 sm:hidden items-center text-center">
          <a
            href="#about"
            className='font-["Jura"] text-[18px] font-bold hover:text-emerald-200 transition-colors'
            onClick={() => setIsOpen(false)}
          >
            About us
          </a>
          <a
            href="#tokenomics"
            className='font-["Jura"] text-[18px] font-bold hover:text-emerald-200 transition-colors'
            onClick={() => setIsOpen(false)}
          >
            Tokenomics
          </a>
          <a
            href="#how-to-buy"
            className='font-["Jura"] text-[18px] font-bold hover:text-emerald-200 transition-colors'
            onClick={() => setIsOpen(false)}
          >
            How To Buy
          </a>
          <a
            href="#contract"
            className='font-["Jura"] text-[18px] font-bold hover:text-emerald-200 transition-colors'
            onClick={() => setIsOpen(false)}
          >
            Contract
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;