export default function Problem() {
  const problems = [
    {
      title: "Leads Get Lost",
      text: "Most businesses generate leads but have no structured system to track and convert them.",
    },
    {
      title: "No Follow-Up Process",
      text: "Manual follow-ups create delays, missed opportunities and inconsistent results.",
    },
    {
      title: "No Visibility",
      text: "Without CRM and reporting, it's difficult to understand what is working.",
    },
  ];

  return (
    <section className="py-24 bg-[#070b18]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mb-16">
          <p className="text-orange-500 uppercase tracking-wider text-sm mb-4">
            The Problem
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Most Businesses Don't Need More Marketing.
          </h2>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mt-2">
            They Need A System.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item) => (
            <div
              key={item.title}
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
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}