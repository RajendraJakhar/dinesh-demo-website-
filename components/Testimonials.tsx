"use client";

import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: "01",
      company: "Solar Company",
      role: "Founder",
      metric: "+312%",
      label: "Qualified Leads",
      quote:
        "VAATIRA completely transformed our lead generation process. Within 90 days we had a predictable appointment pipeline and significantly higher lead quality.",
    },
    {
      id: "02",
      company: "Consulting Firm",
      role: "Managing Partner",
      metric: "₹18L+",
      label: "Pipeline Generated",
      quote:
        "The systems VAATIRA implemented gave us visibility, automation and consistency. We stopped relying on referrals and started generating opportunities predictably.",
    },
    {
      id: "03",
      company: "Agency Partner",
      role: "Agency Owner",
      metric: "40+",
      label: "Hours Saved Monthly",
      quote:
        "White-label fulfillment allowed us to scale without hiring. Delivery became smoother, faster and far more profitable.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="py-14 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="max-w-5xl mb-6">

          <p className="text-orange-500 uppercase tracking-[0.25em] text-sm mb-5">
            Testimonials
          </p>

          <h2 className="text-[1rem] md:text-[2.7rem] font-bold leading-[1.05] tracking-[-0.04em]">
            Trusted By Businesses
          </h2>

          <h2 className="text-[1rem] md:text-[2.7rem] font-bold text-zinc-100 leading-[1.55] tracking-[-0.04em]">
            Focused On Growth.
          </h2>

        </div>

        {/* Main Area */}

        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Quote */}

          <div className="lg:col-span-8">

            <div
              className="
              border-l-2
              border-orange-500
              pl-8
              "
            >

              <p
                className="
                text-xl
                md:text-xl
                font-medium
                leading-[1.3]
                text-white
                "
              >
                “{testimonials[active].quote}”
              </p>

              <div className="mt-8">

                <p className="text-xl font-semibold">
                  {testimonials[active].company}
                </p>

                <p className="text-zinc-500">
                  {testimonials[active].role}
                </p>

              </div>

            </div>

          </div>

          {/* Metric */}

          <div className="lg:col-span-3">

            <div
              className="
              border
              border-white/10
              rounded-[16px]
              p-6
              bg-white/[0.02]
              "
            >

              <div
                className="
                text-3xl
                md:text-4xl
                font-bold
                text-orange-500
                "
              >
                {testimonials[active].metric}
              </div>

              <p
                className="
                mt-4
                uppercase
                tracking-[0.2em]
                text-zinc-500
                "
              >
                {testimonials[active].label}
              </p>

            </div>

          </div>

        </div>

        {/* Client Selector */}

        <div className="mt-10 border-t border-white/10">

          {testimonials.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActive(index)}
              className={`
                w-full
                flex
                items-center
                justify-between
                py-4
                border-b
                border-white/10
                text-left
                transition-all

                ${
                  active === index
                    ? "text-orange-500"
                    : "text-white hover:text-orange-400"
                }
              `}
            >
              <div className="flex items-center gap-6">

                <span className="text-sm tracking-widest">
                  {item.id}
                </span>

                <span className="text-2xl font-semibold">
                  {item.company}
                </span>

              </div>

              <span className="text-zinc-500">
                {item.metric}
              </span>
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}