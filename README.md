# Adrian S. Garcia — Developer Portfolio

> *"Every system I build is a commitment — to the people who depend on it and the problem it was made to solve."*

A personal portfolio built to communicate who I am as a developer: what I've shipped, how I think, and where I'm headed. Clean architecture, purposeful design, no fluff.

**Live:** [View Portfolio](https://github.com/adrian-portfolio-alpha.vercel.app) &nbsp;·&nbsp; **Contact:** garciaadrian1030@gmail.com

---

## Preview

| Hero | Projects | Contact |
|------|----------|---------|
| Dark glassmorphism landing with animated typewriter | Project cards with live/repo links and language breakdowns | Styled contact form with direct email integration |

---

## What's Inside

This portfolio is a single-page application with five sections:

- **Hero** — name, title, and a typewriter that cycles through my focus areas
- **About** — background, quick facts, hobbies, and a timeline of education and projects
- **Skills** — core mastery bars, full skill grid, and a scrolling tech ticker
- **Projects** — three featured builds with descriptions, tags, stats, and GitHub links
- **Contact** — direct email form

### Projects Showcased

| Project | Type | Stack | Highlight |
|---------|------|-------|-----------|
| **NexEnroll** | Web App | Gemini AI · FastAPI · React · PostgreSQL | AI enrollment engine; 70% faster registration, 90% routing accuracy |
| **Sto. Niño NOBS** | Web App | React · FastAPI · PostgreSQL · SMS | Online billing system for underserved island communities |
| **Animind Duel** | Android App | Kotlin · Jetpack Compose · Room · OpenGL ES 2.0 | Turn-based trivia game with GPU-accelerated background; 98% grade |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Pure CSS (custom properties, glassmorphism) |
| Effects | Canvas API (galaxy background), IntersectionObserver (scroll reveals) |
| Animations | CSS keyframes, custom typewriter and scramble hooks |
| Deployment | Vercel |

No UI component libraries. Every visual element is hand-built.

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repo
git clone https://github.com/CodeForChange853/adrianportfolio.git
cd adrianportfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Other Commands

```bash
npm run build    # Production build → dist/
npm run preview  # Preview the production build locally
```

---

## Project Structure

```
src/
├── components/       # UI sections (Hero, SystemSpecs, DeployedArchitecture, etc.)
├── effects/          # GalaxyBackground canvas effect
├── hooks/            # useReveal, useScramble, useProjectCarousel, useEngagement
├── data/index.js     # All static content — profile, projects, skills, timeline
└── App.jsx           # Root shell (~18 lines)
```

All content lives in `src/data/index.js`. To update any text, image, or project detail, that's the only file you need to touch.

---

## Deployment

This project deploys to Vercel with zero configuration:

1. Push to GitHub
2. Import the repo in [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite and deploys on every push to `main`

---

## About Me

**Adrian S. Garcia** — Computer Science student at Northwest Samar State University (3rd → 4th Year), Calbayog City, Samar, Philippines.

Backend-focused with full-stack delivery experience. I build systems that solve real problems — from AI-driven enrollment platforms to billing tools for island communities. Student Best in Programming, 2nd Year.

- GitHub: [CodeForChange853](https://github.com/CodeForChange853)
- Email: garciaadrian1030@gmail.com
- Phone: 0954-451-2601
