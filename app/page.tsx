import Navbar from "@/components/Navbar";
import { BackgroundPaths } from "@/components/ui/background-paths";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import GallerySection from "@/components/sections/GallerySection";
import TeamSection from "@/components/sections/TeamSection";
import BookingSection from "@/components/sections/BookingSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const marqueeItems = [
    "Классические стрижки",
    "◆",
    "Опасная бритва",
    "◆",
    "Моделирование бороды",
    "◆",
    "Британский клуб",
    "◆",
    "С 2019 года",
    "◆",
  ];

  return (
    <>
      <Navbar />

      {/* ── 1. Hero ── */}
      <BackgroundPaths
        title="CIGAR"
        subtitle="Barbershop · Москва"
        ctaText="Записаться"
        ctaHref="#booking"
      />

      {/* ── 2. Marquee strip ── */}
      <div className="bg-[#C4973A] py-4 overflow-hidden">
        <div
          className="flex gap-10 whitespace-nowrap"
          style={{ animation: "marquee 24s linear infinite" }}
        >
          {Array.from({ length: 6 }).map((_, i) =>
            marqueeItems.map((item, j) => (
              <span
                key={`${i}-${j}`}
                className={`text-xs font-[family-name:var(--font-lato)] font-bold tracking-[0.3em] uppercase ${
                  item === "◆"
                    ? "text-[#111A12]/40"
                    : "text-[#111A12]"
                }`}
              >
                {item}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── 3. About ── */}
      <AboutSection />

      {/* ── 4. Services ── */}
      <ServicesSection />

      {/* ── 5. Gallery ── */}
      <GallerySection />

      {/* ── 6. Team ── */}
      <TeamSection />

      {/* ── 7. Booking CTA ── */}
      <BookingSection />

      {/* ── 8. Footer ── */}
      <Footer />
    </>
  );
}
