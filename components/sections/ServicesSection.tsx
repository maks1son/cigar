const services = [
  {
    roman: "I",
    name: "Классическая стрижка",
    desc: "Безупречная работа с ножницами и машинкой. Любая длина, любой стиль.",
    duration: "45–60 мин",
    price: "от 2 000 ₽",
  },
  {
    roman: "II",
    name: "Королевское бритьё",
    desc: "Горячее полотенце, пена кисточкой, опасная бритва. Ритуал в чистом виде.",
    duration: "40 мин",
    price: "от 1 800 ₽",
  },
  {
    roman: "III",
    name: "Моделирование бороды",
    desc: "Чёткие линии, правильный контур. Борода как архитектурное решение.",
    duration: "30 мин",
    price: "от 1 200 ₽",
  },
  {
    roman: "IV",
    name: "Комплекс джентльмена",
    desc: "Стрижка + королевское бритьё + уход за кожей. Полная трансформация.",
    duration: "90 мин",
    price: "от 3 500 ₽",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#0E1610] py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-[#C4973A] font-[family-name:var(--font-lato)] mb-4">
              Услуги
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-[#EDE5D0] leading-tight">
              Ритуалы
              <br />
              <em>мужского стиля</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-[#EDE5D0]/40 font-[family-name:var(--font-lato)] font-light leading-relaxed">
            Каждая услуга — это не просто процедура.
            Это время, принадлежащее только вам.
          </p>
        </div>

        {/* Service rows */}
        <div className="divide-y divide-[#2A3B2C]">
          {services.map((s) => (
            <div
              key={s.roman}
              className="group py-8 md:py-10 grid md:grid-cols-[80px_1fr_auto] gap-6 items-center hover:bg-[#182019] transition-colors duration-300 px-4 -mx-4 rounded-sm cursor-default"
            >
              {/* Roman numeral */}
              <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#C4973A]/30 group-hover:text-[#C4973A]/60 transition-colors duration-300 select-none">
                {s.roman}
              </span>

              {/* Name + desc */}
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-10">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-semibold text-[#EDE5D0] group-hover:text-[#C4973A] transition-colors duration-300 shrink-0">
                  {s.name}
                </h3>
                <p className="text-sm text-[#EDE5D0]/40 font-[family-name:var(--font-lato)] font-light leading-relaxed max-w-md">
                  {s.desc}
                </p>
              </div>

              {/* Price + duration */}
              <div className="text-right shrink-0">
                <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#C4973A]">
                  {s.price}
                </p>
                <p className="text-xs tracking-wide text-[#EDE5D0]/30 font-[family-name:var(--font-lato)] mt-1">
                  {s.duration}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#booking"
            className="inline-flex items-center gap-4 text-xs tracking-[0.35em] uppercase text-[#C4973A] font-[family-name:var(--font-lato)] font-bold border border-[#C4973A]/30 px-10 py-4 hover:bg-[#C4973A] hover:text-[#111A12] hover:border-[#C4973A] transition-all duration-400"
          >
            Записаться на сеанс
            <span className="text-base">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
