import React from "react";

const DisclaimerPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center">Disclaimer</h1>
      <p className="text-sm text-gray-700 text-center">
        Last Updated: March {new Date().getFullYear()}
      </p>

      {/* Company Info */}
      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        <p>
          <strong>VELTEX SERVICES PRIVATE LIMITED</strong>
          <br />
          Website:{" "}
          <a
            href="https://www.astrotring.com"
            className="underline text-primary hover:text-primary-dark"
          >
            www.astrotring.com
          </a>
        </p>

        {/* s */}
        <>
          <h2 className="font-semibold mb-2">1. General Disclaimer</h2>
          <p>
            The information, consultations, predictions, and guidance provided
            on www.astrotring.com, a platform owned and operated by Veltex
            Services Private Limited (hereinafter referred to as "Veltex", "We",
            "Us", or "Our"), are based on traditional principles of astrology,
            numerology, tarot, vastu, and other metaphysical sciences. All
            services offered through the Platform are intended solely for the
            purposes of spiritual guidance, personal insight, self-reflection,
            and entertainment.
          </p>
          <p>
            Astrology and related metaphysical practices are interpretative in
            nature and do not purport to be exact, absolute, or empirically
            verifiable sciences. Outcomes may vary significantly from person to
            person based on individual circumstances, interpretation, and
            personal disposition. Users should exercise their own independent
            judgment and discretion before making any personal, financial,
            professional, medical, or legal decisions on the basis of
            information or consultations obtained through the Platform.
          </p>
        </>

        <>
          <h2 className="font-semibold mb-2">2. No Professional Advice</h2>
          <p>
            The content, consultations, and services provided do not constitute
            professional advice of any kind, including medical, psychological,
            financial, or legal advice. Users are encouraged to consult
            qualified professionals before making significant personal,
            financial, health-related, or legal decisions. Veltex and its
            Service Providers are not licensed professionals and their services
            must not be relied upon as a substitute for professional advice.
          </p>
        </>

        <>
          <h2 className="font-semibold mb-2">3. No Guarantee of Results</h2>
          <p>
            Veltex Services Private Limited makes no representation, warranty,
            or guarantee regarding the accuracy, completeness, reliability, or
            outcome of any service or content provided. Outcomes cannot be
            guaranteed, and results may vary materially between individuals.
          </p>
        </>

        <>
          <h2 className="font-semibold mb-2">4. User Responsibility</h2>
          <p>
            Users acknowledge that any action taken based on information,
            predictions, or consultations from the Platform is at their own
            discretion, risk, and responsibility. Veltex and its representatives
            shall not be held liable for any direct or indirect loss, damage, or
            adverse consequence arising from user actions.
          </p>
        </>

        <>
          <h2 className="font-semibold mb-2">5. Eligibility</h2>
          <p>
            Services are restricted to individuals aged 18 or older. Users
            represent that they meet this age requirement. Veltex reserves the
            right to refuse access or terminate accounts for users who
            misrepresent their age.
          </p>
        </>

        <>
          <h2 className="font-semibold mb-2">
            6. Cultural and Spiritual Nature of Services
          </h2>
          <p>
            Astrology, tarot, numerology, vastu, and other metaphysical
            practices offered are rooted in ancient cultural and spiritual
            knowledge. Services are provided for voluntary spiritual guidance
            and personal reflection. Veltex does not claim scientific validity;
            users engage at their discretion.
          </p>
        </>

        <>
          <h2 className="font-semibold mb-2">7. International Users</h2>
          <p>
            www.astrotring.com is operated from India. Users outside India must
            ensure their use is lawful in their jurisdiction. Veltex assumes no
            responsibility for violations of local laws.
          </p>
        </>

        <>
          <h2 className="font-semibold mb-2">8. Limitation of Liability</h2>
          <p>
            Veltex and its operators, directors, and service providers shall not
            be liable for any loss or damage arising from use of the Platform,
            including financial, emotional, or data-related losses. Where the
            law does not permit full exclusion, total liability shall not exceed
            the higher of Rs. 500 or the amount paid by the user in the
            preceding 3 months.
          </p>
        </>

        <>
          <h2 className="font-semibold mb-2">
            9. Third-Party Content and External Links
          </h2>
          <p>
            The Platform may contain links to third-party websites, which are
            accessed at the user's risk. Veltex assumes no responsibility for
            third-party content or services.
          </p>
        </>

        <>
          <h2 className="font-semibold mb-2">10. Acceptance of Disclaimer</h2>
          <p>
            By using www.astrotring.com, users acknowledge that they have read,
            understood, and agreed to this Disclaimer. If users do not accept
            these terms, they must discontinue access.
          </p>
        </>

        <>
          <h2 className="font-semibold mb-2">11. Updates to This Disclaimer</h2>
          <p>
            Veltex reserves the right to modify or update this Disclaimer at any
            time without prior notice. Users should review this page
            periodically. Continued use constitutes acceptance of changes.
          </p>
        </>
      </div>

      {/* Footer Short Notice */}
      <div className="bg-yellow-50 text-gray-800 text-xs text-center py-3 border-t mt-6">
        Astrology services on{" "}
        <a href="https://www.astrotring.com" className="">
          www.astrotring.com
        </a>{" "}
        are provided for guidance and entertainment purposes only. Results may
        vary. Please read our full Disclaimer, Terms and Conditions, and Privacy
        Policy before using this website.
      </div>

      <div className="text-center text-gray-600 text-xs">
        © {new Date().getFullYear()} Veltex Services Private Limited. All rights reserved.
      </div>
    </div>
  );
};

export default DisclaimerPage;
