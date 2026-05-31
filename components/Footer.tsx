import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#040612] border-t border-white/10">

      {/* Top CTA */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div
          className="
          rounded-[40px]
          border
          border-white/10
          bg-gradient-to-br
          from-[#0d1430]
          to-[#141d3d]
          p-10
          md:p-16
          "
        >
          <div className="max-w-4xl">
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
              Ready To Scale?
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Build A Predictable
              <br />
              Client Acquisition System.
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl">
              Lead Generation. CRM Implementation.
              Marketing Automation. Appointment Booking.
              Everything required to build a scalable growth system.
            </p>

            <a
              href="#contact"
              className="
              inline-flex
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
              Book Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">

            <Image
              src="/logo.svg"
              alt="Vaatira"
              width={200}
              height={60}
            />

            <p className="text-gray-400 mt-6 max-w-md leading-relaxed">
              Vaatira helps consultants, coaches,
              solar companies and agencies build
              predictable client acquisition systems
              through lead generation, CRM implementation,
              automation and growth-focused execution.
            </p>

          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-6">
              Solutions
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link href="/solutions/consultants">
                  Consultants
                </Link>
              </li>

              <li>
                <Link href="/solutions/coaches">
                  Coaches
                </Link>
              </li>

              <li>
                <Link href="/solutions/solar">
                  Solar Companies
                </Link>
              </li>

              <li>
                <Link href="/solutions/agencies">
                  Agencies
                </Link>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Lead Generation</li>
              <li>CRM Implementation</li>
              <li>Marketing Automation</li>
              <li>WhatsApp Automation</li>
              <li>SEO</li>

            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-6">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link href="/about">
                  About
                </Link>
              </li>

              <li>
                <Link href="/case-studies">
                  Case Studies
                </Link>
              </li>

              <li>
                <Link href="/blog">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div
          className="
          mt-16
          pt-8
          border-t
          border-white/10
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
          "
        >
          <p className="text-gray-500 text-sm">
            © 2026 Vaatira. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">

            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms-and-conditions">
              Terms & Conditions
            </Link>

          </div>
        </div>

      </div>

    </footer>
  );
}