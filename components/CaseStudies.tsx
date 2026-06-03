export default function CaseStudies() {
  const studies = [
    {
      metric: "+312%",
      title: "Qualified Leads",
      company: "Solar Company",
      challenge:
        "Lead inquiries were coming in but there was no structured system to track, nurture and convert prospects.",
      solution:
        "Implemented CRM, automation workflows, lead capture funnels and appointment booking systems.",
      result:
        "Generated a predictable pipeline with significantly higher lead quality and conversion rates.",
    },
    {
      metric: "₹18L+",
      title: "Pipeline Generated",
      company: "Consulting Firm",
      challenge:
        "The business relied entirely on referrals and had no predictable lead generation process.",
      solution:
        "Built a complete acquisition system with landing pages, CRM implementation and automated follow-ups.",
      result:
        "Created a scalable sales pipeline capable of generating consistent opportunities every month.",
    },
    {
      metric: "40+",
      title: "Hours Saved Monthly",
      company: "Agency Partner",
      challenge:
        "Manual onboarding, reporting and fulfillment processes were slowing growth.",
      solution:
        "Introduced white-label execution workflows and automation systems.",
      result:
        "Reduced operational workload and improved delivery efficiency across client accounts.",
    },
  ];

  return (
    <section className="py-13 bg-[#050816] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="max-w-5xl mb-11">
          <p className="text-orange-500 uppercase tracking-[0.25em] text-sm mb-5">
            Case Studies
          </p>

          <h2 className="text-3xl text-[2.3rem] font-bold leading-tight">
            Real Systems.
          </h2>

          <h2 className="text-3xl text-[2.3rem] font-bold text-zinc-200 mt-2">
            Real Business Outcomes.
          </h2>
        </div>

        {/* Case Studies */}

        <div className="space-y-12">

          {studies.map((study, index) => (
            <div
              key={index}
              className="
              grid
              lg:grid-cols-12
              gap-10
              items-center
              "
            >
              {/* Metric Side */}

              <div className="lg:col-span-4">

                <div
                  className="
                  text-4xl
                  md:text-6xl
                  font-bold
                  text-orange-500
                  leading-none
                  "
                >
                  {study.metric}
                </div>

                <p
                  className="
                  mt-4
                  text-lg
                  uppercase
                  tracking-[0.2em]
                  text-zinc-500
                  "
                >
                  {study.title}
                </p>

              </div>

              {/* Content Side */}

              <div
                className="
                lg:col-span-8
                border-l
                border-white/10
                pl-8
                "
              >
                <h3 className="text-3xl font-semibold mb-8">
                  {study.company}
                </h3>

                <div className="space-y-8">

                  <div>
                    <p className="text-orange-500 text-sm uppercase tracking-widest mb-2">
                      Challenge
                    </p>

                    <p className="text-zinc-400 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="text-orange-500 text-sm uppercase tracking-widest mb-2">
                      Solution
                    </p>

                    <p className="text-zinc-400 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <p className="text-orange-500 text-sm uppercase tracking-widest mb-2">
                      Result
                    </p>

                    <p className="text-white leading-relaxed">
                      {study.result}
                    </p>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}