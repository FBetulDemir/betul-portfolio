import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  bullets: string[];
  learning: string;
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "Designish — Modern E-commerce Store",
    description:
      "A modern, responsive online clothing store with dynamic product fetching, product details, cart and wishlist flows, and a clean UI built for a smooth shopping experience.",
    image: "/projects/designish.png",
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
      "Added wishlist functionality with persisted state",
      "Dark mode toggle with consistent design tokens and UI states",
      "Dynamic data fetching from Fake Store API with loading/empty/error states",
      "Enhanced UX with motion/animations and toast feedback",
    ],
    learning:
      "I improved my ability to structure a frontend app around real user flows (browse → compare → save → purchase), keep state predictable across routes (cart/wishlist), and build a polished UI with strong responsiveness and feedback states.",
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
      "Developed channel messaging with usernames and timestamps",
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
