"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Magnet,
  Database,
  Send,
  CalendarDays,
  Trophy,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Traffic Sources",
    desc: "Targeted traffic from high-intent channels",
  },
  {
    icon: Magnet,
    title: "Lead Capture",
    desc: "Funnels and landing pages that convert",
  },
  {
    icon: Database,
    title: "CRM Pipeline",
    desc: "Every lead tracked and organized",
  },
  {
    icon: Send,
    title: "Automated Follow-Up",
    desc: "No lead left behind",
  },
  {
    icon: CalendarDays,
    title: "Appointment Booking",
    desc: "Qualified calls booked automatically",
  },
  {
    icon: Trophy,
    title: "Client Acquisition",
    desc: "Predictable growth and revenue",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen pt-20 lg:pt-20 pb-10">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030712]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.15),transparent_5%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(59,130,246,0.12),transparent_35%)]" />
      

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            

            <h1 className="mt-8 max-w-[700px] text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-[-0.02em] text-white">
              Scale Your Business
              <br />
              With <span className="text-orange-500">Systems,</span>
              <br />
              Not More Chaos.
            </h1>

            <p className="mt-8 max-w-xl text-lg text-zinc-300 leading-relaxed">
              VAATIRA helps consultants, agencies, coaches and solar companies
              build lead generation, CRM and automation systems that create
              predictable client acquisition without increasing operational
              complexity.
            </p>
            <div className="mt-8 border-l-2 border-orange-500 pl-5 max-w-xl">
              <p className="text-lg text-zinc-300 leading-relaxed">
               Most businesses don't have a lead problem.
                <span className="text-orange-400 font-medium">
                {" "}They have a systems problem.
                </span>
              </p>

              <p className="mt-3 text-zinc-400">
                VAATIRA builds the infrastructure required for sustainable,
                scalable and predictable growth.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white hover:bg-orange-400 transition"
              >
                Schedule Strategy Call
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/case-studies"
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 text-white hover:bg-white/[0.06] transition"
              >
                Explore Case Studies
              </Link>
            </div>

            {/* Industry Pills */}
            <div className="mt-12 flex flex-wrap gap-3">
              {[
                "Consultants",
                "Coaches",
                "Agencies",
                "Solar Companies",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-white/5 bg-white/[0.01] text-sm text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Countries */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="mb-4 text-orange-400 font-medium">
                Global Coverage
              </p>

             <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
              <span>USA</span>

              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

              <span>UK</span>

              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

              <span>Australia</span>

              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

              <span>New Zealand</span>

              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
             </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <h2 className="mt-2 text-3xl lg:text-4xl font-bold tracking-[-0.04em] text-white">
              One System.
              <span className="text-orange-500">
                {" "}Predictable Growth.
              </span>
            </h2>

            <div className="mt-12 space-y-2">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.title}>
                    <div className="flex items-start gap-5">
                      <div className="h-14 w-14 rounded-full border border-orange-500/20 bg-orange-500/5 flex items-center justify-center shrink-0">
                        <Icon size={22} className="text-orange-400" />
                      </div>

                      <div className="pt-1">
                        <h3 className="font-semibold text-white text-lg">
                          {step.title}
                        </h3>

                        <p className="mt-1 text-zinc-400">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {index !== steps.length - 1 && (
                      <div className="ml-7 mt-4 h-9 w-px bg-gradient-to-b from-orange-500 via-orange-500/40 to-transparent" />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}