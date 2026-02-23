import React from "react";
import { Link } from "react-router-dom";
import UserLogin from "./UserLogin";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logoastroremove from "@/assets/logoastroremove.png"

const Navbar = () => {
  
  return (
    <header className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-16">
          
          {/* LEFT SIDE - LOGO */}
          <Link to="/" className="flex items-center ">
            <img
              src={logoastroremove}
              alt="Logo"
              className="h-7 w-auto object-contain"
            />
          </Link>

          {/* RIGHT SIDE - LANGUAGE + ACCOUNT */}
          <div className="flex items-center gap-3 sm:gap-4">
            <LanguageSwitcher />
            <UserLogin />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
