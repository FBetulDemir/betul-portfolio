# Betül Demir Korkmaz — Portfolio

Personal portfolio site built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Images:** next/image with fill layout
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  components/
    Hero.tsx        # Landing section with CTA and CV download
    About.tsx       # Bio and NBI-Handelsakademin credential
    Projects.tsx    # Project cards with images, tech, links
    Skills.tsx      # Skill categories and tools
    Contact.tsx     # Contact section
  layout.tsx
  page.tsx
public/
  cv/               # CV PDF
  projects/         # Project screenshot images
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
