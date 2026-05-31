import Link from "next/link";

export default function CoachesPage() {
  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            Solutions For Coaches
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Turn Expertise Into
            <br />
            Predictable Client Growth.
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            Generate qualified consultation calls, automate follow-ups,
            manage leads efficiently and build a coaching business
            that scales consistently.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition text-black font-semibold"
            >
              Book Consultation
            </Link>

            <Link
              href="/case-studies"
              className="px-8 py-4 rounded-full border border-white/10"
            >
              View Case Studies
            </Link>
          </div>

        </div>
      </section>

      {/* Challenges */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              Common Challenges
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Why Coaching Businesses
              Hit Growth Plateaus.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Inconsistent Client Flow",
              "Manual Follow-Ups",
              "No Scalable Systems",
            ].map((item) => (
              <div
                key={item}
                className="p-8 rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                <h3 className="text-xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Growth Framework */}
      <section className="py-24 bg-[#070b18]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              Growth Framework
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              A System Designed For Coaches.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              "Lead Generation",
              "CRM Management",
              "Automation",
              "Consultation Booking",
            ].map((item) => (
              <div
                key={item}
                className="p-8 rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                <h3 className="text-xl font-semibold">
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
                What Coaches Gain.
              </h2>
            </div>

            <div className="space-y-6">

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ More consultation bookings
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Better lead management
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Automated nurturing sequences
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Predictable monthly growth
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
                Can this work for new coaches?
              </h3>

              <p className="text-gray-400">
                Yes. The system can be adapted for both new and established coaching businesses.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">
                Do I need paid ads?
              </h3>

              <p className="text-gray-400">
                Not necessarily. We can combine organic and paid acquisition strategies.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0d1430] to-[#141d3d] p-12 md:p-20 text-center">

            <h2 className="text-4xl md:text-6xl font-bold">
              Ready To Grow
              Your Coaching Business?
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Build a repeatable system that attracts leads,
              books calls and converts prospects into clients.
            </p>

            <Link
              href="/contact"
              className="inline-flex mt-10 px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition text-black font-semibold"
            >
              Book Consultation
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}