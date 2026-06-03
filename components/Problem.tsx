export default function Problem() {
  const problems = [
    {
      title: "Leads Get Lost",
      text: "Most businesses generate leads but have no structured system to track, manage and convert them consistently.",
    },
    {
      title: "No Follow-Up Process",
      text: "Manual follow-ups create delays, missed opportunities and inconsistent sales performance.",
    },
    {
      title: "No Visibility",
      text: "Without CRM systems and reporting, it's difficult to understand what is working and what is not.",
    },
  ];

  return (
    <section className="py-13 border-t border-white/5 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mb-10">
          <p className="text-orange-400 uppercase tracking-[0.3em] text-sm font-medium bold mb-4">
            THE PROBLEM
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.04em] leading-tight text-white">
            Most Businesses Don't Need
            <br />
            More Marketing.
          </h2>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.04em] leading-tight text-orange-400 mt-2">
            They Need A System.
          </h2>

          <p className="mt-6 text-zinc-400 text-lg max-w-2xl leading-relaxed">
            More leads won't fix a broken process. Most businesses struggle
            because lead generation, follow-up and conversion are disconnected.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {problems.map((item, index) => (
            <div
              key={item.title}
              className="
                group
                relative
                overflow-hidden

                rounded-3xl
                border
                border-white/5

                bg-gradient-to-b
                from-white/[0.04]
                to-white/[0.01]

                p-7

                transition-all
                duration-300

                hover:border-orange-500/30
                hover:-translate-y-2

                hover:shadow-[0_20px_60px_rgba(149,115,22,0.16)]
              "
            >
              {/* Orange Accent */}
              <div
                className="
                absolute
                top-0
                left-0
                h-full
                w-[9px]

                bg-orange-500

                opacity-0
                group-hover:opacity-100

                transition-all
                duration-300
                "
              />

              {/* Number */}
              <div className="text-orange-400 text-sm font-semibold tracking-[0.2em] mb-8">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3
                className="
                text-2xl
                font-semibold
                mb-4

                transition-colors
                duration-300

                group-hover:text-orange-400
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <p className="text-xl md:text-2xl text-white max-w-4xl leading-relaxed">
            Most businesses don't have a lead problem.
            <span className="text-orange-400">
              {" "}They have a systems problem.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}