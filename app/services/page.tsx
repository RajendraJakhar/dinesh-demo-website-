import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Lead Generation",
      description:
        "Build predictable lead acquisition systems using landing pages, outreach, funnels and conversion optimization.",
      href: "/services/lead-generation",
    },
    {
      title: "CRM Implementation",
      description:
        "Implement scalable CRM systems with pipelines, automation, reporting and complete visibility.",
      href: "/services/crm",
    },
    {
      title: "Marketing Automation",
      description:
        "Automate follow-ups, lead nurturing and customer journeys to increase efficiency and conversions.",
      href: "/services/marketing-automation",
    },
    {
      title: "WhatsApp Automation",
      description:
        "Instant replies, lead qualification, appointment booking and WhatsApp workflow automation.",
      href: "/services/whatsapp-automation",
    },
    {
      title: "Appointment Booking Systems",
      description:
        "Calendly integration, reminders, qualification forms and automated scheduling workflows.",
      href: "/services/appointment-booking-systems",
    },
    {
      title: "Growth Systems Consulting",
      description:
        "Strategic consulting to connect marketing, CRM, automation and sales into one growth engine.",
      href: "/contact",
    },
  ];

  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-orange-500 uppercase tracking-[0.2em] text-sm mb-6">
            SERVICES
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
            Everything Required
            <br />
            To Build A Predictable
            <br />
            Growth System.
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            Vaatira helps consultants, coaches, solar companies,
            agencies and freelancers build scalable acquisition,
            CRM and automation systems.
          </p>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="
                group
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                hover:border-orange-500/40
                hover:bg-white/[0.05]
                transition-all
                "
              >
                <div className="w-14 h-14 rounded-full bg-orange-500 text-black flex items-center justify-center font-bold text-lg mb-6">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-8 text-orange-500 font-medium">
                  Learn More →
                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* Why Vaatira */}
      <section className="py-24 bg-[#070b18]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl mb-16">
            <p className="text-orange-500 uppercase tracking-[0.2em] text-sm mb-4">
              WHY VAATIRA
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              We Don't Sell Services.
              <br />
              We Build Systems.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Lead Generation",
              "CRM Infrastructure",
              "Automation",
              "Revenue Growth",
            ].map((item) => (
              <div
                key={item}
                className="
                rounded-3xl
                border
                border-white/10
                p-8
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

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div
            className="
            rounded-[40px]
            border
            border-white/10
            bg-gradient-to-r
            from-[#0d1430]
            to-[#151d3f]
            p-12
            md:p-20
            text-center
            "
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready To Build
              A Predictable Growth System?
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-6">
              Let's design a lead generation, CRM and automation
              infrastructure tailored to your business.
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