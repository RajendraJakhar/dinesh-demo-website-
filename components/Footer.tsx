import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#040612] border-t border-white/10 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-12">

        {/* Top Section */}
        <div className="grid lg:grid-cols-5 gap-16">

          {/* Brand */}
          <div className="lg:col-span-2">

            <div
              className="
              inline-flex
              items-center
              px-4
              py-2
              rounded-full
              border
              border-orange-500/20
              bg-orange-500/5
              text-orange-400
              text-xs
              tracking-[0.2em]
              uppercase
              mb-6
              "
            >
              Growth Systems Consultancy
            </div>

            <Image
              src="/Logo.svg"
              alt="Vaatira"
              width={220}
              height={70}
              className="mb-6"
            />

            <p className="text-zinc-400 leading-8 max-w-md">
              VAATIRA helps consultants, coaches, solar companies and
              agencies build predictable client acquisition systems through
              lead generation, CRM implementation, automation and
              growth-focused execution.
            </p>

            <div className="flex gap-4 mt-8">

              <div
                className="
                px-4
                py-2
                rounded-full
                border
                border-white/10
                text-zinc-300
                text-sm
                "
              >
                500+ Calls
              </div>

              <div
                className="
                px-4
                py-2
                rounded-full
                border
                border-white/10
                text-zinc-300
                text-sm
                "
              >
                12+ Industries
              </div>

            </div>

          </div>

          {/* Solutions */}
          <div>

            <h3
              className="
              text-white
              uppercase
              tracking-wider
              text-sm
              font-semibold
              mb-6
              "
            >
              Solutions
            </h3>

            <ul className="space-y-4">

              {[
                "Consultants",
                "Coaches",
                "Solar Companies",
                "Agencies",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="
                    text-zinc-400
                    hover:text-orange-500
                    transition-colors
                    duration-300
                    "
                  >
                    {item}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3
              className="
              text-white
              uppercase
              tracking-wider
              text-sm
              font-semibold
              mb-6
              "
            >
              Services
            </h3>

            <ul className="space-y-4">

              {[
                "Lead Generation",
                "CRM Implementation",
                "Marketing Automation",
                "WhatsApp Automation",
                "SEO",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="
                    text-zinc-400
                    hover:text-orange-500
                    transition-colors
                    duration-300
                    "
                  >
                    {item}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Company */}
          <div>

            <h3
              className="
              text-white
              uppercase
              tracking-wider
              text-sm
              font-semibold
              mb-6
              "
            >
              Company
            </h3>

            <ul className="space-y-4">

              {[
                "About",
                "Case Studies",
                "Blog",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="
                    text-zinc-400
                    hover:text-orange-500
                    transition-colors
                    duration-300
                    "
                  >
                    {item}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* Divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Bar */}
        <div
          className="
          pt-8
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          "
        >
          <p className="text-zinc-500 text-sm">
            © 2026 VAATIRA SOLUTIONS. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-sm">

            <Link
              href="/privacy-policy"
              className="
              text-zinc-500
              hover:text-orange-500
              transition
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="
              text-zinc-500
              hover:text-orange-500
              transition
              "
            >
              Terms & Conditions
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}