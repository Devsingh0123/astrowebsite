import HeadWithLogo from "@/components/HeadWithLogo";
import React from "react";

const Marriage = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-4xl space-y-8">

        <HeadWithLogo title={"Marriage Muhurat " + new Date().getFullYear()} />

        {/* Kicker */}
        <p className="text-sm font-semibold tracking-widest text-orange-600 uppercase">
          Vivah Muhurat · Wedding Astrology · Hindu Marriage
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Marriage Muhurat {new Date().getFullYear()}: Auspicious Wedding Dates, Tithis & What They Mean
        </h1>

        {/* Subtitle */}
        <p className="text-gray-700 text-lg leading-relaxed">
          A grounded, complete guide for couples planning their wedding in {new Date().getFullYear()} —
          covering why muhurat matters, which dates are considered auspicious,
          and how to find your personalised timing.
        </p>

        {/* Quick Answer */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 space-y-3">
          <h2 className="font-semibold text-lg">⚡ QUICK ANSWER</h2>

          <p>
            Marriage Muhurat refers to the auspicious date and time chosen through
            Vedic astrology for a wedding ceremony.
          </p>

          <p>
            In {new Date().getFullYear()}, muhurat is calculated based on the Panchang, planetary
            positions (especially Jupiter and Venus), and the birth charts of
            both partners. Certain Tithis — like Tritiya, Saptami, and
            Trayodashi — are considered especially favourable.
          </p>
        </div>

        {/* Why Timing Matters */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why Does the Timing of a Wedding Matter in Vedic Tradition?
          </h2>

          <p>
            Two people can fall in love on any day. But in Hindu tradition, the
            moment they formally commit their lives to each other — the moment
            the sacred fire is lit and vows are spoken — is treated as a powerful
            beginning.
          </p>

          <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700">
            "Marriage is the joining of two people, two families, two destinies.
            Choosing a muhurat ensures the beginning is as strong and auspicious
            as possible."
          </blockquote>

          <p>
            For many modern couples, the muhurat also helps simplify one of the
            most complex decisions in wedding planning — selecting the date.
          </p>
        </div>

        {/* Planetary Conditions */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            What Makes a Good Marriage Muhurat in {new Date().getFullYear()}?
          </h2>

          <p>
            Vedic astrology evaluates planetary positions, especially Jupiter
            (Guru) and Venus (Shukra), when selecting a wedding muhurat.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Jupiter should be strong and favourably placed.</li>
            <li>Venus should not be combust or afflicted.</li>
            <li>Mars should not negatively influence the 7th house of partnership.</li>
          </ul>
        </div>

        {/* Tithi Table */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Favourable Tithis for Marriage in {new Date().getFullYear()}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-3">Tithi</th>
                  <th className="border p-3">Symbolism</th>
                  <th className="border p-3">Why It's Chosen</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">Dwitiya</td>
                  <td className="border p-3">Wealth & stability</td>
                  <td className="border p-3">Strong foundation for married life</td>
                </tr>

                <tr>
                  <td className="border p-3">Tritiya</td>
                  <td className="border p-3">Growth & balance</td>
                  <td className="border p-3">Harmony and mutual understanding</td>
                </tr>

                <tr>
                  <td className="border p-3">Panchami</td>
                  <td className="border p-3">Abundance</td>
                  <td className="border p-3">Prosperity and success</td>
                </tr>

                <tr>
                  <td className="border p-3">Saptami</td>
                  <td className="border p-3">Happiness</td>
                  <td className="border p-3">Popular tithi for marital bliss</td>
                </tr>

                <tr>
                  <td className="border p-3">Ekadashi</td>
                  <td className="border p-3">Spiritual harmony</td>
                  <td className="border p-3">Favoured by devotional couples</td>
                </tr>

                <tr>
                  <td className="border p-3">Trayodashi</td>
                  <td className="border p-3">Joy & longevity</td>
                  <td className="border p-3">Highly auspicious for long marriages</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Nakshatra */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Auspicious Nakshatras for Marriage
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Rohini — fertility and enduring partnership</li>
            <li>Mrigashira — romantic and tender relationships</li>
            <li>Magha — strong family blessings</li>
            <li>Uttara Phalguni — classic marriage Nakshatra</li>
            <li>Hasta — harmony and adaptability</li>
            <li>Swati — independence within partnership</li>
            <li>Anuradha — devotion and emotional bonds</li>
            <li>Revati — nurturing and auspicious beginnings</li>
          </ul>
        </div>

        {/* Wedding Seasons */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Key Auspicious Periods for Weddings in {new Date().getFullYear()}
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>January–February {new Date().getFullYear()} (post-Makar Sankranti)</li>
            <li>April–May {new Date().getFullYear()} (Akshaya Tritiya season)</li>
            <li>Late November–December {new Date().getFullYear()} (winter wedding season)</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

          <p>
            <strong>How early should we consult an astrologer?</strong><br/>
            Ideally 6–12 months before your wedding season.
          </p>

          <p>
            <strong>Do both partners' charts matter?</strong><br/>
            Yes. A good muhurat works well for both individuals.
          </p>

          <p>
            <strong>Can we do court marriage separately?</strong><br/>
            Yes. Many couples complete legal formalities earlier and follow
            muhurat for the religious ceremony.
          </p>
        </div>

        {/* Final Note */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">A Final Note</h2>

          <p>
            A marriage is one of life's most meaningful commitments. The care
            taken in choosing its beginning reflects how deeply that commitment
            is valued.
          </p>

          <p>
            Whatever day you choose, may it mark the start of a joyful and
            enduring partnership. 🙏
          </p>
        </div>

        <p className="text-sm text-gray-600">
          Tags: Marriage Muhurat {new Date().getFullYear()} | Wedding Dates {new Date().getFullYear()} India |
          Vivah Muhurat | Shubh Muhurat Shaadi | Auspicious Wedding Dates Hindu |
          Panchang {new Date().getFullYear()} | Kundali Milan
        </p>

      </div>
    </section>
  );
};

export default Marriage;