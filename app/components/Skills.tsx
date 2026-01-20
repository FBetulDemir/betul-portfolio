type BlockProps = { title: string; items: string[] };

function Block({ title, items }: BlockProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h3 className="text-sm font-semibold text-zinc-900">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-zinc-700">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="bg-zinc-50/60">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            Skills & Tools
          </h2>
          <p className="mt-2 text-zinc-600">
            Focused on modern frontend development with attention to user
            experience and code quality.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Block
            title="Frontend"
            items={[
              "Next.js",
              "React",
              "TypeScript",
              "JavaScript",
              "HTML & CSS",
              "Tailwind CSS",
              "Responsive layout & design systems",
            ]}
          />
          <Block
            title="State & Data"
            items={[
              "REST APIs (fetch/axios), async patterns",
              "Vite",
              "Zustand / Context API",
              "Forms and validation - e.g. Zod/Joi",
              "Loading, empty and error states",
            ]}
          />
          <Block
            title="Tooling & Workflow"
            items={[
              "Git & GitHub",
              "npm / pnpm",
              "Vercel / Render deployments",
              "Chrome DevTools",
              "Agile teamwork (standups, feedback loops)",
              "Testing basics (Jest / React Testing Library)",
            ]}
          />
          <Block
            title="UX & Collaboration"
            items={[
              "Figma (wireframes, prototypes, UI)",
              "User flow mapping",
              "Accessibility basics",
              "Design-to-code handoff",
              "AI-assisted development workflow",
            ]}
          />
        </div>

        <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-zinc-700">
            <span className="font-semibold text-zinc-900">Backend basics:</span>{" "}
            Node.js/Express, REST APIs, CORS, Amazon DynamoDB
          </p>
        </div>
      </div>
    </section>
  );
}
