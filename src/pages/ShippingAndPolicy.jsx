import React from "react";

const ShippingAndPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-5 py-12 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Shipping Policy</h1>
        <p className="text-sm text-gray-600">Veltex Services Private Limited</p>
        <p className="text-sm text-gray-500">
          Last Updated: March {new Date().getFullYear()}
        </p>
      </div>

      {/* Section 1 */}
      <h2 className="font-semibold mt-4">1. Introduction</h2>

      <p>
        This Shipping Policy sets out the terms governing the dispatch,
        delivery, and logistics of physical products ordered through the
        platform operated by <strong>Veltex Services Private Limited</strong> at
        <a href="https://www.astrotring.com" className="text-yellow-600 ">
          {" "}
          www.astrotring.com .
        </a>
      </p>

      <p>
        By placing an order on the platform, you acknowledge that you have read,
        understood, and agreed to the terms of this Shipping Policy.
      </p>

      <p>
        This Policy must be read together with the Terms and Conditions, Privacy
        Policy, and Refund and Cancellation Policy published on the platform.
      </p>

      <p>
        Veltex reserves the right to update this policy at any time. Continued
        use of the platform after updates constitutes acceptance of the revised
        policy.
      </p>

      {/* Section 2 */}
      <h2 className="font-semibold mt-4">2. Logistics and Shipping Partners</h2>

      <p>
        Veltex partners with reputable third-party logistics and courier service
        providers to deliver products across India and select international
        destinations.
      </p>

      <p>
        The choice of courier partner for any specific order is determined
        solely by Veltex depending on delivery location, product type, and
        courier availability.
      </p>

      <p>
        Veltex does not directly control the logistics infrastructure of courier
        partners and shall not be liable for delays or damages caused by such
        third-party providers.
      </p>

      {/* Section 3 */}
      <h2 className="font-semibold mt-4">3. Order Processing</h2>

      <p>
        Orders are processed within <strong>1–2 business days</strong> after
        successful placement and payment confirmation.
      </p>

      <p>
        Business days refer to Monday through Saturday excluding public holidays
        in India.
      </p>

      <p>
        Order processing includes payment verification, product availability
        confirmation, quality checks, and preparation for dispatch.
      </p>

      <p>
        Veltex reserves the right to cancel or hold orders if payment
        verification fails or products are unavailable.
      </p>

      {/* Section 4 */}
      <h2 className="font-semibold mt-4">4. Dispatch Timelines</h2>

      <p>
        Products are generally dispatched within <strong>24–48 hours</strong>{" "}
        after completion of order processing.
      </p>

      <p>
        Dispatch times may vary during festivals, high demand periods, or due to
        circumstances beyond Veltex's control.
      </p>

      {/* Section 5 */}
      <h2 className="font-semibold mt-4">5. Estimated Delivery Timelines</h2>

      <p>The following timelines are estimates from the date of dispatch:</p>

      <ul className="list-disc pl-5 space-y-1">
        <li>Metro Cities – 2 to 4 business days</li>
        <li>Tier 2 & Tier 3 Cities – 4 to 6 business days</li>
        <li>Remote or Rural Areas – 5 to 8 business days</li>
        <li>International Orders – 7 to 15 business days</li>
      </ul>

      <p>
        Delivery timelines may vary due to courier operations, holidays, or
        other external factors.
      </p>

      {/* Section 6 */}
      <h2 className="font-semibold mt-4">6. Shipping Coverage</h2>

      <h3 className="font-semibold mt-2">6.1 Domestic Shipping</h3>

      <p>
        Veltex ships to all serviceable pin codes across India. If a pin code is
        found to be non-serviceable after an order is placed, the order will be
        cancelled and the amount refunded.
      </p>

      <h3 className="font-semibold mt-2">6.2 International Shipping</h3>

      <p>
        International shipping is available for select countries. Delivery times
        may vary depending on customs clearance procedures.
      </p>

      <p>
        Custom duties or import taxes imposed by destination countries are the
        responsibility of the recipient.
      </p>

      {/* Section 7 */}
      <h2 className="font-semibold mt-4">
        7. Order Tracking and Shipment Confirmation
      </h2>

      <p>
        Once an order is dispatched, users will receive shipment confirmation
        via SMS along with tracking details.
      </p>

      <p>
        Users may contact customer support to check the status of their order at
        any time.
      </p>

      {/* Section 8 */}
      <h2 className="font-semibold mt-4">8. Delivery Delays</h2>

      <p>
        Delays may occur due to circumstances beyond Veltex’s control including:
      </p>

      <ul className="list-disc pl-5 space-y-1">
        <li>Adverse weather conditions or natural disasters</li>
        <li>Political disruptions or regional restrictions</li>
        <li>Public holidays or festival logistics</li>
        <li>Courier partner operational delays</li>
        <li>Incorrect address provided by the user</li>
        <li>Customs clearance delays for international orders</li>
      </ul>

      <p>
        Veltex will make reasonable efforts to resolve delivery issues and keep
        users informed.
      </p>

      {/* Section 9 */}
      <h2 className="font-semibold mt-4">9. Packaging Standards</h2>

      <p>All products are carefully packed to ensure safe delivery.</p>

      <ul className="list-disc pl-5 space-y-1">
        <li>Products are inspected before packaging</li>
        <li>Fragile items are bubble wrapped</li>
        <li>Packages are securely sealed before dispatch</li>
      </ul>

      <p>
        If a product arrives damaged, users must contact customer support within
        <strong>48 hours</strong> of delivery with photographic evidence.
      </p>

      {/* Section 10 */}
      <h2 className="font-semibold mt-4">
        10. Failed Deliveries and Returned Shipments
      </h2>

      <p>A delivery may fail if:</p>

      <ul className="list-disc pl-5 space-y-1">
        <li>The recipient is unavailable</li>
        <li>The address is incorrect or incomplete</li>
        <li>The recipient refuses delivery</li>
      </ul>

      <p>
        If shipments are returned after failed delivery attempts, Veltex may
        arrange re-dispatch subject to additional shipping charges.
      </p>

      {/* Section 11 */}
      <h2 className="font-semibold mt-4">
        11. Disclaimer and Limitation of Liability
      </h2>

      <p>
        Veltex does not guarantee delivery within any specific timeframe and
        shall not be liable for delays caused by courier partners or external
        circumstances.
      </p>

      <p>
        Veltex's liability in relation to shipping claims shall not exceed the
        amount paid by the user for the product and shipping charges.
      </p>

      {/* Section 12 */}
      <h2 className="font-semibold mt-4">12. Customer Support</h2>

      <p>For any shipping related queries contact:</p>

      <p>
        <strong>Veltex Services Private Limited</strong>
        <br />
        Website: www.astrotring.com
        <br />
        Email: support@astrotring.com
        <br />
        Phone: +919485628238 (Available 24×7)
      </p>

      <div className="border-t pt-6 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Veltex Services Private Limited. All rights
        reserved.
      </div>
    </div>
  );
};

export default ShippingAndPolicy;
