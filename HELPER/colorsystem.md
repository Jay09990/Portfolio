# color-system.md: Jay Dudhrejiya portfolio (v2)

Single source of truth for color. No hex values anywhere else in the code. To retheme, change the token block here and in the global stylesheet only.

---

## 1. Why this palette

| Family | Reference | Role |
|---|---|---|
| **Paper** (ivory, warm off-white) | Printed editorial pages, old-money stationery | Main background and light surfaces |
| **Ink** (warm near-black) | Film black, printed type | Text, buttons, and the dark "screening room" section |
| **Rust** (single accent) | Aged leather, brick, a roasted-coffee warmth that also suits the café projects, a warm cinematic highlight | The only accent: links, active states, index numbers. Used sparingly |

Rules of the palette: one accent only, no gradients, no pure `#000` or `#FFF` as large fills, warm neutrals throughout.

---

## 2. Tokens

| Token | Hex | Role |
|---|---|---|
| `paper-50` | `#F4F0E7` | Default page background; text on dark |
| `paper-100` | `#E9E3D5` | Alternate light sections (About, footer) |
| `paper-300` | `#CFC6B2` | Hairlines and decorative borders only |
| `paper-400` | `#B9B2A3` | Muted text on dark |
| `ink-950` | `#11100E` | Default text on light; dark section background; primary button fill |
| `ink-800` | `#25221D` | Raised surfaces on dark (plate captions, hover fills) |
| `ink-600` | `#55504A` | Muted text on light |
| `rust-400` | `#E07A5A` | Accent text, hover, focus ring **on dark** |
| `rust-600` | `#A8412A` | Accent text, hover, focus ring **on paper-50**; small accent text on paper-100 should use rust-700 |
| `rust-700` | `#8F3520` | Accent text on paper-100 (small sizes) |

Do not use rust-500 (`#C65A3B`) for text on dark (4.46:1, fails). Do not create new colors by lowering opacity on text.

---

## 3. Section backgrounds

| Section | Background | Text |
|---|---|---|
| Header | paper-50 | ink-950 |
| Intro | paper-50 | ink-950, metadata ink-600 |
| **Design projects** | **ink-950 (the only dark section)** | paper-50, metadata paper-400, accent rust-400 |
| Other projects (Work index) | paper-50 | ink-950 |
| About | paper-100 | ink-950, accent rust-700 |
| Contact | paper-50 | ink-950 |
| Footer | paper-100 with a paper-300 top hairline | ink-600 |

---

## 4. Verified contrast (WCAG ratios, computed)

| Foreground | Background | Ratio | Result | Use |
|---|---|---|---|---|
| ink-950 | paper-50 | 16.72 | PASS | body text |
| ink-600 | paper-50 | 7.01 | PASS | muted text |
| ink-600 | paper-100 | 6.23 | PASS | muted text on About/footer |
| rust-600 | paper-50 | 5.35 | PASS | accent text on light |
| rust-600 | paper-100 | 4.75 | PASS (narrow margin) | large or bold accent text only |
| rust-700 | paper-100 | 6.08 | PASS | small accent text on paper-100 |
| paper-50 | ink-950 | 16.72 | PASS | text on dark |
| paper-50 | ink-800 | 13.93 | PASS | text on raised dark |
| paper-400 | ink-950 | 9.02 | PASS | muted text on dark |
| paper-400 | ink-800 | 7.52 | PASS | muted text on raised dark |
| rust-400 | ink-950 | 6.43 | PASS | accent text, focus ring on dark |
| rust-400 | ink-800 | 5.36 | PASS | accent on raised dark |
| paper-50 | rust-600 | 5.35 | PASS | text on rust button hover |
| ink-950 | rust-400 | 6.43 | PASS | text on accent fill on dark |
| **rust-500** | **ink-950** | **4.46** | **FAIL** | do not use for text |
| paper-300 | paper-50 | 1.49 | decorative only | hairlines, never text or input borders |

Any new pairing must be computed and meet 4.5:1 for text (3:1 for large text and UI boundaries) before use.

---

## 5. Component color rules

- **Primary button on light:** ink-950 fill, paper-50 text; hover rust-600 fill with paper-50 text.
- **Primary button on dark:** paper-50 fill, ink-950 text; hover rust-400 fill with ink-950 text.
- **Links:** ink-950 with a 1px rust-600 underline on light; paper-50 with a rust-400 underline on dark.
- **Index numbers (01, 02...):** rust-600 on paper-50, rust-400 on ink-950.
- **Focus ring:** 2px, offset 3px: rust-600 on light, rust-400 on dark.
- **Image frames:** 1px paper-300 border on light backgrounds; on dark, 1px ink-800 border.
- Rust appears at most 2 to 3 times per viewport.

---

## 6. CSS tokens

```css
:root {
  --paper-50: #f4f0e7;
  --paper-100: #e9e3d5;
  --paper-300: #cfc6b2;
  --paper-400: #b9b2a3;
  --ink-950: #11100e;
  --ink-800: #25221d;
  --ink-600: #55504a;
  --rust-400: #e07a5a;
  --rust-600: #a8412a;
  --rust-700: #8f3520;

  --bg: var(--paper-50);
  --bg-alt: var(--paper-100);
  --bg-dark: var(--ink-950);
  --bg-dark-raised: var(--ink-800);
  --text: var(--ink-950);
  --text-muted: var(--ink-600);
  --text-on-dark: var(--paper-50);
  --text-muted-on-dark: var(--paper-400);
  --accent: var(--rust-600);
  --accent-on-alt: var(--rust-700);
  --accent-on-dark: var(--rust-400);
  --hairline: var(--paper-300);
}
```

If the project uses Tailwind, expose these via the theme so classes like `bg-paper-50`, `text-ink-950`, `text-rust-600` exist. No arbitrary hex values in components.

---

## 7. Checklist

- [ ] No hex values outside the token block
- [ ] Only one dark section (Design projects)
- [ ] Rust used only as the accent, at most 2 to 3 times per viewport
- [ ] Every text pairing comes from the PASS rows
- [ ] No gradients, no shadows, no glow