import React from 'react';
import flower1 from '../assets/flower1.png';
import flower2 from '../assets/flower2.png';
import flower3 from '../assets/flower3.png';

const CardContent: React.FC = () => {
  return (
    <div
      className="flex flex-wrap justify-center items-center w-full px-6 gap-8 mt-10 
                 md:mt-0 md:gap-40 
                 tablet:flex-col tablet:items-center tablet:gap-[100px] tablet:mt-[-260px]"
    >
      {/* Card 1 */}
      <div
        className="w-full max-w-[350px] h-[170px] rounded-2xl flex flex-col justify-center items-center relative 
                   md:w-[350px]
                   tablet:w-[90%] tablet:mx-auto tablet:py-6"
        style={{ backgroundColor: '#218A77' }}
      >
        <h3
          className="text-white font-bold text-center mb-2 z-10"
          style={{ fontFamily: 'Jura, sans-serif', fontSize: '20px' }}
        >
          Download MintQueen
        </h3>
        <p
          className="text-white font-bold text-center px-3 text-sm z-10"
          style={{ fontFamily: 'Jura, sans-serif', fontSize: '16px' }}
        >
          This is a short explanation. Make it short and clear to keep students attentive.
        </p>

        <img
          src={flower1}
          alt=""
          className="absolute w-[200px] h-[160px] object-contain 
                     md:bottom-[-120px] md:left-[-20px] 
                     hidden md:block"
          aria-hidden="true"
        />
      </div>

      {/* Card 2 */}
      <div
        className="w-full max-w-[350px] h-[170px] rounded-2xl flex flex-col justify-center items-center relative 
                   md:w-[350px]
                   tablet:w-[90%] tablet:mx-auto tablet:py-6"
        style={{ backgroundColor: '#218A77' }}
      >
        <h3
          className="text-white font-bold text-center mb-2 z-10"
          style={{ fontFamily: 'Jura, sans-serif', fontSize: '20px' }}
        >
          Secure your SOL
        </h3>
        <p
          className="text-white font-bold text-center px-3 text-sm z-10"
          style={{ fontFamily: 'Jura, sans-serif', fontSize: '16px' }}
        >
          This is a short explanation. Make it short and clear to keep students attentive.
        </p>

        <img
          src={flower2}
          alt=""
          className="absolute w-[200px] h-[160px] object-contain 
                     md:bottom-[-120px] md:left-1/2 md:-translate-x-1/2 
                     hidden md:block"
          aria-hidden="true"
        />
      </div>

      {/* Card 3 */}
      <div
        className="w-full max-w-[350px] h-[170px] rounded-2xl flex flex-col justify-center items-center relative 
                   md:w-[350px]
                   tablet:w-[90%] tablet:mx-auto tablet:py-6"
        style={{ backgroundColor: '#218A77' }}
      >
        <h3
          className="text-white font-bold text-center mb-2 z-10"
          style={{ fontFamily: 'Jura, sans-serif', fontSize: '20px' }}
        >
          Buy same $missmintqueen
        </h3>
        <p
          className="text-white font-bold text-center px-3 text-sm z-10"
          style={{ fontFamily: 'Jura, sans-serif', fontSize: '16px' }}
        >
          This is a short explanation. Make it short and clear to keep students attentive.
        </p>

        <img
          src={flower3}
          alt=""
          className="absolute w-[200px] h-[160px] object-contain 
                     md:bottom-[-120px] md:right-[-20px] 
                     hidden md:block"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default CardContent;
