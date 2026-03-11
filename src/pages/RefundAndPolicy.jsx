import React from "react";

const RefundAndPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-5 py-12 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Refund and Return Policy</h1>
        <p className="text-sm text-gray-600">Veltex Services Private Limited</p>
        <p className="text-sm text-gray-500">Last Updated: March {new Date().getFullYear()}</p>
      </div>

      {/* Section 1 */}
      <h2 className="font-semibold mt-4">1. Introduction</h2>
      <p>
        This Refund and Return Policy governs refunds, returns, and replacements
        for products and services purchased through
        <a
          href="https://www.astrotring.com"
          className="text-blue-600 underline"
        >
          {" "}
          www.astrotring.com
        </a>
        .
      </p>
      <p>
        It applies to two categories of purchases: (a) physical products and (b)
        digital astrological and advisory services. Terms for each category are
        outlined separately below.
      </p>
      <p>
        By placing an order or availing services, you acknowledge that you have
        read, understood, and agreed to this Policy. It must be read in
        conjunction with Terms and Conditions, Privacy Policy, and Shipping
        Policy.
      </p>
      <p>
        Veltex may update this Policy at any time. Continued use of the Platform
        constitutes acceptance of the revised Policy.
      </p>

      {/* Part A: Physical Products */}
      <h2 className="font-semibold mt-4">PART A: PHYSICAL PRODUCTS</h2>

      <h3 className="font-semibold mt-2">
        2. Eligibility for Returns and Replacements
      </h3>
      <p>Customers may request return or replacement subject to:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Initiation within 7 days of receipt</li>
        <li>
          Product must be defective, damaged, or materially different from order
        </li>
        <li>
          Original, unused condition with packaging, tags, and accessories
          intact
        </li>
        <li>Supporting photos or video must be provided</li>
        <li>Missing items must be reported within 72 hours of delivery</li>
        <li>Returns will be collected from the original delivery address</li>
      </ul>

      <h3 className="font-semibold mt-2">3. Non-Returnable Items</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Used, worn, washed, or handled products beyond condition assessment
        </li>
        <li>Products damaged by customer after delivery</li>
        <li>
          Products returned without original packaging, tags, or accessories
        </li>
        <li>Returns submitted after 7-day window</li>
        <li>
          Products returned due to dissatisfaction with claimed benefits or
          effectiveness
        </li>
      </ul>

      <h3 className="font-semibold mt-2">4. Return Process</h3>
      <ul className="list-decimal pl-5 space-y-1">
        <li>
          <strong>Initiation:</strong> Contact support@astrotring.com with order
          number, issue description, and evidence. Must be within 7 days.
        </li>
        <li>
          <strong>Review and Approval:</strong> Veltex reviews request and
          confirms approval with instructions. Requests not meeting criteria may
          be declined.
        </li>
        <li>
          <strong>Pickup and Return Shipping:</strong> Veltex arranges pickup
          with a prepaid label. Customer ensures secure packaging.
        </li>
        <li>
          <strong>Processing and Resolution:</strong> Upon inspection, Veltex
          processes refund or replacement.
        </li>
      </ul>

      <h3 className="font-semibold mt-2">5. Refunds for Physical Products</h3>
      <h4 className="font-semibold mt-2">5.1 Store Credit Refunds</h4>
      <p>
        Eligible returns within 7 days receive Store Credit in the user's
        Platform account. Credits may be used for future purchases.
      </p>

      <h4 className="font-semibold mt-2">
        5.2 Refund to Original Payment Method
      </h4>
      <p>
        Refund to original payment method incurs Rs. 100 processing fee. Net
        refund credited within 7–10 business days.
      </p>

      <h4 className="font-semibold mt-2">5.3 Defective or Damaged Products</h4>
      <p>
        Full Store Credit issued for defective or damaged products. Refund to
        original payment method possible with processing fee deduction.
      </p>

      <h4 className="font-semibold mt-2">5.4 Partial Returns</h4>
      <p>
        Partial returns of multi-item orders receive Store Credit for the
        returned items. Remaining items unaffected.
      </p>

      <h4 className="font-semibold mt-2">5.5 Replacements</h4>
      <p>
        Replacement products dispatched within 4 business days, subject to
        availability. Unavailable items result in Store Credit or refund.
      </p>

      <h3 className="font-semibold mt-2">
        6. Quality and Authenticity Guarantee
      </h3>
      <p>
        Veltex guarantees authenticity and quality of all physical products. No
        refunds are available based on effectiveness or outcomes of product use.
      </p>

      {/* Part B: Digital Services */}
      <h2 className="font-semibold mt-4">
        PART B: DIGITAL ASTROLOGICAL AND ADVISORY SERVICES
      </h2>

      <h3 className="font-semibold mt-2">7. Refunds for Digital Services</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Requests must be within 24 hours of service completion</li>
        <li>Refunds issued as Astrotring Wallet credits only</li>
        <li>User must consent to audit team access to session records</li>
        <li>Decision of quality audit team is final</li>
        <li>Eligible refunds processed within 24 hours of approval</li>
      </ul>

      <h3 className="font-semibold mt-2">
        8. Circumstances in Which Refunds May Be Considered
      </h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Technical disruption affecting session quality</li>
        <li>Language inability of service provider</li>
        <li>Undue delay in response during session</li>
        <li>Irrelevant or inappropriate response from service provider</li>
      </ul>

      <h3 className="font-semibold mt-2">
        9. Circumstances in Which Refunds Will Not Be Granted
      </h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Dissatisfaction with accuracy of astrological advice</li>
        <li>
          General personal dissatisfaction if service technically complete
        </li>
        <li>Requests outside 24-hour claim window</li>
        <li>Refusal to consent to audit team access</li>
      </ul>

      <h3 className="font-semibold mt-2">10. Summary of Refund Conditions</h3>
      <table className="table-auto border border-gray-300 mt-2 w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">Category</th>
            <th className="border px-2 py-1">Refund Type</th>
            <th className="border px-2 py-1">Conditions / Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">Defective / Damaged Product</td>
            <td className="border px-2 py-1">
              Full Store Credit (or refund less Rs. 100 fee)
            </td>
            <td className="border px-2 py-1">
              Within 7 days; original condition; evidence required
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Incorrect Product Delivered</td>
            <td className="border px-2 py-1">
              Full Store Credit or Replacement
            </td>
            <td className="border px-2 py-1">
              Within 7 days; original condition; evidence required
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Partial Return (multi-item)</td>
            <td className="border px-2 py-1">Partial Store Credit</td>
            <td className="border px-2 py-1">
              Within 7 days; returned items unused
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">
              Used / Customer-Damaged Product
            </td>
            <td className="border px-2 py-1">Not eligible</td>
            <td className="border px-2 py-1">No return or refund</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Product Ineffectiveness</td>
            <td className="border px-2 py-1">Not eligible</td>
            <td className="border px-2 py-1">
              No guaranteed outcomes; no refund
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">
              Digital Service – Technical / Language / Delay / Irrelevant
            </td>
            <td className="border px-2 py-1">
              Partial or Full Astrotring Wallet Credit
            </td>
            <td className="border px-2 py-1">
              Within 24 hours; subject to audit review
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">
              Digital Service – Accuracy Dissatisfaction
            </td>
            <td className="border px-2 py-1">Not eligible</td>
            <td className="border px-2 py-1">No refund on accuracy grounds</td>
          </tr>
        </tbody>
      </table>

      <h3 className="font-semibold mt-2">11. Contact Information</h3>
      <p>For queries or assistance regarding refunds or returns:</p>
      <p>
        <strong>Veltex Services Private Limited</strong>
        <br />
        Website: www.astrotring.com
        <br />
        Email: support@astrotring.com
      </p>

      <div className="border-t pt-6 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Veltex Services Private Limited. All rights reserved.
      </div>
    </div>
  );
};

export default RefundAndPolicy;
