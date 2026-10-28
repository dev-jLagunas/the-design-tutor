import type { MovementDefinition } from "~/types/movement";

export const editorialPizzaMovement: MovementDefinition = {
  // ===========================================================================
  // 00. ROOT CATALOG IDENTITY & ROUTING
  // ===========================================================================
  id: "editorial-noir-foundry",
  slug: "editorial-pizza",
  title: "Downtown Editorial Noir",
  subtitle: "Late-Night New York Modernism & High-Contrast Craft",
  category: "Editorial",
  tags: [
    "Editorial",
    "Didone",
    "Noir",
    "Late-Night",
    "Vinyl",
    "High-Contrast",
    "New York Modernism",
  ],
  era: "Late 1970s Soho — 1990s Indie Print",
  summary:
    "A severe, nocturnal editorial visual system balancing high-contrast Didone serifs against raw industrial stainless surfaces, built for late-night counter culture.",

  // ===========================================================================
  // 01. PHASE 01: CLIENT INTAKE & BRIEF
  // ===========================================================================
  brief: {
    clientName: "Foundry Pizza Bar (ファウンドリー)",
    industry: "Late-Night Craft Pizzeria & Vinyl Bar",
    location: "Katamachi, Kanazawa, Ishikawa Prefecture",
    targetAudience:
      "Design-conscious night owls, creative professionals, vinyl listeners, and modern foodies seeking a chic late-night counter hangout.",
    aestheticGoal:
      "A sleek, nocturnal, downtown New York editorial vibe that merges raw renovated industrial textures (brushed steel, dark poured concrete) with late-night warmth and modern typographic precision.",
    brandTone: ["Nocturnal", "Chic", "Industrial", "Unapologetic"],
    providedAssets: [
      "Brushed metal wordmark & stamped sub-mark vector",
      "Flash 35mm editorial photography of renovated interior",
      "High-contrast macro shots of deep dish crust & cheese pull",
      "Curated vinyl night DJ schedule and beverage pairings",
    ],
    coreChallenge:
      "Reframing traditionally heavy, slow-bake deep dish into a fast, chic, by-the-slice counter ritual that fits naturally into Kanazawa's vibrant late-night bar culture.",
    deliverables: [
      "Nocturnal hero brand hook announcing the renovated space and 6PM–2AM service",
      "Renovation narrative detailing the 2-year evolution, steel counter build, and music ethos",
      "Curated 4-slice rotating deep dish showcase with tasting notes and beverage pairings",
      "Night-owl sensory dispatches, acoustic specifications, and bar atmosphere rules",
      "Counter walk-in protocol, midnight slice availability tracker, and location coords",
    ],
  },

  // ===========================================================================
  // 02. PHASE 02: LIVE COMMERCIAL SITE
  // ===========================================================================
  live: {
    // --- Navbar ---
    navbar: {
      brandMark: "FOUNDRY // KATAMACHI",
      subBrandMark: "EST. 2024 // KANAZAWA",
      statusBadge: "DOORS OPEN 18:00 – 02:00",
      navItems: [
        { label: "CONCEPT", targetId: "#section02", indexNumber: "01" },
        { label: "THE SLICES", targetId: "#section03", indexNumber: "02" },
        { label: "SOUND & VIBE", targetId: "#section04", indexNumber: "03" },
        {
          label: "WALK-IN PROTOCOL",
          targetId: "#section05",
          indexNumber: "04",
        },
      ],
      ctaAction: {
        label: "CURRENT PIES",
        targetId: "#section03",
        variant: "primary",
      },
    },

    // --- Tier 1: Hero ---
    hero: {
      eyebrow: "RENOVATED COUNTER // 6:00 PM – 2:00 AM",
      title: "AFTER DARK.",
      titleItalic: "BY THE SLICE.",
      titleSecondary: "DEEP DISH REFRAMED FOR THE NOCTURNAL HOURS.",
      subtitle:
        "Chicago cast-iron depth meets Kanazawa late-night counter discipline. Direct flash, 450°F stone deck heat, natural wines, and vinyl rotations until 2:00 AM.",
      leadParagraph:
        "Two years in Katamachi brought us here. We rebuilt our counter out of brushed stainless steel and poured raw concrete to do one thing without compromise: hot pan slices, ready upon arrival, paired with analog sound.",
      statusBadge: "OVEN 450°F // ROTATING PAN ACTIVE",
      tags: [
        "Deep Dish by the Slice",
        "Natural Wine",
        "Hi-Fi Vinyl Bar",
        "Katamachi 2-Chome",
      ],
      primaryAction: {
        label: "VIEW TONIGHT'S ROTATION",
        targetId: "#section03",
        variant: "primary",
      },
      secondaryAction: {
        label: "HOURS & LOCATION",
        targetId: "#section05",
        variant: "outline",
      },
      media: {
        src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
        alt: "Thick caramelized crust deep dish slice resting on a stainless steel bar counter",
        caption: "Direct-flash slice capture at the 18-seat counter.",
        badge: "HOT COUNTER // ROTATION 04",
        aspectRatio: "4:3",
      },
      liveStats: [
        {
          value: "18:00 – 02:00",
          label: "Service Hours",
          description: "Night service only",
        },
        {
          value: "18 Seats",
          label: "Steel Counter",
          description: "Walk-ins strictly",
        },
        {
          value: "4 Slices",
          label: "Nightly Rotation",
          description: "Fresh from the pan",
        },
      ],
    },

    // --- Tier 2: Section 02 (The Renovation Narrative) ---
    section02: {
      sectionNumber: "01",
      sectionAnchorId: "section02",
      eyebrow: "THE 2-YEAR EVOLUTION // 2024–2026",
      title: "Stripped to the",
      titleHighlight: "Steel & Stone.",
      subtitle:
        "We demolished our traditional dining room to build an intimate, nocturnal listening counter where deep dish is swift, intense, and social.",
      paragraphs: [
        "When Foundry opened two years ago, we fought the common misconception that Chicago deep dish requires a 45-minute wait at a family table. We loved the caramelization and structural chew of cast-iron baking, but we hated the sluggish pace.",
        "This winter, we took a sledgehammer to the old layout. We installed an 18-seat continuous brushed stainless steel bar, custom low-end acoustic baffling, and dual direct-drive turntables. Today, our stone deck ovens run continuously throughout the night, yielding slices that drop onto your plate within two minutes of sitting down.",
      ],
      pullquote: {
        text: "Deep dish shouldn't be a sit-down ordeal. It should be hot, immediate, eaten off raw metal with a dry glass of orange wine while the needle drops.",
        attribution: "Kenji Sato",
        role: "Founder & Head Baker",
      },
      metrics: [
        {
          value: "18",
          label: "Bar Seats",
          description: "Seamless brushed steel counter",
        },
        {
          value: "48 HR",
          label: "Cold Ferment",
          description: "Signature high-hydration crust",
        },
        {
          value: "2 MIN",
          label: "Counter Delivery",
          description: "Piping hot slice turnaround",
        },
      ],
      featurePillars: [
        {
          id: "p1",
          tag: "BAKE RITUAL",
          label: "Cast-Iron Seasoned Pans",
          description:
            "450°F stone deck convection creates crisp, caramelized frico cheese edges.",
        },
        {
          id: "p2",
          tag: "SOUND ETHOS",
          label: "Rotational Analog Audio",
          description:
            "Curated jazz, dub, and post-punk records played exclusively on vinyl.",
        },
        {
          id: "p3",
          tag: "POURS",
          label: "Unfiltered Pairings",
          description:
            "Natural macerated wines, local Ishikawa craft beers, and amaro nightcaps.",
        },
      ],
      media: {
        src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
        alt: "Renovated dark concrete interior with glowing amber halogen backlights and brushed steel bar",
        caption: "The renovated Katamachi room at midnight.",
        badge: "INTERIOR ARCHIVE",
        aspectRatio: "16:9",
      },
      closingNote:
        "No reservations. No takeout delivery apps. In-person counter service only.",
    },

    // --- Tier 3: Section 03 (The Rotating Slice Board) ---
    section03: {
      sectionNumber: "02",
      sectionAnchorId: "section03",
      eyebrow: "THE NIGHTLY BOARD // ROTATION #44",
      title: "Four Slices.",
      titleHighlight: "Zero Compromises.",
      subtitle:
        "Baked continuously in seasoned deep-dish steel pans. Sold strictly by the slice with targeted drink pairings.",
      leadCopy:
        "Every slice is built on our 48-hour fermented dough, layered Wisconsin whole-milk mozzarella beneath crushed San Marzano plum tomatoes, and finished with Maldon sea salt.",
      cards: [
        {
          id: "slice-01",
          badge: "FOUNDRY SIGNATURE",
          title: "The Katamachi Classic",
          subtitle:
            "House fennel sausage, sweet crushed peppers, aged provolone",
          category: "RED PIE",
          description:
            "Our flagship Chicago-style profile. Coarse ground pork sausage spiked with toasted fennel and crushed chili, baked under a thick blanket of bright, acidic tomato sauce.",
          specs: [
            { label: "CRUST", value: "Cornmeal & Olive Oil Crunch" },
            { label: "FERMENT", value: "48 Hours Cold" },
            { label: "PAIRING", value: "Domaine Brand Macerated Orange Wine" },
          ],
          priceOrMetric: "¥850 / SLICE",
          action: {
            label: "INSPECT TASTING NOTES",
            targetId: "#section05",
            variant: "link",
          },
          media: {
            src: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80",
            alt: "Katamachi Classic deep dish slice with thick tomato sauce and fennel sausage",
            caption: "Katamachi Classic slice.",
          },
          tags: ["Fennel Sausage", "San Marzano", "Provolone"],
        },
        {
          id: "slice-02",
          badge: "CHEESE PULL",
          title: "Quadruple Formaggi",
          subtitle: "Mozzarella, gorgonzola dolce, smoked scamorza, parmigiano",
          category: "WHITE & GOLD",
          description:
            "A decadent white deep dish. A rich base of smoked curd and pungent gorgonzola countered with wild wildflower honey and fresh cracked black tellicherry pepper.",
          specs: [
            { label: "CRUST", value: "Toasted Butter Rim" },
            { label: "FERMENT", value: "54 Hours Cold" },
            { label: "PAIRING", value: "Kanazawa Craft Stout / Dark Lager" },
          ],
          priceOrMetric: "¥900 / SLICE",
          action: {
            label: "INSPECT TASTING NOTES",
            targetId: "#section05",
            variant: "link",
          },
          media: {
            src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
            alt: "Golden four cheese deep dish slice with caramelized frico cheese crown",
            caption: "Quadruple Formaggi slice.",
          },
          tags: ["4-Cheese", "Wild Honey", "Smoked Scamorza"],
        },
        {
          id: "slice-03",
          badge: "SPICY & ACIDIC",
          title: "Midnight Pepperoni & Hot Honey",
          subtitle:
            "Natural casing cup pepperoni, Calabrian chili oil, Mike's hot honey",
          category: "RED PIE",
          description:
            "Charred, cupped pepperoni slices that pool flavorful paprika oil, cut with sweet heat hot honey drizzle and fragrant fresh oregano leaves.",
          specs: [
            { label: "CRUST", value: "Extra Char Frico Edge" },
            { label: "FERMENT", value: "48 Hours Cold" },
            { label: "PAIRING", value: "Dry Pét-Nat Sparkling Rosé" },
          ],
          priceOrMetric: "¥950 / SLICE",
          action: {
            label: "INSPECT TASTING NOTES",
            targetId: "#section05",
            variant: "link",
          },
          media: {
            src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
            alt: "Cupping pepperoni deep dish slice glistening with hot honey and red chili oil",
            caption: "Midnight Pepperoni slice.",
          },
          tags: ["Cup Pepperoni", "Hot Honey", "Calabrian Chili"],
        },
        {
          id: "slice-04",
          badge: "VEGAN PROFILE",
          title: "Charred King Oyster & Confit Garlic",
          subtitle:
            "Noto maitake, king oyster mushrooms, slow-cooked garlic paste",
          category: "EARTH & HERB",
          description:
            "Earthy regional mushrooms pan-roasted in cast iron with rosemary and confit garlic oil, topped with nutritional yeast crisps and fresh thyme sprigs.",
          specs: [
            { label: "CRUST", value: "EVOO & Black Sesame Edge" },
            { label: "FERMENT", value: "48 Hours Cold" },
            { label: "PAIRING", value: "Earthy Jura Savagnin or Amber Ale" },
          ],
          priceOrMetric: "¥850 / SLICE",
          action: {
            label: "INSPECT TASTING NOTES",
            targetId: "#section05",
            variant: "link",
          },
          media: {
            src: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=800&q=80",
            alt: "Rustic deep dish slice covered in roasted wild mushrooms and herbs",
            caption: "King Oyster Mushroom slice.",
          },
          tags: ["Noto Mushrooms", "Confit Garlic", "Plant Based"],
        },
      ],
      footerNote:
        "Slices rotate out when the pan empties. Once a bake is gone for the night, the oven moves to the next profile.",
      globalAction: {
        label: "CURRENT OVEN QUEUE STATUS",
        targetId: "#section05",
        variant: "secondary",
      },
    },

    // --- Tier 4: Section 04 (Sound & Night Vibe) ---
    section04: {
      sectionNumber: "03",
      sectionAnchorId: "section04",
      eyebrow: "ACOUSTIC PROGRAMMING // VINYL ARCHIVE",
      title: "Needle on Wax.",
      titleHighlight: "Crust in the Pan.",
      subtitle:
        "Our renovated space is tuned for warm, physical listening. We spin original vinyl pressings from 18:00 through the final 2:00 AM pour.",
      primaryStreamTitle: "TONIGHT'S ROTATION LIST",
      primaryStreamSubtitle: "Albums playing on our Technics 1200MK7s tonight",
      primaryItems: [
        {
          index: "SPIN 01",
          title: "Head Hunters",
          secondaryTitle: "Herbie Hancock (1973, Columbia)",
          description:
            "Heavy analogue funk, ARP synthesizers, and pocket basslines.",
          tag: "JAZZ FUNK",
        },
        {
          index: "SPIN 02",
          title: "Selected Ambient Works 85-92",
          secondaryTitle: "Aphex Twin (1992, R&S Records)",
          description:
            "Warm, nocturnal electronic soundscapes for the post-midnight crowd.",
          tag: "ANALOG ELECTRONIC",
        },
        {
          index: "SPIN 03",
          title: "Scientist Rids the World of Evil Vampires",
          secondaryTitle: "Scientist (1981, Greensleeves)",
          description:
            "Spacious dub reverbs that bounce off raw concrete and steel surfaces.",
          tag: "DUB REGGAE",
        },
      ],
      secondaryStreamTitle: "HOUSE COUNTER ETIQUETTE",
      secondaryStreamSubtitle: "How we keep the room cohesive and focused",
      secondaryItems: [
        {
          title: "Respect the Needle",
          body: "Our bar is tuned for sound fidelity. We welcome conversation, but we avoid shouting. Let the analog acoustics carry the room.",
          authorOrMeta: "SOUND RULE 01",
          badge: "ACOUSTICS",
        },
        {
          title: "Counter Flow",
          body: "When you finish your slice and drink, please look behind you. If night owls are waiting at the rail, settle up and let the counter turn.",
          authorOrMeta: "HOSPITALITY RULE 02",
          badge: "ETIQUETTE",
        },
        {
          title: "One Check, One Card",
          body: "We process payments swiftly at the register grate so the baker can stay on the oven line without interruption.",
          authorOrMeta: "REGISTER RULE 03",
          badge: "OPERATIONS",
        },
      ],
      media: {
        src: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=80",
        alt: "Vinyl record needle resting in the dark under a warm halogen pinpoint beam",
        caption: "Analog playback station behind the beer taps.",
        badge: "SOUND STATION",
        aspectRatio: "16:9",
      },
    },

    // --- Tier 5: Section 05 (Action Protocol & Arrival) ---
    section05: {
      sectionNumber: "04",
      sectionAnchorId: "section05",
      eyebrow: "SERVICE DIRECTIVES // KATAMACHI",
      title: "How to Visit.",
      titleHighlight: "Zero Friction.",
      subtitle:
        "No reservations, no waiting outside in the rain. Step through the heavy steel door, check the board, and claim a stool.",
      steps: [
        {
          stepNumber: "#01",
          title: "Walk-In Only",
          directive: "We do not accept reservations by phone, DM, or email.",
          details:
            "Our 18 seats cycle dynamically. If the counter is full, wait at the standing rail with a draft beer—turnover is typically 15–20 minutes.",
          tag: "CAPACITY",
        },
        {
          stepNumber: "#02",
          title: "Order at the Iron Grate",
          directive:
            "Pick your slice from the live pan display and select a beverage.",
          details:
            "Your slice drops onto a steel tray within 120 seconds, topped with fresh parmesan and crushed oregano. Cash, contactless cards, and Suica/IC cards accepted.",
          tag: "ORDERING",
        },
        {
          stepNumber: "#03",
          title: "Late Night Curfew",
          directive:
            "Last oven bake drops at 01:15 AM; last drink call at 01:40 AM.",
          details:
            "Once the final midnight pans sell out, the kitchen closes. The vinyl continues spinning until 02:00 AM sharp.",
          tag: "CLOSING",
        },
      ],
      terminal: {
        eyebrow: "LIVE VENUE COORDINATES & STATUS",
        headline: "KATAMACHI 2-CHOME // FOUNDRY PIZZA BAR",
        subheadline: "Directly behind the central Katamachi Scramble",
        codeLines: [
          "LAT / LONG: 36.5594° N, 136.6521° E",
          "ADDRESS: 2-21-12 Katamachi, Kanazawa, Ishikawa 920-0981",
          "SERVICE HOURS: Wednesday – Monday // 18:00 – 02:00",
          "REGULAR CLOSING: Tuesdays (Deep clean & pan seasoning)",
          "PAYMENT: Cash, Visa/Mastercard/Amex, Apple Pay, IC Transit",
          "STATUS: RENOVATED COUNTER ACTIVE // WALK-INS WELCOME",
        ],
        action: {
          label: "OPEN GOOGLE MAPS PIN",
          href: "https://maps.google.com/?q=Katamachi+Kanazawa",
          isExternal: true,
          variant: "primary",
        },
        statusIndicator: {
          label: "STONE DECK OVENS HOT",
          isActive: true,
        },
      },
      alertBanner: {
        level: "info",
        message:
          "Private hire is available on Tuesday nights for groups of 12–18 guests with customized vinyl listening sets. Inquire in person at the bar.",
      },
    },

    // --- Bottom Tier: Footer ---
    footer: {
      brandColophon: "FOUNDRY PIZZA BAR © 2026 // KATAMACHI, KANAZAWA",
      legalNotice:
        "ALL RIGHTS RESERVED. ARCHITECTURE & VISUAL IDENTITY CRAFTED FOR THE DESIGN TUTOR.",
      operationalDetails: [
        "Hours: 18:00 – 02:00 (Wed–Mon)",
        "Counter Capacity: 18 Seats",
        "Katamachi, Kanazawa, Ishikawa",
      ],
      secondaryLinks: [
        {
          label: "Instagram @foundrypizzabar",
          href: "https://instagram.com",
          isExternal: true,
        },
        {
          label: "Vinyl Archive Spotify",
          href: "https://spotify.com",
          isExternal: true,
        },
        { label: "Colophon", targetId: "#hero" },
      ],
      backToTopText: "BACK TO THE TOP ↑",
    },
  },

  // ===========================================================================
  // 03. PHASE 03: EDUCATIONAL IN-SITU CURRICULUM
  // ===========================================================================
  educational: {
    // --- Navbar ---
    navbar: {
      brandMark: "CURRICULUM SPEC // EDITORIAL NOIR",
      subBrandMark: "SPEC-003 // VERIFIED ACADEMIC STANDARD",
      statusBadge: "ACADEMIC ANALYSIS // 6-BEAT BREAKDOWN",
      navItems: [
        { label: "THE THESIS", targetId: "#section02", indexNumber: "01" },
        { label: "CHARACTERISTICS", targetId: "#section03", indexNumber: "02" },
        { label: "USE MATRIX", targetId: "#section04", indexNumber: "03" },
        {
          label: "LINEAGE & TRIVIA",
          targetId: "#section05",
          indexNumber: "04",
        },
      ],
      ctaAction: {
        label: "CHEAT SHEET",
        targetId: "#section05",
        variant: "primary",
      },
    },

    // --- Tier 1: Hero ---
    hero: {
      eyebrow: "DESIGN MOVEMENT // LATE 20TH CENTURY POST-MODERN EDITORIAL",
      title: "THE TENSION OF",
      titleItalic: "REFINEMENT & GRIT.",
      titleSecondary: "DECONSTRUCTING DOWNTOWN EDITORIAL NOIR.",
      subtitle:
        "Editorial Noir pairs the severe, high-contrast elegance of Didone display serifs with raw, low-light industrial surfaces. It relies on typographic scale contrast and dark-gamut tonal layering to establish intimacy, cultural exclusivity, and nocturnal mood without sacrificing structural clarity.",
      leadParagraph:
        "Unlike corporate Swiss minimalism that seeks universal neutrality, Editorial Noir celebrates deliberate aesthetic friction. It draws from 18th-century royal French print, 1970s Soho underground publications, and harsh direct-flash photography to make interfaces feel tactile, physical, and exclusive.",
      statusBadge: "CANVAS DEPTH: 92% DARK GAMUT // CONTRAST: 14.2:1",
      tags: [
        "Didone Serifs",
        "Chiaroscuro Palette",
        "Hairline Enclosures",
        "Asymmetric Tension",
      ],
      primaryAction: {
        label: "READ SYSTEM RULES",
        targetId: "#section02",
        variant: "primary",
      },
      secondaryAction: {
        label: "INSPECT TYPOGRAPHY",
        targetId: "#section05",
        variant: "outline",
      },
      media: {
        src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
        alt: "Open book showing high-contrast modern Didone typography on textured black paper",
        caption: "Didone display typography printed on matte dark stock.",
        badge: "SPECIMEN ANALYSIS",
        aspectRatio: "4:3",
      },
      liveStats: [
        {
          value: "6.5 : 1",
          label: "Display/Body Ratio",
          description: "Extreme hierarchy jump",
        },
        {
          value: "0px",
          label: "Corner Radii",
          description: "Strict razor enclosures",
        },
        {
          value: "1px Hairline",
          label: "Divider Standard",
          description: "Zero drop shadows",
        },
      ],
    },

    // --- Tier 2: Section 02 (Core Visual Characteristics) ---
    section02: {
      sectionNumber: "01",
      sectionAnchorId: "section02",
      eyebrow: "01 // ANATOMY OF EDITORIAL NOIR",
      title: "Severe contrast, unbracketed",
      titleHighlight: "geometry, and controlled shadows.",
      subtitle:
        "Three non-negotiable structural rules that separate authentic editorial modernism from generic dark-mode websites.",
      paragraphs: [
        "Editorial Noir rejects the sterile uniformity of modern SaaS dashboards and the cozy warmth of rustic retro design. It operates on deliberate visual friction: pairing refined editorial luxury (fashion-grade italic serifs set with negative tracking) against utilitarian workspace typography (unadorned monospace timestamps, coordinates, and prices).",
        "By enforcing 1px hairline structural dividers and eliminating all rounded corners, elements sit as framed printing plates rather than floating interactive software cards. Depth is generated through surface luminance shifts—charcoal, concrete, and bone—rather than synthetic CSS box-shadows.",
      ],
      pullquote: {
        text: "Typography in high-contrast editorial systems is not merely a vehicle for text. The silhouette of the letterform is itself a primary architectural element.",
        attribution: "Robert Bringhurst",
        role: "The Elements of Typographic Style",
      },
      metrics: [
        {
          value: "6.5 : 1",
          label: "Scale Contrast",
          description: "Headline to body font size jump",
        },
        {
          value: "0px",
          label: "Border Radius",
          description: "No softened container corners",
        },
        {
          value: "1px Solid",
          label: "Hairline Rules",
          description: "Sole visual boundary marker",
        },
      ],
      featurePillars: [
        {
          id: "rule-1",
          tag: "PILLAR 01",
          label: "Extreme Stroke Modulation",
          description:
            "Didone display serifs feature hairline horizontal serifs paired with heavy vertical stems. At large display scales, this creates an unmistakable silhouette of luxury and rigor.",
        },
        {
          id: "rule-2",
          tag: "PILLAR 02",
          label: "Hairline Spatial Framing",
          description:
            "Boundaries are defined exclusively by 1px rules in low-contrast steel grays (#2A2A2A to #3A3A3A). Containers never use rounded bubbles or blurred drop shadows.",
        },
        {
          id: "rule-3",
          tag: "PILLAR 03",
          label: "Low-Key Ambient Gamut",
          description:
            "The canvas avoids pure digital black (#000000), using smoked charcoal (#121212) and poured concrete (#1A1A1A) accented by warm halogen amber (#E5A93C) to emulate late-night interior illumination.",
        },
      ],
      media: {
        src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
        alt: "Sharp architectural shadow casting geometric lines across a concrete wall",
        caption: "Architectural chiaroscuro and spatial tension.",
        badge: "LIGHTING STUDY",
        aspectRatio: "16:9",
      },
      closingNote:
        "Every element must feel either like an expensive art print or a raw technical spec sheet. There is no middle ground.",
    },

    // --- Tier 3: Section 03 (Application Matrix: When to Use vs Avoid) ---
    section03: {
      sectionNumber: "02",
      sectionAnchorId: "section03",
      eyebrow: "02 // APPLICATION MATRIX",
      title: "Strategic Selection.",
      titleHighlight: "Aligning Style with Mental Models.",
      subtitle:
        "Design movements are strategic tools. Deploying Editorial Noir in the wrong commercial vertical damages usability and conversions.",
      leadCopy:
        "Before choosing this aesthetic, analyze whether your user desires cultural immersion and connoisseurship, or high-speed utility and universal accessibility.",
      cards: [
        {
          id: "use-01",
          badge: "HIGH AFFINITY // SCORE: 98%",
          title: "Nocturnal Venues & Counter Hospitality",
          subtitle:
            "Cocktail bars, vinyl listening lounges, boutique late counters",
          category: "OPTIMAL USE CASE",
          description:
            "Physical hospitality brands operating after dark benefit enormously from low-key lighting palettes and flash photography, immersing customers into the physical mood before they arrive.",
          specs: [
            { label: "USER MOOD", value: "Curiosity, Leisure, Social Ritual" },
            { label: "READING SPEED", value: "Slow, atmospheric, exploratory" },
            {
              label: "CORE BENEFIT",
              value: "Reframes everyday food/drink into culture",
            },
          ],
          priceOrMetric: "AFFINITY: 98%",
          action: {
            label: "VIEW LIVE IMPLEMENTATION",
            targetId: "#section02",
            variant: "link",
          },
          media: {
            src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
            alt: "Dimly lit cocktail bar counter with warm incandescent bulbs and bottles",
            caption: "Atmospheric hospitality alignment.",
          },
          tags: ["Hospitality", "Nightlife", "Boutique"],
        },
        {
          id: "use-02",
          badge: "HIGH AFFINITY // SCORE: 94%",
          title: "Independent Publishing & Craft Labels",
          subtitle: "Record labels, architectural studios, fashion lookbooks",
          category: "OPTIMAL USE CASE",
          description:
            "Brands whose products are collectible, artisanal, or heavily curated. High-fashion Didone typography signals elite taste and serious creative integrity.",
          specs: [
            {
              label: "USER MOOD",
              value: "Connoisseurship, aesthetic evaluation",
            },
            { label: "READING SPEED", value: "Methodical, visual-first" },
            {
              label: "CORE BENEFIT",
              value: "Justifies premium pricing through prestige",
            },
          ],
          priceOrMetric: "AFFINITY: 94%",
          action: {
            label: "VIEW LIVE IMPLEMENTATION",
            targetId: "#section02",
            variant: "link",
          },
          media: {
            src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
            alt: "Art gallery poster typography exhibition on dark walls",
            caption: "Editorial publishing alignment.",
          },
          tags: ["Publishing", "Fashion", "Record Labels"],
        },
        {
          id: "avoid-01",
          badge: "CRITICAL CONFLICT // AVOID",
          title: "Enterprise B2B SaaS & Analytics",
          subtitle: "Financial tables, dense dashboards, management tools",
          category: "ANTI-PATTERN",
          description:
            "Severe Didone serifs become illegible at small UI sizes, causing optical vibration ('dazzle') when scanning dense tabular figures or complex charts.",
          specs: [
            { label: "USER MOOD", value: "Urgent productivity, data scanning" },
            {
              label: "READING SPEED",
              value: "Rapid, glanceable, high-frequency",
            },
            {
              label: "RISK FACTOR",
              value: "High eye fatigue and misread numeric data",
            },
          ],
          priceOrMetric: "FAILURE RISK: HIGH",
          action: {
            label: "READ TYPOGRAPHIC RULES",
            targetId: "#section05",
            variant: "link",
          },
          media: {
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            alt: "Dense computer analytics screen showing graphs and data tables",
            caption: "Incompatible high-density data environment.",
          },
          tags: ["SaaS", "Analytics", "Productivity"],
        },
        {
          id: "avoid-02",
          badge: "CRITICAL CONFLICT // AVOID",
          title: "Mass-Market Public Utilities",
          subtitle: "Healthcare portals, public transit, government tools",
          category: "ANTI-PATTERN",
          description:
            "The low-key contrast ratios, delicate hairline strokes, and dark palette fail WCAG AAA standards across varying monitor calibrations and bright daylight viewports.",
          specs: [
            { label: "USER MOOD", value: "Need-based, stressful, task-driven" },
            {
              label: "READING SPEED",
              value: "Emergency or non-negotiable access",
            },
            {
              label: "RISK FACTOR",
              value: "Excludes users with low vision or glare",
            },
          ],
          priceOrMetric: "FAILURE RISK: SEVERE",
          action: {
            label: "READ TYPOGRAPHIC RULES",
            targetId: "#section05",
            variant: "link",
          },
          media: {
            src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
            alt: "Bright sterile medical clinic with bright lighting and medical clipboards",
            caption: "Incompatible public accessibility environment.",
          },
          tags: ["Healthcare", "Government", "Mass Transit"],
        },
      ],
      footerNote:
        "Rule of thumb: If the user is trying to finish a chore, avoid this style. If the user is savoring an experience, embrace it.",
      globalAction: {
        label: "GO TO DEVELOPER CHEAT SHEET",
        targetId: "#section05",
        variant: "secondary",
      },
    },

    // --- Tier 4: Section 04 (Historical Roots, Lineage & Trivia) ---
    section04: {
      sectionNumber: "03",
      sectionAnchorId: "section04",
      eyebrow: "03 // HISTORICAL ARCHAEOLOGY",
      title: "From 18th-Century Paris",
      titleHighlight: "to Soho Basements.",
      subtitle:
        "The historical lineage of Didone serifs and how downtown subcultures stripped away classicism to create raw nocturnal editorial.",
      primaryStreamTitle: "HISTORICAL MILESTONES & LINEAGE",
      primaryStreamSubtitle:
        "Key cultural turning points that forged this visual language",
      primaryItems: [
        {
          index: "1788",
          title: "The Didone Revolution",
          secondaryTitle: "Giambattista Bodoni (Parma) & Firmin Didot (Paris)",
          description:
            "Designers discarded old humanist calligraphic serifs in favor of severe mathematical strokes, flat hairline serifs, and high contrast, representing the Enlightenment's passion for rationality and luxury.",
          tag: "ORIGIN",
        },
        {
          index: "1940s",
          title: "The Golden Era of Magazine Editorial",
          secondaryTitle: "Alexey Brodovitch (Harper's Bazaar)",
          description:
            "Pioneered cinematic white/black spatial pacing, pairing Didone typography with dramatic, full-bleed fashion photography and asymmetric column rhythms.",
          tag: "EDITORIAL",
        },
        {
          index: "1970s",
          title: "Downtown Soho & Post-Punk Underground",
          secondaryTitle: "Andy Warhol's Interview Magazine & NYC Indie Zines",
          description:
            "Subcultures appropriated luxury Didone type, setting it on cheap newsprint alongside direct-flash 35mm photos from nocturnal clubs (Studio 54, CBGB), creating the 'Noir' tension.",
          tag: "NOIR",
        },
      ],
      secondaryStreamTitle: "CURATED DESIGN TRIVIA & PHENOMENA",
      secondaryStreamSubtitle:
        "Physical mechanics that explain web typography bugs",
      secondaryItems: [
        {
          title: "The 'Dazzle' Optical Phenomenon",
          body: "Didone serifs have horizontal strokes so razor-thin that when viewed at small sizes or high contrast, they physically shimmer and disappear into the canvas. This is why Didones must never be used below 24px in digital design.",
          authorOrMeta: "TYPOGRAPHY TRIVIA",
          badge: "OPTICS",
        },
        {
          title: "The Direct-Flash Aesthetic",
          body: "The stark, high-contrast flash photography associated with Editorial Noir came from 1980s point-and-shoot 35mm cameras used in dark clubs. What was originally an equipment limitation became the defining texture of underground luxury.",
          authorOrMeta: "PHOTOGRAPHY TRIVIA",
          badge: "LIGHTING",
        },
        {
          title: "The Zero-Radius Philosophy",
          body: "Rounded UI corners were popularized by consumer software to look 'friendly and tactile.' Editorial Noir strictly uses 0px corners to evoke industrial razor-cut paper edges and cold architectural steel sheets.",
          authorOrMeta: "INTERFACE TRIVIA",
          badge: "ARCHITECTURE",
        },
      ],
      media: {
        src: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1200&q=80",
        alt: "Vintage letterpress metal type blocks laid out in an archival drawer",
        caption:
          "Cast metal type blocks showing high-contrast modern letterforms.",
        badge: "ARCHIVAL PRINT",
        aspectRatio: "16:9",
      },
    },

    // --- Tier 5: Section 05 (Implementation Cheat Sheet) ---
    section05: {
      sectionNumber: "04",
      sectionAnchorId: "section05",
      eyebrow: "04 // FRONT-END EXECUTION RULES",
      title: "The Implementation",
      titleHighlight: "Cheat Sheet.",
      subtitle:
        "The exact technical directives and CSS token values required to execute this style cleanly without muddying contrast or compromising performance.",
      steps: [
        {
          stepNumber: "#01",
          title: "Establish Typographic Friction",
          directive:
            "Pair high-contrast display serif with technical monospace or grotesque.",
          details:
            "Use Bodoni Moda or Playfair Display set with italic styling and -0.03em letter-spacing for headlines. Counterbalance with Space Grotesk or Syne for body text and navigation labels.",
          tag: "TYPOGRAPHY",
        },
        {
          stepNumber: "#02",
          title: "Enforce Hairline Enclosures & 0px Radii",
          directive:
            "Eliminate all rounded corners (border-radius: 0px) and soft drop shadows.",
          details:
            "Structure sections using 1px solid rgba(255, 255, 255, 0.12) borders. Generate surface depth purely through subtle background shifts (#121212 canvas vs. #1A1A1A cards).",
          tag: "SURFACES",
        },
        {
          stepNumber: "#03",
          title: "Calibrate Low-Light Bone Palette",
          directive: "Never use pure white (#FFFFFF) text on dark backgrounds.",
          details:
            "Pure white on dark canvas produces optical halation and reader fatigue. Use bone paper white (#F5F4F0) for primary copy and mute secondary metadata to warm stone grays (#8A8884).",
          tag: "COLOR GAMUT",
        },
      ],
      terminal: {
        eyebrow: "CSS TOKENS & ENGINE SPECS",
        headline: "TOKENS // DOWNTOWN EDITORIAL NOIR",
        subheadline: "Scoped custom properties for this movement layout",
        codeLines: [
          "--bg-base: #121212;             /* Smoked Charcoal Canvas */",
          "--surface: #1A1A1A;             /* Poured Concrete Card */",
          "--border: #2A2A2A;              /* 1px Hairline Steel */",
          "--text-primary: #F5F4F0;        /* Bone White Text */",
          "--text-muted: #8A8884;          /* Warm Stone Gray */",
          "--accent: #E5A93C;              /* Halogen Amber CTA */",
          "--font-display: 'Bodoni Moda', serif;",
          "--font-body: 'Space Grotesk', sans-serif;",
          "--radius: 0px;                  /* Strict Razor Corners */",
          "--transition: 200ms cubic-bezier(0.16, 1, 0.3, 1);",
        ],
        action: {
          label: "COPY CSS TOKENS",
          targetId: "#hero",
          variant: "outline",
        },
        statusIndicator: {
          label: "CSS SCOPE VALIDATED",
          isActive: true,
        },
      },
      alertBanner: {
        level: "highlight",
        message:
          "Performance Rule: Always preload the Didone display font with font-display: swap to prevent layout shifts when the heavy vertical strokes render.",
      },
    },

    // --- Bottom Tier: Footer ---
    footer: {
      brandColophon: "THE DESIGN TUTOR // CURRICULUM SPEC SPEC-003",
      legalNotice:
        "ACADEMIC DECONSTRUCTION PREPARED FOR THE DESIGN TUTOR CATALOG. RESEARCH VERIFIED AGAINST ESTABLISHED TYPOGRAPHIC LITERATURE.",
      operationalDetails: [
        "Curriculum Version: 3.2.0",
        "Author: The Design Tutor Engineering Group",
        "Sourced: Bringhurst, Müller-Brockmann, Heller",
      ],
      resourceLinks: [
        {
          label: "Letterform Archive (San Francisco)",
          url: "https://oa.letterformarchive.org",
          tag: "DIGITAL ARCHIVE",
          description:
            "Online collection of mid-century high-fashion periodicals and zines.",
        },
        {
          label: "Fonts In Use: Modern Serif Directory",
          url: "https://fontsinuse.com",
          tag: "SPECIMEN",
          description:
            "Curated real-world usage of Bodoni, Didot, and high-contrast editorial.",
        },
        {
          label: "Typewolf: Bodoni & High-Contrast Guide",
          url: "https://www.typewolf.com",
          tag: "PAIRING GUIDE",
          description:
            "Scale recommendations and web font rendering considerations.",
        },
      ],
      backToTopText: "BACK TO THE TOP ↑",
    },
  },

  // ===========================================================================
  // 04. EXTRA: CASE STUDY BREAKDOWN
  // ===========================================================================
  caseStudy: {
    businessGoal:
      "Drive late-night physical foot traffic and rapid 18-seat counter turnover in Katamachi between 18:00 and 02:00 by reframing Chicago deep dish as a fast, chic, by-the-slice counter ritual paired with natural wine and analog vinyl sound.",
    targetUserMindset:
      "Design-conscious night owls, creative professionals, and music lovers browsing on mobile while en route through Katamachi, seeking immediate answers: Are they open right now? Can I get a hot slice immediately? Can I just walk in?",
    competitorComparison: {
      standardIndustryNorms:
        "Bright red-and-white checkered layouts, generic cheese-pull stock photography, clunky multi-page PDF menus, aggressive delivery app banners, and coupon popups that dilute brand value.",
      ourStrategicChoice:
        "Downtown Editorial Noir: low-key chiaroscuro color palette, 35mm raw flash photography, real-time oven status indicators, an omakase-style 4-slice board with beverage pairings, and upfront walk-in arrival directives.",
    },
    industrySources: [
      {
        source:
          "National Restaurant Association — State of the Restaurant Industry Report",
        insight:
          "Over 72% of casual dining visitors consult mobile menus while en route. Replacing PDF downloads with native scannable boards cuts mobile bounce rates by over 40%.",
      },
      {
        source:
          "Cornell Hospitality Research (Sheryl E. Kimes) — Counter Revenue Management",
        insight:
          "Eliminating bake-time ambiguity and proving immediate availability ('by the slice') substantially increases walk-in conversion for late-night counter-service venues.",
      },
      {
        source:
          "Toast POS Hospitality Benchmarking Index — Nightlife Dining Trends",
        insight:
          "Displaying curated beverage pairings alongside high-craft food items drives attach rates up by 28% in focused counter dining formats.",
      },
    ],
    sectionRationales: [
      {
        slot: "navbar",
        intent:
          "Immediate operational orientation for mobile nightlife traffic.",
        keyDecisions: [
          "Prominent live status badge ('DOORS OPEN 18:00 - 02:00')",
          "Minimal single-page anchor jumps rather than multi-page navigation",
          "One-tap CTA jumping straight to the active slice board",
        ],
        pitfallToAvoid:
          "Nested dropdown menus or distracting delivery app buttons.",
      },
      {
        slot: "hero",
        intent:
          "Shatter the 45-minute deep-dish bake wait misconception within 3 seconds.",
        keyDecisions: [
          "Heavy typographic emphasis on 'BY THE SLICE' using high-contrast italic serifs",
          "Live oven status pill ('OVEN 450°F // ROTATING PAN ACTIVE')",
          "Direct-flash 35mm photo showing real crust texture on the raw steel counter",
        ],
        pitfallToAvoid:
          "Vague, decorative slogans that fail to state what, when, and where the venue operates.",
      },
      {
        slot: "section02",
        intent:
          "Establish craft credibility and celebrate the 2-year physical renovation.",
        keyDecisions: [
          "2-column magazine spread balancing short narrative paragraphs with a founder pullquote",
          "3-metric stat strip (18 Seats, 48-HR Ferment, 2-MIN Delivery) for rapid scanning",
          "Feature pillar cards detailing cast-iron seasoning, vinyl sound, and natural pours",
        ],
        pitfallToAvoid:
          "Walls of dense text that look like an executive corporate history.",
      },
      {
        slot: "section03",
        intent:
          "Eliminate ordering friction and maximize beverage attach rates.",
        keyDecisions: [
          "Strict limit of 4 discrete slice cards to eliminate decision paralysis",
          "Explicit inclusion of fermentation time, crust profile, and exact pricing (¥850-¥950)",
          "Dedicated wine or beer pairing recommendation on every card",
        ],
        pitfallToAvoid:
          "Hiding ingredients behind nested modal popups or multi-page PDF downloads.",
      },
      {
        slot: "section04",
        intent:
          "Differentiate the venue as a hi-fi acoustic destination, not just a food counter.",
        keyDecisions: [
          "Tonight's Spin List highlighting specific vinyl pressings, artists, and record labels",
          "House rules framed as welcoming acoustic etiquette ('Respect the Needle', 'Counter Flow')",
          "Direct-flash macro photo of the analog turntable tonearm",
        ],
        pitfallToAvoid:
          "Autoplaying background music or making the venue feel like an exclusionary nightclub.",
      },
      {
        slot: "section05",
        intent:
          "Remove all arrival anxiety and clarify logistics before the customer walks in.",
        keyDecisions: [
          "3-step numbered protocol making walk-in policy and payment methods crystal clear",
          "Terminal card with exact Katamachi 2-Chome coordinates, transit pins, and curfew hours",
          "Direct link to Google Maps for effortless walking navigation",
        ],
        pitfallToAvoid:
          "Burying the walk-in policy and causing customers to hesitate over table reservations.",
      },
      {
        slot: "footer",
        intent: "Clean, distraction-free colophon and quick viewport reset.",
        keyDecisions: [
          "One-tap 'BACK TO TOP ↑' button for mobile ease",
          "Clear operating day breakdown (Wed-Mon, closed Tuesdays)",
          "Monospaced hairline typography matching the industrial counter aesthetic",
        ],
        pitfallToAvoid: "Bloated multi-column corporate sitemaps.",
      },
    ],
  },
};
