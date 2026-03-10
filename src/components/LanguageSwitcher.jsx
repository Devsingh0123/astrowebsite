// // components/LanguageSwitcher.jsx
// import React, { useState, useEffect } from "react";
// import { Languages } from "lucide-react";

// const LanguageSwitcher = ({ className = "" }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [language, setLanguage] = useState(
//     localStorage.getItem("lang") || "en"
//   );

//   useEffect(() => {
//     localStorage.setItem("lang", language);
//   }, [language]);

//   const changeLanguage = (lang) => {
//     setLanguage(lang);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative ">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-black rounded-xl text-xs sm:text-sm transition bg-gradient-to-r from-yellow-100 to-yellow-200 hover:from-yellow-600 hover:to-yellow-700 hover:text-white hover:shadow-xl ${className}`}
//       >
//         <Languages className="text-gray-500 group-hover:text-white " size={14} />
//         <div className ="hidden sm:block">
//         {language === "en" ? "Eng" : "हिं"}</div>
//       </button>

//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-32 sm:w-36 bg-white rounded-xl shadow-lg border overflow-hidden z-50">
//           <button
//             onClick={() => changeLanguage("en")}
//             className={`w-full text-left px-3 sm:px-4 py-2 hover:bg-gray-100 text-xs sm:text-sm ${
//               language === "en" ? "bg-gray-100 font-semibold" : ""
//             }`}
//           >
//             English
//           </button>
//           <button
//             onClick={() => changeLanguage("hi")}
//             className={`w-full text-left px-3 sm:px-4 py-2 hover:bg-gray-100 text-xs sm:text-sm ${
//               language === "hi" ? "bg-gray-100 font-semibold" : ""
//             }`}
//           >
//             हिंदी
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LanguageSwitcher;




import React, { useState } from "react";
import { Languages } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/slice/LanguageSlice";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = ({ className = "" }) => {

  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const currentLang = useSelector((state) => state.language.language);
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-black rounded-xl text-xs sm:text-sm transition bg-gradient-to-r from-yellow-100 to-yellow-200 hover:from-yellow-600 hover:to-yellow-700 hover:text-white hover:shadow-xl ${className}`}
      >
        <Languages size={14} />

        <div className="hidden sm:block">
          {currentLang === "en" && "Eng"}
          {currentLang === "hi" && "हिं"}
          {currentLang === "ar" && "عرب"}
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 sm:w-36 bg-white rounded-xl shadow-lg border overflow-hidden z-50">

          <button
            onClick={() => changeLanguage("en")}
            className={`w-full text-left px-3 sm:px-4 py-2 hover:bg-gray-100 text-xs sm:text-sm ${
              currentLang === "en" ? "bg-gray-100 font-semibold" : ""
            }`}
          >
            English
          </button>

          <button
            onClick={() => changeLanguage("hi")}
            className={`w-full text-left px-3 sm:px-4 py-2 hover:bg-gray-100 text-xs sm:text-sm ${
              currentLang === "hi" ? "bg-gray-100 font-semibold" : ""
            }`}
          >
            हिंदी
          </button>

          <button
            onClick={() => changeLanguage("ar")}
            className={`w-full text-left px-3 sm:px-4 py-2 hover:bg-gray-100 text-xs sm:text-sm ${
              currentLang === "ar" ? "bg-gray-100 font-semibold" : ""
            }`}
          >
            العربية
          </button>

        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;