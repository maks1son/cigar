"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Услуги", href: "#services" },
  { label: "О нас",  href: "#about" },
  { label: "Барберы",href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#111A12]/90 backdrop-blur-md border-b border-[#C4973A]/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-[0.3em] text-[#EDE5D0] hover:text-[#C4973A] transition-colors"
        >
          CIGAR
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.25em] uppercase text-[#EDE5D0]/50 hover:text-[#C4973A] transition-colors font-[family-name:var(--font-lato)]"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Book CTA */}
        <a
          href="#booking"
          className="text-xs tracking-[0.3em] uppercase text-[#C4973A] border border-[#C4973A]/40 px-5 py-2.5 hover:bg-[#C4973A] hover:text-[#111A12] transition-all duration-300 font-[family-name:var(--font-lato)] font-bold"
        >
          Записаться
        </a>
      </nav>
    </header>
  );
}
