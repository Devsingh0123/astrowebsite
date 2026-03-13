import React from "react";

const PrivacyAndPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-5 py-12 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-sm text-gray-600">Veltex Services Private Limited</p>
        <p className="text-sm text-gray-500">
          Last Updated: March {new Date().getFullYear()}
        </p>
      </div>

      {/* Section 1 */}
      <h2 className="font-semibold mt-4">1. Introduction</h2>
      <p>
        This Privacy Policy is published by{" "}
        <strong>Veltex Services Private Limited</strong>
        (“Veltex”, “We”, “Us”, or “Our”), the owner and operator of
        <a href="https://www.astrotring.com" className="text-yellow-600">
          {" "}
          www.astrotring.com .
        </a>
      </p>

      <p>
        This policy is published in accordance with applicable laws of India
        including:
      </p>

      <ul className="list-disc pl-5 space-y-1">
        <li>Section 43A of the Information Technology Act, 2000</li>
        <li>Rule 3(1) of the IT Intermediaries Guidelines Rules, 2011</li>
        <li>
          IT (Reasonable Security Practices and Sensitive Personal Data) Rules,
          2011
        </li>
        <li>Digital Personal Data Protection Act, 2023</li>
      </ul>

      <p>
        This Policy governs the collection, use, storage, processing, and
        disclosure of personal information from all users of the platform.
      </p>

      <p>
        By using the platform, you acknowledge that you have read and consented
        to this Privacy Policy.
      </p>

      {/* Section 2 */}
      <h2 className="font-semibold mt-4">2. User Consent and Acceptance</h2>

      <p>By accessing and using the platform, you expressly consent to:</p>

      <ul className="list-disc pl-5 space-y-1">
        <li>Collection and processing of your personal data</li>
        <li>
          Receiving communications via email, SMS, WhatsApp, push notifications,
          and calls
        </li>
        <li>
          Use of your data for improving services and marketing communication
        </li>
      </ul>

      <p>
        Continued use of the platform after updates to this policy constitutes
        acceptance of the revised policy.
      </p>

      {/* Section 3 */}
      <h2 className="font-semibold mt-4">3. Information We Collect</h2>

      <h3 className="font-semibold mt-3">
        3.1 Personal Identifiable Information
      </h3>

      <ul className="list-disc pl-5 space-y-1">
        <li>Full name</li>
        <li>Mobile number used for OTP authentication</li>
        <li>Email address</li>
        <li>Date of birth and gender</li>
        <li>Location and birth details</li>
      </ul>

      <p>
        We may also collect financial details when users make payments through
        secure third-party payment gateways.
      </p>

      <h3 className="font-semibold mt-3">3.2 Non-Personal Information</h3>

      <ul className="list-disc pl-5 space-y-1">
        <li>Browser type and device information</li>
        <li>IP address and internet service provider</li>
        <li>Pages visited and time spent on the platform</li>
        <li>Device identifiers and network information</li>
      </ul>

      <h3 className="font-semibold mt-3">
        3.3 Automatically Collected Information
      </h3>

      <ul className="list-disc pl-5 space-y-1">
        <li>Cookies and tracking technologies</li>
        <li>Log files</li>
        <li>Location data</li>
        <li>Usage analytics</li>
      </ul>

      {/* Section 4 */}
      <h2 className="font-semibold mt-4">4. Purpose and Use of Information</h2>

      <p>Information collected may be used for:</p>

      <ul className="list-disc pl-5 space-y-1">
        <li>Providing platform services</li>
        <li>Managing user accounts</li>
        <li>Personalising astrology recommendations</li>
        <li>Sending service notifications</li>
        <li>Fraud prevention and security monitoring</li>
        <li>Compliance with legal obligations</li>
      </ul>

      {/* Section 5 */}
      <h2 className="font-semibold mt-4">5. Disclosure of Information</h2>

      <p>Veltex does not sell personal data to third parties.</p>

      <p>Information may be shared with:</p>

      <ul className="list-disc pl-5 space-y-1">
        <li>Technology partners and payment providers</li>
        <li>Astrologers providing consultation services</li>
        <li>Legal authorities when required by law</li>
        <li>Successor entities during mergers or acquisitions</li>
      </ul>

      {/* Section 6 */}
      <h2 className="font-semibold mt-4">6. Data Security</h2>

      <p>
        Veltex uses industry-standard security measures including SSL
        encryption, secure storage infrastructure, and restricted access systems
        to protect user information.
      </p>

      <p>
        However, no internet transmission method can be guaranteed to be
        completely secure.
      </p>

      {/* Section 7 */}
      <h2 className="font-semibold mt-4">7. User Rights</h2>

      <p>Users have the following rights regarding their personal data:</p>

      <ul className="list-disc pl-5 space-y-1">
        <li>Right to access personal data</li>
        <li>Right to correct inaccurate information</li>
        <li>Right to request deletion of data</li>
        <li>Right to withdraw consent</li>
      </ul>

      {/* Section 8 */}
      <h2 className="font-semibold mt-4">
        8. Third Party Advertising and Analytics
      </h2>

      <p>
        The platform may use third-party analytics tools to measure traffic and
        improve services.
      </p>

      <p>
        These tools collect anonymised information such as pages visited and
        interaction patterns.
      </p>

      {/* Section 9 */}
      <h2 className="font-semibold mt-4">9. Children's Privacy</h2>

      <p>
        The platform is not intended for children under the age of 13. If such
        data is identified, it will be deleted immediately.
      </p>

      {/* Section 10 */}
      <h2 className="font-semibold mt-4">10. Astrology Disclaimer</h2>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
        <p>
          Astrology consultations and predictions available on the platform are
          provided for informational and entertainment purposes only.
        </p>
      </div>

      <p>
        Veltex acts only as a technology intermediary and does not guarantee the
        accuracy of predictions or advice provided by experts.
      </p>

      {/* Section 11 */}
      <h2 className="font-semibold mt-4">11. Grievance Redressal</h2>
      <p>For any complaints regarding this policy contact:</p>
      <p>
        <strong>Veltex Services Private Limited</strong>
        <br />
        Website: www.astrotring.com
        <br />
        Email: support@astrotring.com
      </p>

      {/* Section 12 */}
      <h2 className="font-semibold mt-4">12. Governing Law</h2>

      <p>
        This policy shall be governed by the laws of India and disputes will be
        resolved through arbitration in New Delhi.
      </p>

      {/* Footer */}
      <div className="border-t pt-6 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Veltex Services Private Limited. All rights
        reserved.
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;
