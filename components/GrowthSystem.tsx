export default function GrowthSystem() {
  const steps = [
    {
      number: "01",
      title: "Traffic",
      desc: "Generate qualified traffic through SEO, paid ads, LinkedIn outreach and strategic campaigns.",
    },
    {
      number: "02",
      title: "Lead Capture",
      desc: "Convert visitors into leads using landing pages, forms and lead magnets.",
    },
    {
      number: "03",
      title: "CRM",
      desc: "Organize every lead inside a structured CRM pipeline with complete visibility.",
    },
    {
      number: "04",
      title: "Automation",
      desc: "Automate follow-ups, nurturing and communication across channels.",
    },
    {
      number: "05",
      title: "Appointments",
      desc: "Book qualified consultations directly into your calendar system.",
    },
    {
      number: "06",
      title: "Revenue",
      desc: "Turn predictable appointments into predictable revenue growth.",
    },
  ];

  return (
    <section className="py-28 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-5xl mb-20">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            The Growth System
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            We Don't Sell Marketing.
          </h2>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mt-2">
            We Build Predictable Systems.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {steps.map((step) => (
            <div
              key={step.title}
              className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              hover:border-orange-500/30
              transition-all
              duration-300
              "
            >
              {/* Glow */}
              <div
                className="
                absolute
                top-0
                right-0
                h-32
                w-32
                bg-orange-500/10
                blur-3xl
                opacity-0
                group-hover:opacity-100
                transition
                "
              />

              <div
                className="
                w-14
                h-14
                rounded-full
                bg-orange-500
                flex
                items-center
                justify-center
                text-black
                font-bold
                text-lg
                mb-6
                "
              >
                {step.number}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div
          className="
          mt-16
          text-center
          "
        >
          <p className="text-gray-400 mb-6">
            Every stage is connected into one predictable growth engine.
          </p>

          <a
            href="#contact"
            className="
            inline-flex
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
            Book Strategy Call
          </a>
        </div>

      </div>
    </section>
  );
}