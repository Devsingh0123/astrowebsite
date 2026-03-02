// src/pages/MonthlyHoroscope.jsx
import { getMonthlyHoroscope } from '@/data/horoscopesData/horoscopesDataMonthly';
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';


// zodiac signs with display names
const ZODIAC_SIGNS = [
  { name: 'aries', display: 'Aries', icon: '♈' },
  { name: 'taurus', display: 'Taurus', icon: '♉' },
  { name: 'gemini', display: 'Gemini', icon: '♊' },
  { name: 'cancer', display: 'Cancer', icon: '♋' },
  { name: 'leo', display: 'Leo', icon: '♌' },
  { name: 'virgo', display: 'Virgo', icon: '♍' },
  { name: 'libra', display: 'Libra', icon: '♎' },
  { name: 'scorpio', display: 'Scorpio', icon: '♏' },
  { name: 'sagittarius', display: 'Sagittarius', icon: '♐' },
  { name: 'capricorn', display: 'Capricorn', icon: '♑' },
  { name: 'aquarius', display: 'Aquarius', icon: '♒' },
  { name: 'pisces', display: 'Pisces', icon: '♓' }
];

const MonthlyHoroscope = () => {
  const { zodiac } = useParams(); // URL se zodiac milega: /monthly/aries
  const horoscopeData = useMemo(() => {
    return getMonthlyHoroscope(zodiac);
  }, [zodiac]);

  // agar koi zodiac select nahi hua to default dikhao (pehla wala)
  const selectedZodiac = zodiac || 'aries';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-purple-800 mb-2">
            March 2026 Monthly Horoscope
          </h1>
          <p className="text-gray-600">
            What the stars have in store for you this month
          </p>
        </div>

        {/* main grid: left (zodiac list) + right (horoscope details) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* LEFT COLUMN - zodiac signs list */}
          <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg p-4 h-fit">
            <h2 className="text-xl font-semibold text-purple-700 mb-4 px-2">
              Zodiac Signs
            </h2>
            <div className="space-y-1">
              {ZODIAC_SIGNS.map((sign) => (
                <Link
                  key={sign.name}
                  to={`/monthly/${sign.name}`}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                    selectedZodiac === sign.name
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'hover:bg-purple-50 text-gray-700'
                  }`}
                >
                  <span className="text-2xl">{sign.icon}</span>
                  <span className="font-medium">{sign.display}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - horoscope details */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-6 md:p-8">
            {horoscopeData ? (
              <div>
                {/* title */}
                <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4">
                  {horoscopeData.title}
                </h2>
                
                {/* description */}
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {horoscopeData.description}
                </p>

                {/* sections grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* career */}
                  <div className="bg-blue-50 p-5 rounded-xl">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center gap-2">
                      <span className="text-2xl">💼</span> Career
                    </h3>
                    <p className="text-gray-700">{horoscopeData.career}</p>
                    {horoscopeData.favourable_dates?.career && (
                      <div className="mt-3">
                        <span className="text-sm font-medium text-blue-600">Best dates:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {horoscopeData.favourable_dates.career.map(date => (
                            <span key={date} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {date} Mar
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* finance */}
                  <div className="bg-green-50 p-5 rounded-xl">
                    <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2">
                      <span className="text-2xl">💰</span> Finance
                    </h3>
                    <p className="text-gray-700">{horoscopeData.finance}</p>
                    {horoscopeData.favourable_dates?.finance && (
                      <div className="mt-3">
                        <span className="text-sm font-medium text-green-600">Best dates:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {horoscopeData.favourable_dates.finance.map(date => (
                            <span key={date} className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">
                              {date} Mar
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* love */}
                  <div className="bg-pink-50 p-5 rounded-xl">
                    <h3 className="text-xl font-semibold text-pink-600 mb-3 flex items-center gap-2">
                      <span className="text-2xl">❤️</span> Love
                    </h3>
                    <p className="text-gray-700">{horoscopeData.love}</p>
                    {horoscopeData.favourable_dates?.love && (
                      <div className="mt-3">
                        <span className="text-sm font-medium text-pink-600">Best dates:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {horoscopeData.favourable_dates.love.map(date => (
                            <span key={date} className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm">
                              {date} Mar
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* health */}
                  <div className="bg-orange-50 p-5 rounded-xl">
                    <h3 className="text-xl font-semibold text-orange-600 mb-3 flex items-center gap-2">
                      <span className="text-2xl">🧘</span> Health
                    </h3>
                    <p className="text-gray-700">{horoscopeData.health}</p>
                  </div>
                </div>

                {/* footer - closing thoughts */}
                <div className="mt-8 border-t pt-6 text-center text-gray-600 italic">
                  {horoscopeData.description.split('.')[0]}.
                </div>
              </div>
            ) : (
              <div className="text-center py-10 text-gray-500">
                No horoscope data found for {zodiac}.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyHoroscope;