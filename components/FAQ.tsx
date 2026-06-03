"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What industries do you work with?",
      answer:
        "We primarily work with consultants, coaches, solar companies, agencies and service-based businesses looking to build predictable growth systems.",
    },
    {
      question: "Do you only provide lead generation services?",
      answer:
        "No. We focus on the complete growth system including lead generation, CRM implementation, automation, appointment booking and conversion workflows.",
    },
    {
      question: "Can you work with our existing CRM?",
      answer:
        "Yes. We can optimize your current CRM or recommend and implement a new system based on your business requirements.",
    },
    {
      question: "Do you offer white-label fulfillment?",
      answer:
        "Yes. Agencies and freelancers can partner with us for backend execution while maintaining their own client relationships.",
    },
    {
      question: "How do we get started?",
      answer:
        "Simply book a consultation call. We'll understand your business, identify growth bottlenecks and recommend the best system for your goals.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[#070b18]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            Frequently Asked Questions
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Questions We
          </h2>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mt-2">
            Get Asked Often.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="
              border
              border-white/10
              rounded-2xl
              overflow-hidden
              bg-white/[0.03]
              "
            >
              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index
                  )
                }
                className="
                w-full
                flex
                items-center
                justify-between
                px-6
                py-5
                text-left
                "
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <span className="text-orange-500 text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}