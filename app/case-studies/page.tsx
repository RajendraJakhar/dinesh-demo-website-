import Link from "next/link";

const caseStudies = [
  {
    title: "Lead Generation System",
    industry: "Consulting",
    result: "Predictable Lead Flow",
    description:
      "Built a complete lead acquisition system combining landing pages, CRM workflows and automation.",
  },
  {
    title: "CRM Implementation",
    industry: "Service Business",
    result: "Centralized Operations",
    description:
      "Designed a CRM infrastructure to improve lead tracking, sales visibility and follow-up management.",
  },
  {
    title: "Marketing Automation",
    industry: "Coaching",
    result: "Scalable Follow-Up",
    description:
      "Automated lead nurturing and appointment booking systems to reduce manual workload.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            Case Studies
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Systems.
            <br />
            Execution.
            <br />
            Results.
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            Explore how growth infrastructure, CRM implementation,
            automation and lead generation systems help businesses
            create predictable client acquisition.
          </p>

        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-[40px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#0d1430] to-[#141d3d] p-12 md:p-20">

            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              Featured Project
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Growth Infrastructure Buildout
            </h2>

            <p className="text-gray-400 max-w-3xl text-lg">
              A complete system including lead generation,
              CRM architecture, automation workflows,
              appointment booking and reporting dashboards.
            </p>

          </div>

        </div>
      </section>

      {/* Case Study Cards */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {caseStudies.map((item) => (
              <div
                key={item.title}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                hover:border-orange-500/30
                transition-all
                "
              >
                <p className="text-orange-500 text-sm uppercase mb-3">
                  {item.industry}
                </p>

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {item.description}
                </p>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-sm text-gray-500 mb-2">
                    Outcome
                  </p>

                  <p className="font-semibold text-lg">
                    {item.result}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#070b18]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              Methodology
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Our Approach.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Discovery",
              "Strategy",
              "Implementation",
              "Optimization",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 p-8"
              >
                <div className="text-orange-500 text-3xl font-bold mb-6">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-semibold">
                  {step}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0d1430] to-[#141d3d] p-12 md:p-20 text-center">

            <h2 className="text-4xl md:text-6xl font-bold">
              Ready To Build
              Predictable Growth?
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Let's design a system that generates leads,
              automates follow-up and scales revenue.
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