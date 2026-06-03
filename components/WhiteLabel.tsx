export default function WhiteLabel() {
  const benefits = [
    "Backend delivery without hiring",
    "White-label fulfillment under your brand",
    "Dedicated execution support",
    "Faster project turnaround",
    "Scalable operations",
    "Reliable systems & reporting",
  ];

  return (
    <section className="py-14 border-t border-white/5 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="max-w-5xl mb-4">
          <p className="text-orange-500 uppercase tracking-[0.25em] text-sm mb-5">
            White-Label Partnerships
          </p>

          <h2 className="text-[1rem] md:text-[2.7rem] font-bold leading-[1.05] tracking-[-0.04em]">
            Scale Your Agency
          </h2>

          <h2 className="text-[1rem] md:text-[2.7rem] font-bold text-zinc-200 leading-[1.8] tracking-[-0.04em]">
            Without Scaling Your Team.
          </h2>
        </div>

        {/* Main Layout */}

        <div className="grid lg:grid-cols-12 gap-14 items-center">

          {/* Left */}

          <div className="lg:col-span-5">

            <p className="text-xl text-zinc-400 leading-relaxed mb-6">
              VAATIRA works behind the scenes as your execution partner.
              You close the client. We handle delivery, systems,
              automation and implementation under your brand.
            </p>

            <div className="space-y-5">

              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="h-2 w-2 rounded-full bg-orange-500" />

                  <span className="text-zinc-300 text-lg">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* Right */}

          <div className="lg:col-span-7">

            <div
              className="
              rounded-[32px]
              border
              border-orange-500/20
              bg-gradient-to-br
              from-orange-500/[0.06]
              via-transparent
              to-white/[0.02]
              p-10
              "
            >

              <div className="grid md:grid-cols-2 gap-8">

                <div>
                  <p className="text-orange-500 text-5xl font-bold">
                    100%
                  </p>

                  <p className="text-zinc-400 mt-3">
                    White-Label Delivery
                  </p>
                </div>

                <div>
                  <p className="text-orange-500 text-5xl font-bold">
                    0
                  </p>

                  <p className="text-zinc-400 mt-3">
                    Additional Employees
                  </p>
                </div>

                <div>
                  <p className="text-orange-500 text-5xl font-bold">
                    24/7
                  </p>

                  <p className="text-zinc-400 mt-3">
                    Execution Support
                  </p>
                </div>

                <div>
                  <p className="text-orange-500 text-5xl font-bold">
                    ∞
                  </p>

                  <p className="text-zinc-400 mt-3">
                    Scaling Potential
                  </p>
                </div>

              </div>

              <div className="mt-10 pt-8 border-t border-white/10">

                <p className="text-zinc-300 text-lg leading-relaxed">
                  Perfect for agencies, consultants and freelancers
                  who want to increase revenue without increasing
                  operational complexity.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}