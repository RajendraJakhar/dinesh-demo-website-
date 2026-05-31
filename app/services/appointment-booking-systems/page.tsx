import Link from "next/link";

export default function AppointmentBookingSystemsPage() {
  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            Appointment Booking Systems
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Turn More Leads Into
            <br />
            Booked Appointments.
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            Build a streamlined appointment booking system that
            automatically schedules consultations, reduces no-shows
            and improves sales efficiency.
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
              Why Businesses
              Lose Appointments.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Manual Scheduling",
              "Missed Follow-Ups",
              "High No-Show Rates",
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

      {/* System Components */}
      <section className="py-24 bg-[#070b18]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              System Components
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Complete Booking Infrastructure.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              "Calendly Integration",
              "Automated Reminders",
              "CRM Sync",
              "Lead Qualification",
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

      {/* Booking Flow */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold">
              Appointment Workflow.
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              "Lead Enters",
              "Qualification",
              "Calendar Selection",
              "Confirmation",
              "Consultation",
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
                Business Benefits.
              </h2>
            </div>

            <div className="space-y-6">

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ More appointments booked
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Lower no-show rates
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Better sales efficiency
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Improved customer experience
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
                Do you work with Calendly?
              </h3>

              <p className="text-gray-400">
                Yes. We integrate Calendly and other scheduling
                platforms into your lead generation system.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">
                Can reminders be automated?
              </h3>

              <p className="text-gray-400">
                Yes. Email, SMS and WhatsApp reminders can be
                automated to reduce no-show rates.
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
              Ready To Book
              More Qualified Calls?
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Create an appointment booking system that helps
              convert leads into consultations automatically.
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