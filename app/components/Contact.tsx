function LinkButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition">
      {label}
    </a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-zinc-50/60">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Get in Touch</h2>
        <p className="mt-2 text-zinc-600">
          Open to internship opportunities (LIA 2, Spring 2026) — remote or
          on-site worldwide.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {/* Replace these */}
          <LinkButton href="mailto:fatmabetuld@gmail.com" label="Email" />
          <LinkButton href="https://github.com/FBetulDemir" label="GitHub" />
          <LinkButton
            href="https://www.linkedin.com/in/betuldemir"
            label="LinkedIn"
          />
        </div>
      </div>
    </section>
  );
}
