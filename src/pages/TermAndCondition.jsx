import React from "react";

const Section = ({ title, children }) => (
  <section className="space-y-3">
    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
    <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
      {children}
    </div>
  </section>
);

const TermAndCondition = () => {
  return (
    <div className="max-w-4xl mx-auto px-5 py-12 space-y-10">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Terms and Conditions of Use</h1>
        <p className="text-sm text-gray-600">Veltex Services Private Limited</p>
        <p className="text-sm text-gray-500">
          Last Updated: March {new Date().getFullYear()}
        </p>
      </div>

      {/* Intro */}
      <div className="text-sm text-gray-700 leading-relaxed space-y-3">
        <p>
          These Terms and Conditions govern the access and use of the online
          platform operated by <strong>Veltex Services Private Limited</strong>
          through the website{" "}
          <a
            href="https://www.astrotring.com"
            className="text-blue-600 underline"
          >
            www.astrotring.com
          </a>
          .
        </p>

        <p>
          By accessing or using the platform, you confirm that you have read,
          understood, and agreed to be bound by these Terms and Conditions.
        </p>
      </div>

      {/* Section 1 */}
      <h2 className="font-semibold mt-4">1. Introduction and Acceptance of Terms</h2>
      <p>
        This Agreement governs the access and use of the website, applications,
        and associated services operated by Veltex Services Private Limited.
      </p>

      <p>
        If you do not agree with these Terms you must immediately stop using the
        platform.
      </p>

      <div className="bg-red-50 border border-red-200 p-4 rounded">
        <p className="text-red-700 font-medium">
          Important: This platform is not intended for emergency support.
        </p>
        <p>
          If you are experiencing a medical emergency or mental health crisis,
          please contact emergency services or a suicide prevention helpline
          such as AASRA (91-22-27546669).
        </p>
      </div>

      {/* Section 2 */}
      <h2 className="font-semibold mt-4">2. Definitions</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Platform</strong> – The website www.astrotring.com and all
          related applications and services.
        </li>
        <li>
          <strong>Member</strong> – Any user who registers an account on the
          platform.
        </li>
        <li>
          <strong>Expert / Service Provider</strong> – Individuals who provide
          astrology or spiritual advisory services.
        </li>
        <li>
          <strong>Services</strong> – Astrology consultations, tarot readings,
          numerology, reports, and related advisory services.
        </li>
        <li>
          <strong>Service Credits</strong> – Wallet credits used to access
          services on the platform.
        </li>
      </ul>

      {/* Section 3 */}
      <h2 className="font-semibold mt-4">3. Eligibility and Registration</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>You must be at least 18 years old.</li>
        <li>You must provide accurate and updated registration details.</li>
        <li>Multiple accounts are strictly prohibited.</li>
        <li>
          Accounts created using false or misleading information may be
          terminated without refund.
        </li>
      </ul>

      {/* Section 4 */}
      <h2 className="font-semibold mt-4">4. Nature and Scope of Services</h2>
      <p>
        The platform connects users with independent astrology and spiritual
        advisors. Veltex acts only as a technology intermediary.
      </p>

      <p>
        Service Providers are independent professionals and are not employees or
        agents of Veltex.
      </p>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
        <p>
          Astrology and spiritual consultations are intended for informational,
          personal insight, and entertainment purposes only.
        </p>
      </div>

      {/* Section 5 */}
      <h2 className="font-semibold mt-4">5. Member Obligations</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>No abusive, defamatory, or offensive content.</li>
        <li>No harassment of experts or other members.</li>
        <li>No impersonation or false identity.</li>
        <li>No hacking, reverse engineering, or misuse of the platform.</li>
        <li>Users must follow all applicable laws.</li>
      </ul>

      {/* Section 6 */}
      <h2 className="font-semibold mt-4">6. Restricted and Prohibited Content</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Child exploitation or harmful content.</li>
        <li>Black magic, witchcraft, or harmful occult practices.</li>
        <li>Sexual solicitation or explicit content.</li>
        <li>Hate speech or promotion of violence.</li>
        <li>Illegal substances or weapons.</li>
      </ul>

      {/* Section 7 */}
      <h2 className="font-semibold mt-4">7. Fees and Payments</h2>
      <p>
        Members are responsible for all payments associated with their
        transactions on the platform.
      </p>

      <p>
        Service Credits in the Astrotring Wallet are not legal tender and cannot
        be withdrawn or exchanged for cash.
      </p>

      {/* Section 8 */}
      <h2 className="font-semibold mt-4">8. Refund Policy</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Refund requests must be submitted within 7 days.</li>
        <li>
          No refunds will be issued once a consultation has been completed.
        </li>
        <li>
          Refund eligibility is determined by Veltex’s audit and operations
          team.
        </li>
      </ul>

      {/* Section 9 */}
      <h2 className="font-semibold mt-4">9. Intellectual Property</h2>
      <p>
        All content, software, and materials on the platform are owned by or
        licensed to Veltex Services Private Limited.
      </p>

      <p>
        Users may not reproduce, distribute, or commercially exploit platform
        content without written permission.
      </p>

      {/* Section 10 */}
      <h2 className="font-semibold mt-4">10. Limitation of Liability</h2>
      <p>
        Veltex shall not be liable for any direct or indirect damages arising
        from the use of the platform.
      </p>

      <p>
        Maximum liability shall not exceed the higher of ₹500 or the amount paid
        by the user in the previous 12 months.
      </p>

      {/* Section 11 */}
      <h2 className="font-semibold mt-4">11. Governing Law</h2>
      <p>
        These Terms shall be governed by the laws of India. Any disputes shall
        be resolved through arbitration in New Delhi under the Arbitration and
        Conciliation Act, 1996.
      </p>

      {/* Footer */}
      <div className="border-t pt-6 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Veltex Services Private Limited. All rights
        reserved.
      </div>
    </div>
  );
};

export default TermAndCondition;
