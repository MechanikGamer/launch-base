export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 px-6 py-20 text-center">
      {/* Hero */}
      <div className="flex flex-col items-center gap-4">
        <span className="border-foreground/10 bg-foreground/5 text-foreground/60 rounded-full border px-4 py-1 text-sm font-medium">
          Next.js 16 + Tailwind CSS v4
        </span>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Your next project <br />
          <span className="text-foreground/40">starts here.</span>
        </h1>
        <p className="text-foreground/60 max-w-md text-lg">
          A minimal, production-ready starter. Edit{" "}
          <code className="bg-foreground/8 rounded px-1.5 py-0.5 font-mono text-sm">src/app/page.tsx</code> to begin.
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          {
            title: "Next.js 16",
            desc: "App Router, Server Components, and Turbopack for blazing-fast builds.",
          },
          {
            title: "Tailwind CSS v4",
            desc: "Utility-first styling with zero-config CSS variables and dark mode.",
          },
          {
            title: "Prettier + ESLint",
            desc: "Auto-sorted Tailwind classes and consistent code formatting out of the box.",
          },
        ].map(({ title, desc }) => (
          <div
            key={title}
            className="border-foreground/10 bg-foreground/3 hover:bg-foreground/6 rounded-xl border p-5 text-left transition-colors"
          >
            <h2 className="mb-1 font-semibold">{title}</h2>
            <p className="text-foreground/55 text-sm">{desc}</p>
          </div>
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-foreground text-background rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
        >
          Next.js Docs
        </a>
        <a
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="border-foreground/15 hover:bg-foreground/6 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors"
        >
          Tailwind Docs
        </a>
      </div>
    </main>
  );
}
