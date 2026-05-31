import Link from "next/link";

export default function SolarPage() {
  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            Solutions For Solar Companies
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Generate More
            <br />
            Qualified Solar Leads.
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            Build a complete lead generation, CRM and automation
            system that helps your solar business attract,
            nurture and convert more homeowners into customers.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <Link
              href="/contact"
              className="
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
              Book Consultation
            </Link>

            <Link
              href="/case-studies"
              className="
              px-8
              py-4
              rounded-full
              border
              border-white/10
              "
            >
              View Case Studies
            </Link>

          </div>

        </div>
      </section>

      {/* Problems */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">

            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              Common Challenges
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Why Solar Companies
              Lose Revenue.
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Poor Lead Quality",
              "Slow Follow-Ups",
              "No CRM Visibility",
            ].map((item) => (
              <div
                key={item}
                className="
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                "
              >
                <h3 className="text-xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Growth System */}
      <section className="py-24 bg-[#070b18]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">

            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              Solar Growth System
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              From Lead To Installation.
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

            {[
              "Lead Capture",
              "CRM Tracking",
              "Automation",
              "Appointments",
              "Sales",
            ].map((item) => (
              <div
                key={item}
                className="
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                text-center
                "
              >
                <h3 className="font-semibold">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            <div>
              <h2 className="text-4xl md:text-5xl font-bold">
                What Solar Companies Gain.
              </h2>
            </div>

            <div className="space-y-6">

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ More qualified solar leads
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Faster lead response times
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Better appointment rates
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Increased sales opportunities
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#070b18]">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            <div className="border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">
                Can you work with our current CRM?
              </h3>

              <p className="text-gray-400">
                Yes. We can optimize your existing CRM
                or implement a new solution based on your needs.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">
                Do you help with appointment booking?
              </h3>

              <p className="text-gray-400">
                Yes. We implement automation and scheduling systems
                that help convert leads into appointments.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div
            className="
            rounded-[40px]
            border
            border-white/10
            bg-gradient-to-br
            from-[#0d1430]
            to-[#141d3d]
            p-12
            md:p-20
            text-center
            "
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready To Scale
              Your Solar Business?
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Build a predictable system for lead generation,
              CRM management, automation and appointment booking.
            </p>

            <Link
              href="/contact"
              className="
              inline-flex
              mt-10
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
              Book Consultation
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}