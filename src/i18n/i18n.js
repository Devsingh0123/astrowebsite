// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

// import en from "../locales/en/translation.json";
// import hi from "../locales/hi/translation.json";


// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: { translation: en },
//       hi: { translation: hi },
    
//     },
//     fallbackLng: "en",
//     interpolation: {
//       escapeValue: false
//     }
//   });

// export default i18n;




import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../locales/en/translation.json";
import hi from "../locales/hi/translation.json";
import ar from "../locales/ar/translation.json";   // Arabic file

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      ar: { translation: ar }   // Arabic added
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

/* RTL support for Arabic */
i18n.on("languageChanged", (lng) => {
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
});

export default i18n;