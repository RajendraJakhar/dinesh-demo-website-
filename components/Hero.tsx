"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-32 md:pt-40 pb-24">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span
                className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                border
                border-orange-500/20
                bg-orange-500/10
                text-orange-400
                text-sm
                "
              >
                Growth Systems Consultancy
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
              mt-8
              text-4xl
              md:text-6xl
              font-bold
              leading-tight
              "
            >
              More Leads.
              <br />

              More Appointments.
              <br />

              More Revenue.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="
              mt-8
              text-lg
              text-gray-400
              leading-relaxed
              max-w-2xl
              "
            >
              Vaatira helps consultants, coaches and solar companies
              generate qualified leads, automate follow-ups and build
              predictable client acquisition systems.
            </motion.p>

            {/* Desktop CTA Only */}
            <div className="hidden md:flex gap-4 mt-10">

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
                Schedule Strategy Call
              </Link>

              <Link
                href="/case-studies"
                className="
                px-8
                py-4
                rounded-full
                border
                border-white/10
                hover:bg-white/5
                transition
                "
              >
                View Case Studies
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
            "
          >
            <h3 className="text-2xl font-semibold mb-8">
              Growth System Framework
            </h3>

            <div className="space-y-4">

              {[
                "Traffic Generation",
                "Lead Capture",
                "CRM Pipeline",
                "Automation",
                "Appointments",
                "Revenue Growth",
              ].map((item, index) => (
                <div key={item}>

                  <div className="flex items-center gap-4">

                    <div
                      className="
                      w-10
                      h-10
                      rounded-full
                      bg-orange-500
                      text-black
                      font-bold
                      flex
                      items-center
                      justify-center
                      "
                    >
                      {index + 1}
                    </div>

                    <span className="font-medium">
                      {item}
                    </span>

                  </div>

                  {index !== 5 && (
                    <div className="ml-5 h-8 border-l border-orange-500/40" />
                  )}

                </div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}