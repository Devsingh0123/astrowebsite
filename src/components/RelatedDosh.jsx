import { Link } from "react-router-dom";

const doshList = [
  { title: "Rahu Dosh", slug: "rahu-dosh" },
  { title: "Ketu Dosh", slug: "ketu-dosh" },
  { title: "Shani Dosh", slug: "shani-dosh" },
  { title: "Mangal Dosh", slug: "mangal-dosh" },
  { title: "Kal Sarp Dosh", slug: "kaal-sarp-dosh" },
  { title: "Pitra Dosh", slug: "pitra-dosh" },
  { title: "Chandra Dosh", slug: "chandra-dosh" },
  { title: "Guru Chandal Yog", slug: "guru-chandal-dosh" },
  { title: "Grahan Dosh", slug: "grahan-dosh" },
];

const RelatedDosh = ({ currentSlug }) => {
  const filtered = doshList.filter((item) => item.slug !== currentSlug);

  return (
    <div className="sticky top-24">
      <div className="bg-white shadow-xl rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Related Dosh</h3>

        <div className="space-y-3">
          {filtered.map((item, index) => (
            <Link
              key={index}
              to={`/services/${item.slug}`}
              className="block p-3 rounded-xl border hover:bg-yellow-50 hover:border-yellow-400 transition"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Optional CTA */}
      <div className="bg-yellow-100 mt-6 p-6 rounded-2xl shadow">
        <h4 className="font-semibold mb-2">Need Personal Kundli Analysis?</h4>
        <p className="text-sm mb-3">
          Get detailed horoscope consultation from expert astrologers.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-600 transition"
        >
          Book Consultation
        </Link>
      </div>
    </div>
  );
};

export default RelatedDosh;
