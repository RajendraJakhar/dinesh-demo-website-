import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Let's Build Your
            <br />
            Growth System.
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            Whether you're a consultant, coach, solar company,
            agency or freelancer, let's discuss how we can help
            you create a predictable client acquisition system.
          </p>

        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-5 gap-10">

            {/* Left */}
            <div className="lg:col-span-2">

              <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
                Get In Touch
              </p>

              <h2 className="text-4xl font-bold mb-8">
                Talk To Our Team.
              </h2>

              <div className="space-y-6">

                <div className="rounded-3xl border border-white/10 p-6">
                  <h3 className="font-semibold mb-2">
                    WhatsApp
                  </h3>

                  <p className="text-gray-400">
                    +974 7009 1786
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 p-6">
                  <h3 className="font-semibold mb-2">
                    Email
                  </h3>

                  <p className="text-gray-400">
                    hello@vaatira.com
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 p-6">
                  <h3 className="font-semibold mb-2">
                    Consultation Calls
                  </h3>

                  <p className="text-gray-400">
                    Available by appointment.
                  </p>
                </div>

              </div>

            </div>

            {/* Right Form */}
            <div className="lg:col-span-3">

              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 md:p-10">

                <h3 className="text-3xl font-bold mb-8">
                  Request A Consultation
                </h3>

                <form className="grid md:grid-cols-2 gap-6">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-[#0c1224] border border-white/10 rounded-xl px-4 py-4 outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-[#0c1224] border border-white/10 rounded-xl px-4 py-4 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="bg-[#0c1224] border border-white/10 rounded-xl px-4 py-4 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="bg-[#0c1224] border border-white/10 rounded-xl px-4 py-4 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Industry"
                    className="bg-[#0c1224] border border-white/10 rounded-xl px-4 py-4 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Monthly Revenue"
                    className="bg-[#0c1224] border border-white/10 rounded-xl px-4 py-4 outline-none"
                  />

                  <textarea
                    rows={6}
                    placeholder="Tell us about your business goals..."
                    className="
                    md:col-span-2
                    bg-[#0c1224]
                    border
                    border-white/10
                    rounded-xl
                    px-4
                    py-4
                    outline-none
                    resize-none
                    "
                  />

                  <div className="md:col-span-2">
                    <button
                      type="submit"
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
                      Book Consultation
                    </button>
                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0d1430] to-[#141d3d] p-12 md:p-20 text-center">

            <h2 className="text-4xl md:text-6xl font-bold">
              Prefer WhatsApp?
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Connect directly and discuss your growth goals,
              CRM setup, automation strategy and lead generation.
            </p>

            <a
              href="https://wa.me/97470091786"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex
              mt-10
              px-8
              py-4
              rounded-full
              bg-green-500
              hover:bg-green-600
              transition
              text-black
              font-semibold
              "
            >
              Chat On WhatsApp
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}