export default function Industries() {
  const industries = [
    {
      title: "Consultants",
      description:
        "Build predictable client acquisition systems with lead generation, CRM implementation and automation.",
    },
    {
      title: "Coaches",
      description:
        "Generate qualified consultation calls and automate client onboarding workflows.",
    },
    {
      title: "Solar Companies",
      description:
        "Capture, track and convert high-intent solar leads through optimized systems.",
    },
    {
      title: "Agencies & Freelancers",
      description:
        "Scale delivery through white-label fulfillment, automation and backend support.",
    },
  ];

  return (
    <section className="py-10 bg-[#070b18]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-4xl mb-16">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            Industries We Serve
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Growth Systems Built For
          </h2>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mt-2">
            Specific Industries.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {industries.map((industry) => (
            <div
              key={industry.title}
              className="
              group
              border
              border-white/10
              rounded-3xl
              p-8
              bg-white/[0.03]
              hover:border-orange-500/30
              hover:-translate-y-1
              transition-all
              duration-300
              "
            >
              <h3 className="text-2xl font-semibold mb-4">
                {industry.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {industry.description}
              </p>

              <button
                className="
                text-orange-500
                font-medium
                group-hover:translate-x-1
                transition-transform
                "
              >
                Explore Solutions →
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
            Not Sure Which Solution Fits?
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Book a consultation and we'll recommend the best growth system
            based on your business model, goals and current bottlenecks.
          </p>

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
            Book Consultation
          </a>
        </div>

      </div>
    </section>
  );
}