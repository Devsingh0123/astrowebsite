import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ComponentHead from "../ComponentHead";
import { Link } from "react-router-dom";

const faqData = [
  // {
  //   id: 1,
  //   que: "What Is Astrology?",
  //   ans: "Astrology is an ancient, science-backed system that decodes planetary and cosmic influences on human life. It goes beyond fortune-telling — it's a tool for self-awareness, decision-making, and personal growth. Online platforms have made this wisdom accessible, affordable, and convenient for everyone through birth chart analysis, daily horoscopes, personalized consultations, and practical remedies rooted in Vedic tradition.",
  // },
  // {
  //   id: 2,
  //   que: "Why is astrology so accurate?",
  //   ans: (
  //     <>
  //       Astrology has been observed and refined over thousands of years. It
  //       works because it's based on patterns — the same planetary cycles that
  //       influenced people centuries ago continue to shape our lives today. When
  //       an experienced astrologer on{" "}
  //       <Link to="https://astrotring.com/">
  //         <strong className="text-[#0066CC] cursor-pointer">
  //           AstroTring.com
  //         </strong>
  //       </Link>{" "}
  //       reads your unique birth chart, they're not guessing — they're
  //       interpreting a deeply personal cosmic map that reflects your
  //       personality, timing, and life tendencies. It feels accurate because it's
  //       specific to you, not generic.
  //     </>
  //   ),
  // },
  // {
  //   id: 3,
  //   que: "Is astrology prediction true?",
  //   ans: (
  //     <>
  //       Astrology doesn't predict events like a script written in stone. Think
  //       of it more like a weather forecast — it shows likely conditions, not
  //       certainties. What it does very well is highlight patterns, timing, and
  //       tendencies in your life. Many people who consult astrologers on{" "}
  //       <Link to="https://astrotring.com/">
  //         <strong className="text-[#0066CC] cursor-pointer">
  //           AstroTring.com
  //         </strong>
  //       </Link>{" "}
  //       find that astrological readings reflect their experiences surprisingly
  //       well. Your free will always plays a role, but astrology gives you a
  //       valuable heads-up about what energies are at play around you.
  //     </>
  //   ),
  // },
  // {
  //   id: 4,
  //   que: "What is astrology and how does it work?",
  //   ans: (
  //     <>
  //       Astrology is the study of how celestial bodies — the Sun, Moon, and
  //       planets — influence human life and behavior. At the moment you were
  //       born, these planets were positioned in specific places in the sky. At{" "}
  //       <Link to="https://astrotring.com/">
  //         <strong className="text-[#0066CC] cursor-pointer">
  //           AstroTring.com
  //         </strong>
  //       </Link>{" "}
  //       , our astrologers map these positions into a birth chart and interpret
  //       how they shape your personality, relationships, career, and life events.
  //       It's essentially a language that translates cosmic patterns into human
  //       experiences.
  //     </>
  //   ),
  // },
  // {
  //   id: 5,
  //   que: "How does Vedic astrology differ from Western astrology?",
  //   ans: (
  //     <>
  //       Both systems study planetary positions, but they differ in approach.
  //       Vedic astrology, rooted in ancient Indian tradition, uses the sidereal
  //       zodiac — based on actual star positions — and places heavy emphasis on
  //       the Moon sign, planetary periods (dashas), and karmic patterns. Western
  //       astrology uses the tropical zodiac — based on seasons — and focuses more
  //       on the Sun sign and psychological personality traits. At{" "}
  //       <Link to="https://astrotring.com/">
  //         <strong className="text-[#0066CC] cursor-pointer">
  //           AstroTring.com
  //         </strong>
  //       </Link>{" "}
  //       , we offer expert guidance in both systems, helping you choose the
  //       approach that resonates most with your journey.
  //     </>
  //   ),
  // },
  // {
  //   id: 6,
  //   que: "What is a birth chart and why is it important?",
  //   ans: (
  //     <>
  //       A birth chart, also called a Kundli or natal chart, is a snapshot of the
  //       sky at the exact moment and place you were born. It maps where every
  //       planet was positioned across 12 houses and zodiac signs. Think of it as
  //       your personal cosmic fingerprint — completely unique to you. At{" "}
  //       <Link to="https://astrotring.com/">
  //         <strong className="text-[#0066CC] cursor-pointer">
  //           AstroTring.com
  //         </strong>
  //       </Link>{" "}
  //       , our experts use your birth chart to reveal your strengths, weaknesses,
  //       emotional nature, karmic path, and the timing of key life events. It's
  //       the foundation of every meaningful reading we offer.
  //     </>
  //   ),
  // },
  // {
  //   id: 7,
  //   que: "How can online astrology help in predicting the future?",
  //   ans: (
  //     <>
  //       Online astrology uses your birth details to analyze current and upcoming
  //       planetary transits and how they interact with your birth chart. At{" "}
  //       <Link to="https://astrotring.com/">
  //         <strong className="text-[#0066CC] cursor-pointer">
  //           AstroTring.com
  //         </strong>
  //       </Link>{" "}
  //       , our astrologers help identify favorable periods for career moves,
  //       relationships, financial decisions, or personal growth — and also flag
  //       times to be cautious. It's like having a cosmic calendar that helps you
  //       plan smarter and act at the right time, all from the comfort of your
  //       home.
  //     </>
  //   ),
  // },
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
        video call. You'll need to share your birth date, time, and place. Your
        astrologer will then analyze your chart and address your specific
        questions with care and clarity. We also offer free introductory
        sessions so you can get comfortable before committing to a full
        consultation.
      </>
    ),
  },
  {
    id: 9,
    que: "How can astrology help in love, marriage, and relationships?",
    ans: (
      <>
        Astrology can reveal a great deal about how you relate to others — your
        emotional needs, communication style, and what you seek in a partner. At{" "}
        <Link to="https://astrotring.com/">
          <strong className="text-[#0066CC] cursor-pointer">
            AstroTring.com
          </strong>
        </Link>{" "}
        , our Kundli matching service compares two birth charts to assess
        compatibility in values, temperament, and long-term harmony. We also
        help identify the right timing for relationships and marriage. Many
        couples find that understanding each other's astrological makeup —
        guided by our experts — brings more empathy, patience, and depth to
        their relationship.
      </>
    ),
  },
  {
    id: 10,
    que: "What role does astrology play in career and finance?",
    ans: (
      <>
        Your birth chart contains clear indicators about your natural talents,
        suitable career fields, and the timing of professional growth or
        challenges. At {" "}<Link to="https://astrotring.com/">
        <strong className="text-[#0066CC] cursor-pointer">AstroTring.com</strong>
      </Link>{" "}, our astrologers help you identify the
        right planetary periods for starting a business, seeking a promotion, or
        making investments — while also guiding you on when to exercise
        patience. Astrology doesn't replace hard work, but combined with
        {" "}<Link to="https://astrotring.com/">
        <strong className="text-[#0066CC] cursor-pointer">AstroTring.com's</strong>
      </Link>{" "} expert guidance, it helps you align your efforts
        with the right cosmic timing for better outcomes.
      </>
    ),
  },
  {
    id: 11,
    que: "Can astrology help with health-related concerns?",
    ans: (
      <>
        Yes, to a meaningful extent. Each planet and house in your birth chart
        is associated with specific body parts and health tendencies. At{" "}
        <Link to="https://astrotring.com/">
          <strong className="text-[#0066CC] cursor-pointer">
            AstroTring.com
          </strong>
        </Link>{" "}
        , our astrologers can highlight periods when you may be more vulnerable
        to certain health issues and suggest preventive measures or remedies.
        It's not a replacement for medical advice, but it works beautifully as a
        complementary guide — helping you understand your body's natural cycles
        and when to pay extra attention to your wellbeing.
      </>
    ),
  },
  {
    id: 12,
    que: "Is the birth time necessary for accurate readings?",
    ans: (
      <>
        The more precise your birth details, the more accurate your reading will
        be. Birth time is especially important because it determines your
        Ascendant (rising sign) and the positioning of planets across the 12
        houses. At{" "}
        <Link to="https://astrotring.com/">
          <strong className="text-[#0066CC] cursor-pointer">
            AstroTring.com
          </strong>
        </Link>{" "}
        , our astrologers work with whatever details you have — even without an
        exact birth time, they can still provide meaningful insights based on
        your birth date and place. However, for the most personalized and
        precise reading, we always recommend checking your birth certificate or
        hospital records for the exact time.
      </>
    ),
  },
  {
    id: 13,
    que: "Can astrology predictions be changed through remedies?",
    ans: (
      <>
        Astrology doesn't trap you in a fixed fate. While certain planetary
        influences are strong, remedies suggested by {" "}
        <Link to="https://astrotring.com/">
          <strong className="text-[#0066CC] cursor-pointer">
            AstroTring.com's
          </strong>
        </Link>{" "} expert
        astrologers — such as wearing specific gemstones, performing pujas,
        chanting mantras, or making simple lifestyle changes — can help reduce
        negative influences and strengthen positive ones. Think of remedies as
        tools that help you work with the cosmic energies rather than against
        them. Combined with conscious effort and positive action, they can
        genuinely shift the quality of your experiences over time.
      </>
    ),
  },
  {
    id: 14,
    que: "How reliable are astrology apps and platforms?",
    ans: (
      <>
        Reliable astrology platforms like{" "}
        <Link to="https://astrotring.com/">
          <strong className="text-[#0066CC] cursor-pointer">
            AstroTring.com
          </strong>
        </Link>{" "}
        are quite trustworthy, especially for daily horoscopes, birth chart
        generation, and connecting with verified astrologers. At{" "}
        <Link to="https://astrotring.com/">
          <strong className="text-[#0066CC] cursor-pointer">
            AstroTring.com
          </strong>
        </Link>{" "}
        , every astrologer is carefully screened for qualifications and
        experience, and our transparent review and rating system ensures you
        always know who you're consulting. Your privacy is fully protected, and
        all sessions are conducted securely. For deeper, life-changing
        decisions, a personal consultation with one of our experienced
        astrologers is always recommended.
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
        generation to help you get started without any pressure. Paid sessions
        are available at very affordable rates, ranging from budget-friendly
        per-minute chat consultations to detailed personalized reports. Compared
        to traditional in-person visits,{" "}
        <Link to="https://astrotring.com/">
          <strong className="text-[#0066CC] cursor-pointer">
            AstroTring.com
          </strong>
        </Link>{" "}
        delivers the same quality of expert guidance at a fraction of the cost —
        conveniently, from wherever you are.
      </>
    ),
  },
  {
    id: 16,
    que: "What benefits can I expect from AstroTring.com's astrology services?",

    ans: (
      <>
        The benefits are both practical and deeply personal.{" "}
        <Link to="https://astrotring.com/">
          <strong className="text-[#0066CC] cursor-pointer">
            AstroTring.com
          </strong>
        </Link>{" "}
        gives you clarity when you're confused, direction when you feel lost,
        and the right timing when you're planning important decisions in love,
        career, health, or finances. Our astrologers help you understand
        yourself better — your strengths, blind spots, and life purpose. Beyond
        prediction,{" "}
        <Link to="https://astrotring.com/">
          <strong className="text-[#0066CC] cursor-pointer">
            AstroTring.com
          </strong>
        </Link>{" "}
        empowers you to make wiser choices, build better relationships, and walk
        through life with greater awareness, confidence, and peace of mind.
      </>
    ),
  },
];
const Faq = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-yellow-100 to-red-20">
      <div className="container">
          <ComponentHead
    className="text-start mb-5"
    heading="Frequently Asked Questions"
    title={
      <>
        Here are the same answers, now branded with{" "}
        <Link to="https://astrotring.com/">
          <strong className="text-[#0066CC] cursor-pointer">
            AstroTring.com
          </strong>
        </Link>{" "}
        wherever relevant:
      </>
    }
  />
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {faqData.map((faq) => (
            <AccordionItem key={faq.id} value={`item-${faq.id}`}>
              <AccordionTrigger
                className={" cursor-pointer font-semibold text-lg"}
              >
                {faq.que}
              </AccordionTrigger>
              <AccordionContent>{faq.ans}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
