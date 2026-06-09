export default function AboutSection() {
  return (
    <section id="about" className="bg-[#111A12] py-28 md:py-40 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-28 items-center">

          {/* Left: decorative year + image placeholder */}
          <div className="relative">
            {/* Giant year */}
            <p
              className="absolute -left-4 -top-8 font-[family-name:var(--font-playfair)] font-bold leading-none text-[#C4973A]/[0.06] select-none pointer-events-none"
              style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
              aria-hidden
            >
              2019
            </p>

            {/* Photo card */}
            <div className="relative rounded-none overflow-hidden aspect-[3/4] max-w-sm border border-[#2A3B2C]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=700&q=80"
                alt="Barbershop interior"
                className="w-full h-full object-cover"
              />
              {/* Gold corner accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#C4973A]/60" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#C4973A]/60" />
              {/* Overlay label */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#111A12]/90 to-transparent p-6">
                <p className="text-xs tracking-[0.3em] uppercase text-[#C4973A]/70 font-[family-name:var(--font-lato)]">
                  Основан в 2019
                </p>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-[#C4973A] font-[family-name:var(--font-lato)] mb-6">
              О нас
            </p>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#EDE5D0] leading-tight mb-8">
              Место, где
              <br />
              <em className="text-[#C4973A]">джентльмен</em>
              <br />
              чувствует себя дома
            </h2>

            {/* Thin gold rule */}
            <div className="w-16 h-px bg-[#C4973A]/50 mb-8" />

            <div className="space-y-5 text-[#EDE5D0]/55 text-sm md:text-base leading-relaxed font-[family-name:var(--font-lato)] font-light">
              <p>
                CIGAR — это не просто барбершоп. Это закрытое пространство
                для тех, кто ценит точность, детали и неспешный ритуал
                ухода за собой.
              </p>
              <p>
                Мы черпаем вдохновение из британских частных клубов, где
                традиции цирюльного дела передавались из поколения в поколение.
                Каждый визит — это церемония.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-[#2A3B2C]">
              {[
                { num: "5+", label: "лет опыта" },
                { num: "3",  label: "мастера" },
                { num: "2к+",label: "гостей" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C4973A]">
                    {s.num}
                  </p>
                  <p className="text-xs tracking-widest uppercase text-[#EDE5D0]/40 font-[family-name:var(--font-lato)] mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
