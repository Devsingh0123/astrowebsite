import React, { useState, useEffect } from "react";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "en"
  );

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2  hover:bg-yellow-300 text-black px-4 py-2 rounded-xl font-sm  transition text-sm"
      >
        <Languages size={14} />
        {language === "en" ? "Eng" : "हिं"}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border overflow-hidden z-50">
          <button
            onClick={() => changeLanguage("en")}
            className={`w-full text-left px-4 py-2 hover:bg-gray-100 text-sm ${
              language === "en" && "bg-gray-100 font-semibold"
            }`}
          >
            English
          </button>

          <button
            onClick={() => changeLanguage("hi")}
            className={`w-full text-left px-4 py-2 hover:bg-gray-100 text-sm ${
              language === "hi" && "bg-gray-100 font-semibold "
            }`}
          >
            हिंदी
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

// import React, { useState, useEffect } from "react";
// import { Languages } from "lucide-react";

// const LanguageSwitcher = () => {
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
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-xl font-medium shadow-md transition"
//       >
//         <Languages size={18} />
//         {language === "en" ? "Eng" : "हिं"}
//       </button>

//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border overflow-hidden z-50">
//           <button
//             onClick={() => changeLanguage("en")}
//             className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
//               language === "en" && "bg-gray-100 font-semibold"
//             }`}
//           >
//             English
//           </button>

//           <button
//             onClick={() => changeLanguage("hi")}
//             className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
//               language === "hi" && "bg-gray-100 font-semibold"
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
