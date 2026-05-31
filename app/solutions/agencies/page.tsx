import Link from "next/link";

export default function AgenciesPage() {
  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            Solutions For Agencies & Freelancers
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Scale Delivery
            <br />
            Without Scaling Overhead.
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            Win more clients while Vaatira handles backend execution,
            CRM implementation, automation, lead generation systems
            and white-label fulfillment.
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
              Become A Partner
            </Link>

            <Link
              href="/white-label"
              className="
              px-8
              py-4
              rounded-full
              border
              border-white/10
              "
            >
              Explore White Label
            </Link>

          </div>

        </div>
      </section>

      {/* Challenges */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              Agency Challenges
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Growth Creates
              Delivery Problems.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Limited Delivery Capacity",
              "Hiring Bottlenecks",
              "Inconsistent Fulfillment",
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

      {/* White Label System */}
      <section className="py-24 bg-[#070b18]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              White-Label Framework
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              You Sell. We Deliver.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="rounded-3xl border border-white/10 p-8 bg-white/[0.03]">
              <div className="text-orange-500 text-3xl font-bold mb-6">
                01
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Acquire Clients
              </h3>

              <p className="text-gray-400">
                Focus on sales, marketing and client relationships.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-8 bg-white/[0.03]">
              <div className="text-orange-500 text-3xl font-bold mb-6">
                02
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                White-Label Delivery
              </h3>

              <p className="text-gray-400">
                Vaatira handles implementation, systems and fulfillment.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-8 bg-white/[0.03]">
              <div className="text-orange-500 text-3xl font-bold mb-6">
                03
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Scale Profitably
              </h3>

              <p className="text-gray-400">
                Deliver more projects without increasing internal overhead.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold">
              White-Label Services.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {[
              "Lead Generation Systems",
              "CRM Implementation",
              "Marketing Automation",
              "WhatsApp Automation",
              "Appointment Booking Systems",
              "Funnel Development",
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

          <div className="grid lg:grid-cols-2 gap-12">

            <div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Partner Benefits.
              </h2>
            </div>

            <div className="space-y-6">

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Increased delivery capacity
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Reduced operational overhead
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Faster project execution
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Higher profitability
              </div>

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
              Your Agency?
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Focus on growth while we handle delivery,
              fulfillment and backend systems.
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
              Become A White-Label Partner
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}