const links = [
  { label: "Клуб", href: "#club" },
  { label: "Прайс", href: "#services" },
  { label: "Мастер", href: "#team" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-black/55 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="font-display text-lg font-black tracking-[0.18em] text-ivory transition-colors hover:text-ember"
          aria-label="CIGAR, наверх"
        >
          CIGAR
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.22em] text-ivory/48 transition-colors hover:text-ivory"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#booking"
          className="btn-primary h-10 px-5 text-[11px] sm:px-6"
        >
          Записаться
        </a>
      </nav>
    </header>
  );
}
