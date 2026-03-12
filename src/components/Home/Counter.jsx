// import React from "react";
// import { useTranslation } from "react-i18next";

// const counters = [
//   { number: "500K+", label: "Happy Customers" },
//   { number: "1M+", label: "Consultations Delivered" },
//   { number: "250+", label: "Astrologers Available" },
//   { number: "100+", label: "Services Offered" },
// ];

// const Counter = () => {
//   const {t}=useTranslation();
//   return (
//     <section className="counter-section">
//       <div className="counter-container">
//         <div className="counter-grid">
//           {counters.map((item, index) => (
//             <div key={index} className="counter-item">
//               <h2>{item.number}</h2>
//               <p>{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Counter;

import React from "react";
import { useTranslation } from "react-i18next";

const counters = [
  { number: "500K+", key: "happyCustomers" },
  { number: "1M+", key: "consultationsDelivered" },
  { number: "250+", key: "astrologersAvailable" },
  { number: "100+", key: "servicesOffered" },
];

const Counter = () => {
  const { t } = useTranslation();

  return (
    <section className="counter-section py-10 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="counter-container max-w-6xl mx-auto px-4">
        <div className="counter-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {counters.map((item, index) => (
            <div key={index} className="counter-item">
              <h2 className="text-3xl font-bold mb-2">{item.number}</h2>
              <p className="text-gray-700">{t(`counters.${item.key}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;