# Portfolio — React + Vite

A dark, techy personal portfolio built with **React 18** and **Vite 5**.  
No UI libraries. No CSS-in-JS. Just React + CSS Modules + a clean component structure.

---

## 📁 Project Structure

```
src/
├── App.jsx                   # Root — wires all sections together
├── main.jsx                  # Vite entry point
├── data/
│   └── portfolio.js          # ← Edit YOUR info here (name, skills, projects, links)
├── hooks/
│   └── useReveal.js          # IntersectionObserver scroll-reveal hook
├── styles/
│   └── global.css            # Design tokens (CSS vars), reset, reveal classes
└── components/
    ├── Background.jsx / .module.css   # Grid + blob decorations
    ├── Navbar.jsx     / .module.css   # Fixed nav, mobile toggle, active highlight
    ├── Hero.jsx       / .module.css   # Hero with animated entrance
    ├── SectionHeader.jsx / .module.css
    ├── About.jsx      / .module.css   # Bio + stats
    ├── Skills.jsx     / .module.css   # Skill cards with animated bars
    ├── Projects.jsx   / .module.css   # Project cards
    ├── Contact.jsx    / .module.css   # Contact card with links
    └── Footer.jsx     / .module.css
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## ✏️ Customising Your Portfolio

**Everything you need to change is in one file:**

```
src/data/portfolio.js
```

Edit your:
- `profile` — name, domain, role, tagline, bio paragraphs, stats, contact links
- `skills` — icon, name, subtitle, proficiency level (0–100)
- `projects` — num label, title, description, tags array, project URL

---

## 🎨 Changing the Theme

All colours live in `src/styles/global.css` inside `:root {}`.

Key variables:
```css
--clr-purple:       #7F77DD;   /* main accent */
--clr-purple-light: #AFA9EC;   /* headings, highlights */
--clr-purple-dark:  #534AB7;   /* gradient start on skill bars */
--clr-bg:           #0d0d12;   /* page background */
--clr-text:         #e8e6f0;   /* primary text */
--clr-text-muted:   #888097;   /* body text, descriptions */
```

---

## 🌐 Deploying

```bash
# Build for production
npm run build   # outputs to /dist

# Preview the build locally
npm run preview
```

**Deploy the `/dist` folder to any static host:**
- **GitHub Pages** — use `gh-pages` or GitHub Actions
- **Netlify** — drag & drop the `dist/` folder, or connect your repo
- **Vercel** — `vercel deploy` (auto-detects Vite)

---

## 📄 License
MIT — use freely, attribution appreciated but not required.
