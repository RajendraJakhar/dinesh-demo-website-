export default function Stats() {
  const stats = [
    {
      number: "500+",
      label: "Qualified Calls",
    },
    {
      number: "12+",
      label: "Industries Served",
    },
    {
      number: "4",
      label: "Countries Served",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section className="py-14 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
              text-center
              "
            >
              <h3
                className="
                text-5xl
                md:text-6xl
                font-bold
                text-orange-500
                mb-3
                "
              >
                {stat.number}
              </h3>

              <p
                className="
                text-zinc-400
                uppercase
                tracking-[0.15em]
                text-sm
                "
              >
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}