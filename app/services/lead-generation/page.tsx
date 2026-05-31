import Link from "next/link";

export default function LeadGenerationPage() {
  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            Lead Generation Services
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Generate More
            <br />
            Qualified Leads.
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            Build a predictable pipeline of qualified prospects
            through lead generation systems designed for consultants,
            coaches, solar companies and growth-focused businesses.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <Link
              href="/contact"
              className="
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

            <Link
              href="/case-studies"
              className="
              px-8
              py-4
              rounded-full
              border
              border-white/10
              "
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
              Common Problems
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Why Businesses
              Struggle With Lead Generation.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Inconsistent Lead Flow",
              "Poor Lead Quality",
              "No Predictable System",
            ].map((item) => (
              <div
                key={item}
                className="
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                "
              >
                <h3 className="text-xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Services Included */}
      <section className="py-24 bg-[#070b18]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              What's Included
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Complete Lead Generation Infrastructure.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              "Landing Pages",
              "Lead Magnets",
              "CRM Integration",
              "Automation Workflows",
            ].map((item) => (
              <div
                key={item}
                className="
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                "
              >
                <h3 className="font-semibold text-xl">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold">
              Our Process.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Research",
              "Strategy",
              "Implementation",
              "Optimization",
            ].map((step, index) => (
              <div
                key={step}
                className="
                p-8
                rounded-3xl
                border
                border-white/10
                "
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

      {/* Benefits */}
      <section className="py-24 bg-[#070b18]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            <div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Expected Outcomes.
              </h2>
            </div>

            <div className="space-y-6">

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ More qualified leads
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Improved lead quality
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Better conversion opportunities
              </div>

              <div className="border border-white/10 rounded-3xl p-6">
                ✓ Predictable growth systems
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
                Do you provide leads directly?
              </h3>

              <p className="text-gray-400">
                We build systems that consistently generate and manage qualified leads.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">
                Can this integrate with our CRM?
              </h3>

              <p className="text-gray-400">
                Yes. Our lead generation systems are designed to integrate with CRM workflows.
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
            bg-gradient-to-br
            from-[#0d1430]
            to-[#141d3d]
            p-12
            md:p-20
            text-center
            "
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready To Build
              A Lead Generation System?
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Let's create a predictable lead acquisition process
              tailored to your business and goals.
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