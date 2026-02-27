import { Link } from "react-router-dom";
import React from "react";
import ComponentHead from "@/components/ComponentHead";

import caprion from "@/assets/caprion.jpg";
import Mangaldhosh from "@/assets/Mangaldhosh.png";
import sharpdosh from "@/assets/sharpdosh.png";
import chandradosh from "@/assets/chandradosh.png";
import pitradosh from "@/assets/pitradosh.png";
import shanidosh from "@/assets/shanidosh.png";
import guruchandaldosh from "@/assets/guruchandaldosh.png";
import ketudosh from "@/assets/ketudosh.png";
import grahandosh from "@/assets/grahandosh.png";
import rahudosh from "@/assets/rahudosh.png";

const servicesData = [
  {
    slug: "mangal-dosh",
    title: "Mangal Dosh (Manglik Dosh)",
    desc: "Formed due to the placement of Mars in specific houses of the birth chart. It may cause delays in marriage and relationship challenges.",
    btn: "View More",
    bg: "from-red-100 to-orange-50",
    img: Mangaldhosh,
  },
  {
    slug: "kaal-sarp-dosh",
    title: "Kaal Sarp Dosh",
    desc: "Occurs when all planets are positioned between Rahu and Ketu. It can create life struggles and sudden obstacles.",
    btn: "View More",
    bg: "from-yellow-100 to-amber-50",
    img: sharpdosh,
  },
  {
    slug: "chandra-dosh",
    title: "Chandra Dosh",
    desc: "Happens when the Moon is weak. It may lead to emotional instability and mental imbalance.",
    btn: "View More",
    bg: "from-blue-100 to-cyan-50",
    img: chandradosh,
  },
  {
    slug: "pitra-dosh",
    title: "Pitra Dosh",
    desc: "Associated with ancestral karmic imbalance causing obstacles in career and family life.",
    btn: "View More",
    bg: "from-indigo-100 to-blue-50",
    img: pitradosh,
  },
  {
    slug: "shani-dosh",
    title: "Shani Dosh",
    desc: "Formed due to challenging placement of Saturn bringing delays and hardships.",
    btn: "View More",
    bg: "from-purple-100 to-violet-50",
    img: shanidosh,
  },
  {
    slug: "guru-chandal-dosh",
    title: "Guru Chandal Dosh",
    desc: "Occurs when Jupiter and Rahu are conjunct causing confusion and poor judgment.",
    btn: "View More",
    bg: "from-teal-100 to-emerald-50",
    img: guruchandaldosh,
  },
  {
    slug: "grahan-dosh",
    title: "Grahan Dosh (Eclipse Dosh)",
    desc: "Happens when Sun or Moon is conjunct with Rahu or Ketu affecting confidence and peace.",
    btn: "View More",
    bg: "from-gray-200 to-gray-100",
    img: grahandosh,
  },
  {
    slug: "ketu-dosh",
    title: "Ketu Dosh",
    desc: "Occurs when Ketu is adversely positioned causing detachment or unexpected losses.",
    btn: "View More",
    bg: "from-orange-100 to-yellow-50",
    img: ketudosh,
  },
  {
    slug: "rahu-dosh",
    title: "Rahu Dosh",
    desc: "Formed when Rahu is negatively placed causing confusion and unstable life patterns.",
    btn: "View More",
    bg: "from-pink-100 to-rose-50",
    img: rahudosh,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <div className="container mx-auto px-6">
        {/* 👇 Heading Center */}
        <div className="text-center mb-14">
          <ComponentHead
            heading="Complimentary Astrology Services"
            title="We offer free consultations to help you understand your birth chart and its implications."
          />
        </div>

        {/* 👇 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${item.bg} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden min-h-[280px] flex flex-col justify-between`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition duration-500"></div>

              <div className="z-10 relative overflow-hidden transition-all duration-500 hover:scale-105">
                <h4 className="text-xl font-semibold mb-3 leading-snug">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <Link
                to={`/services/${item.slug}`}
                className="z-10 relative bg-white/90 backdrop-blur px-5 py-2 rounded-xl text-sm font-medium hover:bg-white transition w-fit shadow-md inline-block"
              >
                {item.btn}
              </Link>

              <img
                src={item.img}
                alt={item.title}
                className="absolute bottom-4 right-4 w-32 h-32 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
