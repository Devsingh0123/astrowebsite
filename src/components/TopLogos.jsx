

import { useEffect, useState } from 'react';
import lowerLogo from "/lowerLogo.jpeg";
import upperLogo from "/upperLogo.jpeg";



const TopLogos = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 5000);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`
        w-full
        overflow-hidden
        transition-all
        duration-500
        ease-in-out
        ${isVisible ? 'h-30' : 'h-0'}
      `}
    >
      <div className="flex flex-col items-center justify-center h-30 bg-gradient-to-b from-amber-50 to-white">
        {/* Upper rotating logo */}
        <div className="animate-spin-slow mb-1 w-15 h-15">
          <img src={upperLogo} alt="upper" className="w-full h-full object-contain" />
        </div>

        {/* Lower static logo */}
        <div className="text-sm font-semibold text-gray-700 flex justify-between">
          {/* <img src={swastickImage} alt="swastickImage" className="h-20 w-auto object-contain" /> */}
          <img src={lowerLogo} alt="lower" className="h-10 w-auto object-contain" />
          {/* <img src={swastickImage} alt="swastickImage" className="h-20 w-auto object-contain" /> */}
        </div>
      </div>
    </div>
  );
};

export default TopLogos;