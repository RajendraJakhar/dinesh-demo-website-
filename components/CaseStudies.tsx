export default function CaseStudies() {
  const studies = [
    {
      industry: "Consulting",
      title: "Built A Predictable Lead Generation System",
      result: "+147% Qualified Leads",
      description:
        "Implemented CRM, automation and appointment booking workflows to create a predictable client acquisition process.",
    },
    {
      industry: "Solar Company",
      title: "Improved Lead Tracking & Follow-Ups",
      result: "+82% Appointment Rate",
      description:
        "Integrated lead capture, CRM pipelines and automated follow-up systems to increase conversions.",
    },
    {
      industry: "Agency",
      title: "White-Label Fulfillment Partnership",
      result: "40+ Projects Delivered",
      description:
        "Provided backend execution support allowing the agency to scale without increasing internal overhead.",
    },
  ];

  return (
    <section className="py-28 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-4xl mb-16">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            Case Studies
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Results That Build
          </h2>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mt-2">
            Trust & Authority.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">

          {studies.map((study) => (
            <div
              key={study.title}
              className="
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                hover:border-orange-500/30
                transition-all
              "
            >
              <span
                className="
                  inline-block
                  px-4
                  py-2
                  rounded-full
                  bg-orange-500/10
                  text-orange-500
                  text-sm
                  mb-6
                "
              >
                {study.industry}
              </span>

              <h3 className="text-2xl font-semibold mb-4">
                {study.title}
              </h3>

              <div className="text-4xl font-bold text-orange-500 mb-4">
                {study.result}
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                {study.description}
              </p>

              <button
                className="
                  text-orange-500
                  font-medium
                  hover:translate-x-1
                  transition-transform
                "
              >
                View Case Study →
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
            Want Similar Results?
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let's design a growth system tailored to your business goals,
            industry and sales process.
          </p>

          <button
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
          </button>
        </div>

      </div>
    </section>
  );
}