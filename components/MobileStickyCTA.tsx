"use client";

export default function MobileStickyCTA() {
  const phone = "97470091786";

  const message =
    "Hi Vaatira, I would like to discuss building a growth system for my business.";

  return null; (
    <div
      className="
      fixed
      bottom-0
      left-0
      right-0
      z-50
      lg:hidden
      border-t
      border-white/10
      bg-[#050816]/95
      backdrop-blur-xl
      p-3
      "
    >
      <div className="grid grid-cols-2 gap-3">

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
          flex
          items-center
          justify-center
          rounded-xl
          bg-[#25D366]
          py-4
          font-semibold
          text-black
          "
        >
          WhatsApp
        </a>

        {/* Consultation */}
        <a
          href="#contact"
          className="
          flex
          items-center
          justify-center
          rounded-xl
          bg-orange-500
          py-4
          font-semibold
          text-black
          "
        >
          Book Consultation
        </a>

      </div>
    </div>
  );
}