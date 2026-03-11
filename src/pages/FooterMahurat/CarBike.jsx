import HeadWithLogo from "@/components/HeadWithLogo";
import React from "react";

const CarBike = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-4xl space-y-8">
        <HeadWithLogo
          title={"Car / Bike Muhurat " + new Date().getFullYear()}
        />

        {/* Kicker */}
        <p className="text-sm font-semibold tracking-widest text-orange-600 uppercase">
          Vehicle Purchase · Auspicious Timing · Jyotish
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Car & Bike Muhurat {new Date().getFullYear()}: The Best Auspicious
          Times to Buy Your New Vehicle
        </h1>

        {/* Subtitle */}
        <p className="text-gray-700 text-lg leading-relaxed">
          A clear, honest guide to why muhurat matters for vehicle purchases —
          and how to find the right time in {new Date().getFullYear()} for your
          new car or bike.
        </p>

        {/* Quick Answer */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 space-y-3">
          <h2 className="font-semibold text-lg">⚡ QUICK ANSWER</h2>

          <p>
            Car and Bike Muhurat refers to the auspicious dates and times
            selected through Vedic astrology (Jyotish Shastra) for purchasing a
            new vehicle.
          </p>

          <p>
            In {new Date().getFullYear()}, the ideal muhurat is calculated using
            Panchang elements — Tithi, Nakshatra, Vara, Yoga, and Karana — along
            with the buyer's birth chart. The goal is to begin the vehicle's
            journey on a positive cosmic note.
          </p>
        </div>

        {/* Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why Do Indians Choose a Muhurat to Buy a Car or Bike?
          </h2>

          <p>
            In a country where vehicles carry people to weddings, pilgrimages,
            hospital deliveries, and first days of school — a car or bike is not
            just a machine. It is a witness to life.
          </p>

          <p>
            Choosing an auspicious muhurat for a vehicle purchase is rooted in a
            simple but powerful idea: beginnings matter. Starting something
            important at the right moment aligns the journey with supportive
            energy.
          </p>

          <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700">
            "A vehicle bought on an auspicious muhurat is believed to travel
            more safely, require fewer repairs, and bring prosperity to its
            owner."
          </blockquote>

          <p>
            Choosing a muhurat is less about superstition and more about mindful
            intention — pausing to begin a new chapter of life thoughtfully.
          </p>
        </div>

        {/* Panchang Table */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            What Makes a Good Vehicle Purchase Muhurat in{" "}
            {new Date().getFullYear()}?
          </h2>

          <p>
            Vedic astrologers evaluate the Panchang — the five-limbed almanac —
            to identify favourable windows for new purchases.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-3">Factor</th>
                  <th className="border p-3">Favourable Conditions</th>
                  <th className="border p-3">What to Avoid</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">Tithi</td>
                  <td className="border p-3">
                    Dwitiya, Tritiya, Panchami, Saptami, Dasami, Ekadashi,
                    Trayodashi
                  </td>
                  <td className="border p-3">Amavasya, Chaturdashi, Ashtami</td>
                </tr>

                <tr>
                  <td className="border p-3">Nakshatra</td>
                  <td className="border p-3">
                    Pushya, Rohini, Hasta, Ashwini, Revati, Anuradha
                  </td>
                  <td className="border p-3">
                    Ardra, Jyeshtha, Bharani, Krittika
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">Vara</td>
                  <td className="border p-3">Wednesday, Thursday, Friday</td>
                  <td className="border p-3">Saturday for new purchases</td>
                </tr>

                <tr>
                  <td className="border p-3">Rahu / Ketu</td>
                  <td className="border p-3">
                    Avoid Rahu Kalam and Ketu Kalam entirely
                  </td>
                  <td className="border p-3">Varies daily</td>
                </tr>

                <tr>
                  <td className="border p-3">Lagna</td>
                  <td className="border p-3">
                    Strong ascendant in buyer's chart
                  </td>
                  <td className="border p-3">Afflicted 8th house</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Additionally, Venus (Shukra) — the planet governing vehicles and
            luxury — should ideally be in a strong position.
          </p>
        </div>

        {/* Tips */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Practical Tips: Making the Most of Your Vehicle Muhurat
          </h2>

          <h3 className="font-semibold">Before You Buy</h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Confirm the muhurat with your astrologer in advance.</li>
            <li>Prepare documents and payment beforehand.</li>
            <li>Inform the dealership about your preferred timing.</li>
          </ul>

          <h3 className="font-semibold mt-4">On the Day</h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Perform a small Ganesh Puja.</li>
            <li>Apply tilak and garland the vehicle.</li>
            <li>Drive the vehicle to a temple for blessings.</li>
            <li>Distribute sweets to family and friends.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

          <p>
            <strong>
              Does muhurat guarantee the vehicle won't have problems?
            </strong>
            <br />
            No. Muhurat is about intention and alignment, not mechanical
            guarantees.
          </p>

          <p>
            <strong>What if the muhurat falls on a weekday?</strong>
            <br />
            Astrologers usually provide multiple suitable dates so you can
            choose one that fits your schedule.
          </p>

          <p>
            <strong>Is there a different muhurat for bikes vs cars?</strong>
            <br />
            The principles are the same, though some astrologers consider
            planetary influences differently depending on vehicle type.
          </p>
        </div>

        {/* Final Note */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">A Final Note</h2>

          <p>
            Every journey begins somewhere. A muhurat is simply a way of asking:
            when is the best moment to begin this one?
          </p>

          <p>
            Whether you follow Vedic tradition deeply or lightly — pausing,
            consulting, and choosing mindfully before a major purchase is
            wisdom.
          </p>

          <p>May every road ahead be smooth. 🙏</p>
        </div>

        <p className="text-sm text-gray-600">
          Tags: Car Muhurat {new Date().getFullYear()} | Bike Muhurat{" "}
          {new Date().getFullYear()} | Vehicle Purchase Auspicious Time | Shubh
          Muhurat New Car | Jyotish Shastra | Panchang
          {new Date().getFullYear()} | Akshaya Tritiya{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default CarBike;
