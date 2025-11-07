import React from 'react';
import flower1 from '../assets/flower1.png';
import flower2 from '../assets/flower2.png';
import flower3 from '../assets/flower3.png';

const CardContent: React.FC = () => {
  return (
    <div
      className="
        flex flex-wrap justify-center items-center w-full px-6 gap-8 mt-10
        md:mt-0 md:gap-40
        lg:flex lg:flex-row lg:justify-between lg:items-start lg:gap-[80px] lg:px-[80px]
        xl:gap-[120px] xl:px-[140px]
      "
    >
      {/* Card 1 */}
      <div
        className="
          w-full max-w-[350px] h-[170px] rounded-2xl flex flex-col justify-center items-center relative
          md:w-[350px]
          transition-transform duration-300 hover:scale-105 hover:-translate-y-2
        "
        style={{ backgroundColor: '#218A77' }}
      >
        <h3
          className="text-white font-bold text-center mb-2 z-10"
          style={{ fontFamily: 'Jura, sans-serif', fontSize: '18px' }}
        >
          Download MintQueen
        </h3>
        <p
          className="text-white font-bold text-center px-3 text-sm z-10"
          style={{ fontFamily: 'Jura, sans-serif', fontSize: '14px' }}
        >
          This is a short explanation. Make it short and clear to keep students attentive.
        </p>

        <img
          src={flower1}
          alt=""
          className="
            absolute w-[200px] h-[160px] object-contain 
            hidden sm:hidden md:hidden lg:block
            lg:bottom-[-120px] lg:left-[-20px]
          "
          aria-hidden="true"
        />
      </div>

      {/* Card 2 */}
      <div
        className="
          w-full max-w-[350px] h-[170px] rounded-2xl flex flex-col justify-center items-center relative
          md:w-[350px]
          transition-transform duration-300 hover:scale-105 hover:-translate-y-2
        "
        style={{ backgroundColor: '#218A77' }}
      >
        <h3
          className="text-white font-bold text-center mb-2 z-10"
          style={{ fontFamily: 'Jura, sans-serif', fontSize: '18px' }}
        >
          Secure your SOL
        </h3>
        <p
          className="text-white font-bold text-center px-3 text-sm z-10"
          style={{ fontFamily: 'Jura, sans-serif', fontSize: '14px' }}
        >
          This is a short explanation. Make it short and clear to keep students attentive.
        </p>

        <img
          src={flower2}
          alt=""
          className="
            absolute w-[200px] h-[160px] object-contain 
            hidden sm:hidden md:hidden lg:block
            lg:bottom-[-120px] lg:left-1/2 lg:-translate-x-1/2
          "
          aria-hidden="true"
        />
      </div>

      {/* Card 3 */}
      <div
        className="
          w-full max-w-[350px] h-[170px] rounded-2xl flex flex-col justify-center items-center relative
          md:w-[350px]
          transition-transform duration-300 hover:scale-105 hover:-translate-y-2
        "
        style={{ backgroundColor: '#218A77' }}
      >
        <h3
          className="text-white font-bold text-center mb-2 z-10"
          style={{ fontFamily: 'Jura, sans-serif', fontSize: '18px' }}
        >
          Buy same <br /> $missmintqueen
        </h3>
        <p
          className="text-white font-bold text-center px-3 text-sm z-10"
          style={{ fontFamily: 'Jura, sans-serif', fontSize: '14px' }}
        >
          This is a short explanation. Make it short and clear to keep students attentive.
        </p>

        <img
          src={flower3}
          alt=""
          className="
            absolute w-[200px] h-[160px] object-contain 
            hidden sm:hidden md:hidden lg:block
            lg:bottom-[-120px] lg:right-[-20px]
          "
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default CardContent;