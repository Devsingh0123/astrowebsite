import React from "react";
import { Link } from "react-router-dom";

// Selected 6 important FAQs (copied from original faqData)
const featuredFaqs = [
  {
    id: 1,
    que: "What Is Astrology?",
    ans: "Astrology is an ancient, science-backed system that decodes planetary and cosmic influences on human life. It goes beyond fortune-telling — it's a tool for self-awareness, decision-making, and personal growth. Online platforms have made this wisdom accessible, affordable, and convenient for everyone through birth chart analysis, daily horoscopes, personalized consultations, and practical remedies rooted in Vedic tradition.",
  },
  {
    id: 2,
    que: "Why is astrology so accurate?",
    ans: (
      <>
        Astrology has been observed and refined over thousands of years. It
        works because it's based on patterns — the same planetary cycles that
        influenced people centuries ago continue to shape our lives today. When
        an experienced astrologer on{" "}
        <Link to="https://astrotring.com/">
          <strong className="text-[#0066CC] cursor-pointer">
            AstroTring.com
          </strong>
        </Link>{" "}
        reads your unique birth chart, they're not guessing — they're
        interpreting a deeply personal cosmic map that reflects your
        personality, timing, and life tendencies.
      </>
    ),
  },
  {
    id: 6,
    que: "What is a birth chart and why is it important?",
    ans: (
      <>
        A birth chart, also called a Kundli or natal chart, is a snapshot of the
        sky at the exact moment and place you were born. It maps where every
        planet was positioned across 12 houses and zodiac signs. Think of it as
        your personal cosmic fingerprint — completely unique to you. At{" "}
        <Link to="https://astrotring.com/">
          <strong className="text-[#0066CC] cursor-pointer">
            AstroTring.com
          </strong>
        </Link>{" "}
        , our experts use your birth chart to reveal your strengths, weaknesses,
        emotional nature, karmic path, and the timing of key life events.
      </>
    ),
  },
  {
    id: 7,
    que: "How can online astrology help in predicting the future?",
    ans: (
      <>
        Online astrology uses your birth details to analyze current and upcoming
        planetary transits and how they interact with your birth chart. At{" "}
        <Link to="https://astrotring.com/">
          <strong className="text-[#0066CC] cursor-pointer">
            AstroTring.com
          </strong>
        </Link>{" "}
        , our astrologers help identify favorable periods for career moves,
        relationships, financial decisions, or personal growth — and also flag
        times to be cautious.
      </>
    ),
  },
  {
    id: 8,
    que: "How do I consult an online astrologer?",
    ans: (
      <>
        It's quite simple. Visit{" "}
        <Link to="https://astrotring.com/">
          <strong className="text-[#0066CC] cursor-pointer">
            AstroTring.com
          </strong>
        </Link>{" "}
        , browse through our carefully verified astrologers based on their
        expertise, ratings, and reviews, and book a session via chat, call, or
        video call. You'll need to share your birth date, time, and place.
      </>
    ),
  },
  {
    id: 15,
    que: "How much do online astrology consultations cost?",
    ans: (
      <>
        At{" "}
        <Link to="https://astrotring.com/">
          <strong className="text-[#0066CC] cursor-pointer">
            AstroTring.com
          </strong>
        </Link>{" "}
        , we believe that divine guidance should be accessible to everyone.
        That's why we offer free introductory sessions and free birth chart
        generation. Paid sessions are available at very affordable rates,
        ranging from budget-friendly per-minute chat consultations to detailed
        personalized reports.
      </>
    ),
  },
];

const FeaturedFaqsStatic = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Popular Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get quick answers to some of the most common questions about astrology and our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 flex flex-col"
            >
              <div className="mb-3">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  FAQ #{faq.id}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {faq.que}
              </h3>
              <div className="text-gray-600 text-sm leading-relaxed">
                {faq.ans}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFaqsStatic;