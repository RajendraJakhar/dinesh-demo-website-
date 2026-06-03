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
    <section className="py-14 bg-[#050816] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-5xl mb-14">
          <p className="text-orange-500 uppercase tracking-[0.25em] text-sm mb-5">
            The Growth System
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            We Don't Sell Marketing.
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold text-zinc-300 mt-2">
            We Build Predictable Systems.
          </h2>

          <p className="mt-6 text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Every stage is connected into a single growth infrastructure
            designed to generate, nurture and convert leads consistently.
          </p>
        </div>

        {/* Timeline */}
        <div className="border-t border-white/10">

          {steps.map((step) => (
            <div
              key={step.number}
              className="
              grid
              md:grid-cols-12
              gap-10
              py-5
              border-b
              border-white/10
              hover:bg-white/[0.02]
              transition-all
              duration-300
              "
            >

              {/* Left */}
              <div className="md:col-span-4 flex items-center gap-6">

                <div
                  className="
                  w-12
                  h-12
                  rounded-full
                  bg-orange-500
                  text-black
                  font-bold
                  flex
                  items-center
                  justify-center
                  shrink-0
                  "
                >
                  {step.number}
                </div>

                <h3 className="text-2xl font-semibold">
                  {step.title}
                </h3>

              </div>

              {/* Right */}
              <div className="md:col-span-8">

                <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                  {step.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}