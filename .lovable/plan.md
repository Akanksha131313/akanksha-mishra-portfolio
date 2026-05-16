# Portfolio Website — Akanksha Mishra

A single-page (with a dedicated Projects route) portfolio inspired by the Mrstudio reference: warm orange + navy blue palette, off-white background, rounded sans-serif headings, floating cards, gradient accents.

## Section order (per CV + your override)

1. **Sticky Nav** — Mrstudio-style pill bar: Home · Skills · Projects · Experience · Contact + orange "Contact Us" button
2. **Hero** — "Hi! I am Akanksha Mishra" navy headline, subtitle (Data Analyst | SQL · Python · Power BI · Tableau · Advanced Excel | IIT Roorkee Certified), "Open to Relocate – PAN India" tag, CTAs **Hire Me** + **Download CV**, floating analytical icon cards (SQL, Power BI badge, "Best Certified" award), generated portrait illustration with gradient backdrop, floating circle/star decorations
3. **Professional Summary** — short paragraph + 3 KPI stat tiles (40K+ records, 20+ hrs saved, 300K+ impressions analyzed)
4. **Skills** (replaces "My Awesome Services") — placed right after intro per your request. 4 grouped cards with icons:
   - Languages & Querying: SQL (Joins, CTEs, Window Functions), Python (Pandas, NumPy)
   - BI & Reporting: Power BI (DAX, Data Modeling), Tableau, Advanced Excel, MIS Reporting
   - Data Analytics: ETL Pipelines, Data Cleaning, Data Validation, EDA, KPI Development, Reporting
   - Tools: Jupyter, Google Colab, Git, GitHub
5. **Virtual Experience** — two info cards: Deloitte (Mar 2026) and Tata Group (Mar 2026) with icons and bullet highlights
6. **Projects** — 3 cards in a grid, each with a **generated background image** (dashboard-themed visuals) overlaid with title, stack chips, 2-line summary, KPI impact, GitHub link:
   - Bank Loan Performance & Risk Analysis Dashboard (SQL · Python · Power BI · Tableau)
   - Retail Customer Analytics & Purchase Trends (Python · PostgreSQL · Power BI)
   - Marketing Campaign Performance Dashboard — Meta Ads (Power BI · DAX · Data Modeling)
7. **Education** — two horizontal cards: IIT Roorkee (2024–2025), CCS University (2021–2024)
8. **Certifications** — 4-badge minimal grid: Deloitte, Tata, IIT Roorkee PG, Microsoft SQL (Intellipaat)
9. **Contact** — "Let's Connect" orange CTA + contact details (email, LinkedIn, GitHub, Delhi India) + simple Name/Email/Message form
10. **Footer**

## Design system

- Colors (oklch tokens in `src/styles.css`): warm orange primary `#F26A3D`, deep navy heading `#0E1B3D`, off-white bg `#FDF8F3`, soft pink→purple gradient accent, muted gray body
- Typography: Plus Jakarta Sans / Manrope rounded sans (Google Fonts) — bold navy headings, medium gray body
- Components: rounded-3xl floating cards, soft shadows, gradient borders on skill cards, pill nav, decorative circles/stars
- Subtle motion: fade-in on scroll, hover lift on project cards

## Routes (TanStack Start)

- `/` — full single-page portfolio with all sections above and smooth scroll anchors
- `/projects` — expanded project gallery (per PRD's "2-page" deliverable)
- Per-route `head()` metadata for SEO

## Assets to generate

- 1 hero portrait illustration (data analyst themed, orange/navy palette, transparent bg)
- 3 project background images (loan/finance dashboard, retail analytics, marketing campaign — abstract data-viz scenes)
- Small decorative SVG accents (inline)
- CV PDF: copy uploaded `Akanksha_Mishra_DataAnalyst_CV_1.pdf` to `public/` for the Download CV button

## Technical

- TanStack Start file-based routes; shared `Header`/`Footer` components
- Tailwind v4 semantic tokens only (no raw hex in components)
- Responsive (desktop/tablet/mobile), accessible contrast, alt text
- No backend needed (contact form is client-side mailto or toast confirmation)
