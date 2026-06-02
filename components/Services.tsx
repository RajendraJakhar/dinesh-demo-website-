export default function Services() {
  const services = [
    {
      title: "Lead Generation",
      description:
        "Build predictable lead pipelines through SEO, LinkedIn outreach, paid campaigns and conversion-focused landing pages.",
    },
    {
      title: "CRM Implementation",
      description:
        "Set up scalable CRM systems that organize leads, automate workflows and improve sales visibility.",
    },
    {
      title: "Marketing Automation",
      description:
        "Reduce manual work with automated follow-ups, lead nurturing and customer communication systems.",
    },
    {
      title: "WhatsApp Automation",
      description:
        "Automate lead qualification, follow-ups and appointment reminders directly through WhatsApp.",
    },
    {
      title: "Appointment Booking Systems",
      description:
        "Create frictionless booking experiences using Calendly and CRM-integrated scheduling workflows.",
    },
    {
      title: "White-Label Fulfillment",
      description:
        "Reliable backend delivery for agencies and freelancers who need execution without increasing overhead.",
    },
  ];

  return (
    <section id="services" className="py-10 bg-[#070b18]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            Services
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Everything Required To Build
          </h2>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mt-2">
            A Predictable Growth System.
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="
                group
                relative
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                hover:border-orange-500/40
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              {/* Number */}
              <div
                className="
                w-12
                h-12
                rounded-full
                bg-orange-500
                text-black
                flex
                items-center
                justify-center
                font-bold
                mb-6
              "
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              <button
                className="
                text-orange-500
                font-medium
                group-hover:translate-x-1
                transition-transform
              "
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="
          mt-16
          p-10
          rounded-3xl
          border
          border-white/10
          bg-gradient-to-r
          from-[#0b1228]
          to-[#131b34]
          text-center
        "
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Need A Custom Growth System?
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Every business is different. We design growth systems around your
            goals, sales process and market.
          </p>

          <button
            className="
            px-8
            py-4
            rounded-full
            bg-orange-500
            hover:bg-orange-600
            transition
            font-semibold
            text-black
          "
          >
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
}