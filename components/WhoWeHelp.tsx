export default function WhoWeHelp() {
  const industries = [
    {
      title: "Consultants",
      description:
        "Generate qualified consultation calls with a predictable acquisition system.",
    },
    {
      title: "Coaches",
      description:
        "Automate lead nurturing, appointment booking and client onboarding.",
    },
    {
      title: "Solar Companies",
      description:
        "Convert inquiries into booked appointments with structured follow-up systems.",
    },
    {
      title: "Agencies",
      description:
        "Scale delivery capacity through automation and white-label execution.",
    },
  ];

  return (
    <section className="py-11 border-t border-white/5 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-orange-400 uppercase tracking-[0.3em] text-sm font-medium mb-5">
            WHO WE WORK BEST WITH
          </p>

          <h2 className="text-4xl md:text-4xl font-bold tracking-[-0.04em] leading-tight text-white">
            Built For Growth-Driven
            <br />
            Service Businesses.
          </h2>

          <p className="mt-5 text-zinc-400 text-lg max-w-2xl leading-relaxed">
            VAATIRA partners with businesses that rely on lead generation,
            appointments and client acquisition to scale predictably.
          </p>
        </div>

        {/* Industries */}
        <div className="mt-6 border-t border-white/10">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="
                group
                py-5
                border-b
                border-white/10
                transition-all
                duration-300
                hover:border-orange-500/20
              "
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                
                {/* Left */}
                <div className="flex items-center gap-3">
                  <span
                    className="
                    text-orange-400
                    text-xl
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    "
                  >
                    →
                  </span>

                  <h3
                    className="
                    text-xl
                    md:text-2xl
                    font-semibold
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-orange-400
                    "
                  >
                    {industry.title}
                  </h3>
                </div>

                {/* Right */}
                <p
                  className="
                  max-w-xl
                  text-zinc-400
                  leading-relaxed
                  transition-colors
                  duration-300
                  group-hover:text-zinc-300
                  "
                >
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}