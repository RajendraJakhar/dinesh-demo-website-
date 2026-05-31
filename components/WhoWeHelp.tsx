export default function WhoWeHelp() {
  const industries = [
    {
      title: "Consultants",
      description:
        "Generate qualified consultation calls and build a predictable client acquisition system.",
    },
    {
      title: "Coaches",
      description:
        "Automate lead nurturing, appointment booking and client onboarding.",
    },
    {
      title: "Solar Companies",
      description:
        "Build lead generation systems that convert inquiries into booked appointments.",
    },
    {
      title: "Agencies",
      description:
        "Scale delivery capacity through CRM systems, automation and white-label execution.",
    },
  ];

  return (
    <section className="py-24 bg-[#050816] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mb-16">

          <p className="text-orange-500 uppercase tracking-[0.2em] text-sm mb-4">
            Who We Help
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Built For Service Businesses
            That Want Predictable Growth.
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            We don't work with everyone.
            We specialize in businesses that rely on lead generation,
            appointments and client acquisition.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {industries.map((industry) => (
            <div
              key={industry.title}
              className="
              p-8
              rounded-3xl
              border
              border-white/10
              hover:border-orange-500/30
              transition
              "
            >
              <h3 className="text-2xl font-semibold mb-4">
                {industry.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}