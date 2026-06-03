import Image from "next/image";

export default function Founder() {
  return (
    <section className="py-15 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">

            <div
              className="
              absolute
              inset-0
              bg-orange-500/10
              blur-[120px]
              rounded-full
              "
            />

            <Image
              src="/dinesh.jpg"
              alt="Dinesh Kumar"
              width={500}
              height={500}
              className="
              relative
              rounded-[40px]
              object-cover
              border
              border-white/10
              "
            />

          </div>

          {/* Content */}
          <div>

            <p
              className="
              text-orange-500
              uppercase
              tracking-[0.25em]
              text-sm
              mb-4
              "
            >
              Meet The Founder
            </p>

            <h2
              className="
              text-3xl
              md:text-4xl
              font-bold
              leading-tight
              mb-6
              "
            >
              Built By Someone Who Understands Growth.
            </h2>

            <h3
              className="
              text-2xl
              font-semibold
              mb-2
              "
            >
              Dinesh Kumar
            </h3>

            <p className="text-orange-400 mb-6">
              Founder • VAATIRA Solutions
            </p>

            <p className="text-zinc-400 leading-8 mb-6">
              Dinesh helps consultants, coaches, agencies and solar
              companies build scalable lead generation, CRM and
              automation systems that create predictable client
              acquisition and sustainable business growth.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">

              <div>
                <p className="text-3xl font-bold text-orange-500">
                  2600+
                </p>
                <p className="text-zinc-500">
                  LinkedIn Followers
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-orange-500">
                  500+
                </p>
                <p className="text-zinc-500">
                  Connections
                </p>
              </div>

            </div>

            <a
              href="https://www.linkedin.com/in/jatdinesh"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex
              items-center
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
              Connect On LinkedIn →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}