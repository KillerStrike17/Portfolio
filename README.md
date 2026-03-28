# 🌟 Shubham Agnihotri — Personal Portfolio

A modern, responsive personal portfolio website built with **React**, **TypeScript**, and **Vite**. It showcases Shubham Agnihotri's professional journey as a Senior Data Scientist, ML Engineer, Public Speaker, and Content Creator.

---

## 🚀 Tech Stack

| Category | Technology |
|---|---|
| Framework | [React 18](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Build Tool | [Vite 5](https://vitejs.dev/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| UI Components | [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Routing | [React Router DOM v6](https://reactrouter.com/) |
| Data Fetching | [TanStack Query v5](https://tanstack.com/query) |
| SEO | [React Helmet Async](https://github.com/staylor/react-helmet-async) |
| Icons | [Lucide React](https://lucide.dev/) |
| Charts | [Recharts](https://recharts.org/) |
| Forms | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |

---

## 📁 Project Structure

```
Portfolio/
├── index.html               # HTML entry point with meta & OG tags
├── App.tsx                  # Root component — providers + routing
├── App.css                  # Global app styles
├── vite.config.ts           # Vite build config (port 8080, @ alias)
├── tailwind.config.js       # Tailwind theme, fonts, animations
├── tsconfig.json            # TypeScript configuration
├── components.json          # shadcn/ui component registry config
│
├── src/
│   ├── main.tsx             # React DOM entry point
│   ├── index.css            # Global CSS / Tailwind base
│   │
│   ├── pages/               # Route-level page components
│   │   ├── Home.tsx         # Hero section with profile, roles, social links
│   │   ├── About.tsx        # Bio, achievements, career timeline
│   │   ├── Experience.tsx   # Detailed work experience
│   │   ├── Projects.tsx     # Project showcase with filtering
│   │   ├── Speaking.tsx     # Conference talks list
│   │   ├── SpeakingDetail.tsx # Individual talk detail view
│   │   ├── Blogs.tsx        # Blog posts (Medium API integration)
│   │   ├── Contact.tsx      # Contact form
│   │   └── NotFound.tsx     # 404 page
│   │
│   ├── components/
│   │   ├── Layout.tsx           # Page shell wrapping all routes
│   │   ├── Navigation.tsx       # Top navigation bar
│   │   ├── ThemeProvider.tsx    # Light/dark theme context
│   │   ├── ThemeToggle.tsx      # Theme switcher button
│   │   ├── TypewriterEffect.tsx # Animated typewriter for role titles
│   │   ├── SEO.tsx              # Per-page SEO via React Helmet
│   │   ├── JsonLd.tsx           # Structured data (Schema.org JSON-LD)
│   │   ├── layout/              # Sub-layout components
│   │   └── ui/                  # shadcn/ui primitive components
│   │
│   ├── hooks/               # Custom React hooks
│   └── lib/                 # Utility functions (e.g., cn() for clsx)
│
└── public/
    └── robots.txt           # Search engine crawl rules
```

---

## 📄 Pages & Features

### `/` — Home
The landing hero section featuring:
- Animated profile photo with gradient ring
- **Typewriter effect** cycling through roles (Senior Data Scientist, Public Speaker, ML Engineer, Content Creator)
- Social links (LinkedIn, GitHub, YouTube)
- Resume download button + "View My Work" CTA
- Framer Motion staggered entrance animations

### `/about` — About
- Personal bio with 6+ years of AI/ML experience
- **Achievements grid** (Times Gujarat Icon 2022, Hackathon Winner, Speaker Recognition)
- **Career timeline** (IDFC First Bank, S.AgriUdaan, Arcadis) with alternating layout

### `/experience` — Experience
Detailed breakdown of professional roles, responsibilities, and key impact metrics.

### `/projects` — Projects
Filterable project cards showcasing AI/ML, drone tech, and software projects with descriptions, tech tags, and links.

### `/speaking` — Speaking
List of conference talks, meetups, and events with dates, venues, and topics.

### `/speaking/:id` — Speaking Detail
Full detail view for a specific talk, including abstract, slides, and video links.

### `/blogs` — Blogs
Blog posts fetched from Shubham's Medium profile using the Medium article API, displayed as cards.

### `/contact` — Contact
Contact form with validation (React Hook Form + Zod) for reaching out directly.

---

## 🚀 Running Locally

To set up and run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KillerStrike17/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```
   *(Note: You can also use `yarn` or `pnpm` if you prefer).*

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open your browser and navigate to the local URL provided by Vite in your terminal (usually `http://localhost:8080` or `http://localhost:5173`).

---

## 🏗️ Managing Content & Recent Updates

- **Projects:** The Portfolio dynamically curates projects based on `src/data/projects.config.ts`. You can control which projects appear on the site by toggling the `show: true` or `show: false` flag for each project. Recent updates replaced external placeholders with custom, local imagery stored in the public directory to ensure stability and relevance.
- **Speaking Engagements:** Conference talk imagery is served locally from the `Assets/` folder, directly linked in the respective component configurations.
- **About Me:** The About text has been revamped into a summarized, structured presentation of core philosophies and interests, moving away from a traditional timeline to properly distinguish it from the Experience page.

---

## 🎨 Design System

- **Theme**: Supports both **light** and **dark** modes via `next-themes`, persisted in `localStorage` under the key `shub_theme_mode`.
- **Tailwind**: Custom tokens for `primary`, `secondary`, `background`, `foreground`, `muted`, `card`, and `border` colors defined in `tailwind.config.js`.
- **Animations**: Framer Motion used for scroll-triggered reveals, hover scale effects, and staggered list animations.
- **Typography**: Clean sans-serif with responsive text scaling (`text-5xl md:text-7xl`).

---

## 🔍 SEO

Every page implements:
- **Per-page `<title>` and `<meta description>`** via the `SEO` component.
- **Open Graph and Twitter Card** meta tags in `index.html`.
- **Schema.org JSON-LD** structured data via the `JsonLd` component (Person, ProfilePage, etc.).
- **`robots.txt`** in `/public` for search engine guidance.

---

## ⚙️ Configuration

| File | Purpose |
|---|---|
| `vite.config.ts` | Dev server on port `8080`, `@` alias points to `./src`, and maps `Assets` |
| `tailwind.config.js` | Custom theme tokens, `tailwindcss-animate` plugin |
| `tsconfig.json` | Strict TypeScript, path alias `@/*` → `src/*` |
| `components.json` | shadcn/ui style, base color, and component paths |
| `.gitignore` | Ignores `node_modules`, `dist`, etc. |
| `vercel.json` | SPA fallback routing rules for Vercel deployment |
