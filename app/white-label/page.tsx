import Link from "next/link";

export default function WhiteLabelPage() {
  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-orange-500 uppercase tracking-[0.2em] text-sm mb-6">
            WHITE-LABEL PARTNERSHIPS
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
            You Close The Deals.
            <br />
            We Deliver The Work.
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            Scale your agency without hiring additional staff.
            Vaatira becomes your white-label backend execution team.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <Link
              href="/contact"
              className="
              px-8 py-4 rounded-full
              bg-orange-500
              hover:bg-orange-600
              transition
              text-black font-semibold
              "
            >
              Become A Partner
            </Link>

            <Link
              href="/case-studies"
              className="
              px-8 py-4 rounded-full
              border border-white/10
              "
            >
              View Case Studies
            </Link>

          </div>

        </div>
      </section>

      {/* Problem */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-orange-500 uppercase tracking-[0.2em] text-sm mb-4">
            THE PROBLEM
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            Growth Creates
            Delivery Bottlenecks.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Too Many Projects",
              "Hiring Takes Time",
              "Quality Control Issues",
            ].map((item) => (
              <div
                key={item}
                className="
                p-8 rounded-3xl
                border border-white/10
                bg-white/[0.03]
                "
              >
                <h3 className="text-2xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Framework */}
      <section className="py-24 bg-[#070b18]">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-orange-500 uppercase tracking-[0.2em] text-sm mb-4">
            PARTNERSHIP MODEL
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-20">
            Simple.
            Scalable.
            Profitable.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-10 rounded-3xl border border-white/10">
              <div className="text-orange-500 text-5xl font-bold mb-6">
                01
              </div>

              <h3 className="text-2xl font-bold mb-4">
                You Acquire Clients
              </h3>

              <p className="text-gray-400">
                Focus on sales, marketing and client relationships.
              </p>
            </div>

            <div className="p-10 rounded-3xl border border-white/10">
              <div className="text-orange-500 text-5xl font-bold mb-6">
                02
              </div>

              <h3 className="text-2xl font-bold mb-4">
                We Deliver
              </h3>

              <p className="text-gray-400">
                CRM setup, automation, funnels and backend systems.
              </p>
            </div>

            <div className="p-10 rounded-3xl border border-white/10">
              <div className="text-orange-500 text-5xl font-bold mb-6">
                03
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Everyone Wins
              </h3>

              <p className="text-gray-400">
                Better delivery, more clients and higher margins.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            White-Label Services.
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {[
              "Lead Generation Systems",
              "CRM Implementation",
              "Marketing Automation",
              "WhatsApp Automation",
              "Appointment Booking Systems",
              "Landing Pages & Funnels",
            ].map((service) => (
              <div
                key={service}
                className="
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                "
              >
                <h3 className="text-xl font-semibold">
                  {service}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#070b18]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            Why Agencies Partner With Vaatira.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Increase Delivery Capacity",
              "Reduce Operational Costs",
              "Scale Faster",
              "Maintain Quality Standards",
              "No Hiring Required",
              "Higher Profit Margins",
            ].map((benefit) => (
              <div
                key={benefit}
                className="
                p-8
                rounded-3xl
                border
                border-white/10
                "
              >
                ✓ {benefit}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div
            className="
            rounded-[40px]
            border border-white/10
            bg-gradient-to-r
            from-[#0d1430]
            to-[#151d3f]
            p-12 md:p-20
            text-center
            "
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready To Scale
              Your Agency?
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-6">
              Let's build a white-label partnership that helps
              you grow without increasing operational complexity.
            </p>

            <Link
              href="/contact"
              className="
              inline-flex
              mt-10
              px-8 py-4
              rounded-full
              bg-orange-500
              hover:bg-orange-600
              transition
              text-black font-semibold
              "
            >
              Become A Partner
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}