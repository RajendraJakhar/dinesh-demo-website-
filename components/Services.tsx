export default function Services() {
  const services = [
    {
      number: "01",
      title: "Lead Generation",
      description:
        "Build predictable lead pipelines through SEO, LinkedIn outreach, paid acquisition and conversion-focused landing pages.",
    },
    {
      number: "02",
      title: "CRM Implementation",
      description:
        "Create scalable CRM systems that organize leads, automate workflows and improve sales visibility.",
    },
    {
      number: "03",
      title: "Marketing Automation",
      description:
        "Reduce manual work through automated follow-ups, lead nurturing and customer communication systems.",
    },
    {
      number: "04",
      title: "WhatsApp Automation",
      description:
        "Automate lead qualification, reminders and customer engagement directly through WhatsApp.",
    },
    {
      number: "05",
      title: "Appointment Booking Systems",
      description:
        "Streamline scheduling with CRM-integrated booking and qualification workflows.",
    },
    {
      number: "06",
      title: "White-Label Fulfillment",
      description:
        "Reliable backend execution for agencies and freelancers who need delivery capacity without increasing overhead.",
    },
  ];

  return (
    <section
      id="services"
      className="py-13 border-t border-white/5 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-orange-400 uppercase tracking-[0.3em] text-sm font-medium mb-4">
            SERVICES
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.04em] leading-tight text-white">
            Everything Required To Build
            <br />
            A Predictable Growth System.
          </h2>

          <p className="mt-4 text-zinc-400 text-lg max-w-2xl leading-relaxed">
            From lead generation to automation and white-label execution,
            VAATIRA builds the systems required for sustainable growth.
          </p>
        </div>

        {/* Services */}
        <div className="mt-10 border-t border-white/10">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                py-6
                border-b
                border-white/10
                transition-all
                duration-300
                hover:border-orange-500/20
              "
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                
                {/* Left Side */}
                <div className="flex items-center gap-5 min-w-[320px]">
                  
                  <span
                    className="
                    text-orange-400
                    text-lg
                    font-bold
                    tracking-[0.2em]
                    "
                  >
                    {service.number}
                  </span>

                  <div className="w-3 h-px bg-white/10" />

                  <h3
                    className="
                    text-xl
                    md:text-xl
                    font-semibold
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-orange-400
                    "
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Right Side */}
                <p
                  className="
                  max-w-xl
                  text-zinc-400
                  leading-relaxed
                  transition-colors
                  duration-300
                  group-hover:text-zinc-300
                  "
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-13 pt-10 border-t border-white/10">
          <div className="max-w-3xl">
            <p className="text-zinc-400 text-lg">
              Need a custom growth system built around your business model,
              sales process and market?
            </p>

            <button
              className="
              mt-6
              px-6
              py-3.5
              rounded-full
              bg-orange-500
              hover:bg-orange-400
              text-white
              font-semibold
              transition-all
              duration-300
              "
            >
              Schedule Strategy Call →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}