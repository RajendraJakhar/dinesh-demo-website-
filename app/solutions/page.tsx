import Link from "next/link";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Consultants",
      description:
        "Build predictable lead generation, CRM and appointment systems for consulting businesses.",
      href: "/solutions/consultants",
    },
    {
      title: "Coaches",
      description:
        "Generate consultation calls, automate follow-ups and scale your coaching business.",
      href: "/solutions/coaches",
    },
    {
      title: "Solar Companies",
      description:
        "Build a complete lead-to-installation growth system with CRM and automation.",
      href: "/solutions/solar",
    },
    {
      title: "Agencies & Freelancers",
      description:
        "Scale delivery through white-label fulfillment, CRM systems and automation.",
      href: "/solutions/agencies",
    },
  ];

  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-orange-500 uppercase tracking-[0.2em] text-sm mb-6">
            SOLUTIONS
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
            Growth Systems
            <br />
            Designed For Your
            <br />
            Business Model.
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            Every industry faces different growth challenges.
            Vaatira builds customized lead generation, CRM and
            automation systems based on your business model.
          </p>

        </div>
      </section>

      {/* Solution Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-8">

            {solutions.map((solution, index) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="
                group
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-10
                hover:border-orange-500/40
                hover:bg-white/[0.05]
                transition-all
                "
              >
                <div className="w-14 h-14 rounded-full bg-orange-500 text-black flex items-center justify-center font-bold text-lg mb-6">
                  0{index + 1}
                </div>

                <h3 className="text-3xl font-bold mb-4 group-hover:text-orange-400 transition">
                  {solution.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-lg">
                  {solution.description}
                </p>

                <div className="mt-8 text-orange-500 font-medium">
                  Explore Solution →
                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* Framework */}
      <section className="py-24 bg-[#070b18]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl mb-16">

            <p className="text-orange-500 uppercase tracking-[0.2em] text-sm mb-4">
              VAATIRA FRAMEWORK
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              One System.
              <br />
              Multiple Industries.
            </h2>

          </div>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              "Lead Generation",
              "CRM",
              "Automation",
              "Appointments",
              "Revenue",
            ].map((item) => (
              <div
                key={item}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                text-center
                "
              >
                <h3 className="font-semibold text-lg">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Industries Stats */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            <div className="text-center">
              <h3 className="text-5xl font-bold text-orange-500">
                4
              </h3>
              <p className="text-gray-400 mt-3">
                Core Industries
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-orange-500">
                CRM
              </h3>
              <p className="text-gray-400 mt-3">
                Infrastructure
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-orange-500">
                AI
              </h3>
              <p className="text-gray-400 mt-3">
                Automation Ready
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-orange-500">
                24/7
              </h3>
              <p className="text-gray-400 mt-3">
                Lead Handling
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div
            className="
            rounded-[40px]
            border
            border-white/10
            bg-gradient-to-r
            from-[#0d1430]
            to-[#151d3f]
            p-12
            md:p-20
            text-center
            "
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready To Build
              Your Growth System?
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-6">
              Get a customized strategy for lead generation,
              CRM implementation and automation.
            </p>

            <Link
              href="/contact"
              className="
              inline-flex
              mt-10
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
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}