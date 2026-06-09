export default function BookingSection() {
  return (
    <section
      id="booking"
      className="relative bg-[#111A12] py-28 md:py-40 px-6 md:px-12 overflow-hidden"
    >
      {/* Background text */}
      <p
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-[family-name:var(--font-playfair)] font-bold leading-none select-none pointer-events-none text-[#C4973A]/[0.035]"
        style={{ fontSize: "clamp(6rem, 22vw, 22rem)" }}
        aria-hidden
      >
        BOOK
      </p>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Decorative top rule */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-[#C4973A]/50" />
          <div className="h-1 w-1 rotate-45 bg-[#C4973A]/50" />
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-[#C4973A]/50" />
        </div>

        <p className="text-xs tracking-[0.35em] uppercase text-[#C4973A] font-[family-name:var(--font-lato)] mb-6">
          Запись
        </p>

        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-bold text-[#EDE5D0] leading-tight mb-8">
          Ваше время
          <br />
          <em className="text-[#C4973A]">ждёт вас</em>
        </h2>

        <p className="text-sm md:text-base text-[#EDE5D0]/45 font-[family-name:var(--font-lato)] font-light leading-relaxed max-w-md mx-auto mb-14">
          Запишитесь по телефону или в мессенджере. Мы подберём удобное время
          и встретим вас как положено.
        </p>

        {/* Contact options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="tel:+74991234567"
            className="group inline-flex items-center gap-4 border border-[#C4973A]/40 px-10 py-4 text-xs tracking-[0.35em] uppercase text-[#C4973A] font-[family-name:var(--font-lato)] font-bold hover:bg-[#C4973A] hover:text-[#111A12] hover:border-[#C4973A] transition-all duration-400 w-full sm:w-auto justify-center"
          >
            +7 (499) 123‑45‑67
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-4 border border-[#2A3B2C] px-10 py-4 text-xs tracking-[0.35em] uppercase text-[#EDE5D0]/50 font-[family-name:var(--font-lato)] hover:border-[#C4973A]/30 hover:text-[#EDE5D0]/80 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Telegram
          </a>
        </div>

        {/* Address */}
        <div className="pt-10 border-t border-[#2A3B2C] text-sm text-[#EDE5D0]/35 font-[family-name:var(--font-lato)] tracking-wide space-y-1">
          <p>ул. Примерная, 42 · Москва</p>
          <p>Пн – Пт: 10:00 – 21:00 · Сб – Вс: 10:00 – 20:00</p>
        </div>
      </div>
    </section>
  );
}
