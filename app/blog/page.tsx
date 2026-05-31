import Link from "next/link";

export default function BlogPage() {
  const categories = [
    "Lead Generation",
    "CRM",
    "Marketing Automation",
    "Consultant Growth",
    "Coaching Business Growth",
    "Solar Marketing",
    "Agency Operations",
    "White-Label Insights",
  ];

  const articles = [
    {
      title: "How To Build A Predictable Lead Generation System",
      category: "Lead Generation",
      readTime: "8 Min Read",
    },
    {
      title: "CRM Implementation Guide For Service Businesses",
      category: "CRM",
      readTime: "12 Min Read",
    },
    {
      title: "Marketing Automation Framework For Consultants",
      category: "Marketing Automation",
      readTime: "10 Min Read",
    },
    {
      title: "How Coaches Can Generate More Consultation Calls",
      category: "Coaching Business Growth",
      readTime: "7 Min Read",
    },
    {
      title: "Lead Generation Strategies For Solar Companies",
      category: "Solar Marketing",
      readTime: "9 Min Read",
    },
    {
      title: "Scaling Agency Delivery With White-Label Systems",
      category: "White-Label Insights",
      readTime: "11 Min Read",
    },
  ];

  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            Resource Center
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Insights, Systems
            <br />
            And Growth Strategies.
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            Practical guides, frameworks and resources
            covering lead generation, CRM implementation,
            automation and business growth systems.
          </p>

        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-wrap gap-4">

            {categories.map((category) => (
              <button
                key={category}
                className="
                px-5
                py-3
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                hover:border-orange-500/30
                transition
                "
              >
                {category}
              </button>
            ))}

          </div>

        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

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
            "
          >
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              Featured Article
            </p>

            <h2 className="text-4xl md:text-6xl font-bold max-w-4xl">
              The Complete Guide To Building
              A Predictable Client Acquisition System
            </h2>

            <p className="text-gray-400 max-w-2xl mt-8">
              Learn how lead generation, CRM,
              automation and appointment booking
              work together to create scalable growth.
            </p>

            <button
              className="
              mt-8
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
              Read Article
            </button>

          </div>

        </div>
      </section>

      {/* Articles */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {articles.map((article) => (
              <div
                key={article.title}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                hover:border-orange-500/30
                transition
                "
              >
                <p className="text-orange-500 text-sm mb-4">
                  {article.category}
                </p>

                <h3 className="text-2xl font-semibold mb-6">
                  {article.title}
                </h3>

                <div className="flex justify-between items-center">

                  <span className="text-gray-500 text-sm">
                    {article.readTime}
                  </span>

                  <button className="text-orange-500 font-medium">
                    Read More →
                  </button>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Lead Magnet */}
      <section className="pb-24">
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
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              Free Resource
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Growth System Checklist
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-6">
              Download a practical checklist to identify
              growth bottlenecks and improve lead conversion.
            </p>

            <button
              className="
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
              Download Checklist
            </button>

          </div>

        </div>
      </section>

    </main>
  );
}