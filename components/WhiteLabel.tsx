export default function WhiteLabel() {
  return (
    <section className="py-10 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-4xl mb-16">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            White-Label Partnerships
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            You Win The Client.
          </h2>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mt-2">
            We Handle The Delivery.
          </h2>
        </div>

        {/* Main Content */}
        <div
          className="
          grid
          lg:grid-cols-2
          gap-8
          items-center
          "
        >
          {/* Left */}
          <div
            className="
            border
            border-white/10
            rounded-3xl
            p-8
            bg-white/[0.03]
            "
          >
            <h3 className="text-2xl font-semibold mb-6">
              Built For Agencies & Freelancers
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Focus on sales, client relationships and growth.
              Let Vaatira handle execution, systems, CRM implementation,
              automation, lead generation and backend delivery.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>✓ White-label delivery</li>
              <li>✓ Dedicated execution support</li>
              <li>✓ CRM & automation implementation</li>
              <li>✓ Lead generation systems</li>
              <li>✓ Scalable fulfillment processes</li>
            </ul>
          </div>

          {/* Right */}
          <div
            className="
            border
            border-white/10
            rounded-3xl
            p-8
            bg-gradient-to-br
            from-[#101936]
            to-[#1b2342]
            "
          >
            <div className="space-y-6">

              <div
                className="
                border
                border-white/10
                rounded-2xl
                p-5
                "
              >
                <h4 className="font-semibold">
                  Step 1
                </h4>

                <p className="text-gray-400 mt-2">
                  You acquire the client.
                </p>
              </div>

              <div
                className="
                border
                border-white/10
                rounded-2xl
                p-5
                "
              >
                <h4 className="font-semibold">
                  Step 2
                </h4>

                <p className="text-gray-400 mt-2">
                  Vaatira executes the backend delivery.
                </p>
              </div>

              <div
                className="
                border
                border-white/10
                rounded-2xl
                p-5
                "
              >
                <h4 className="font-semibold">
                  Step 3
                </h4>

                <p className="text-gray-400 mt-2">
                  You maintain the relationship and scale.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="
          mt-12
          text-center
          "
        >
          <a
            href="#contact"
            className="
            inline-flex
            items-center
            justify-center
            px-8
            py-4
            rounded-full
            bg-orange-500
            hover:bg-orange-600
            transition
            text-black
            font-semibold
            "
          >
            Become A White-Label Partner
          </a>
        </div>

      </div>
    </section>
  );
}