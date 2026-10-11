# Repository audit

Audit performed before the portfolio rebuild on 2026-10-11. This records the
repository and the deployed page as they existed on `main` at commit `39eed7d`.

## Stack and deployment

- Framework: React 19.1.0 with JavaScript/JSX, bundled by Vite 6.3.5.
- Styling: Tailwind CSS 4.1.8 through the Vite plugin, with the sole stylesheet
  at `src/index.css`.
- Entry point: `index.html` loads `src/main.jsx`; `src/main.jsx` mounts
  `src/App.jsx`.
- Build and checks: `npm run build` invokes `vite build`; `npm run lint`
  invokes `eslint .`. No typecheck script or TypeScript source/configuration is
  present. Vite's production output is `dist/`.
- Deployment: Git remote is `Jay09990/Portfolio` on GitHub. The README links
  `https://portfolio-theta-olive-36.vercel.app/`, and the `Portfolio` GitHub
  repository lists that as its homepage. No Vercel config is checked in;
  deployment appears connected through the Vercel Git integration.
- The working tree was on `main` at `39eed7d`; `HELPER/` was already
  untracked. It contains the supplied design specifications and is not part of
  the application.
- Baseline `npm run lint` and `npm run build` could not start because
  dependencies are not installed (`eslint` and `vite` commands unavailable).

## AI-slop findings

The categories below follow the tables in `design.md` section 2.

### Copy (section 2.1)

| Pattern | Location | Finding |
|---|---|---|
| Generic positioning and unsupported claims | `src/components/sections/Hero.jsx`, `Hero` | “Crafting digital experiences with a focus on aesthetics and performance” and “Turning complex problems into elegant, minimalist solutions.” |
| Generic CTA and vague promise | `Hero` | “Explore Work” and the copy “Have a project in mind? Let's create something extraordinary.” in `Contact`. |
| Third-person/marketing-like, vague bio | `src/components/sections/About.jsx`, `About` | “Driven by design, powered by code,” “Creating digital future,” “My journey started with a curiosity…,” “robust applications,” “immersive user experiences,” and “Code is my tool, creativity is my medium.” |
| Unsupported numbers | `About` | “2+ Years Experience” and “20+ Projects Shipped”; no source is provided. |
| Skill display as visual spectacle rather than plain list | `src/components/sections/Skills.jsx`, `Skills` | Repeated animated rows of labeled tools and decorative icons. |
| Generic fallback project description | `src/components/sections/Projects.jsx`, `Projects` | If a repository has no description it invents “A cool project from my GitHub repository…” |
| Unverified template copy and data | `src/data/data.js` | Generic bio, sample phone/location, invented sample work history, and fictional e-commerce project data. This file is not imported into the UI. |
| Placeholder identity/contact data | `src/data/data.js`; `Hero` | “Your Name,” `your.email@example.com`, and `mailto:your@email.com`. |
| Emoji in UI and README | `src/components/sections/Skills.jsx`; `README.md` | Skill labels use emoji; README has emoji headings and “Made with ❤️ by DJ.” |

### Visual (section 2.2)

| Pattern | Location | Finding |
|---|---|---|
| Glass/blur and translucent surfaces | `src/components/common/Header.jsx`, `Header`; `src/components/sections/Hero.jsx`, `Hero`; `src/components/sections/Skills.jsx`, `Skills` | Blurred translucent navigation, blurred hero effects/label, and translucent blurred skill chips. |
| Glows, gradients, noise, scanlines | `Hero`; `src/components/sections/Projects.jsx`, `Projects`; `Skills`; `src/components/sections/Contact.jsx`, `Contact` | Blurred floating shapes, gradient overlays/text/masks, remote noise texture, scanline treatment, and background glow. |
| Rounded cards and shadows | `Projects`; `src/components/sections/About.jsx`, `About`; `Skills` | Rounded project mockups and stat cards, pills, and a shadowed fake browser presentation. |
| Fake browser/macOS chrome | `Projects` | The project visual is a fabricated code-window with three colored dots, not a project screenshot. |
| Animated carousel, parallax, glitch, and repeated reveals | `Hero`; `Projects`; `About`; `Contact`; `Skills` | A four-second portrait slideshow/glitch, mouse parallax, pinned horizontal project scroll, repeated scroll reveals, and an infinite skill marquee. |
| Iconography and identical skill chips | `Skills`; `Projects`; `Contact`; `About`; `Footer` | Emoji/icon-led chips, decorative project icons, icon buttons, and card-like repeated content. |
| Centered/repeated composition and scroll prompt | `Hero`; `Projects`; `Skills`; `Contact` | Centered project/skills presentations and animated “Scroll” indicator. |
| Palette outside the prescribed color system | All section components | Predominantly black/gray/white with orange, blue, green, yellow, purple and other colors rather than the paper/ink/rust tokens. |
| No intended editorial hierarchy | `src/index.css`; all sections | Only Tailwind is imported; no selected type system, token layer, or editorial layout is implemented. |

### Code/repository tells (section 2.3)

| Pattern | Location | Finding |
|---|---|---|
| Generic/commented template code | `src/App.jsx`; `src/components/common/Header.jsx`; `src/components/sections/Hero.jsx`; `src/components/sections/Projects.jsx` | Template narration, commented-out/decorative sections, and unused declarations (including `totalWidth` in `Projects`). |
| Boilerplate README and broken sample commands | `README.md` | Emoji feature checklist, generic setup URL/`npm start` instructions (no `start` script), sample backend stack, and inaccurate MERN description. |
| Unused/placeholder data | `src/data/data.js`; `src/data/services.js` | Generic placeholder portfolio, experience, skills and contact data; `services.js` exports undeclared-to-app configuration values and neither file is imported. |
| Unused dependencies | `package.json` | `animejs`, `next-themes`, `react-icons`, `vite-tsconfig-paths`, and `@emailjs/browser` are not imported. EmailJS is separately loaded from a CDN in `Contact`; `vite-jsconfig-paths` is configured. |
| Dynamic, uncurated project data | `src/components/sections/Projects.jsx`, `Projects` | Runtime fetch of the newest 20 public GitHub repositories, rather than a reviewed portfolio data source; includes projects that the supplied rules exclude. |
| External script and network dependency | `src/components/sections/Contact.jsx`, `Contact`; `Projects` | EmailJS is loaded from jsDelivr; repository content is fetched from GitHub at runtime. |

## Content inventory

### Current application content and contact details

- Header navigation: `INDEX`, `PROFILE`, `TECH`, `WORKS`, `CONTACT`; wordmark
  `JAY.`. Mobile navigation is icon-only.
- Hero: “Full Stack Developer”; “JAY DUDHREJIYA”; the generic copy recorded
  above; “Explore Work”; GitHub
  `https://github.com/Jay09990`, LinkedIn
  `https://linkedin.com/in/jay-dudhrejiya`, and placeholder
  `mailto:your@email.com`.
- About: the four-line slogan, two general paragraphs, unverified “2+ Years
  Experience” and “20+ Projects Shipped,” and a download link to
  `/Docs/Dudhrejiya_Jay.pdf`.
- Skills: frontend: React.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind,
  Next.js, Redux; backend: Node.js, Express, MongoDB, PostgreSQL, Firebase,
  REST APIs, GraphQL; tools: Git, Docker, AWS, Postman, Figma, Vite, VS Code.
  These appear in the UI with icons/emojis; this list is not verified against
  the supplied project facts.
- Work: fetches up to 20 most recently updated public repositories from
  `https://api.github.com/users/Jay09990/repos?sort=updated&per_page=20`,
  sorts them by star count and displays name, description (or generic fallback),
  language, GitHub link, optional homepage, star count and fork count. At audit
  time the returned repository names were: `Virtual-humanity-group-`,
  `ERP-dashboard`, `meter-reader`, `meter-reader-backend`,
  `Matrix--surveillance-system`, `Company_task`, `energy-meter-reader`,
  `kafeella_cafe`, `Jay09990`, `altrex-design-2`, `clinic`, `pana3d`,
  `Campaugn-marketplace`, `Lipi_cafe`, `Devil-s_cafe`,
  `TheInsightBit_Frontend`, `TheInsightBit_Backend`, `Portfolio`,
  `Silly_Hyprland_rice`, and `mojito`. The API supplied GitHub links for each;
  live links were present for `Virtual-humanity-group-`, `ERP-dashboard`,
  `meter-reader`, `kafeella_cafe`, `altrex-design-2`, `clinic`, `pana3d`,
  `Campaugn-marketplace`, `Lipi_cafe`, `Devil-s_cafe`,
  `TheInsightBit_Frontend`, `Portfolio`, and `mojito`. Repository descriptions
  were blank except `Lipi_cafe` (“Standalone website for lipi cafe”),
  `Devil-s_cafe` (a cyberpunk-noir café website description),
  `Portfolio` (“My personal website portfolio using MERN stack”), and
  `Silly_Hyprland_rice` (a personal learning note). This unreviewed feed must
  not be carried into the rebuilt portfolio; `modules.md` identifies the
  approved seed projects.
- Contact: `jdudhrejiya0990@gmail.com`, phone `+91 70419 45248`, an EmailJS
  form, and placeholder confirmation/error messages. The README lists
  `https://linkedin.com/in/jdudhrejiya090` (a different LinkedIn URL from the
  components) and `https://github.com/Jay09990`.
- Footer: LinkedIn `https://linkedin.com/in/jay-dudhrejiya`, GitHub
  `https://github.com/Jay09990`, dead `href="#"` Instagram link, email, phone,
  location “Bhavnagar, Gujarat / Bharat,” current-year copyright and “All
  rights reserved.”
- `src/data/data.js` has an unused sample e-commerce platform, two fabricated
  sample employers/roles, sample contact/location, generic bio and sample
  tool ratings. These are template data, not evidence of actual work.
- README references the deployed URL
  `https://portfolio-theta-olive-36.vercel.app/`.

### Existing image and document assets

| Asset | Size | Current use / notes |
|---|---:|---|
| `public/images/hero-1.jpg` | 126,838 bytes | 900×1600; hero slideshow; mirror portrait |
| `public/images/hero-2.jpg` | 113,797 bytes | 1512×1512; hero slideshow; portrait |
| `public/images/hero-3.jpg` | 312,970 bytes | 1204×1600; hero slideshow; portrait in a retail space |
| `public/images/hero-4.jpg` | 289,984 bytes | 1200×1600; hero slideshow; portrait |
| `public/images/hero-5.jpg` | 293,673 bytes | 1050×1306; hero slideshow; portrait |
| `public/images/hero-6.jpg` | 243,573 bytes | 1200×1600; hero slideshow; portrait |
| `public/images/hero-7.jpg` | 52,997 bytes | 1280×864; hero slideshow; portrait |
| `public/Docs/Dudhrejiya_Jay.pdf` | 321,945 bytes | Existing résumé asset; current site links to it |

The slideshow images are owner portraits, not project screenshots. The rendered
image uses generic alt text (“Portrait”) and has no explicit width/height.
There are no project screenshots in the repository. Image dimensions were read
from JPEG headers with a small Node.js script.

## Broken and measurable issues

- The deployed page was opened during the audit. Its browser reported a
  resource load error with HTTP 402. The error did not identify its URL in the
  available page summary; the dynamic GitHub request and external EmailJS
  script are network-dependent code paths.
- `Projects` does not check `response.ok` or validate the API payload before
  sorting. If the request fails, it logs an error and ends in an empty project
  list.
- The screenshot-like work visuals are fabricated browser/code placeholders;
  project screenshots are absent.
- Hero image files of 243,573–312,970 bytes exceed the docs' 200 KB target for
  project screenshots (although they are portraits, not screenshots); no
  modern-format image is present.
- No image has intrinsic dimensions in markup, the slideshow changes images
  automatically, and the project layout waits for a network fetch. These are
  layout/performance risks; no CLS/Lighthouse measurement was available during
  the audit.
- The hero contains two `h1` elements; the menu toggle and social icon links
  have no accessible names; there is no skip link; keyboard focus is not
  trapped in the mobile menu; the content is not server-rendered and is absent
  when JavaScript is disabled; reduced-motion is not handled.
- Resume URL casing/name differs from the requested `/resume.pdf`; the
  Instagram `href="#"` is a dead link; LinkedIn URLs conflict; hero email is a
  placeholder.
- Lint/build status could not be established before dependency installation;
  both commands failed at startup because local dependencies were absent.
- Unused dependencies and unused data modules are listed in the code/repo
  findings above. No automated test script, sitemap, robots file, Open Graph
  metadata, JSON-LD or favicon is present in the tracked root/public inventory.
