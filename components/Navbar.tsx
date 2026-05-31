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
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <header
         className="
          fixed top-0 left-0 w-full z-50
          bg-[#0P1090]/95
          backdrop-blur-xl
          border-b border-white/10
       "
      >
      
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="h-[62px] flex items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="bg-white rounded-xl px-3 py-2 shadow-lg"
            >

              <Image
                src="/logo.svg"
                alt="Vaatira"
                width={150}
                height={30}
                priority
            />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                  relative
                  text-[15px]
                  font-medium
                  text-white/80
                  hover:text-white
                  transition-all
                  duration-300

                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-orange-500
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                  "
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
                text-sm
                font-semibold
                text-white

                bg-gradient-to-r
                from-orange-500
                to-orange-600

                shadow-[0_10px_30px_rgba(249,115,22,0.35)]

                hover:scale-105
                hover:shadow-[0_15px_45px_rgba(249,115,22,0.5)]

                transition-all
                duration-300
                "
              >
                Book Consultation
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="
              lg:hidden
              text-white
              p-2
              rounded-lg
              border
              border-white/10
              bg-white/5
              "
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
          fixed inset-0 z-40
          bg-[#050816]/95
          backdrop-blur-3xl
          lg:hidden
          "
        >
          <div className="pt-24 px-8 flex flex-col gap-8">

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                text-3xl
                font-bold
                tracking-tight
                text-white
                "
              >
                {item.label}
              </Link>
            ))}

            <a
              href="#contact"
              className="
              mt-4
              text-center
              py-4
              rounded-full
              bg-gradient-to-r
              from-orange-500
              to-orange-600
              text-white
              font-semibold
              "
            >
              Book Consultation
            </a>

          </div>
        </div>
      )}
    </>
  );
}