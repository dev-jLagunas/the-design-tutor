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
      "Neighborhood night owls, music heads, and late-night diners looking for a comfortable counter spot to grab a bite and a drink after hours.",
    aestheticGoal:
      "A late-night downtown editorial look blending raw textures like brushed steel and concrete with warm lighting, high-contrast flash photos, and crisp print-inspired typography.",
    brandTone: ["Late-Night", "Unpretentious", "Warm", "Direct"],
    providedAssets: [
      "Flash photography of customers and late-night counter service",
      "High-contrast product shots of whole cast-iron pies and fresh slices",
    ],
    coreChallenge:
      "Showing that deep dish doesn't have to mean sitting around for a slow 45-minute bake, but can be a fast, casual by-the-slice option that fits into a night out in Katamachi.",
    deliverables: [
      "Mobile-first single-page landing site covering hours, location, and walk-in policies",
      "Tonight's slice lineup with descriptions, pricing, and current oven status",
      "Interactive vinyl music player module linking to the bar's Spotify playlist",
      "Background story detailing the dough process, local ingredients, and shop vibe",
      "Photo gallery and customer FAQ addressing late-night seating and takeaway",
    ],
  },

  // ===========================================================================
  // 02. PHASE 02: LIVE COMMERCIAL SITE
  // ===========================================================================
  live: {
    // --- Navbar ---
    navbar: {
      brandMark: "FOUNDRY",
      subBrandMark: "EST. 2024 // KANAZAWA",
      statusBadge: "DOORS OPEN 18:00 – 02:00",
      navItems: [
        {
          label: "PIZZA SLICES",
          targetId: "#section-slices",
          indexNumber: "01",
        },
        {
          label: "VISITOR INFORMATION",
          targetId: "#section-protocol",
          indexNumber: "02",
        },
        {
          label: "SOUND & VIBE",
          targetId: "#section-sound",
          indexNumber: "03",
        },
        {
          label: "IMAGE GALLERY",
          targetId: "#section-gallery",
          indexNumber: "04",
        },
        { label: "OUR STORY", targetId: "#section-story", indexNumber: "05" },
      ],
      ctaAction: {
        label: "CURRENT PIES",
        targetId: "#section-slices",
        variant: "primary",
      },
    },

    // --- Tier 1: Hero ---
    hero: {
      eyebrow: "RENOVATED COUNTER // 6:00 PM – 2:00 AM",
      title: "DEEP DISH,",
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
        label: "VIEW TONIGHT'S SLICES",
        targetId: "#section-slices",
        variant: "primary",
      },
      secondaryAction: {
        label: "HOURS & LOCATION",
        targetId: "#section-protocol",
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
          value: "18 Seats & Outdoors",
          label: "Steel Counter",
          description: "Walk-ins strictly",
        },
        {
          value: "4 Varieties",
          label: "Nightly Rotation",
          description: "Fresh from the pan",
        },
      ],
    },

    // --- Tier 2: Section 02 (The Foundry Story & Social Dispatches) -> Mounted at PizzaSectionFive ---
    section02: {
      sectionNumber: "05",
      sectionAnchorId: "section-story",
      eyebrow: "OUR STORY",
      title: "Built in Katamachi,",
      titleHighlight: "made for late nights.",
      subtitle:
        "We started with a simple goal: make really good deep dish pizza and create a place where anyone can grab a drink, listen to records, and feel welcome.",
      storyParagraphs: [
        "We didn't want a stiff, quiet dining room. We wanted a relaxed counter spot where you can pull up a chair after work, grab a hot slice in a couple of minutes, and just hang out while great music plays in the background.",
        "Everything comes down to doing the basics right. We take our time with our dough, bake in cast iron pans, and keep the vibe casual. No reservations, no rush—just walk in whenever you're hungry.",
      ],
      coreValues: [
        {
          index: "01",
          label: "THE FOOD",
          title: "Good Ingredients, No Shortcuts",
          description:
            "We let our dough rest for two days and season our pans by hand. It takes time, but that's how you get a crust that's crisp, light, and actually tastes good.",
        },
        {
          index: "02",
          label: "THE NEIGHBORHOOD",
          title: "Rooted in Katamachi",
          description:
            "We work with local shops, roasters, and friends around Ishikawa whenever we can. We love this area and want to add something fun to the street.",
        },
        {
          index: "03",
          label: "THE VIBE",
          title: "Come As You Are",
          description:
            "Whether you're stopping by for a quick slice on your way home or sticking around for a drink and a conversation, everyone is welcome at the counter.",
        },
      ],
      socialChannels: [
        {
          platform: "Instagram",
          handle: "@foundrypizzabar",
          label: "DAILY SLICES & NIGHTLY ROTATIONS",
          url: "https://instagram.com",
        },
        {
          platform: "Spotify",
          handle: "Foundry Vinyl Archive",
          label: "SONGS WE PLAY AT THE SHOP",
          url: "https://spotify.com",
        },
        {
          platform: "Substack",
          handle: "The Katamachi Counter",
          label: "RECIPES, NOTES & UPDATES",
          url: "https://substack.com",
        },
      ],
      media: {
        src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
        alt: "Guests gathered around the counter sharing pizza and drinks",
        caption: "Late-night slice counter service.",
        badge: "KATAMACHI COUNTER",
      },
      closingManifesto:
        "Good food, good records, and a warm stool waiting for you. Stop by anytime.",
    },

    // --- Tier 3: Section 03 (The Rotating Slice Board) -> Mounted at PizzaSectionOne ---
    section03: {
      sectionNumber: "01",
      sectionAnchorId: "section-slices",
      eyebrow: "WHAT'S IN THE OVEN",
      title: "Four fresh slices,",
      titleHighlight: "ready when you sit down.",
      subtitle:
        "We keep four different deep-dish pans running through the night. Pick a slice, grab a drink, and you're good to go.",
      leadCopy:
        "Our dough rests in the cold for two days so it bakes up crisp and airy, not heavy. Every slice gets whole-milk mozzarella, simple crushed tomatoes, and a quick finish of sea salt.",
      cards: [
        {
          id: "slice-01",
          badge: "OUR FAVORITE",
          title: "The Katamachi Classic",
          subtitle: "Pork fennel sausage, sweet peppers, and provolone",
          category: "RED PIE",
          description:
            "Our take on traditional Chicago deep dish. Hearty house sausage with plenty of fennel and sweet peppers under a rich, bright tomato sauce.",
          specs: [
            { label: "CRUST", value: "Cornmeal & Olive Oil Crunch" },
            { label: "DOUGH", value: "48-Hour Cold Rest" },
            { label: "PAIRING", value: "Skin-contact orange wine" },
          ],
          priceOrMetric: "¥850 / SLICE",
          action: {
            label: "CHECK DRINKS & HOURS",
            targetId: "#section-protocol",
            variant: "link",
          },
          media: {
            src: "/images/design01/pizza-one.webp",
            alt: "Katamachi Classic deep dish slice with thick tomato sauce and fennel sausage",
            caption: "Katamachi Classic slice.",
          },
          tags: ["Fennel Sausage", "San Marzano", "Provolone"],
        },
        {
          id: "slice-02",
          badge: "CHEESE PULL",
          title: "Quadruple Formaggi",
          subtitle: "Four cheeses, wild honey, and cracked black pepper",
          category: "WHITE & GOLD",
          description:
            "A rich white slice loaded with melted mozzarella, sweet gorgonzola, smoked scamorza, and parmesan, balanced with local honey and coarse black pepper.",
          specs: [
            { label: "CRUST", value: "Toasted Butter Rim" },
            { label: "DOUGH", value: "48-Hour Cold Rest" },
            { label: "PAIRING", value: "Local craft stout or dark lager" },
          ],
          priceOrMetric: "¥900 / SLICE",
          action: {
            label: "CHECK DRINKS & HOURS",
            targetId: "#section-protocol",
            variant: "link",
          },
          media: {
            src: "/images/design01/pizza-two.webp",
            alt: "Golden four cheese deep dish slice with caramelized frico cheese crown",
            caption: "Quadruple Formaggi slice.",
          },
          tags: ["4-Cheese", "Wild Honey", "Smoked Scamorza"],
        },
        {
          id: "slice-03",
          badge: "LITTLE KICK",
          title: "Midnight Pepperoni & Hot Honey",
          subtitle: "Crispy cup pepperoni, chili oil, and spicy honey",
          category: "RED PIE",
          description:
            "Loaded with natural-casing pepperoni that curls up into crispy cups in the pan, finished with a light drizzle of chili oil and hot honey.",
          specs: [
            { label: "CRUST", value: "Extra Crispy Cheese Edge" },
            { label: "DOUGH", value: "48-Hour Cold Rest" },
            { label: "PAIRING", value: "Chilled sparkling rosé" },
          ],
          priceOrMetric: "¥950 / SLICE",
          action: {
            label: "CHECK DRINKS & HOURS",
            targetId: "#section-protocol",
            variant: "link",
          },
          media: {
            src: "/images/design01/pizza-three.webp",
            alt: "Cupping pepperoni deep dish slice glistening with hot honey and red chili oil",
            caption: "Midnight Pepperoni slice.",
          },
          tags: ["Cup Pepperoni", "Hot Honey", "Calabrian Chili"],
        },
        {
          id: "slice-04",
          badge: "PLANT-BASED",
          title: "Charred King Oyster & Confit Garlic",
          subtitle: "Pan-roasted mushrooms, garlic paste, and fresh thyme",
          category: "EARTH & HERB",
          description:
            "Local mushrooms cooked down in cast iron with rosemary and slow-roasted garlic oil, finished with crispy nutritional yeast and fresh herbs.",
          specs: [
            { label: "CRUST", value: "Olive Oil & Toasted Sesame" },
            { label: "DOUGH", value: "48-Hour Cold Rest" },
            { label: "PAIRING", value: "Dry white wine or amber ale" },
          ],
          priceOrMetric: "¥850 / SLICE",
          action: {
            label: "CHECK DRINKS & HOURS",
            targetId: "#section-protocol",
            variant: "link",
          },
          media: {
            src: "/images/design01/pizza-four.webp",
            alt: "Rustic deep dish slice covered in roasted wild mushrooms and herbs",
            caption: "King Oyster Mushroom slice.",
          },
          tags: ["Noto Mushrooms", "Confit Garlic", "Plant Based"],
        },
      ],
      footerNote:
        "Our slice lineup changes on the first of every month with new regional ingredients and seasonal rotations.",
      globalAction: {
        label: "CHECK CURRENT SEATS & ARRIVAL",
        targetId: "#section-protocol",
        variant: "secondary",
      },
    },

    // --- Tier 4: Section 04 (Sound & Vibe) -> Mounted at PizzaSectionThree ---
    section04: {
      sectionNumber: "03",
      sectionAnchorId: "section-sound",
      eyebrow: "THE SPACE & MUSIC",
      title: "Good records,",
      titleHighlight: "cold drinks, and hot pizza.",
      subtitle:
        "We set this place up to be more than just a quick bite—it's a relaxed late-night bar where you can have a drink and listen to great music.",
      leadCopy:
        "When we renovated the shop, we kept things simple and raw: poured concrete floors, warm dim lighting, and a long brushed steel counter with two turntables right behind the bar.",
      vibePillars: [
        {
          index: "01",
          label: "ON THE DECKS",
          title: "All Vinyl, All Night",
          description:
            "No streaming playlists or random ads. We spin actual records from open to close—mostly classic jazz funk, dub, and late-night electronic grooves kept at a volume where you can still talk.",
        },
        {
          index: "02",
          label: "BEHIND THE BAR",
          title: "Pours That Match the Pie",
          description:
            "Every slice has a drink to go with it. We keep a solid list of natural wines, local craft beers, and chilled highballs that cut right through rich cheese and tomato sauce.",
        },
        {
          index: "03",
          label: "THE ROOM",
          title: "An 18-Seat Steel Counter",
          description:
            "Just 18 bar stools along one long counter, exposed brick, and low amber lights. Pull up a stool, order a slice, grab your drink, and settle in.",
        },
      ],
      media: {
        src: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=80",
        alt: "Vinyl record spinning on a turntable behind the bar counter",
        caption: "Turntables behind the drink taps.",
        badge: "SOUND STATION",
      },
      footerNote: "Records spin continuously until the doors lock at 2:00 AM.",
    },

    // --- Tier 5: Section 05 (Action Protocol & Arrival) -> Mounted at PizzaSectionTwo ---
    section05: {
      sectionNumber: "02",
      sectionAnchorId: "section-protocol",
      eyebrow: "KATAMACHI",
      title: "Visitor Information",
      titleHighlight: "Have other questions?",
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
        headline: "2-21-12 Katamachi, Kanazawa, Ishikawa 920-0981",
        subheadline: "Directly behind the central Katamachi Scramble",
        codeLines: [
          "SERVICE HOURS: Wednesday – Monday // 18:00 – 02:00",
          "REGULAR CLOSING: Tuesdays (Deep clean & pan seasoning)",
          "PAYMENT: Cash, Visa/Mastercard/Amex, Apple Pay, IC Transit",
          "STATUS: Walk ins Welcome",
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
      brandColophon: "Foundry Pizza Bar © 2026 — Katamachi, Kanazawa",
      legalNotice:
        "All rights reserved. Built as an educational design case study for The Design Tutor.",
      operationalDetails: [
        "Open Wed–Mon, 6:00 PM – 2:00 AM (Closed Tuesdays)",
        "18 counter seats (walk-ins only)",
        "2-21-12 Katamachi, Kanazawa, Ishikawa",
      ],
      secondaryLinks: [
        {
          label: "Instagram",
          href: "https://instagram.com",
          isExternal: true,
        },
        {
          label: "Spotify Playlist",
          href: "https://spotify.com",
          isExternal: true,
        },
        { label: "Back to top ↑", targetId: "#hero" },
      ],
    },
  },

  // ===========================================================================
  // 03. PHASE 03: EDUCATIONAL IN-SITU CURRICULUM
  // ===========================================================================
  educational: {
    // --- Navbar ---
    navbar: {
      brandMark: "EDITORIAL NOIR",
      subBrandMark: "SPEC-003 // VERIFIED ACADEMIC STANDARD",
      statusBadge: "6-BEAT BREAKDOWN",
      navItems: [
        {
          label: "CHARACTERISTICS",
          targetId: "#section-slices",
          indexNumber: "01",
        },
        {
          label: "CHEAT SHEET",
          targetId: "#section-protocol",
          indexNumber: "02",
        },
        {
          label: "LINEAGE & ROOTS",
          targetId: "#section-sound",
          indexNumber: "03",
        },
        {
          label: "VISUAL ARCHIVE",
          targetId: "#section-gallery",
          indexNumber: "04",
        },
        {
          label: "SYSTEM ANATOMY",
          targetId: "#section-story",
          indexNumber: "05",
        },
      ],
      ctaAction: {
        label: "CHEAT SHEET",
        targetId: "#section-protocol",
        variant: "primary",
      },
    },

    // --- Tier 1: Hero ---
    hero: {
      eyebrow: "DESIGN MOVEMENT // LATE 20TH CENTURY POST-MODERN EDITORIAL",
      title: "A MIX OF",
      titleItalic: "POLISH & EDGE.",
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
        targetId: "#section-slices",
        variant: "primary",
      },
      secondaryAction: {
        label: "INSPECT TYPOGRAPHY",
        targetId: "#section-protocol",
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
    // --- Tier 2: Section 02 (Application Matrix & Fit) -> Mounted at PizzaSectionFive ---
    section02: {
      sectionNumber: "05",
      sectionAnchorId: "section-story",
      eyebrow: "02 // APPLICATION MATRIX",
      title: "Strategic Selection.",
      titleHighlight: "When to Deploy vs. Avoid.",
      subtitle:
        "Design movements are strategic tools. Deploying Editorial Noir in the wrong commercial vertical damages readability and user flow.",
      storyParagraphs: [
        "Aesthetic decisions are commercial decisions. Editorial Noir intentionally creates friction, exclusivity, and cultural mood—making it powerful for experiential brands, but actively harmful for quick transactional workflows.",
        "Rule of thumb: If your user is savoring an experience, exploring culture, or seeking atmosphere, embrace it. If your user is in a rush, stressed, or completing an operational chore, pick a different style.",
      ],
      coreValues: [
        {
          index: "01",
          label: "HIGH AFFINITY",
          title: "Nightlife, Hospitality & Cultural Brands",
          description:
            "Cocktail bars, vinyl listening lounges, boutique late counters, and indie fashion labels. Atmospheric low-light palettes and direct-flash photography immerse users into the physical room before they step through the door.",
        },
        {
          index: "02",
          label: "ANTI-PATTERN",
          title: "Enterprise SaaS, Data & Complex Dashboards",
          description:
            "Avoid in high-density data environments. High-contrast Didone serifs cause optical shimmer ('dazzle') when scanning tables or numbers, and harsh 1px steel dividers add unnecessary clutter to complex workflows.",
        },
        {
          index: "03",
          label: "ACCESSIBILITY RISK",
          title: "Mass Utilities, Healthcare & Public Transit",
          description:
            "Avoid where universal accessibility and rapid glanceability are non-negotiable. Low-key dark gamuts and delicate hairline serifs fail outdoors in direct sunlight and create high visual fatigue during critical tasks.",
        },
      ],
      closingManifesto:
        "Style should never fight the user's intent: use mood to build culture, never to hide basic utility.",
    },

    // --- Tier 3: Section 03 (The 4 Design System Rules) -> Mounted at PizzaSectionOne ---
    section03: {
      sectionNumber: "01",
      sectionAnchorId: "section-slices",
      eyebrow: "01 // ANATOMY OF EDITORIAL NOIR",
      title: "Severe contrast,",
      titleHighlight: "unbracketed geometry.",
      subtitle:
        "The core structural rules that separate authentic editorial modernism from generic dark-mode interfaces.",
      leadCopy:
        "Editorial Noir thrives on friction: pairing luxury fashion serifs with raw industrial framing. Rather than softening the interface, it treats every container like a rigid, ink-stamped printing plate.",
      cards: [
        {
          id: "rule-01",
          badge: "RULE 01 // TYPE",
          title: "Extreme Stroke Contrast",
          subtitle: "Didone display serifs paired with utilitarian monospace",
          category: "TYPOGRAPHY",
          description:
            "Display headlines use razor-thin horizontal hairlines against heavy vertical stems. We balance that dramatic luxury by setting technical body details in bare monospace.",
          specs: [
            { label: "DISPLAY", value: "Bodoni Moda (-0.04em)" },
            { label: "MONO", value: "Space Mono / Uppercase" },
            { label: "CONTRAST", value: "14.2:1 Optical Ratio" },
          ],
          priceOrMetric: "SCALE: 6.5 : 1",
          action: {
            label: "INSPECT SPECIMEN",
            targetId: "#section-protocol",
            variant: "link",
          },
          media: {
            src: "/images/design01/extra-img-6.webp",
            alt: "Extreme stroke modulation on Didone serif letterforms",
            caption: "Bodoni display specimen.",
          },
          tags: ["Bodoni", "Didone", "Italic Serifs"],
        },
        {
          id: "rule-02",
          badge: "RULE 02 // STRUCTURE",
          title: "1px Hairlines & 0px Radii",
          subtitle: "Strict grid dividers without rounded corners",
          category: "FRAMING",
          description:
            "Every card and container is locked to sharp, 90-degree corners. We completely skip modern rounded bubbles and drop shadows in favor of 1px solid steel hairlines.",
          specs: [
            { label: "CORNER RADIUS", value: "Strict 0px" },
            { label: "HAIRLINE", value: "1px Solid Border" },
            { label: "SHADOWS", value: "None // Flat Plates" },
          ],
          priceOrMetric: "RADIUS: 0px",
          action: {
            label: "CHECK TOKEN SYSTEM",
            targetId: "#section-protocol",
            variant: "link",
          },
          media: {
            src: "/images/design01/extra-img-2.webp",
            alt: "Architectural 1px lines and crisp edges without rounded radii",
            caption: "Zero-radius framing rules.",
          },
          tags: ["Hairlines", "0px Corners", "Print Grid"],
        },
        {
          id: "rule-03",
          badge: "RULE 03 // COLOR",
          title: "Low-Key Smoked Canvas",
          subtitle: "Smoked charcoal, concrete, and halogen amber",
          category: "CHROMATICS",
          description:
            "Pure digital black (#000000) is avoided. We build visual depth using smoked charcoal (#121212) and poured concrete (#1A1A1A), accented with warm amber (#E5A93C).",
          specs: [
            { label: "CANVAS", value: "Smoked Charcoal #121212" },
            { label: "SURFACE", value: "Poured Concrete #1A1A1A" },
            { label: "ACCENT", value: "Halogen Amber #E5A93C" },
          ],
          priceOrMetric: "DEPTH: 92% DARK",
          action: {
            label: "INSPECT PALETTE",
            targetId: "#section-protocol",
            variant: "link",
          },
          media: {
            src: "/images/design01/extra-img-4.webp",
            alt: "Low-key charcoal tones lit by warm incandescent halogen light",
            caption: "Low-light chromatic balance.",
          },
          tags: ["Smoked Charcoal", "Amber Accent", "Low Key"],
        },
        {
          id: "rule-04",
          badge: "RULE 04 // LIGHT",
          title: "Direct-Flash Photography",
          subtitle: "Harsh chiaroscuro and authentic night-owl scenes",
          category: "IMAGERY",
          description:
            "Soft, diffuse studio lighting is replaced with direct 35mm camera flash. High-contrast highlights and deep, inky shadows give scenes a tangible, late-night grit.",
          specs: [
            { label: "SOURCE", value: "Direct Flash / 35mm" },
            { label: "SHADOWS", value: "Hard Edge Falloff" },
            { label: "MOOD", value: "Unedited Nightlife" },
          ],
          priceOrMetric: "ISO: 800 GRAIN",
          action: {
            label: "VIEW PHOTO ARCHIVE",
            targetId: "#section-gallery",
            variant: "link",
          },
          media: {
            src: "/images/design01/hero-img-pizza.webp",
            alt: "Direct flash capture of counter dining with harsh shadows",
            caption: "Chiaroscuro photo technique.",
          },
          tags: ["Direct Flash", "Chiaroscuro", "35mm Analog"],
        },
      ],
      footerNote:
        "Every element should read either as an archival print or an industrial spec sheet—avoid generic digital grey midtones.",
      globalAction: {
        label: "GO TO CSS IMPLEMENTATION CHEAT SHEET",
        targetId: "#section-protocol",
        variant: "secondary",
      },
    },
    // --- Tier 4: Section 04 (Historical Roots, Lineage & Trivia) -> Mounted at PizzaSectionThree ---
    section04: {
      sectionNumber: "03",
      sectionAnchorId: "section-sound",
      eyebrow: "HISTORICAL ARCHAEOLOGY // ARCHIVAL ROOTS",
      title: "From 18th-Century Paris,",
      titleHighlight: "to Soho Basements.",
      subtitle:
        "How Enlightenment typographic rigor was stripped of classicism by late-20th-century nocturnal countercultures to forge modern Editorial Noir.",
      leadCopy:
        "The movement survives on friction: merging the royal elegance of Giambattista Bodoni and Firmin Didot with raw newsprint, direct-flash 35mm club photography, and industrial zero-radius framing.",
      vibePillars: [
        {
          index: "01",
          label: "TYPOGRAPHIC ORIGIN",
          title: "The Didone Rationalism (1788)",
          description:
            "Designers discarded humanist calligraphic serifs for unbracketed hairlines and heavy vertical stems, creating the high-contrast luxury silhouette that defines modern display scale.",
        },
        {
          index: "02",
          label: "EDITORIAL PACING",
          title: "Brodovitch & White Space (1940s)",
          description:
            "Alexey Brodovitch pioneered asymmetric column tension and cinematic contrast in print, setting severe Didone typography alongside full-bleed chiaroscuro photography.",
        },
        {
          index: "03",
          label: "UNDERGROUND NOIR",
          title: "Soho Indie Zines & Flash (1970s)",
          description:
            "Post-punk publications paired high-fashion typefaces with raw point-and-shoot flash photos, establishing the high-low aesthetic tension of nocturnal luxury.",
        },
      ],
      media: {
        src: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1200&q=80",
        alt: "Vintage letterpress metal type blocks laid out in an archival drawer",
        caption:
          "Cast metal type blocks showing high-contrast modern letterforms.",
        badge: "ARCHIVAL PRINT",
      },
      footerNote:
        "Rule of thumb: Didone display strokes shimmer and vanish below 24px ('dazzle'). Use them strictly for display scales and counterbalance with monospace metadata.",
    },

    // --- Tier 5: Section 05 (Implementation Cheat Sheet) -> Mounted at PizzaSectionTwo ---
    section05: {
      sectionNumber: "02",
      sectionAnchorId: "section-protocol",
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
          label: "CSS TOKENS",
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
    },
  },

  // ===========================================================================
  // 04. EXTRA: CASE STUDY BREAKDOWN
  // ===========================================================================
  caseStudy: {
    angle:
      "A late-night deep-dish counter and vinyl listening bar in Katamachi operating from 18:00 to 02:00. We skipped the usual checkered-tablecloth pizzeria look for a moody, high-contrast editorial style—blending a warm analog music vibe with quick, practical details for people checking the menu on their phones.",
    decisions: [
      {
        area: "Photo Rhythm & Spacing",
        choice:
          "Alternated full-screen photos with clean, structured text and menu sections.",
        rationale:
          "Full-bleed photography pulls you right into the room's atmosphere, while the structured sections give your eyes a break so prices, hours, and slice details are effortless to read.",
      },
      {
        area: "Consistent Photo Grading (Darktable)",
        choice:
          "Hand-graded every photo in Darktable with direct-flash contrast, warm indoor lighting, and real 35mm grain.",
        rationale:
          "Makes the entire site feel like one real night out in Katamachi, rather than a patchwork of random stock photos.",
      },
      {
        area: "Interactive Vinyl Player",
        choice:
          "Added an interactive spinning record player and a music indicator in the top bar.",
        rationale:
          "Shows immediately that this is a genuine listening bar with turntables behind the counter, not just another spot grabbing a slice.",
      },
      {
        area: "Visual Storytelling (Pies & Records)",
        choice:
          "Matched the round shape and spin of the cast-iron pizza pans with the 33⅓ RPM vinyl records.",
        rationale:
          "Subtly links the kitchen craft to the music culture throughout the page without needing a giant wall of text to explain the concept.",
      },
      {
        area: "Clear Text over Dark Photos",
        choice:
          "Placed subtle dark backing panels and thin border frames behind the text blocks.",
        rationale:
          "Keeps every headline and paragraph easy to read on bright screens without washing out or covering up the background photos.",
      },
      {
        area: "Live Status Badges",
        choice:
          "Included dynamic status dots that turn green when doors open at 18:00, alongside current oven temps and available slices.",
        rationale:
          "Answers the most common questions before anyone even arrives: Are they open right now? Is there pizza ready? Can I just walk in?",
      },
    ],
    scrapped: [
      "Tested borderless, see-through text boxes early on, but the words blended into the photos and were tough to read; added thin borders and slightly darker backing cards to fix it.",
      "Considered autoplaying background music, but scrapped it because sudden audio on phones is annoying; letting visitors click to spin the record gives them control.",
    ],
    takeaway:
      "Good design balances mood and clarity. Custom photos and interactive details give a space real character, while simple spacing and clear typography make sure nobody has to hunt for the basic facts.",
    hypothesis: {
      primaryGoal:
        "Establish Foundry as Katamachi's go-to late-night hangout and turn quick mobile visits into real walk-in customers.",
      signals: [
        {
          vector: "Less Confusion at the Door",
          expectedOutcome:
            "By showing live 'DOORS OPEN' dots and a plain 3-step walk-in guide up front, people know they can just walk in without needing a reservation or calling ahead.",
        },
        {
          vector: "Faster Ordering",
          expectedOutcome:
            "By keeping the menu to 4 rotating slices with prices and live availability right there, customers can decide what they want before they even step up to the counter.",
        },
        {
          vector: "Stronger Local Buzz",
          expectedOutcome:
            "By pairing real 35mm photography with a playful vinyl player, the site feels memorable and distinct, encouraging people to share it and visit for the music as much as the food.",
        },
      ],
    },
  },
};
