import HeadWithLogo from "@/components/HeadWithLogo";
import React from "react";

const Annanprashan = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-4xl space-y-8">
        <HeadWithLogo
          title={"Annaprashan Muhurat " + new Date().getFullYear()}
        />

        {/* Kicker */}
        <p className="text-sm font-semibold tracking-widest text-orange-600 uppercase">
          Sacred First Bites
        </p>

        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Annaprashan {new Date().getFullYear()}: The Complete Guide to Your
          Baby's First Food Ceremony
        </h1>

        {/* Subtitle */}
        <p className="text-gray-700 text-lg leading-relaxed">
          Everything you need to know — from meaning and muhurat to rituals and
          regional traditions — written for modern families who want to honour
          this milestone mindfully.
        </p>

        {/* Quick Answer */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 space-y-3">
          <h2 className="font-semibold text-lg">⚡ QUICK ANSWER</h2>

          <p>
            Annaprashan (also called Annaprashana) is the Hindu ceremony marking
            a baby's first taste of solid food. It is traditionally performed
            between the 5th and 7th month for boys, and the 6th or 8th month for
            girls.
          </p>

          <p>
            The {new Date().getFullYear()} muhurat (auspicious timing) is
            calculated using the child's birth chart, Panchang, and Jyotish
            Shastra. Always consult a qualified astrologer for a personalised
            date.
          </p>
        </div>

        {/* Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            What Is Annaprashan? (And Why Does It Matter?)
          </h2>

          <p>
            If you've ever watched a parent offer their baby that first spoonful
            of kheer — eyes wide, the whole family holding their breath — you've
            witnessed Annaprashan.
          </p>

          <p>
            In Sanskrit, Anna (अन्न) means food, and Prashan (प्राशन) means to
            feed or taste. Together, Annaprashan marks the sacred moment a child
            moves from mother's milk to the nourishment of the earth.
          </p>

          <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700">
            "This ceremony is not just about food. It is about welcoming a child
            into the world of shared human experience — the joy of taste, the
            comfort of community, and the blessings of ancestors."
          </blockquote>

          <p>
            But beyond the spiritual, there is also the practical: Annaprashan
            is the moment families begin the gradual shift in a baby's
            nutrition.
          </p>
        </div>

        {/* Regional Table */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Annaprashan by Another Name: Regional Variations Across India
          </h2>

          <p>
            India does not celebrate this ceremony in one voice — it celebrates
            it in many. Same sacred purpose, beautifully different expressions.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-3">Region</th>
                  <th className="border p-3">Local Name</th>
                  <th className="border p-3">Traditional First Food</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">West Bengal</td>
                  <td className="border p-3">Bhatkhulai / Mukhe Bhaat</td>
                  <td className="border p-3">
                    Rice (bhat), kheer, fish (for non-vegetarian families)
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">North India</td>
                  <td className="border p-3">Annaprashan</td>
                  <td className="border p-3">Kheer, halwa, and sweets</td>
                </tr>

                <tr>
                  <td className="border p-3">South India</td>
                  <td className="border p-3">Choroonu / Annaprasana</td>
                  <td className="border p-3">
                    Rice with curd, ghee, and banana
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">Maharashtra</td>
                  <td className="border p-3">Annaprashan</td>
                  <td className="border p-3">Modaks, Puran Poli, and rice</td>
                </tr>

                <tr>
                  <td className="border p-3">Odisha</td>
                  <td className="border p-3">Anna Prashan</td>
                  <td className="border p-3">Kheer and rice with ghee</td>
                </tr>

                <tr>
                  <td className="border p-3">Gujarat</td>
                  <td className="border p-3">Annaprashan</td>
                  <td className="border p-3">Kheer, rice, and dal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Astrology Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The Astrological Importance of Annaprashan in{" "}
            {new Date().getFullYear()}
          </h2>

          <p>
            In Jyotish Shastra (Vedic astrology), timing is not incidental — it
            is everything. The muhurat for Annaprashan in{" "}
            {new Date().getFullYear()} is chosen to align the child's emerging
            life energy with supportive cosmic forces.
          </p>

          <p>
            A qualified Jyotishi considers five key elements from the Panchang:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Tithi</strong> — The lunar day.
            </li>
            <li>
              <strong>Nakshatra</strong> — The moon's constellation.
            </li>
            <li>
              <strong>Yoga</strong> — Sun and moon combination.
            </li>
            <li>
              <strong>Karana</strong> — Half-day division.
            </li>
            <li>
              <strong>Vara</strong> — Day of the week.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Annanprashan;
