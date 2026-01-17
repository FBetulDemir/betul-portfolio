import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Betül Demir | Frontend Developer",
  description:
    "Frontend portfolio: Next.js, TypeScript, Tailwind, UX/UI, Figma.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
