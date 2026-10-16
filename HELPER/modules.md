# modules.md: Jay Dudhrejiya portfolio (v2)

Defines the sections, content model and acceptance criteria. Design rules: `design.md`. Colors: `color-system.md`.

Content rule: **only real facts.** If a detail is unknown, leave a visible `[TODO: ...]` in the content file and list it in the final report. Never invent clients, numbers, dates, testimonials or outcomes. Items marked *(draft, owner to confirm)* are written from limited information and must be checked by the owner.

---

## 0. Global

- Name on the site: **Jay Dudhrejiya**. No company or brand name anywhere (the owner freelances under his own name).
- Title (37 chars): `Jay Dudhrejiya | Full-stack developer`
- Meta description (147 chars): `Full-stack developer in Ahmedabad building websites and web apps for small businesses. Next.js, real-time features, and WhatsApp and AI automation.` *(editable)*
- Indexing allowed. Sitemap and robots enabled. JSON-LD `Person` with name, jobTitle, url, sameAs (LinkedIn, GitHub). No fake ratings.
- Page order: Header, Intro, Design projects, Work, About, Contact, Footer.
- Do not include any employer's projects or client systems. Only the owner's own and freelance/personal work appear on this site.

---

## 1. Header
- Left: wordmark "Jay Dudhrejiya" (serif).
- Right: Design, Work, About, Contact (anchor links), and `Résumé (PDF)` as a text link to `/resume.pdf`.
- Sticky, solid paper-50 background with a 1px hairline bottom border after scroll. No blur, no transparency.
- Mobile: wordmark and a text button "Menu" that opens a full-screen paper-50 list; focus trapped; Esc closes.

## 2. Intro
- Layout: statement spans 8 columns left; a narrow right column of mono metadata.
- Statement *(editable)*: `I build websites and web apps for small businesses.` Optional second line in the accent: `Next.js, real-time features, and WhatsApp and AI automation.`
- Below, one plain paragraph (max 60 words), first person, no buzzwords, saying what he builds, what he cares about (making the system easy to use), and that he works independently. *(draft, owner to confirm)*
- Right column (mono, small): `Based in Ahmedabad, India` / `[TODO: availability line, e.g. "Open for freelance projects"]` / email link / `Résumé (PDF)`.
- One text link: "See the work" to `#design`. No second button, no scroll arrow.
- Intro statement reveals line by line once (see `design.md` section 7).

## 3. Design projects (`id="design"`), the dark section
- Section title (serif): `Design`. One-line mono caption: `Websites where the look and feel were the brief.`
- Two plates (see seed data), alternating layout: plate 1 = image right (8 cols), text left (4 cols); plate 2 = reversed. On mobile: image first, then text.
- Each plate shows: index number, title, a `kind` tag (`Client`, `Speculative concept` or `Personal`), year, stack (mono), case note in three short labeled parts (Problem, Decision, Outcome), process material if it exists, and a text link `Visit site` only if a live URL exists.
- Visuals: real screenshots or a short silent video loop (poster fallback). Add 2 to 3 supporting visuals per plate if available (detail crops, mobile view, process assets).
- Section scroll-reveal allowed here only.

## 4. Work (`id="work"`), the index
- Section title: `Work`. Mono caption: `Selected projects. Screenshots only.`
- A table-like list. Header row (mono): `No. / Project / What it is / Stack / Year / Status`. One row per project, hairline between rows.
- Row click/tap expands inline to show: one screenshot (flat, hairline frame, caption), a description of 3 to 5 sentences, and links (live site, repo) only if they exist.
- Mobile: rows stack as name, one-liner, then metadata; the expanded panel shows the screenshot full width.
- Only built or deployed projects belong here. Ideas and scoped-only products go in About as a single line ("Currently exploring: ...") or are omitted.

## 5. About (`id="about"`), paper-100
- Layout: photo placeholder (left, 4 cols; real photo if provided) and text (right, 7 cols).
- Text, first person, about 120 words *(draft, owner to confirm)*: what he does, how he works with small businesses (understands the workflow before building), how he works (stage-by-stage updates, plain communication), where he is based.
- Two plain lists below in two columns, no icons, no bars: **What I build** (websites for businesses, web apps and dashboards, real-time features, WhatsApp booking and automation) and **Tools** (grouped by purpose: Frontend, Backend, Data, Automation and AI). Only tools he actually uses.

## 6. Contact (`id="contact"`)
- Serif line: `Email me about your project.`
- Large email link (mailto), then LinkedIn and GitHub as text links. No form. No "let's build something amazing".
- Optional single line about response time, only if the owner confirms it.
- `[TODO: email address]`, `[TODO: LinkedIn URL]`, `[TODO: GitHub URL]`.

## 7. Footer
- `© 2026 Jay Dudhrejiya`, small links: Résumé, GitHub, LinkedIn, back to top. paper-100 with hairline top border.

---

## 8. Project data model (one typed content file)

```
slug, title, kind: 'client' | 'speculative' | 'personal'
year, role, stack[]
oneLiner
caseNote?: { problem, decision, outcome }        // Design projects
description                                       // Work projects (3-5 sentences)
status: 'live' | 'mvp' | 'archived'
links?: { live?, repo? }
images: [{ src, alt, caption }]                   // screenshots at 1440x900 @2x, WebP/AVIF
```

All images in `public/projects/<slug>/`. Keep missing assets as clearly labeled placeholders until the owner supplies them; list them in the final report.

---

## 9. Seed projects (from what is known; owner must confirm every detail)

**Design projects**

1. **The Messy Door Cafe** *(kind: [TODO: client or speculative])*
   - Scrollytelling site built with Next.js 14, with full menu data integration and an editorial card-rail layout. *(known)*
   - [TODO: confirm whether the WhatsApp booking automation is built and live. Only mention it if it is.]
   - Case note: *(draft, owner to confirm)* Problem: a menu-heavy café needs a site that tells its story instead of listing items. Decision: scroll-driven storytelling with the menu data integrated into editorial card rails. Outcome: [TODO].
2. **Kaaffeella** *(kind: speculative concept, if it was a pitch with no paid brief)*
   - Café website with a minimalist black-ink hand-doodle illustration style and a color palette taken from the café's logo. Two site variants were explored. Built with Tailwind v4. *(known)*
   - [TODO: state accurately how the illustrations were produced. Be straightforward about the process.]
   - Case note: *(draft, owner to confirm)* Problem: [TODO]. Decision: strip it back to black ink on a quiet background so the logo's palette and the doodles carry the identity. Outcome: [TODO].

**Work index**

3. **Inflr** *(status: mvp, live deployment and GitHub repo exist)*
   - Influencer marketplace platform in MVP stage. [TODO: stack, year, role, what a creator and a brand can each do, links, 1 to 2 screenshots.]

Not included by default: products that are only scoped or planned (for example a client-portal SaaS, a farmer-to-restaurant marketplace, a café booking SaaS) and anything built for an employer. Add a planned product only after it has a working build.

---

## 10. Résumé link
`/resume.pdf` must exist. Resume content is the owner's job to update; remind him not to include employer-confidential project details.

---

## 11. Definition of done

- [ ] `AUDIT.md` written before any change (see the starter prompt) and every slop item in it resolved
- [ ] All sections built in order; each section's structure differs from its neighbors
- [ ] No item from the "Slop" columns in `design.md` remains (gradients, glass, glow, icon cards, skill bars, marquee, typed text, emoji, fake window chrome, blobs, particles, identical card grids)
- [ ] No invented facts; every unknown is a visible `[TODO]` listed in the final report
- [ ] No company/brand name other than "Jay Dudhrejiya"; no employer project
- [ ] Colors only from `color-system.md` tokens; only PASS contrast pairings
- [ ] Reduced-motion and keyboard verified; works without JS
- [ ] Lint, typecheck (if TypeScript) and production build clean; Lighthouse scores reported
- [ ] Work done on a branch with a Vercel preview deployment for review; `main` untouched until the owner approves