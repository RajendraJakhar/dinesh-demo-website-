import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            About Vaatira
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Building Growth Systems,
            <br />
            Not Marketing Noise.
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8 leading-relaxed">
            Vaatira helps consultants, coaches, solar companies,
            agencies and service businesses build predictable
            client acquisition systems through lead generation,
            CRM implementation, automation and execution.
          </p>

        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            <div>
              <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
                Our Mission
              </p>

              <h2 className="text-4xl md:text-5xl font-bold">
                Predictable Growth
                For Modern Businesses.
              </h2>
            </div>

            <div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Most businesses don't suffer from a marketing problem.
                They suffer from a systems problem.

                We help companies create a complete growth
                infrastructure where traffic, leads, CRM,
                automation and appointments work together
                as one scalable engine.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#070b18]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              Core Values
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              How We Think.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03]">
              <h3 className="text-xl font-semibold mb-4">
                Systems First
              </h3>

              <p className="text-gray-400">
                Sustainable growth comes from systems,
                not random campaigns.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03]">
              <h3 className="text-xl font-semibold mb-4">
                Data Driven
              </h3>

              <p className="text-gray-400">
                Every decision should be backed by
                measurable business outcomes.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03]">
              <h3 className="text-xl font-semibold mb-4">
                Long-Term Thinking
              </h3>

              <p className="text-gray-400">
                We build assets and infrastructure,
                not short-term hacks.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03]">
              <h3 className="text-xl font-semibold mb-4">
                Reliable Execution
              </h3>

              <p className="text-gray-400">
                Consistent delivery creates trust,
                momentum and results.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Vaatira */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              Why Vaatira
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              More Than An Agency.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">

            <div className="p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">
                Lead Generation
              </h3>

              <p className="text-gray-400">
                Build predictable pipelines instead of
                relying on referrals alone.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">
                CRM & Automation
              </h3>

              <p className="text-gray-400">
                Create systems that follow up,
                nurture and convert automatically.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">
                White-Label Execution
              </h3>

              <p className="text-gray-400">
                Agencies scale delivery while
                maintaining client relationships.
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
              Let's Build Your
              Growth Infrastructure.
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-6">
              Whether you're a consultant, coach,
              solar company or agency,
              we'll help you create a predictable
              client acquisition system.
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