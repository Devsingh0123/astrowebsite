// import React from "react";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";

// const faqList = [
//    {
//     id: 1,
//     que: "What Is Astrology?",
//     ans: "Astrology is an ancient, science-backed system that decodes planetary and cosmic influences on human life. It goes beyond fortune-telling — it's a tool for self-awareness, decision-making, and personal growth. Online platforms have made this wisdom accessible, affordable, and convenient for everyone through birth chart analysis, daily horoscopes, personalized consultations, and practical remedies rooted in Vedic tradition.",
//   },
//   {
//     id: 2,
//     que: "Why is astrology so accurate?",
//     ans: (
//       <>
//         Astrology has been observed and refined over thousands of years. It
//         works because it's based on patterns — the same planetary cycles that
//         influenced people centuries ago continue to shape our lives today. When
//         an experienced astrologer on{" "}
//         <Link to="https://astrotring.com/">
//           <strong className="text-[#0066CC] cursor-pointer">
//             AstroTring.com
//           </strong>
//         </Link>{" "}
//         reads your unique birth chart, they're not guessing — they're
//         interpreting a deeply personal cosmic map that reflects your
//         personality, timing, and life tendencies. It feels accurate because it's
//         specific to you, not generic.
//       </>
//     ),
//   },
//   {
//     id: 3,
//     que: "Is astrology prediction true?",
//     ans: (
//       <>
//         Astrology doesn't predict events like a script written in stone. Think
//         of it more like a weather forecast — it shows likely conditions, not
//         certainties. What it does very well is highlight patterns, timing, and
//         tendencies in your life. Many people who consult astrologers on{" "}
//         <Link to="https://astrotring.com/">
//           <strong className="text-[#0066CC] cursor-pointer">
//             AstroTring.com
//           </strong>
//         </Link>{" "}
//         find that astrological readings reflect their experiences surprisingly
//         well. Your free will always plays a role, but astrology gives you a
//         valuable heads-up about what energies are at play around you.
//       </>
//     ),
//   },
//   {
//     id: 4,
//     que: "What is astrology and how does it work?",
//     ans: (
//       <>
//         Astrology is the study of how celestial bodies — the Sun, Moon, and
//         planets — influence human life and behavior. At the moment you were
//         born, these planets were positioned in specific places in the sky. At{" "}
//         <Link to="https://astrotring.com/">
//           <strong className="text-[#0066CC] cursor-pointer">
//             AstroTring.com
//           </strong>
//         </Link>{" "}
//         , our astrologers map these positions into a birth chart and interpret
//         how they shape your personality, relationships, career, and life events.
//         It's essentially a language that translates cosmic patterns into human
//         experiences.
//       </>
//     ),
//   },
//  {
//     id: 5,
//     que: "How does Vedic astrology differ from Western astrology?",
//     ans: (
//       <>
//         Both systems study planetary positions, but they differ in approach.
//         Vedic astrology, rooted in ancient Indian tradition, uses the sidereal
//         zodiac — based on actual star positions — and places heavy emphasis on
//         the Moon sign, planetary periods (dashas), and karmic patterns. Western
//         astrology uses the tropical zodiac — based on seasons — and focuses more
//         on the Sun sign and psychological personality traits. At{" "}
//         <Link to="https://astrotring.com/">
//           <strong className="text-[#0066CC] cursor-pointer">
//             AstroTring.com
//           </strong>
//         </Link>{" "}
//         , we offer expert guidance in both systems, helping you choose the
//         approach that resonates most with your journey.
//       </>
//     ),
//   },
//   {
//     id: 6,
//     que: "What is a birth chart and why is it important?",
//     ans: (
//       <>
//         A birth chart, also called a Kundli or natal chart, is a snapshot of the
//         sky at the exact moment and place you were born. It maps where every
//         planet was positioned across 12 houses and zodiac signs. Think of it as
//         your personal cosmic fingerprint — completely unique to you. At{" "}
//         <Link to="https://astrotring.com/">
//           <strong className="text-[#0066CC] cursor-pointer">
//             AstroTring.com
//           </strong>
//         </Link>{" "}
//         , our experts use your birth chart to reveal your strengths, weaknesses,
//         emotional nature, karmic path, and the timing of key life events. It's
//         the foundation of every meaningful reading we offer.
//       </>
//     ),
//   },
//   {
//     id: 7,
//     que: "How can online astrology help in predicting the future?",
//     ans: (
//       <>
//         Online astrology uses your birth details to analyze current and upcoming
//         planetary transits and how they interact with your birth chart. At{" "}
//         <Link to="https://astrotring.com/">
//           <strong className="text-[#0066CC] cursor-pointer">
//             AstroTring.com
//           </strong>
//         </Link>{" "}
//         , our astrologers help identify favorable periods for career moves,
//         relationships, financial decisions, or personal growth — and also flag
//         times to be cautious. It's like having a cosmic calendar that helps you
//         plan smarter and act at the right time, all from the comfort of your
//         home.
//       </>
//     ),
//   },
// ];

// const MinimalFaqList = () => {
//   const {t} =useTranslation()
//   return (
//     <section className="py-10  bg-white">
//       <div className="container mx-auto  ">
//         {/* Heading - Responsive text sizes */}
        

//         {/* FAQ List - Minimal, clean, no numbers/icons */}
//         <div className="space-y-6 md:space-y-8">
//           {faqList.map((faq, index) => (
//             <div key={faq.id}>
//               {/* Question - Responsive size */}
//               <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
//                 {faq.que}
//               </h3>
              
//               {/* Answer - Responsive size */}
//               <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
//                 {faq.ans}
//               </div>
              
//               {/* Separator line - except after last item */}
//               {index < faqList.length - 1 && (
//                 <hr className="mt-4 md:mt-6 border-gray-100" />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MinimalFaqList;





import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// FAQ items using translation keys
const faqList = [
  { id: 1, queKey: "faq.1.question", ansKey: "faq.1.answer" },
  { id: 2, queKey: "faq.2.question", ansKey: "faq.2.answer" },
  { id: 3, queKey: "faq.3.question", ansKey: "faq.3.answer" },
  { id: 4, queKey: "faq.4.question", ansKey: "faq.4.answer" },
  { id: 5, queKey: "faq.5.question", ansKey: "faq.5.answer" },
  { id: 6, queKey: "faq.6.question", ansKey: "faq.6.answer" },
  { id: 7, queKey: "faq.7.question", ansKey: "faq.7.answer" },
];

const MinimalFaqList = () => {
  const { t } = useTranslation();

  // Function to render translated answer and keep [[link]] active
  const renderAnswer = (key) => {
    const answer = t(key); // get translated string
    const parts = answer.split("[[link]]");

    return (
      <>
        {parts.map((part, idx) =>
          idx === parts.length - 1 ? (
            part
          ) : (
            <span key={idx}>
              {part}
              <Link
                to="https://astrotring.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong className="text-[#0066CC] cursor-pointer">
                  AstroTring.com
                </strong>
              </Link>
            </span>
          )
        )}
      </>
    );
  };

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto">
        {/* FAQ List - Minimal, clean, no numbers/icons */}
        <div className="space-y-6 md:space-y-8">
          {faqList.map((faq, index) => (
            <div key={faq.id}>
              {/* Question */}
              <h3 className="text-base sm:text-lg md:text-xl font-normal text-gray-800 mb-2 md:mb-3">
                {t(faq.queKey)}
              </h3>

              {/* Answer */}
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {renderAnswer(faq.ansKey)}
              </div>

              {/* Separator line */}
              {index < faqList.length - 1 && (
                <hr className="mt-4 md:mt-6 border-gray-100" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinimalFaqList;

