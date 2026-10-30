# The Design Tutor

> **Visual web movements built from scratch, deconstructed, and explained.**

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.x-00DC82?style=flat-square&logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![Pinia](https://img.shields.io/badge/Pinia-State_Engine-ffd859?style=flat-square)](https://pinia.vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**The Design Tutor** is an interactive, public sandbox and educational index showcasing distinctive web design movements. Instead of static mockups or superficial UI kits, each movement is taken from a blank canvas to living, production-ready code with its underlying layout physics, typography decisions, and CSS architectures broken down piece by piece.

---

## ✦ Core Vision & Architecture

Every entry in the catalog is treated as an isolated, living design movement operating under a dual-view paradigm:

- **Live View (`?view=live`):** Transports the visitor directly into the unadorned, full-bleed design experience.
- **Edu / HUD Mode (`?view=edu`):** Overlays real-time design rationale, token inspectors, grid breakdowns, client briefs, and engineering colophons.

### Technical Pillars

1. **Strict Scaffolding Baseline:**
   - **Strict Two-Font Rule:** Every movement restricts its typography system to exactly two font families (`--font-display` and `--font-body`). No third typeface is introduced.
   - **8pt Spacing & Standard Type Scales:** Margins, padding, and text steps use standard tokens (`--space-*` and `--text-*`) to preserve vertical rhythm and eliminate late-stage refactoring.
   - **Progressive Opinionation:** Styling begins with unopinionated starter components (`.btn-primary`, `.btn-secondary`, `.card`, `.badge`, `.container`) inside a movement-specific `theme.css`. As section patterns mature, classes are refined directly at the theme root.

2. **Decoupled Shell vs. Movement Sandboxes:**
   - The outer shell (`TheNavbar`, `MobileBottomNav`, `HomeDesignGrid`, `about`, `contact`) manages movement hydration, global light/dark contrast tokens, and routing.
   - Individual movements render via clean child-section orchestrators (`[Style]Landing.vue` loading `SectionZero` through `SectionFive`).

3. **High-Performance Asset Pipeline:**
   - Heavy visual assets are downscaled and converted to WebP (`1920px`, `82%` quality, EXIF metadata stripped) via ImageMagick, slashing raw payloads by over 90%.
   - Fonts are pre-fetched, downloaded at build time, and self-hosted locally through `@nuxtjs/google-fonts` to eradicate layout shift (CLS) and external render-blocking network hops.

---

## ✦ Archive Movements

| Volume | Movement Title | Style Archetype | Primary Stack |
| :--- | :--- | :--- | :--- |
| **01** | **Downtown Editorial Noir & Cast-Iron Craft** | *Foundry Pizza* — Severe Didone serifs, brushed steel textures, high-contrast flash photography. | Nuxt 3, Vue 3, GSAP, Pinia |
| **02** | **Minimalist Studio & Precision Craft** *(WIP)* | *Boutique Atelier* — Monochrome wireframes, hairline borders, high-fashion layout hierarchy. | Nuxt 3, Vue 3, Scoped Tokens |

---

## ✦ Repository Structure

```plaintext
the-design-tutor/
├── assets/
│   └── css/
│       ├── main.css                  # Global shell reset and base tokens
│       ├── design-01/                # Movement 01 theme tokens & baseline
│       │   └── theme.css
│       └── design-02/                # Movement 02 theme tokens & baseline
│           └── theme.css
├── components/
│   ├── TheNavbar.vue                 # Persistent top navigation shell
│   ├── MobileBottomNav.vue           # Mobile dock & shuffle launcher
│   ├── UiActionPair.vue              # Primary/secondary action dispatcher
│   ├── HomeDesignGrid.vue            # Showcase catalog matrix
│   └── movements/
│       └── design01/                 # Modular sections (Zero through Five)
├── content/
│   └── movements/
│       └── editorial_pizza.ts        # Client brief, live copy, & educational HUD data
├── pages/
│   ├── index.vue                     # Primary landing showcase
│   ├── about.vue                     # Creator ethos and project philosophy
│   ├── contact.vue                   # Dossier, works matrix, and direct dispatch
│   └── styles/
│       └── [slug].vue                # Dynamic movement orchestrator
├── public/
│   └── images/
│       ├── brand/                    # Brand logos, favicons, OG cards
│       └── design01/                 # Optimized WebP movement media
├── stores/
│   └── useShowcaseStore.ts           # Central state: modes, HUD, random shuffle
└── nuxt.config.ts                    # Modules, SEO, OpenGraph cards, route rules
```

---

## ✦ Getting Started

### Prerequisites

- **Node.js:** `^18.x` or `^20.x`
- **Package Manager:** `npm`, `pnpm`, or `bun`
- **Optional (for asset batches):** [ImageMagick](https://imagemagick.org/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dev-jLagunas/the-design-tutor.git
   cd the-design-tutor
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Launch the development server:**
   ```bash
   npm run dev
   ```

4. **Open your environment:**
   Visit [`http://localhost:3000`](http://localhost:3000) in your browser.

---

## ✦ Asset Optimization Workflow

To ensure instantaneous loads and preserve Lighthouse performance scores, raw camera assets or stock exports are batch-converted before committing:

```powershell
# PowerShell batch conversion (resize <= 1920px, 82% quality, strip metadata)
Get-ChildItem -File | Where-Object { $_.Extension -match '^\.(png|jpe?g)$' } | ForEach-Object {
    $out = [System.IO.Path]::ChangeExtension($_.FullName, "webp")
    magick $_.FullName -resize "1920x1920>" -quality 82 -strip $out
}

# Remove superseded source files
Get-ChildItem -File | Where-Object { $_.Extension -match '^\.(png|jpe?g)$' } | Remove-Item -Verbose
```

---

## ✦ Built With

- **Framework:** [Nuxt 3](https://nuxt.com/) (Vue 3, Vite, SSR / Static Pre-rendering)
- **State Management:** [Pinia](https://pinia.vuejs.org/)
- **Motion Engine:** [GSAP (GreenSock)](https://gsap.com/) & ScrollTrigger
- **Typography:** Self-hosted via [`@nuxtjs/google-fonts`](https://google-fonts.nuxtjs.org/)
- **Icons:** [`@nuxt/icon`](https://nuxt.com/modules/icon) (Lucide Iconography)
- **Deployment:** [Netlify](https://www.netlify.com/)

---

## ✦ Author & Contact

**Juan Angel Lagunas**
- **Website & Portfolio:** [juan-lagunas.com](https://juan-lagunas.com/#/)
- **GitHub:** [@dev-jLagunas](https://github.com/dev-jLagunas)
- **Writing:** [Medium (@dev.jlagunas)](https://medium.com/@dev.jlagunas)
- **Direct Dispatch:** `dev.jlagunas@gmail.com`

---

## ✦ License

This project is open-source and available under the [MIT License](LICENSE).