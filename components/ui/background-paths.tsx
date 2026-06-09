"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.4 + i * 0.025,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Decorative paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="#C4973A"
            strokeWidth={path.width}
            strokeOpacity={0.06 + path.id * 0.018}
            initial={{ pathLength: 0.3, opacity: 0.5 }}
            animate={{
              pathLength: 1,
              opacity: [0.25, 0.55, 0.25],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 22 + Math.random() * 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  title = "CIGAR",
  subtitle = "Barbershop",
  ctaText = "Записаться",
  ctaHref = "#booking",
}: {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#111A12]">
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-[ellipse_80%_60%_at_50%_50%] from-transparent to-[#080E08]/70 pointer-events-none" />

      {/* Gold paths layer */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Top & bottom dark fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#111A12] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#111A12] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-5xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xs tracking-[0.45em] uppercase text-[#C4973A]/70 font-[family-name:var(--font-lato)] mb-8"
          >
            {subtitle}
          </motion.p>

          {/* Main title — letter by letter */}
          <h1 className="font-[family-name:var(--font-playfair)] font-bold tracking-[0.15em] mb-3 leading-none">
            {words.map((word, wi) => (
              <span key={wi} className="inline-block mr-6 last:mr-0">
                {word.split("").map((letter, li) => (
                  <motion.span
                    key={`${wi}-${li}`}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wi * 0.15 + li * 0.06,
                      type: "spring",
                      stiffness: 120,
                      damping: 20,
                    }}
                    className="inline-block text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(160deg, #EDE5D0 0%, #C4973A 60%, #EDE5D0 100%)",
                      fontSize: "clamp(4.5rem, 18vw, 14rem)",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#C4973A]/60" />
            <div className="h-1 w-1 rotate-45 bg-[#C4973A]/60" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#C4973A]/60" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-sm md:text-base text-[#EDE5D0]/40 font-[family-name:var(--font-lato)] font-light tracking-[0.25em] uppercase mb-12"
          >
            Традиции · Точность · Безупречность
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="inline-block relative group"
          >
            {/* Gold border frame */}
            <div className="absolute -inset-px rounded-none bg-gradient-to-r from-[#C4973A]/60 via-[#D9AE58]/80 to-[#C4973A]/60 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            <a
              href={ctaHref}
              className="relative block px-12 py-4 bg-[#111A12] text-[#C4973A] text-sm tracking-[0.4em] uppercase font-[family-name:var(--font-lato)] font-bold hover:bg-[#C4973A] hover:text-[#111A12] transition-all duration-400"
            >
              {ctaText}
              <span className="ml-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 inline-block transition-all duration-300">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
