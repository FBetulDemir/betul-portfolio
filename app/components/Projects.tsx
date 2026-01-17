type Project = {
  title: string;
  description: string;
  tech: string[];
  bullets: string[];
  learning: string;
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "TaskFlow Dashboard",
    description:
      "A task management dashboard focused on clear flows, real-time feel, and role-based UI.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React Query", "REST API"],
    bullets: [
      "Designed the UX/UI and user flow in Figma, then moved into implementation",
      "Built reusable UI components and consistent layouts",
      "Integrated API data with loading, empty and error states",
      "Focused on clarity: predictable navigation, clear calls-to-action",
    ],
    learning:
      "Improved my ability to translate UX decisions into clean frontend structure and keep UI scalable.",
    links: [
      { label: "View Code", href: "https://github.com/" },
      { label: "Live Demo", href: "https://example.com" },
    ],
  },
  {
    title: "E-commerce Product Configurator",
    description:
      "Multi-step product customization with cart management and checkout-ready UI patterns.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Stripe API"],
    bullets: [
      "Implemented multi-step flow with validation and progress feedback",
      "State management for cart and options with persistence",
      "Dynamic pricing and responsive product preview",
      "Polished UI states for a smooth shopping experience",
    ],
    learning:
      "Learned to structure complex UI state and keep the codebase readable as features grow.",
    links: [
      { label: "View Code", href: "https://github.com/" },
      { label: "Live Demo", href: "https://example.com" },
    ],
  },
  {
    title: "Analytics Platform UI",
    description:
      "Dashboard UI with filters, tables, and chart visualizations for fast decision-making.",
    tech: ["React", "TypeScript", "Recharts", "TanStack Table", "Tailwind CSS"],
    bullets: [
      "Built interactive charts and tables with sorting/filtering",
      "Created a clean data layout that stays readable on mobile",
      "Added export-friendly patterns and UI feedback states",
    ],
    learning:
      "Got better at performance-minded UI and presenting dense information clearly.",
    links: [
      { label: "View Code", href: "https://github.com/" },
      { label: "Live Demo", href: "https://example.com" },
    ],
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-700">
      {children}
    </span>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight">
          Selected Projects
        </h2>
        <p className="mt-2 text-zinc-600">
          A focused selection of work demonstrating frontend development, UX
          thinking, and practical product implementation.
        </p>
      </div>

      <div className="mt-8 grid gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="grid gap-0 md:grid-cols-2">
              {/* Image placeholder */}
              <div className="min-h-[220px] rounded-t-2xl bg-zinc-100 md:rounded-l-2xl md:rounded-tr-none" />

              <div className="p-6 md:p-7">
                <h3 className="text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <div className="mt-5">
                  <p className="text-sm font-medium text-zinc-900">
                    What I built
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <p className="text-sm font-medium text-zinc-900">
                    Challenges & learning
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {p.learning}
                  </p>
                </div>

                {p.links && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700">
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
