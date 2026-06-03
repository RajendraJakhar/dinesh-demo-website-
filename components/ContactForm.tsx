export default function ContactForm() {
  return (
    <section className="py-14 border-t border-white/5 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Left Side */}

          <div className="lg:col-span-5">

            <p className="text-orange-500 uppercase tracking-[0.25em] text-sm mb-5">
              Contact
            </p>

            <h2 className="text-[1.5rem] md:text-[4rem] font-bold leading-[1.5] tracking-[-0.04em]">
              Ready To Scale?
            </h2>

            <h2 className="text-[1.5rem] md:text-[4rem] font-bold text-zinc-200 leading-[1.5] tracking-[-0.04em]">
              Let's Talk Systems.
            </h2>

            <p className="mt-8 text-xl text-zinc-400 leading-relaxed">
              Book a strategy call and we'll identify the bottlenecks
              limiting growth in your acquisition, CRM and automation systems.
            </p>

            <div className="mt-12 space-y-6">

              <div>
                <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2">
                  Response Time
                </p>

                <p className="text-white text-lg">
                  Within 24 Hours
                </p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2">
                  Consultation
                </p>

                <p className="text-white text-lg">
                  Free Strategy Session
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="lg:col-span-7">

            <div
              className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.02]
              p-8 md:p-10
              "
            >

              <form className="space-y-6">
                <div className="inline-flex px-4 py-2 centre rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-sm">
                  Limited Strategy Sessions Available
                </div>

                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                  w-full
                  bg-black
                  text-white
                  border
                  border-white/10
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  focus:border-orange-500
                  "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                  w-full
                  bg-black
                  text-white
                  border
                  border-white/10
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  focus:border-orange-500
                  "
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="
                  w-full
                  bg-black
                  text-white
                  border
                  border-white/10
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  focus:border-orange-500
                  "
                />

                <select
                  className="
                  w-full
                  bg-black
                  text-white
                  border
                  border-white/10
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  focus:border-orange-500
                  "
                >
                  <option>Monthly Revenue</option>
                  <option>Under ₹1L</option>
                  <option>₹1L - ₹5L</option>
                  <option>₹5L - ₹20L</option>
                  <option>₹20L+</option>
                </select>

                <textarea
                  rows={5}
                  placeholder="Tell us about your business..."
                  className="
                  w-full
                  bg-black
                  text-white
                  border
                  border-white/10
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  focus:border-orange-500
                  resize-none
                  "
                />

                <button
                  className="
                  w-full
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
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}