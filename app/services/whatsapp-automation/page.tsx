import Link from "next/link";

export default function WhatsAppAutomationPage() {
  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            WhatsApp Automation Services
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Automate Conversations.
            <br />
            Convert More Leads.
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            Build WhatsApp automation systems that instantly
            respond to leads, qualify prospects, schedule appointments
            and improve customer engagement at scale.
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
              Leads Can't Wait.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Slow Responses",
              "Missed Opportunities",
              "Manual Follow-Ups",
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

      {/* Features */}
      <section className="py-24 bg-[#070b18]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              Automation Features
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Built For Instant Engagement.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              "Instant Replies",
              "Lead Qualification",
              "Appointment Booking",
              "CRM Integration",
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

      {/* Workflow */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold">
              Automation Workflow.
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              "Lead Arrives",
              "Auto Reply",
              "Qualification",
              "CRM Update",
              "Appointment",
            ].map((step) => (
              <div
                key={step}
                className="p-6 rounded-3xl border border-white/10 text-center"
              >
                <h3 className="font-semibold">
                  {step}
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
                What You Gain.
              </h2>
            </div>

            <div className="space-y-6">

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Faster response times
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Higher lead engagement
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Automated appointment booking
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Better lead management
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
                Can WhatsApp automation connect to our CRM?
              </h3>

              <p className="text-gray-400">
                Yes. We can connect WhatsApp workflows with CRM systems
                for lead tracking and automation.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">
                Can appointments be booked automatically?
              </h3>

              <p className="text-gray-400">
                Yes. WhatsApp workflows can connect with scheduling
                systems to automate appointment booking.
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
              Your WhatsApp Lead Flow?
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Build a WhatsApp automation system that responds,
              qualifies and books appointments automatically.
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