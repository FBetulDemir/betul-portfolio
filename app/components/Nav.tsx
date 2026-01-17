const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="text-sm font-semibold tracking-tight">
          Portfolio
        </a>

        <nav className="hidden gap-6 text-sm text-zinc-600 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-zinc-900 transition">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-zinc-200 px-3 py-1.5 text-sm font-medium hover:bg-zinc-50 transition">
          Contact
        </a>
      </div>
    </header>
  );
}
