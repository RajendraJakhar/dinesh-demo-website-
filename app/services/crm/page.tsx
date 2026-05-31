import Link from "next/link";

export default function CRMPage() {
  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            CRM Implementation Services
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Turn Your CRM Into
            <br />
            A Revenue System.
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            We design and implement CRM systems that improve
            lead visibility, automate workflows and create
            predictable sales processes for growing businesses.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition text-black font-semibold"
            >
              Book Consultation
            </Link>

            <Link
              href="/case-studies"
              className="px-8 py-4 rounded-full border border-white/10"
            >
              View Case Studies
            </Link>
          </div>

        </div>
      </section>

      {/* Problems */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              CRM Challenges
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Why Most CRMs Fail.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Leads Falling Through",
              "No Sales Visibility",
              "Manual Processes",
            ].map((item) => (
              <div
                key={item}
                className="p-8 rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                <h3 className="text-xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CRM Framework */}
      <section className="py-24 bg-[#070b18]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              CRM Framework
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Built Around Your Sales Process.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              "Pipeline Design",
              "Lead Tracking",
              "Automation",
              "Reporting",
            ].map((item) => (
              <div
                key={item}
                className="p-8 rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                <h3 className="text-xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold">
              Platforms We Work With.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              "Zoho Bigin",
              "HubSpot",
              "GoHighLevel",
              "Salesforce",
            ].map((platform) => (
              <div
                key={platform}
                className="p-8 rounded-3xl border border-white/10 text-center"
              >
                <h3 className="text-xl font-semibold">
                  {platform}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#070b18]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            <div>
              <h2 className="text-4xl md:text-5xl font-bold">
                What You Gain.
              </h2>
            </div>

            <div className="space-y-6">

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Centralized lead management
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Automated follow-up workflows
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Better pipeline visibility
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Improved conversion tracking
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            <div className="border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">
                Can you migrate data from our existing CRM?
              </h3>

              <p className="text-gray-400">
                Yes. We can help migrate contacts, pipelines and workflows.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">
                Do you provide CRM training?
              </h3>

              <p className="text-gray-400">
                Yes. We ensure your team can confidently use the new system.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0d1430] to-[#141d3d] p-12 md:p-20 text-center">

            <h2 className="text-4xl md:text-6xl font-bold">
              Ready To Build
              A Better CRM?
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Create a CRM system that supports growth,
              automation and better sales visibility.
            </p>

            <Link
              href="/contact"
              className="inline-flex mt-10 px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition text-black font-semibold"
            >
              Book Consultation
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}