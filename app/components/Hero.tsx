export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 md:pt-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
          Betül Demir Korkmaz — Frontend Developer & Interface Designer — Sweden
          / Remote
        </span>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl">
          I build clean, usable interfaces with modern web technologies
        </h1>

        <p className="mt-5 text-base leading-relaxed text-zinc-600 md:text-lg">
          I design in Figma first, then implement the UI with Next.js,
          TypeScript and Tailwind CSS. I enjoy turning product goals and user
          needs into simple flows and maintainable frontend code.
        </p>
        <p className="mt-4 text-sm font-medium text-zinc-700 md:text-base">
          Available for{" "}
          <span className="text-zinc-900">LIA 2 (Spring 2026)</span>. Based in
          Sweden. Open to remote/on-site.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 transition">
            View Projects →
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition">
            Get in touch
          </a>

          <a
            href="/cv/Betul-Demir-CV.pdf"
            download
            className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
