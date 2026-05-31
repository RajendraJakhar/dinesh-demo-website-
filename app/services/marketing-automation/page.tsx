import Link from "next/link";

export default function MarketingAutomationPage() {
  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            Marketing Automation Services
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Automate Your Marketing.
            <br />
            Scale Your Growth.
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            Stop manually chasing leads. Build automated systems
            that nurture prospects, trigger follow-ups and move
            opportunities through your pipeline automatically.
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

      {/* Problems */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              Common Problems
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Manual Processes
              Kill Growth.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Missed Follow-Ups",
              "Slow Response Times",
              "Manual Workflows",
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

      {/* Automation Framework */}
      <section className="py-24 bg-[#070b18]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              Automation Framework
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Systems That Work 24/7.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              "Lead Capture",
              "Lead Nurturing",
              "Appointment Booking",
              "Pipeline Automation",
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

      {/* Automation Examples */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold">
              What We Automate.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {[
              "Email Follow-Ups",
              "WhatsApp Sequences",
              "Lead Assignment",
              "CRM Updates",
              "Appointment Reminders",
              "Sales Notifications",
            ].map((item) => (
              <div
                key={item}
                className="p-8 rounded-3xl border border-white/10"
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
      <section className="py-24 bg-[#070b18]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            <div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Business Benefits.
              </h2>
            </div>

            <div className="space-y-6">

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Faster lead response times
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Increased efficiency
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Better customer experience
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ More appointments booked
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            <div className="border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">
                Which tools do you automate?
              </h3>

              <p className="text-gray-400">
                We work with CRM platforms, email systems,
                WhatsApp workflows and appointment tools.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">
                Can automation replace our team?
              </h3>

              <p className="text-gray-400">
                Automation supports your team by removing repetitive
                tasks and improving operational efficiency.
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
              Ready To Automate
              Your Growth?
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Build automated workflows that capture leads,
              nurture prospects and book appointments automatically.
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