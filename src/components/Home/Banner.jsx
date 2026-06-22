
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MessageCircle, ShoppingBag } from "lucide-react";

import UserLogin from "../UserLogin";
import HeroTaramandal from "./HeroTaramandal";

const Banner = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.userAuth);
  const [showLogin, setShowLogin] = useState(false);

  const handleChatClick = () => {
    if (isLoggedIn) {
      navigate("/ai-chat");
    } else {
      setShowLogin(true);
    }
  };

  useEffect(() => {
    if (isLoggedIn && showLogin) {
      navigate("/ai-chat");
      setShowLogin(false);
    }
  }, [isLoggedIn, showLogin, navigate]);

  return (
    <>
      <section className="w-full bg-gradient-to-t from-amber-200 via-orange-100 to-transparent relative overflow-hidden">
        
       

        <div className="w-full  mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-[28px] sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.3] mb-6 tracking-tight">
                <span className="whitespace-nowrap ">Chat With <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Astrologers</span></span><br />
                right now.
              </h1>
              
              <p className="text-base sm:text-lg text-gray-500 mb-10 max-w-lg mx-auto lg:mx-0 leading-8 font-medium">
                Know about astrology, zodiac signs, retrogrades, and more!
                Your world becomes clear once you understand how the universe influences it.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
                <button onClick={handleChatClick} className="flex-1 sm:flex-none px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black/75 font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 text-[15px] sm:text-lg cursor-pointer whitespace-nowrap">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span className="md:hidden">Chat Now</span>
                  <span className="hidden md:inline">Chat with AI Astrologer</span>
                </button>
                
                <a href="https://astrotring.shop" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none cursor-pointer">
                  <button className="w-full px-4 sm:px-8 py-3 sm:py-4 bg-white border-2 border-amber-500 text-amber-600 hover:bg-amber-50 hover:text-amber-700 font-semibold rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 text-[15px] sm:text-lg cursor-pointer whitespace-nowrap">
                    <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    <span>Shop Now</span>
                  </button>
                </a>
              </div>
            </div>

            {/* Right — Astrotalk-style taramandal animation */}
            <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center overflow-visible">
              <HeroTaramandal />
            </div>

          </div>
        </div>
      </section>

      {/* Render Login Component when not logged in and clicked */}
      {showLogin && (
        <UserLogin
          defaultOpen={true}
          onOpenChange={(open) => {
            setShowLogin(open);
            if (!open && isLoggedIn) {
              navigate("/ai-chat");
            }
          }}
        />
      )}
    </>
  );
}

export default Banner;
