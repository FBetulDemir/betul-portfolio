export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold tracking-tight">About</h2>

      <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
        <p className="text-zinc-700 leading-relaxed">
          I’m a frontend developer who enjoys owning the full UI process — from
          user flow and UX decisions in Figma to implementation in Next.js and
          TypeScript. I focus on building interfaces that are clear, consistent,
          and easy to use, with code that stays maintainable as the product
          grows.
        </p>

        <p className="mt-4 text-zinc-700 leading-relaxed">
          I’m currently working in an AI-driven product environment where I
          designed a user flow and UI improvements, and we’re now implementing
          my designs in the frontend. I also use AI tools naturally in my
          workflow to speed up iteration and improve quality without sacrificing
          structure or clarity.
        </p>

        <p className="mt-4 text-zinc-700 leading-relaxed">
          I’m currently available for work — open to opportunities worldwide (remote or on-site).
        </p>

        <div className="mt-6 pt-6 border-t border-zinc-100">
          <p className="text-sm text-zinc-500">
            Frontend Developer (FED24) · NBI-Handelsakademin · Passed with Distinction ·{" "}
            <a
              href="https://verify.trueoriginal.com/11D6E742-E508-E7A1-B536-E4FA8B7A7D6F/?ref=direct-copy"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-zinc-700 transition-colors"
            >
              Verify credential →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
