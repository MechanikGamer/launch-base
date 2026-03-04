# Next.js + Tailwind CSS Starter Template

A minimal, production-ready Next.js 15 starter with App Router, Tailwind CSS v4, TypeScript, and Prettier.

## Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [Next.js](https://nextjs.org) | 15 (App Router) | React framework |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Utility-first styling |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |
| [Prettier](https://prettier.io) | 3 | Code formatting |
| [ESLint](https://eslint.org) | 9 | Linting |

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/HashSlap-Summer-of-Code/launch-base.git
cd launch-base/nextjs-template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Prerequisites

- **Node.js** 18.17 or higher ([download](https://nodejs.org))
- **npm** 9.x or higher (comes with Node.js)

## Project Structure

```
nextjs-template/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout — fonts, metadata, global styles
│       ├── page.tsx        # Home page — start editing here
│       └── globals.css     # Global CSS + Tailwind import
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── postcss.config.mjs      # PostCSS (Tailwind v4 plugin)
├── eslint.config.mjs       # ESLint flat config
├── .prettierrc.json        # Prettier config with tailwindcss plugin
├── tsconfig.json           # TypeScript config
└── package.json
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server (after build) |
| `npm run lint` | Run ESLint |

## Customization

### Metadata

Update your site title and description in `src/app/layout.tsx`:

```ts
export const metadata: Metadata = {
  title: "Your App Name",
  description: "Your app description.",
};
```

### Fonts

The template uses [Geist](https://vercel.com/font) via `next/font/google`. Swap fonts in `src/app/layout.tsx`:

```ts
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
```

### Colors & Theme

Global CSS variables and Tailwind theme tokens are defined in `src/app/globals.css`. Edit `--background` and `--foreground` to set your base palette. Dark mode is handled automatically via `@media (prefers-color-scheme: dark)`.

### Prettier

Prettier is configured in `.prettierrc.json`. It automatically sorts Tailwind CSS classes via `prettier-plugin-tailwindcss`. Run it with:

```bash
npx prettier --write .
```

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com):

```bash
npx vercel
```

Or connect your GitHub repo to Vercel for automatic deployments on every push.

## License

MIT
