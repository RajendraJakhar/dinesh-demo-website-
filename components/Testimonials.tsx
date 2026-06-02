export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Carter",
      role: "Business Consultant",
      quote:
        "Vaatira helped us build a structured lead generation and CRM system that completely changed how we acquire clients.",
    },
    {
      name: "Sarah Mitchell",
      role: "Growth Coach",
      quote:
        "The automation workflows saved hours every week and improved our appointment booking consistency.",
    },
    {
      name: "Daniel Roberts",
      role: "Agency Founder",
      quote:
        "Their white-label fulfillment support allowed us to scale delivery without hiring additional staff.",
    },
  ];

  return (
    <section className="py-10 bg-[#070b18]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl mb-16">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Trusted By Growth-Focused
          </h2>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mt-2">
            Businesses.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
              "
            >
              <p className="text-gray-300 leading-relaxed mb-8">
                "{item.quote}"
              </p>

              <div>
                <h4 className="font-semibold text-lg">
                  {item.name}
                </h4>

                <p className="text-gray-500 text-sm">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}