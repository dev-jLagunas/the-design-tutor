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
      eyebrow: "BRAND ORIGIN // COMMUNITY & ARCHIVE",
      title: "Built in Katamachi,",
      titleHighlight: "Forged After Dark.",
      subtitle:
        "Foundry began as an obsession with Chicago cast-iron baking and evolved into an unapologetic nocturnal counter ritual anchored in local craft and sound.",
      storyParagraphs: [
        "We never set out to open a conventional dining room. We wanted a raw, high-focus enclave where late-night creative workers, night owls, and vinyl lovers could pull up to cold steel at midnight, get a piping-hot slice within two minutes, and hear uncompromised analog sound.",
        "Everything we do stems from two convictions: uncompromising baking discipline—slow-fermented local dough baked in seasoned cast iron—and zero pretense. No reservations, no delivery courier line-ups, and no shortcuts.",
      ],
      coreValues: [
        {
          index: "01",
          label: "DISCIPLINE",
          title: "Cast-Iron Conviction",
          description:
            "Every pan is seasoned in-house. 48-hour cold fermentation yields a crust that holds structural chew without feeling sluggish.",
        },
        {
          index: "02",
          label: "COMMUNITY",
          title: "The Katamachi Orbit",
          description:
            "We collaborate exclusively with local Ishikawa producers, micro-roasters, and independent vinyl collectors to keep late hours vital.",
        },
        {
          index: "03",
          label: "IMMERSION",
          title: "Physical Spaces Only",
          description:
            "No delivery apps or ghost kitchen setups. The experience requires the room, the needle drop, and the heat off the deck oven.",
        },
      ],
      socialChannels: [
        {
          platform: "Instagram",
          handle: "@foundrypizzabar",
          label: "DAILY ROTATIONS & BAKE DISPATCHES",
          url: "https://instagram.com",
        },
        {
          platform: "Spotify",
          handle: "Foundry Vinyl Archive",
          label: "DIGITAL ARCHIVE OF PHYSICAL SPINS",
          url: "https://spotify.com",
        },
        {
          platform: "Substack",
          handle: "The Katamachi Counter",
          label: "BAKING LOGS, LINER NOTES & ESSAYS",
          url: "https://substack.com",
        },
      ],
      media: {
        src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
        alt: "Midnight counter culture at Foundry with guests gathered along the steel bar",
        caption: "Late-night service along the steel counter.",
        badge: "ARCHIVAL LOG",
      },
      closingManifesto:
        "We are here for the craft, the neighborhood, and the nocturnal hours. Follow the dispatch, listen to the records, or just step through the door.",
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
            src: "/images/design01/pizza-one.png",
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
            src: "/images/design01/pizza-two.png",
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
            src: "/images/design01/pizza-three.png",
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
            src: "/images/design01/pizza-four.png",
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

    // --- Tier 2: Section 02 -> Mounted at PizzaSectionOne in Edu Mode AND PizzaSectionFive ---
    // --- Tier 2: Section 02 (The Core Characteristics) -> Mounted at PizzaSectionOne in Edu Mode ---
    section02: {
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
            src: "/images/design01/extra-img-6.jpg",
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
            src: "/images/design01/extra-img-2.jpg",
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
            src: "/images/design01/extra-img-4.jpg",
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
            src: "/images/design01/hero-img-pizza.jpg",
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

    // --- Tier 3: Section 03 (Application Matrix) ---
    section03: {
      sectionNumber: "02",
      sectionAnchorId: "section-matrix",
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
            targetId: "#section-slices",
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
            targetId: "#section-slices",
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
            targetId: "#section-protocol",
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
            targetId: "#section-protocol",
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
