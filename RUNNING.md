# ▶️ Running the Portfolio Locally

This guide walks you through setting up and running the portfolio on your local machine.

---

## ✅ Prerequisites

Make sure you have the following installed before you begin:

| Tool | Minimum Version | Download |
|---|---|---|
| **Node.js** | v18+ | [nodejs.org](https://nodejs.org/) |
| **npm** | v9+ (bundled with Node) | — |
| **Git** | Any recent version | [git-scm.com](https://git-scm.com/) |

To verify your versions, run:

```bash
node -v
npm -v
```

---

## 📥 1. Clone the Repository

```bash
git clone https://github.com/KillerStrike17/Portfolio.git
cd Portfolio
```

---

## 📦 2. Install Dependencies

Install all required packages using npm:

```bash
npm install
```

> This will install all `dependencies` and `devDependencies` listed in `package.json`, including React, Vite, Tailwind CSS, Framer Motion, and Radix UI components.

---

## 🚀 3. Start the Development Server

```bash
npm run dev
```

Once started, open your browser and navigate to:

```
http://localhost:8080
```

> The dev server supports **Hot Module Replacement (HMR)** — changes to source files are reflected in the browser instantly without a full page reload.

---

## 🏗️ 4. Build for Production

To generate an optimized production bundle:

```bash
npm run build
```

The output will be placed in the `dist/` folder. This is the folder you'd deploy to a static hosting service (e.g., GitHub Pages, Vercel, Netlify).

> For a development-mode build (useful for debugging), run:
> ```bash
> npm run build:dev
> ```

---

## 👁️ 5. Preview the Production Build

After building, you can serve the `dist/` folder locally to verify it before deploying:

```bash
npm run preview
```

---

## 🔎 6. Lint the Code

To check for code quality issues using ESLint:

```bash
npm run lint
```

---

## 📋 Available Scripts Summary

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server at `localhost:8080` |
| `npm run build` | Build the production-optimized bundle to `dist/` |
| `npm run build:dev` | Build in development mode (unminified, with source maps) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

## 🌐 Deploying

The `dist/` output is a **static site** and can be deployed to any static hosting platform:

- **Vercel**: Connect your GitHub repo — Vercel auto-detects Vite and deploys on every push.
- **Netlify**: Drag & drop the `dist/` folder or link your repo with build command `npm run build`.
- **GitHub Pages**: Use the [vite-plugin-gh-pages](https://github.com/skrashevich/vite-plugin-gh-pages) or manually push `dist/` to a `gh-pages` branch.

---

## 🛠️ Troubleshooting

| Issue | Fix |
|---|---|
| `npm install` fails | Make sure Node.js is v18 or higher: `node -v` |
| Port 8080 already in use | Change the port in `vite.config.ts` under `server.port` |
| Styles not loading | Ensure `tailwindcss` is installed and `postcss.config.js` is present |
| TypeScript errors | Run `npm run lint` to identify issues; check `tsconfig.json` for path aliases |
| Blank page after build | Ensure the `base` in `vite.config.ts` matches your deployment sub-path |
