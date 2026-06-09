const photos = [
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80", alt: "Барбершоп интерьер" },
  { src: "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?w=800&q=80", alt: "Стрижка в процессе" },
  { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80", alt: "Мастер за работой" },
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80", alt: "Инструменты барбера" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80", alt: "Кресло барбершопа" },
];

export default function GallerySection() {
  return (
    <section className="bg-[#111A12] py-28 md:py-40 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-[#C4973A] font-[family-name:var(--font-lato)] mb-4">
              Атмосфера
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-[#EDE5D0] leading-tight">
              Пространство
              <br />
              <em>для джентльмена</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-[#EDE5D0]/40 font-[family-name:var(--font-lato)] font-light leading-relaxed">
            Каждая деталь интерьера говорит об уважении к традициям и вашему времени.
          </p>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {/* Large top-left */}
          <div className="col-span-2 row-span-1 relative overflow-hidden group aspect-[16/9]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[0].src}
              alt={photos[0].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111A12]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Gold corners on hover */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C4973A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C4973A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Right tall */}
          <div className="col-span-1 row-span-2 relative overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[1].src}
              alt={photos[1].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111A12]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Bottom left */}
          <div className="col-span-1 relative overflow-hidden group aspect-square">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[2].src}
              alt={photos[2].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Bottom center — gold quote card */}
          <div className="col-span-1 bg-[#1A2B1C] border border-[#2A3B2C] flex flex-col items-center justify-center p-8 text-center gap-3 aspect-square">
            <div className="text-[#C4973A]/40 text-5xl font-[family-name:var(--font-playfair)] leading-none">&ldquo;</div>
            <p className="font-[family-name:var(--font-playfair)] text-lg italic text-[#EDE5D0]/80 leading-snug">
              Хороший барбер
              <br />
              — это терапевт
            </p>
            <div className="h-px w-8 bg-[#C4973A]/40 mt-1" />
          </div>
        </div>

      </div>
    </section>
  );
}
