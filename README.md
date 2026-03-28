# Shubham Agnihotri — Portfolio

A premium, dark-mode-first personal portfolio built with **React**, **TypeScript**, and **Vite**. Showcases Shubham Agnihotri's career as a Senior Data Scientist, ML Engineer, Public Speaker, and Founder — with a deep-space / neural-network aesthetic powered by Framer Motion scroll animations throughout.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [React 18](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Build Tool | [Vite 5](https://vitejs.dev/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| Animations | [Framer Motion 11](https://www.framer.com/motion/) |
| Routing | [React Router DOM v6](https://reactrouter.com/) |
| Data Fetching | [TanStack Query v5](https://tanstack.com/query) |
| SEO | [React Helmet Async](https://github.com/staylor/react-helmet-async) |
| Icons | [Lucide React](https://lucide.dev/) |
| Blog API | [medium-article-api](https://www.npmjs.com/package/medium-article-api) |

---

## Project Structure

```
Portfolio/
├── index.html               # HTML entry — OG tags, favicon, meta
├── App.tsx                  # Root: providers, AnimatePresence page transitions
├── vite.config.ts           # Port 8080, @ path alias
├── tailwind.config.js       # Custom fonts, glow shadows, animations
├── vercel.json              # SPA rewrite rules for Vercel
│
├── src/
│   ├── main.tsx             # React DOM entry
│   ├── index.css            # Design tokens (HSL vars), Tailwind base,
│   │                        # glass-card, mesh-bg, dot-bg, marquee, bento-card,
│   │                        # gradient-text, glow utilities
│   │
│   ├── lib/
│   │   ├── utils.ts         # cn() helper (clsx + tailwind-merge)
│   │   └── animations.ts    # Shared Framer Motion variants:
│   │                        # fadeUp, fadeInLeft, fadeInRight, scaleIn,
│   │                        # staggerContainer, staggerItem, staggerItemLeft,
│   │                        # charReveal, pageVariants — plus EASE constants
│   │
│   ├── pages/
│   │   ├── Home.tsx         # Cinematic landing: char-reveal hero, parallax orbs,
│   │   │                    # bento grid, dual-direction tech marquee, CTA section
│   │   ├── About.tsx        # Animated counters, slide-in bio, staggered interest cards
│   │   ├── Experience.tsx   # Animated timeline, tab detail with staggered achievements
│   │   ├── Projects.tsx     # Filterable project grid with stagger scroll reveal
│   │   ├── Speaking.tsx     # Counter stats, staggered event cards
│   │   ├── SpeakingDetail.tsx # Full talk detail (video, slides, description)
│   │   ├── Blogs.tsx        # Medium API feed, featured post, staggered blog grid
│   │   ├── Contact.tsx      # Slide-in form + info panel, contact form to /api/contact
│   │   └── NotFound.tsx     # 404 fallback
│   │
│   ├── components/
│   │   ├── Layout.tsx           # Page shell: ScrollProgress + Navigation + main
│   │   ├── Navigation.tsx       # Glassmorphism nav, layoutId sliding pill indicator,
│   │   │                        # animated mobile drawer
│   │   ├── ScrollProgress.tsx   # Spring-smoothed gradient scroll progress bar (top)
│   │   ├── AnimatedCounter.tsx  # Counts up from 0 when scrolled into view
│   │   ├── ThemeProvider.tsx    # next-themes context (default: dark)
│   │   ├── ThemeToggle.tsx      # Animated sun/moon crossfade toggle
│   │   ├── TypewriterEffect.tsx # Looping typewriter for role titles
│   │   ├── SEO.tsx              # Per-page title/description via React Helmet
│   │   ├── JsonLd.tsx           # Schema.org JSON-LD structured data
│   │   └── ui/                  # shadcn/ui primitives (Button, Toast, Tooltip…)
│   │
│   ├── data/
│   │   └── projects.config.ts   # Project definitions — set show: true to display
│   │
│   └── hooks/
│       └── use-toast.tsx        # Toast notification hook
│
└── public/
    ├── images/              # Local conference/event photos
    └── robots.txt           # Search engine crawl rules
```

---

## Pages & Features

### `/` — Home (Landing Page)
A cinematic, full-viewport hero that scrolls into a bento grid overview:

- **Character-by-character name reveal** — "SHUBHAM" and "AGNIHOTRI" animate letter-by-letter with a curtain-slide effect
- **Parallax hero background** — three animated orbs move at different speeds tied to `useScroll` + `useTransform`
- **Floating micro-particles** — six subtle indigo dots animate independently in the background
- **Animated gradient divider** draws from center on load
- **Typewriter effect** cycling through roles (Senior Data Scientist, ML Engineer, Public Speaker…)
- **Bento grid** — photo card (slides from left), bio card (slides from right), 2×2 stats grid with `AnimatedCounter`, Company / Speaking / Social cards (staggered scroll reveal)
- **Dual-direction tech marquee** — two rows of tech badges scrolling in opposite directions, pause on hover
- **CTA section** — glassmorphism card with gradient heading and action buttons, scroll-triggered reveal

### `/about` — About
- **Animated counters** for stats (5+ Years, ₹50Cr+, 500+ Trained, 3 Companies) — count up from 0 on scroll
- Bio section: photo slides from left, text slides from right (both `whileInView`)
- **Interest cards grid** — 6 cards stagger-reveal on scroll; icon springs on hover

### `/experience` — Experience
- **Timeline vertical line** draws top-to-bottom (`scaleY` animation) on scroll
- **Animated timeline dots** — pulse glow when active, spring-scale on tab switch
- **Tab detail panel** — `AnimatePresence` fade/slide on company switch
- Achievement list and tech tag cloud use `staggerContainer` / `staggerItem` on every tab change

### `/projects` — Projects
- Category filter pills stagger in on page load
- Project cards use `staggerContainer` / `staggerItem` with `whileInView`; image zooms on `whileHover`
- `AnimatePresence` cross-fade on category filter change

### `/speaking` — Speaking
- Stats bar (20+ Talks, 3L+ Audience, 4 Countries, 10+ Topics) with `AnimatedCounter`
- 13 conference event cards stagger-reveal with `whileInView` (fixed from firing on-load)
- Event images zoom on `whileHover`; hover overlay links to detail view

### `/blogs` — Blogs
- Featured post slides from left on scroll
- Blog card grid uses `staggerContainer` / `staggerItem` with `whileInView`
- Live data from Medium API (`shubham-agnihotri`), falls back to curated posts on error

### `/contact` — Contact
- Contact form slides from left, info panel slides from right (both `whileInView`)
- Social links and contact info stagger in
- Submit button has `whileHover` / `whileTap` feedback; posts to `/api/contact`

---

## Animation System

All scroll animations are powered by Framer Motion. Shared variants live in `src/lib/animations.ts` and are imported by every page.

| Variant | Effect |
|---|---|
| `fadeUp` | Fade + slide up 32px |
| `fadeInLeft` | Fade + slide from left 56px |
| `fadeInRight` | Fade + slide from right 56px |
| `scaleIn` | Fade + scale from 88% |
| `staggerContainer` | Parent variant — staggers children 100ms apart |
| `staggerItem` | Child variant — fade + slide up 26px |
| `staggerItemLeft` | Child variant — fade + slide from left 24px |
| `charReveal` | Character curtain-slide (y 115%→0) for hero name |

**Global animations (Layout level):**
- `ScrollProgress` — spring-smoothed gradient bar (`from-indigo-500 via-violet-500 to-cyan-400`) fills as you scroll
- Page transitions — `AnimatePresence` in `App.tsx` wraps all routes; each navigation fades + slides in/out

---

## Design System

### Theme
- **Default mode:** Dark (persisted in `localStorage` as `shub_theme_mode`)
- Toggle available in the navigation bar (animated sun/moon crossfade)

### Color Palette (HSL CSS variables)
| Token | Dark value | Description |
|---|---|---|
| `--background` | `236 40% 7%` | Near-black deep navy |
| `--primary` | `239 84% 67%` | Electric indigo (#6366f1) |
| `--secondary` | `261 85% 72%` | Soft violet |
| `--accent` | `189 94% 48%` | Cyan (#06b6d4) |
| `--card` | `236 32% 11%` | Elevated card surface |
| `--muted` | `236 28% 16%` | Subtle surfaces |

### Typography
- **Headings:** Exo 2 (Google Fonts) — `font-heading`
- **Body:** Inter (Google Fonts) — `font-sans`

### Utility Classes (`src/index.css`)
| Class | Purpose |
|---|---|
| `.glass-card` | `bg-card/70 backdrop-blur-16px` glassmorphism |
| `.bento-card` | Glass card with hover border + shadow + lift |
| `.mesh-bg` | 48px indigo grid overlay |
| `.dot-bg` | 28px radial dot pattern |
| `.gradient-text` | Indigo → violet → cyan text gradient |
| `.hero-gradient-name` | `120deg` name gradient for hero heading |
| `.glow-primary / .glow-sm / .glow-cyan` | Box shadow glow effects |
| `.gradient-border` | Transparent border with gradient padding-box trick |
| `.marquee-inner` | 35s forward infinite marquee |
| `.marquee-inner-reverse` | 28s reverse infinite marquee |

### Tailwind Extensions (`tailwind.config.js`)
- **Shadows:** `glow-sm`, `glow`, `glow-lg`, `glow-cyan`, `card`, `card-hover`
- **Animations:** `float`, `float-slow`, `pulse-slow`, `glow-pulse`, `spin-slow`, `shimmer`, `fade-up`

---

## Running Locally

### Prerequisites

- **Node.js** v18 or higher (v20 recommended) — [download](https://nodejs.org/)
- **npm** v9+ (bundled with Node) — or use `yarn` / `pnpm`

Verify your versions:
```bash
node --version   # v18.x or v20.x
npm --version    # 9.x or higher
```

---

### 1. Clone the repository

```bash
git clone https://github.com/KillerStrike17/Portfolio.git
cd Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser. The server supports hot module replacement — changes reflect instantly without a full reload.

---

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at `http://localhost:8080` with HMR |
| `npm run build` | Production build — outputs to `dist/` |
| `npm run build:dev` | Development build (unminified) — outputs to `dist/` |
| `npm run preview` | Serve the `dist/` folder locally to test the production build |
| `npm run lint` | Run ESLint across the codebase |

---

### Production Build

```bash
npm run build
```

Output lands in `dist/`. To preview it locally before deploying:

```bash
npm run preview
# → http://localhost:4173
```

---

### Deploying to Vercel

The project includes a `vercel.json` with SPA rewrite rules — all routes fall back to `index.html` so React Router handles navigation correctly.

```bash
# Install Vercel CLI (once)
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repo directly in the [Vercel dashboard](https://vercel.com) for automatic deployments on every push.

---

## Managing Content

**Projects** — Defined in `src/data/projects.config.ts`. Toggle `show: true / false` per project to control visibility. Each entry takes: `title`, `description`, `image`, `github`, `demo?`, `technologies[]`, `category`, `show`.

**Speaking events** — Defined directly in `src/pages/Speaking.tsx` and `src/pages/SpeakingDetail.tsx`. Local event photos are served from `public/images/<event-id>/`.

**Blog posts** — Fetched live from the Medium API (`shubham-agnihotri`). Fallback posts in `Blogs.tsx` are shown if the API is unreachable.

---

## SEO

Every page implements:
- Per-page `<title>` and `<meta description>` via the `SEO` component
- Open Graph and Twitter Card meta tags in `index.html`
- Schema.org JSON-LD structured data via `JsonLd` (Person, ProfilePage, CollectionPage, Blog, etc.)
- `robots.txt` in `/public`

---

## Configuration Files

| File | Purpose |
|---|---|
| `vite.config.ts` | Dev server port `8080`, `@` alias → `./src` |
| `tailwind.config.js` | Custom fonts, glow shadows, keyframes, animations |
| `tsconfig.json` | Strict TypeScript, path alias `@/*` → `src/*` |
| `components.json` | shadcn/ui style, base color, component paths |
| `vercel.json` | SPA rewrite: all routes → `index.html` |
