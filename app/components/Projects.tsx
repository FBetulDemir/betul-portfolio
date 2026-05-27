import Image from "next/image";

type ProjectNote = { text: string };

type Project = {
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  tech: string[];
  bullets: string[];
  learning: string;
  links?: { label: string; href: string }[];
  notes?: ProjectNote[];
};

const projects: Project[] = [
  {
    title: "SHIPFLOW — Website Redesign & Implementation (Internship)",
    description:
      "Full end-to-end redesign and WordPress implementation of shipflow.se, a CFD simulation product for naval architects at Flowtech International AB. Sole designer and developer — from UX research through live deployment.",
    image: "/projects/shipflow-flowtech.png",
    imagePosition: "contain",
    tech: [
      "Figma",
      "WordPress",
      "PHP",
      "HTML & CSS",
      "UX Research",
      "Interaction Design",
      "DNS & Hosting",
    ],
    bullets: [
      "Conducted UX research including user interviews, competitor analysis, and empathy frameworks",
      "Built a full Figma design system: color styles, typography, and component library with variants",
      "Implemented 15+ pages in WordPress with custom CSS architecture",
      "Configured plugins: Yoast SEO, Contact Form 7, Flamingo, Brevo, WPForms, Fluent Support, Profile Builder, ACF",
      "Set up DNS configuration, email authentication, and newsletter with subscriber sync",
      "Researched and recommended HostUp hosting; managed full deployment to shipflow.se",
    ],
    learning:
      "This internship gave me end-to-end ownership of a professional product site — from UX research and Figma design system to WordPress implementation and live deployment. I deepened my skills in interaction design, custom CSS architecture, CMS development, and web infrastructure (DNS, hosting, email auth).",
    links: [
      { label: "Live Site", href: "https://shipflow.se/" },
      {
        label: "View Figma Prototype",
        href: "https://www.figma.com/proto/Io3wM3K8qWZKrRe4E5V75d/Flowtech?node-id=24-337&m=dev&scaling=scale-down&content-scaling=fixed&starting-point-node-id=24%3A337&page-id=0%3A1&show-proto-sidebar=1&t=zNurRvaGoc9YCr00-1",
      },
    ],
    notes: [
      {
        text: "Delivered as sole designer and developer at Flowtech International AB, Gothenburg — LIA 2, March–May 2026.",
      },
    ],
  },

  {
    title: "Framsteg — UX/UI Redesign & Frontend Implementation (Internship)",
    description:
      "I owned the UX/UI redesign end-to-end  (user research → flows → full interface in Figma) and implemented key parts in Next.js with reusable components and consistent UI patterns, aligned closely with the Product Owner.",
    image: "/projects/framsteg_white_bg.png",
    imagePosition: "top",
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
    title: "Agora — Anonymous Community Platform (Thesis Project)",
    description:
      "A full-stack community platform enabling anonymous dialogue about gender equality in academia. Designed in Figma from research through to implementation, with an integrated Gemini AI assistant and real-time Supabase backend.",
    image: "/projects/agora.png",
    imagePosition: "contain",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Figma",
      "Gemini API",
    ],
    bullets: [
      "Conducted literature review and benchmarking of community platforms to inform design decisions",
      "Designed full UI in Figma — wireframes, prototypes, and iterative revisions with academic supervisor",
      "Built anonymous post feed, threaded comments, hashtag filtering, and emoji avatar profiles",
      "Implemented dynamic Trending Topics word cloud based on real hashtag activity",
      "Integrated Gemini API as an AI assistant for gender equality questions",
      "Added Resource Hub with curated external articles and light/dark theme with localStorage persistence",
      "Modelled relational database in Supabase (PostgreSQL) with Row Level Security",
    ],
    learning:
      "This thesis project pushed me through the full product lifecycle — academic research, ethical design decisions around anonymity, Figma prototyping, and full-stack implementation. I tackled complex challenges in social feature data modelling and learned to integrate an AI API responsibly in a sensitive context.",
    links: [
      { label: "Live Demo", href: "https://agora-connect.vercel.app/" },
    ],
    notes: [
      {
        text: "Thesis project (Examensarbete) at NBI-Handelsakademin. Design supervised by Dr. Jasmina Maric, Interaction Design & Software Engineering, Chalmers University of Technology.",
      },
    ],
  },

  {
    title: "ChoreQuest — Household Chore Tracker (Mobile App)",
    description:
      "A two-person household chore tracker where recurring chores are assigned points based on difficulty. Members complete chores, earn points, and compete on a leaderboard with weekly/monthly/all-time views.",
    image: "/projects/chore-app.png",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase Auth",
      "Cloud Firestore",
      "PWA",
    ],
    bullets: [
      "Built authentication flow with Firebase Auth (sign up / sign in)",
      "Implemented household system with create/join by code functionality",
      "Created chore templates with recurring schedules (daily/weekly/monthly/seasonal)",
      "Developed assignee modes: anyone, fixed person, or rotating",
      "Built Today view showing due chores, completions, and points earned",
      "Implemented leaderboard with weekly/monthly/all-time score tracking",
      "Deployed as a PWA — installable on mobile without an app store",
    ],
    learning:
      "This project strengthened my understanding of Firebase integration, real-time data with Firestore, and building gamification features. I learned to design data models for multi-user households and implement point-based scoring systems.",
    links: [
      {
        label: "View Code",
        href: "https://github.com/FBetulDemir/chorequest",
      },
      {
        label: "Live Demo",
        href: "https://chorequest-game.vercel.app/",
      },
    ],
  },

  // {
  //   title: "Designish — Modern E-commerce Store",
  //   description:
  //     "A modern, responsive online clothing store with dynamic product fetching, product details, cart, and a clean UI built for a smooth shopping experience.",
  //   image: "/projects/project-1.png",
  //   tech: [
  //     "React",
  //     "Vite",
  //     "Tailwind CSS",
  //     "React Router",
  //     "Fake Store API",
  //     "Framer Motion",
  //     "Local Storage",
  //   ],
  //   bullets: [
  //     "Built responsive product listing and product detail views",
  //     "Implemented shopping cart with quantity updates and persistence",
  //     "Dynamic data fetching from Fake Store API",
  //     "Key decisions: persisted cart in localStorage, route-based state with React Router, consistent UI states for async views",
  //   ],
  //   learning:
  //     "I improved my ability to structure a frontend app around real user flows, and build a polished UI with strong responsiveness",
  //   links: [
  //     {
  //       label: "View Code",
  //       href: "https://github.com/FBetulDemir/ecommerce_website.git",
  //     },
  //     {
  //       label: "Live Demo",
  //       href: "https://ecommerce-website-designish.netlify.app/",
  //     },
  //   ],
  // },
  // {
  //   title: "Chappy — Real-Time Chat Application",
  //   description:
  //     "A full-stack chat app with public/locked channels, direct messages, and JWT authentication. Built to demonstrate practical frontend + backend integration and deployment.",
  //   image: "/projects/chappyApp.png",
  //   tech: ["React", "TypeScript", "Node.js", "Express", "DynamoDB", "JWT", "Zustand"],
  //   bullets: [
  //     "Implemented JWT-based authentication with secure login and registration",
  //     "Built public and locked channels with owner-only deletion rules",
  //     "Developed channel messaging with usernames",
  //     "Built private direct messages (DM) between users",
  //     "Added user account management with self-delete functionality",
  //     "Integrated AWS DynamoDB using a single-table design",
  //   ],
  //   learning:
  //     "This project deepened my understanding of full-stack architecture, especially authentication flows, authorization rules, and frontend–backend coordination.",
  //   links: [{ label: "View Code", href: "https://github.com/FBetulDemir/chappy-app" }],
  // },
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
          Work spanning UX research, product design, and frontend development.
        </p>
      </div>

      <div className="mt-8 grid gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="grid gap-0 md:grid-cols-2">
              {/* Image placeholder */}

              <div className={`relative min-h-72 overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none ${p.imagePosition === "contain" ? "bg-white" : "bg-zinc-100"}`}>
                <Image
                  src={p.image}
                  alt={`${p.title} preview`}
                  fill
                  className={
                    p.imagePosition === "contain"
                      ? "object-contain object-center p-3"
                      : `object-cover ${p.imagePosition === "top" ? "object-top" : "object-center"}`
                  }
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
