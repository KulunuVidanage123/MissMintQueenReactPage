// src/components/join_now_button.tsx
import React from 'react';

const JoinNowButton: React.FC = () => {
  return (
    <button
      className="w-[250px] sm:w-[290px] h-[55px] sm:h-[61px] rounded-[15px] text-white font-bold text-[20px] sm:text-[24px] transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:bg-[#083028] hover:shadow-lg"
      style={{
        backgroundColor: '#0A4037',
        fontFamily: 'Jura, sans-serif',
      }}
    >
      Join Now
    </button>
  );
};

export default JoinNowButton;