import Image from "next/image";

type ProjectNote = { text: string };

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  bullets: string[];
  learning: string;
  links?: { label: string; href: string }[];
  notes?: ProjectNote[];
};

const projects: Project[] = [
  {
    title: "Framsteg — UX/UI Redesign & Frontend Implementation (Internship)",
    description:
      "I owned the UX/UI redesign end-to-end  (user research → flows → full interface in Figma) and implemented key parts in Next.js with reusable components and consistent UI patterns, aligned closely with the Product Owner.",
    image: "/projects/figma-organisation.png",
    tech: [
      "Figma",
      "UX research",
      "User flows",
      "Prototyping",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    bullets: [
      "Conducted user research, identified usability issues, and created the new user flows",
      "Designed the complete interface in Figma (screens, components, states, interactions) with PO feedback",
      "Implemented reusable UI components in Next.js (TypeScript + Tailwind)",
      "Built Organisation Settings and Upload pages and continue expanding the frontend",
      "Worked iteratively in standups and improved solutions based on feedback",
    ],
    learning:
      "This internship strengthened my ability to take ownership from research and user flow to UI design and production-ready frontend delivery. I improved design-to-code handoff, component reuse, and building reliable UI states in a real team environment.",
    links: [
      {
        label: "View public preview (Organisation Settings flow — 4 screens)",
        href: "https://www.figma.com/proto/ADLGSp5yKjSQ2WeMup0UPo/Framsteg-Organisation-settings?page-id=0%3A1&node-id=1-663&p=f&viewport=503%2C511%2C0.16&t=VDUXel5AJhoC6vWP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A8",
      },
    ],
    notes: [
      {
        text: "Full redesign is confidential; private walkthrough available upon request (interviews / recruiters).",
      },
    ],
  },

  {
    title: "Designish — Modern E-commerce Store",
    description:
      "A modern, responsive online clothing store with dynamic product fetching, product details, cart, and a clean UI built for a smooth shopping experience.",
    image: "/projects/project-1.png",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Fake Store API",
      "Framer Motion",
      "Local Storage",
    ],
    bullets: [
      "Built responsive product listing and product detail views",
      "Implemented shopping cart with quantity updates and persistence",
      "Dynamic data fetching from Fake Store API",
      "Key decisions: persisted cart in localStorage, route-based state with React Router, consistent UI states for async views",
    ],
    learning:
      "I improved my ability to structure a frontend app around real user flows, and build a polished UI with strong responsiveness",
    links: [
      {
        label: "View Code",
        href: "https://github.com/FBetulDemir/ecommerce_website.git",
      },
      {
        label: "Live Demo",
        href: "https://ecommerce-website-designish.netlify.app/",
      },
    ],
  },
  {
    title: "Chappy — Real-Time Chat Application",
    description:
      "A full-stack chat app with public/locked channels, direct messages, and JWT authentication. Built to demonstrate practical frontend + backend integration and deployment.",
    image: "/projects/chappyApp.png",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "DynamoDB",
      "JWT",
      "Zustand",
    ],
    bullets: [
      "Language: Swedish UI",
      "Demo account: username: test / password: test123",
      "Implemented JWT-based authentication with secure login and registration",
      "Built public and locked channels with owner-only deletion rules",
      "Developed channel messaging with usernames",
      "Built private direct messages (DM) between users",
      "Added user account management with self-delete functionality",
      "Integrated AWS DynamoDB using a single-table design",
    ],
    learning:
      "This project deepened my understanding of full-stack architecture, especially authentication flows, authorization rules, and frontend–backend coordination. I also learned to deploy a combined frontend and backend application and handle real-world issues such as static file serving and environment configuration.",
    links: [
      { label: "View Code", href: "https://github.com/FBetulDemir/chappy-app" },
      { label: "Live Demo", href: "https://chappy-app-hk0i.onrender.com" },
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

              <div className="relative min-h-[220px] overflow-hidden rounded-t-2xl bg-zinc-100 md:rounded-l-2xl md:rounded-tr-none">
                <Image
                  src={p.image}
                  alt={`${p.title} preview`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

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

                {(p.links || p.notes) && (
                  <div className="mt-5 space-y-2">
                    {p.links && (
                      <div className="flex flex-wrap gap-3">
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

                    {p.notes && (
                      <div className="space-y-1">
                        {p.notes.map((n) => (
                          <p
                            key={n.text}
                            className="text-sm leading-relaxed text-zinc-600">
                            {n.text}
                          </p>
                        ))}
                      </div>
                    )}
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
