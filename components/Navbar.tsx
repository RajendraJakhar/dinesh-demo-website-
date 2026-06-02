"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Solutions", href: "/solutions" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "White Label", href: "/white-label" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <header
        className="
        fixed top-0 left-0 w-full z-50
        bg-[#050816]/90
        backdrop-blur-xl
        border-b border-white/5
        "
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="h-[78px] flex items-center justify-between">
            
            {/* Logo */}
            <Link
              href="/"
              className="relative flex items-center group"
            >
              <div
                className="
                absolute
                -inset-4
                bg-orange-500/10
                blur-2xl
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                rounded-full
                "
              />

              <Image
                src="/Logo.svg"
                alt="Vaatira"
                width={165}
                height={40}
                priority
                className="relative z-10"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                  text-[15px]
                  font-medium
                  transition-colors
                  duration-300

                  ${
                    item.label === "White Label"
                      ? "text-orange-400"
                      : "text-slate-300 hover:text-white"
                  }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href="#contact"
                className="
                px-5
                py-2.5

                rounded-full

                bg-orange-500
                hover:bg-orange-400

                text-white
                text-sm
                font-semibold

                transition-all
                duration-300

                hover:-translate-y-0.5

                shadow-[0_10px_30px_rgba(249,115,22,0.25)]
                "
              >
                Schedule Strategy Call
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="
              lg:hidden

              p-2.5

              rounded-xl

              border
              border-white/10

              bg-white/5

              text-white
              "
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`
        fixed inset-0 z-40 lg:hidden

        bg-[#050816]

        transition-all duration-300

        ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }
        `}
      >
        <div className="pt-28 px-8 flex flex-col">
          <div className="flex flex-col gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                text-4xl
                font-semibold
                tracking-tight

                ${
                  item.label === "White Label"
                    ? "text-orange-400"
                    : "text-white"
                }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="
            mt-12

            text-center

            py-4

            rounded-full

            bg-orange-500
            hover:bg-orange-400

            text-white
            font-semibold

            transition-all
            duration-300
            "
          >
            Schedule Strategy Call
          </a>
        </div>
      </div>
    </>
  );
}