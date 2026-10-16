# design.md: Jay Dudhrejiya portfolio (v2)

Read with `color-system.md` and `modules.md`. Color values live only in `color-system.md`.

Goal: a portfolio that looks designed by a person with a point of view, not generated. It must also work as the link in cold emails to foreign clients: clear in 10 seconds, proof visible immediately.

---

## 1. Direction: "Cinema and print"

The owner's taste is cinematic editorial with old-money restraint. His real work is café/business websites (a black-ink doodle café site, a scrollytelling café site) plus web apps. The design borrows from two things he already likes:

- **Print editorial:** warm paper, ink-black type, large serif headlines, hairline rules, an *index* instead of a card grid.
- **Film:** the Design section is a dark "screening room" where the work is the visual; project metadata reads like film credits (year, stack, role in small monospace).

Structure idea: the site is an **index**. Numbered entries, consistent metadata, big images, little chrome.

Why this is not generic: the layout is asymmetric, the type is high-contrast and large, there are no cards-with-icons, no gradients, and every section has a different internal structure.

---

## 2. Anti-slop rules (the core of this doc)

Remove or never use anything in the "Slop" column. Use the replacement.

### 2.1 Copy

| Slop | Replace with |
|---|---|
| "Hi, I'm Jay 👋", emoji anywhere in UI copy | A plain first line with facts |
| "Passionate full-stack developer crafting digital experiences" | What he builds, for whom, with what: "I build websites and web apps for small businesses: Next.js, real-time features, WhatsApp/AI automation." (editable) |
| "Let's build something amazing together", "turning ideas into reality" | A specific CTA: "Email me about your project" |
| Triplets ("fast, scalable, and secure"), buzzwords (innovative, cutting-edge, seamless, robust, leverage) | One concrete claim with a detail, or nothing |
| Skill bars, percentages, star ratings, "Skills: 95%" | A plain text list of tools he actually uses, grouped by what they are for |
| Em-dash-heavy sentences and "not just X, but Y" constructions | Short sentences, commas, periods |
| Third-person bio | First person, specific, a little dry |
| Invented numbers, testimonials, client logos | Nothing. Only real facts. Label concepts as concepts |

Voice: direct, calm, specific. Small honest admissions are good ("This was a speculative pitch, not a paid job.").

### 2.2 Visual

| Slop | Replace with |
|---|---|
| Purple / indigo / blue-to-pink gradients, gradient text | Flat paper and ink with one rust accent |
| Glassmorphism, backdrop blur, glow, neon shadows | No blur, no glow. Hairlines and flat fills |
| Floating blobs, particles, animated grid backgrounds | Nothing. Whitespace. Optional faint film-grain on the dark section only |
| Three-column grid of identical rounded cards with icons | An index list and large asymmetric image plates |
| Icon inside a colored circle | No icons, or plain text labels |
| `rounded-2xl` on everything, soft shadows on everything | Radius 0 to 2px. No shadows |
| Fake browser/macOS window chrome (three dots) around screenshots | Flat screenshot with a 1px hairline border and a caption |
| Typed-text animation, cursor followers, scroll-jacking, bouncing "scroll" arrow or mouse icon | None |
| Tech-logo marquee carousel | Plain text list |
| Everything centered | Left-aligned text, asymmetric grid, deliberate empty space |
| Same fade-up on every element | Motion only where it carries meaning (see 7) |
| Inter/Poppins/Space Grotesk used by default, with one weight | Typefaces in section 3, with real hierarchy |
| Identical section rhythm (centered heading + subtitle + grid, repeated) | Each section has its own structure (see `modules.md`) |
| Dark "hacker" neon mode | Light paper site with one dark section |

### 2.3 Code and repo tells

- No template leftovers (default favicon, boilerplate README text, placeholder lorem, unused components, "Vite + React" default assets).
- No comment banners like `// ===== Hero Section =====` and no commented-out code.
- Component and class names describe content (`ProjectIndexRow`, `DesignPlate`), not generic labels (`FeatureCard`, `Section1`).
- README: plain, no emoji headers, no feature bullet list with checkmarks. State what it is, stack, and how to run it.
- Remove unused dependencies.

---

## 3. Typography

Fonts (load with the framework's font optimization or `@fontsource`; self-host; `display: swap`):
- **Display and big numerals:** Bodoni Moda (high-contrast didone: fashion editorial and film title feel)
- **Body and UI:** Hanken Grotesk (neutral, readable, not the default everyone uses)
- **Metadata (year, stack, role, index numbers):** IBM Plex Mono, small, uppercase, tracking +0.06em

Preview all three early. If Bodoni Moda feels too sharp at small sizes, use it only at 28px and above and set smaller headings in Hanken Grotesk semibold.

Scale (fluid with `clamp`):

| Role | Font | Size | Line height | Notes |
|---|---|---|---|---|
| Intro statement | Bodoni Moda | `clamp(2.5rem, 1.2rem + 6vw, 6rem)` | 1.0 | weight 400, tight tracking -0.02em |
| Section title | Bodoni Moda | `clamp(2rem, 1.2rem + 3vw, 3.75rem)` | 1.05 | |
| Project title | Bodoni Moda | `clamp(1.75rem, 1.2rem + 2vw, 3rem)` | 1.1 | |
| Body | Hanken Grotesk | `1.0625rem` | 1.65 | max 62ch |
| Small | Hanken Grotesk | `0.9rem` | 1.5 | |
| Metadata | IBM Plex Mono | `0.75rem` | 1.4 | uppercase, tracking 0.06em |

Rules: no more than three families; no gradient text; no all-caps body; headings sentence case; index numbers in mono (01, 02...).

---

## 4. Layout

- 12-column grid, max width 1280px, outer padding 20px mobile / 40px desktop.
- Spacing scale (px): 4, 8, 12, 16, 24, 32, 48, 72, 112, 160. Use only these.
- Break the grid on purpose: images may bleed to one edge, headings may span 8 columns while body sits in 4. Every section differs from the one before it.
- Radius 0 to 2px. Hairlines 1px. No shadows.
- Breakpoints 640, 768, 1024, 1280. Mobile first.

---

## 5. Imagery

- Design projects: large, high-quality screenshots or short silent video loops of the real site, shown full-bleed or near full-bleed on the dark section, with the process material beside them (doodle assets, palette, storyboard) where it exists.
- Other projects: **one static screenshot each** (desktop 1440x900 at 2x, exported to WebP or AVIF, target under 200KB) in a flat frame: 1px hairline border, caption below. No device mockups.
- A real photograph of the owner in About (natural, not a stock-looking headshot), or none. No avatars, no illustrations generated to look "friendly".
- Alt text on every image that says what it shows.

---

## 6. Components

- **Index row (Other projects):** a full-width row with hairline top border: index number (mono), project name (serif), one-line description, stack (mono), year (mono), status. Hover: the row's text shifts to the accent color; the screenshot plate opens on click/tap (or is always visible on mobile).
- **Design plate (Design projects):** big visual, project title in serif, a short case note (problem, decision, outcome), metadata in mono, optional "Visit site" text link.
- **Buttons/links:** text links with a 1px underline offset 4px; primary action is a solid ink button with paper text (radius 0). Hover underlines thicken. Focus ring 2px accent with 3px offset.

---

## 7. Motion

- Allowed: (1) a single slow reveal of the intro statement line by line, (2) smooth scroll-linked reveal inside the Design section only (the work enters like a film cut: simple opacity/translate, 400ms), (3) link/row hover color transitions 150ms.
- Not allowed: parallax, tilt, magnetic buttons, marquee, auto-playing carousels, anything looping outside the Design video loops.
- `prefers-reduced-motion: reduce`: disable all of the above except color transitions; video loops show a still poster.
- Content must be visible with JS disabled or slow to load.

---

## 8. Accessibility and performance

- Text contrast 4.5:1, UI boundaries 3:1; use only pairings from `color-system.md`'s PASS table.
- One H1. Semantic landmarks. Visible focus. Skip link. `lang="en"`.
- Targets: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1; Lighthouse Performance ≥ 90, Accessibility 100, Best Practices ≥ 95, SEO ≥ 95.
- Images sized with width/height, lazy-loaded below the fold, modern formats. No third-party scripts except if the owner adds analytics later.
- SEO: unique title and description, Open Graph image designed by the owner (not auto-generated gradient), JSON-LD `Person`, sitemap and robots allowing indexing (this is the real portfolio, so no noindex).