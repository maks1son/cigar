export default function Footer() {
  return (
    <footer className="bg-[#0A110B] border-t border-[#2A3B2C] py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-[family-name:var(--font-playfair)] text-xl font-bold tracking-[0.3em] text-[#C4973A]">
          CIGAR
        </p>

        <p className="text-xs text-[#EDE5D0]/25 font-[family-name:var(--font-lato)] tracking-wide">
          © {new Date().getFullYear()} CIGAR Barbershop. Все права защищены.
        </p>

        <div className="flex gap-7">
          {["Instagram", "Telegram", "VK"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs tracking-[0.2em] uppercase text-[#EDE5D0]/30 hover:text-[#C4973A] transition-colors font-[family-name:var(--font-lato)]"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
