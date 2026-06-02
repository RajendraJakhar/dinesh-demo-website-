export default function WhoWeHelp() {
  const industries = [
    {
      title: "Consultants",
      description: "Generate qualified consultation calls.",
    },
    {
      title: "Coaches",
      description: "Automate lead nurturing and onboarding.",
    },
    {
      title: "Solar Companies",
      description: "Convert inquiries into booked appointments.",
    },
    {
      title: "Agencies",
      description: "Scale delivery through systems and white-label execution.",
    },
  ];

  return (
    <section className="py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">

        <div className="max-w-3xl">

          <p className="text-orange-400 uppercase tracking-[0.25em] text-sm mb-4">
            Who We Help
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em]">
            Built For Businesses That Need
            Predictable Client Acquisition.
          </h2>

          <p className="mt-6 text-zinc-400 text-lg">
            We partner with service businesses that rely on
            appointments, lead generation and client acquisition.
          </p>

        </div>

        <div className="mt-16 border-t border-white/10">

          {industries.map((industry) => (
            <div
              key={industry.title}
              className="
              flex
              flex-col
              md:flex-row
              md:items-center
              justify-between
              gap-4
              py-8
              border-b
              border-white/10
              "
            >
              <h3 className="text-2xl font-semibold">
                {industry.title}
              </h3>

              <p className="text-zinc-400 max-w-xl">
                {industry.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}