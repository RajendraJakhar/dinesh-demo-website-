export default function CalendlyCTA() {
  return (
    <section className="py-28 bg-[#050816]">
      <div className="max-w-6xl mx-auto px-6">

        <div
          className="
            rounded-[40px]
            border
            border-white/10
            bg-gradient-to-r
            from-[#101936]
            to-[#1b2342]
            p-12
            md:p-20
            text-center
          "
        >
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            Book A Strategy Session
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready To Build A
            <br />
            Predictable Growth System?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Schedule a consultation and discover how lead generation,
            CRM implementation and automation can work together
            to create sustainable business growth.
          </p>

          <a
            href="#"
            className="
              inline-flex
              items-center
              justify-center
              px-8
              py-4
              rounded-full
              bg-orange-500
              hover:bg-orange-600
              transition
              font-semibold
              text-black
            "
          >
            Book Consultation
          </a>
        </div>

      </div>
    </section>
  );
}