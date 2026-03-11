import HeadWithLogo from "@/components/HeadWithLogo";
import React from "react";

const Namkaran = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-4xl space-y-8">
        <HeadWithLogo title={"Namkaran Muhurat " + new Date().getFullYear()} />

        {/* Kicker */}
        <p className="text-sm font-semibold tracking-widest text-orange-600 uppercase">
          Hindu Naming Ceremony · Shodasha Samskaras
        </p>

        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Namkaran {new Date().getFullYear()}: The Complete Guide to Your Baby's
          Hindu Naming Ceremony
        </h1>

        {/* Subtitle */}
        <p className="text-gray-700 text-lg leading-relaxed">
          Everything modern families need to know — from astrological muhurat to
          regional rituals — written for real people navigating a beautiful
          tradition.
        </p>

        {/* Quick Answer */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 space-y-3">
          <h2 className="font-semibold text-lg">⚡ QUICK ANSWER</h2>

          <p>
            Namkaran (also Namakarana) is the Hindu naming ceremony performed to
            give a newborn their lifelong name. It is traditionally held on the
            11th or 12th day after birth, or on an auspicious muhurat selected
            from the Panchang.
          </p>

          <p>
            In {new Date().getFullYear()}, the ideal date depends on the baby's
            birth chart, the lunar calendar, and planetary positions — a
            qualified Jyotishi can calculate personalised timings.
          </p>
        </div>

        {/* Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            What Is Namkaran — And Why Does a Name Matter So Much?
          </h2>

          <p>
            A name is the first gift a family gives a child. In Hindu tradition,
            it is also a sacred one.
          </p>

          <p>
            Namkaran (from Sanskrit: Nama = name, Karana = to make or give) is
            the formal naming ceremony — one of the sixteen Shodasha Samskaras
            that mark the key thresholds of a Hindu life.
          </p>

          <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700">
            "In Vedic thought, a name carries vibration. The sounds spoken over
            a child, repeated by every voice that loves them, shape the energy
            that surrounds their life."
          </blockquote>

          <p>
            Namkaran is also deeply human. It brings together grandparents,
            relatives, and friends to celebrate a child's identity and welcome
            them into the family and community.
          </p>
        </div>

        {/* Astrology Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The Astrological Logic Behind Namkaran Muhurat in{" "}
            {new Date().getFullYear()}
          </h2>

          <p>
            The Namkaran muhurat is not chosen arbitrarily. According to Jyotish
            Shastra, the timing of a ceremony influences the energy surrounding
            it.
          </p>

          <p>Your astrologer studies five elements of the Panchang:</p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-3">Panchang Element</th>
                  <th className="border p-3">What It Is</th>
                  <th className="border p-3">Why It Matters for Namkaran</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">Tithi</td>
                  <td className="border p-3">Lunar day</td>
                  <td className="border p-3">
                    Shukla Paksha tithis are preferred for new beginnings.
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">Nakshatra</td>
                  <td className="border p-3">Moon's constellation</td>
                  <td className="border p-3">
                    Pushya, Ashwini, and Swati are favourable for naming.
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">Vara</td>
                  <td className="border p-3">Day of the week</td>
                  <td className="border p-3">
                    Wednesday and Thursday support wisdom and intellect.
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">Yoga</td>
                  <td className="border p-3">Sun-moon combination</td>
                  <td className="border p-3">
                    Siddha and Amrita yogas bring prosperity.
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">Karana</td>
                  <td className="border p-3">Half-day division</td>
                  <td className="border p-3">
                    Auspicious karanas like Bava and Balava are preferred.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Rahu Kalam and Ketu Kalam are avoided to ensure the ceremony is
            performed during a positive planetary influence.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Step-by-Step: What Happens During Namkaran
          </h2>

          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Preparation and Purification</strong> – The home is
              cleaned and an altar is arranged.
            </li>
            <li>
              <strong>Ganesh Puja</strong> – Lord Ganesha is invoked for
              blessings.
            </li>
            <li>
              <strong>Sankalp</strong> – Parents declare the intention of the
              ceremony.
            </li>
            <li>
              <strong>Havan and Saraswati Prayers</strong> – Sacred fire ritual
              for wisdom.
            </li>
            <li>
              <strong>Name Announcement</strong> – The baby's name is whispered
              or announced.
            </li>
            <li>
              <strong>Blessings and Celebration</strong> – Elders bless the
              child and gifts are given.
            </li>
          </ol>
        </div>

        {/* Regional Traditions */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Regional Naming Traditions Across India
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-3">Region</th>
                  <th className="border p-3">Local Flavour</th>
                  <th className="border p-3">Special Elements</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">North India</td>
                  <td className="border p-3">Prayers and sweets</td>
                  <td className="border p-3">Laddoos and kheer</td>
                </tr>

                <tr>
                  <td className="border p-3">South India</td>
                  <td className="border p-3">Deity-centred ceremony</td>
                  <td className="border p-3">Prayers to Vishnu or Lakshmi</td>
                </tr>

                <tr>
                  <td className="border p-3">West Bengal</td>
                  <td className="border p-3">Name + first food blend</td>
                  <td className="border p-3">Curd and rice offered</td>
                </tr>

                <tr>
                  <td className="border p-3">Maharashtra</td>
                  <td className="border p-3">Formal puja</td>
                  <td className="border p-3">Modaks and Puran Poli</td>
                </tr>

                <tr>
                  <td className="border p-3">Gujarat</td>
                  <td className="border p-3">Community celebration</td>
                  <td className="border p-3">Garba and sweets</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Final Note */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">A Final Note</h2>

          <p>
            Every culture has a way of saying: you have arrived, you belong, you
            are known. Namkaran is the Hindu tradition's answer — a name chosen
            with care, spoken with love, and echoed by every voice in the room.
          </p>

          <p>
            Whatever name you choose, and whenever you choose it: may it carry
            only light.
          </p>
        </div>

        <p className="text-sm text-gray-600">
          Tags: Namkaran {new Date().getFullYear()} | Namkaran Muhurat | Hindu
          Naming Ceremony | Baby Naming Ritual India | Namakarana Sanskar |
          Jyotish Shastra | Shodasha Samskaras
        </p>
      </div>
    </section>
  );
};

export default Namkaran;
