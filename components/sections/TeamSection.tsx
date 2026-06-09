const barbers = [
  {
    name: "Damian",
    role: "Основатель · Главный мастер",
    bio: "15 лет в профессии. Прошёл обучение в Лондоне. Специализация — классические стрижки и опасная бритва.",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
  },
  {
    name: "Oliver",
    role: "Старший стилист",
    bio: "Мастер современных мужских причёсок. Отточил технику фейдов до абсолюта. 8 лет опыта.",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80",
  },
  {
    name: "James",
    role: "Специалист по бороде",
    bio: "Знает о мужской растительности всё. Создаёт идеальные контуры и работает с любой формой лица.",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-[#0E1610] py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-20 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-[#C4973A] font-[family-name:var(--font-lato)] mb-4">
            Команда
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-[#EDE5D0]">
            Мастера своего дела
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {barbers.map((b, i) => (
            <div
              key={b.name}
              className="group bg-[#182019] border border-[#2A3B2C] hover:border-[#C4973A]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Photo */}
              <div className="relative overflow-hidden aspect-[3/4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={b.src}
                  alt={b.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Gold overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1610] via-transparent to-transparent" />
                {/* Name over photo */}
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#EDE5D0] tracking-wider">
                    {b.name}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 border-t border-[#2A3B2C] group-hover:border-[#C4973A]/20 transition-colors">
                <p className="text-xs tracking-[0.2em] uppercase text-[#C4973A]/70 font-[family-name:var(--font-lato)] mb-3">
                  {b.role}
                </p>
                <p className="text-sm text-[#EDE5D0]/45 font-[family-name:var(--font-lato)] font-light leading-relaxed">
                  {b.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
