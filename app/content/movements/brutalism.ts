// content/movements/brutalism.ts
import type { MovementDefinition } from "~/types/movement";

export const brutalismMovement: MovementDefinition = {
  id: "brutalism-sd-music",
  slug: "brutalism",
  title: "Digital Brutalism & Structural Rawness",
  era: "1950s Architecture — 2010s Web Anti-Design",
  brief: {
    clientName: "THE VAULT // SD NOISE LAB",
    industry: "Underground Live Music Venue & Dive Bar",
    location: "Barrio Logan / Downtown, San Diego, CA",
    targetAudience:
      "Indie rock enthusiasts, noise musicians, vinyl collectors, and night owls.",
    aestheticGoal:
      "A harsh, anti-polished, high-contrast digital interface that mirrors exposed concrete, photocopied punk gig flyers, and raw terminal commands.",
    brandTone: ["Raw", "Uncompromising", "Industrial", "Anti-Corporate"],
    providedAssets: [
      "Flash-photography crowd shots",
      "Xerox gig posters & tape sleeve scans",
      "Distorted monochrome logo mark",
    ],
    coreChallenge:
      "Creating an authentic underground identity that defies standard slick hospitality websites, while keeping set times, ticketing links, and door policies legible.",
    deliverables: [
      "Aggressive hero hook with live venue status & curfew alert",
      "Venue origins narrative detailing the warehouse conversion",
      "Gig list / residency showcase with ticket buttons",
      "Patron quotes and crowd policies callout",
      "Door rules, ticketing warnings, and map coords",
    ],
  },
  live: {
    hero: {
      eyebrow: "LIVE NOISE // BARRIO LOGAN, SAN DIEGO, CA",
      titlePart1: "LOUD.",
      titlePart2: "DIRTY.",
      titlePart3: "UNFILTERED.",
      subtitle: "San Diego’s loudest concrete basement since 2018.",
      tagline:
        "No VIP booths. No bottle service. Just 130 decibels, cheap canned lager, and ungrounded tube amps.",
      primaryButton: {
        label: "GET GIG TICKETS",
        url: "#showcase",
        icon: "lucide:ticket",
      },
      secondaryButton: {
        label: "VENUE POLICIES",
        url: "#rules",
        icon: "lucide:alert-triangle",
      },
      pillTags: [
        "CAP: 250",
        "CASH ONLY AT DOOR",
        "EARPLUGS RECOMMENDED",
        "21+ ONLY",
      ],
      statusText: "DOORS OPEN 8PM TONIGHT // DUST TUNNEL LIVE AT 10:15PM",
      mainImage: {
        src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
        alt: "Sweaty packed crowd under harsh strobe lights in a concrete basement",
        caption: "FRIDAY NIGHT RESIDENCY. PHOTO: RAW 35MM.",
      },
      secondaryImage: {
        src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
        alt: "Close-up of distorted guitar pedals and frayed electrical cables",
      },
    },
    narrative: {
      eyebrow: "EST. 2018 // THE BASEMENT",
      heading: "WE DIDN'T BUILD A COCKTAIL LOUNGE. WE WIRED A BUNKER.",
      leadParagraph:
        "Tucked under an abandoned freight depot off Harbor Drive, The Vault was started by audio engineers who were sick of sterile suburban venues charging $18 for a watered-down seltzer.",
      bodyParagraphs: [
        "We ripped out the drywall, exposed the 1940s reinforced concrete, ran 400 amps of isolated three-phase power, and hand-soldered our own point-to-point analog PA monitors.",
        "If you want ambient jazz and lavender foam martinis, go to the Gaslamp. If you want high-voltage feedback, local noise bands, and a floor vibrating at 40Hz, step down the stairs.",
      ],
      pullQuote: {
        quote:
          "IF IT AIN'T BUZZING THROUGH THE CONCRETE, WE AIN'T DOING IT RIGHT.",
        author: "MICK 'SLAG' CARTER",
        role: "FOUNDER & CHIEF SOUND ENGINEER",
      },
      metrics: [
        {
          numberOrStat: "132dB",
          label: "PEAK SPL",
          caption: "Ear protection free at the bar",
        },
        {
          numberOrStat: "100%",
          label: "DIY SOUND",
          caption: "Custom dual 18-inch horn subs",
        },
        {
          numberOrStat: "$4",
          label: "COLD TALLBOYS",
          caption: "Zero price gouging ever",
        },
      ],
      featureList: [
        {
          title: "CUSTOM HORN-LOADED PA",
          description:
            "Zero digital compression. Pure analog warmth pushed through vintage McIntosh tube power amps.",
        },
        {
          title: "STRICT ANTI-SCALPER DOOR",
          description:
            "All tickets are paper will-call or purchased at the grate. ID matches the buyer or you don't enter.",
        },
        {
          title: "ZERO LUXURY AMENITIES",
          description:
            "Stained concrete floor, heavy steel fire doors, and bathrooms covered in local zine stickers.",
        },
      ],
      portraitOrAtmosphereImage: {
        src: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=1000&q=80",
        alt: "Analog mixing console with illuminated red VU meters in low light",
        caption: "OUR 1978 SOUNDCRAFT SERIES TWO CONSOLE.",
      },
      accentDetailImage: {
        src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
        alt: "Stack of gig flyer printouts on a wooden bar counter",
      },
    },
    showcase: {
      eyebrow: "UPCOMING SESSIONS",
      heading: "NOVEMBER 2026 GIG DISPATCH",
      description:
        "TICKETS GO LIVE EVERY MONDAY NOON. NO REFUNDS. NO RE-ENTRY AFTER MIDNIGHT.",
      categoryFilters: [
        "ALL DATES",
        "PUNK / HARDCORE",
        "NOISE / MODULAR",
        "GARAGE ROCK",
      ],
      items: [
        {
          id: "gig-01",
          badge: "THIS SATURDAY",
          title: "RUST WIRE // DEATH CLONE",
          subtitle: "SUPPORT: TAPE GHOST (MEXICALI)",
          description:
            "Industrial synth-punk duo pushing dual distortion chains and strobe visuals. Heavy ear fatigue guaranteed.",
          tags: ["SOLD OUT", "DOORS 8:30PM", "$12"],
          specs: [
            { name: "DOOR TIME", detail: "20:30 PST" },
            { name: "VOLUME", detail: "EXTREME (128dB)" },
            { name: "FORMAT", detail: "LIVE TWO-PIECE" },
          ],
          image: {
            src: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
            alt: "Guitarist screaming into a vintage Shure SM58 microphone",
          },
        },
        {
          id: "gig-02",
          badge: "NOV 06 // THURSDAY",
          title: "STATIC DUMP: MODULAR MASS",
          subtitle: "OPEN PATCH EXPERIMENTAL LAB",
          description:
            "Six hours of continuous quadraphonic analog modular synth drones, patch experiments, and tape manipulation.",
          tags: ["$8 DOOR", "ALL AGES TILL 10", "INTERACTIVE"],
          specs: [
            { name: "DOOR TIME", detail: "19:00 PST" },
            { name: "VOLUME", detail: "SUB-BASS HEAVY" },
            { name: "FORMAT", detail: "QUADRAPHONIC" },
          ],
          image: {
            src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
            alt: "Mess of patch cables connected to Eurorack modular synth panels",
          },
        },
        {
          id: "gig-03",
          badge: "NOV 14 // FRIDAY",
          title: "THE BARRIO SHREDDERS",
          subtitle: "ALBUM RELEASE SHOW",
          description:
            "San Diego garage surf-rock stripped of polite sheen. High tempo, beer spills, crowd surfing mandatory.",
          tags: ["LIMITED 50 TIX", "DOORS 9PM", "$15"],
          specs: [
            { name: "DOOR TIME", detail: "21:00 PST" },
            { name: "VOLUME", detail: "MEDIUM HIGH" },
            { name: "FORMAT", detail: "4-PIECE GARAGE" },
          ],
          image: {
            src: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=800&q=80",
            alt: "Crowd hands lifting a performer over stage monitors",
          },
        },
      ],
    },
    vibe: {
      eyebrow: "FIELD REPORTS // CROWD LOG",
      heading: "RAW DISPATCHES FROM THE FRONT ROW",
      description:
        "NO PAID INFLUENCERS. JUST TESTIMONIALS ETCHED ONTO THE BAR TOP.",
      cards: [
        {
          id: "review-sd-1",
          title: "BLEW OUT MY TINNITUS",
          quoteOrRule:
            "BEST SOUND IN SOUTHERN CALIFORNIA BY A MILE. NO BULLSHIT, CHEAP BEER, AND MY RIBCAGE SHOOK FOR 48 HOURS AFTERWARDS.",
          authorOrStandard: "CHUCK T. // SOUTH PARK",
          badge: "REGULAR PATRON",
          ratingOrPriority: "5/5 NOISE",
        },
        {
          id: "review-sd-2",
          title: "TRUE DIVE INTEGRITY",
          quoteOrRule:
            "THEY WON'T SERVE ESPRESSO MARTINIS AND THEY DON'T HAVE A COAT CHECK. IF YOU COMPLAIN ABOUT THE COLD YOU'RE IN THE WRONG ROOM.",
          authorOrStandard: "KARA V. // TIJUANA SCENE ZINE",
          badge: "MUSIC CRITIC",
          ratingOrPriority: "UNRATED",
        },
        {
          id: "review-sd-3",
          title: "ANALOG MONSTER",
          quoteOrRule:
            "THEIR CUSTOM SUB CABINETS PUT MODERN CLUB ARRAYS TO SHAME. PURE DISPLACEMENT WITHOUT DIGITAL HARSHNESS.",
          authorOrStandard: "LEO 'DECIBEL' RAMOS",
          badge: "AUDIO ENGINEER",
          ratingOrPriority: "CERTIFIED LOUD",
        },
      ],
      bannerHeading: "LEAVE YOUR PHONE IN YOUR POCKET.",
      bannerBody:
        "RECORDING LIVE SETS ON SMARTPHONES IS PROHIBITED. WATCH THE BAND OR GO STAND IN THE SMOKING PATIO.",
      bannerBadge: "VENUE POLICY 04",
      textureOrMoodImage: {
        src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
        alt: "Raw concrete wall covered in ripped gig posters and spray paint stencil tags",
      },
    },
    takeaways: {
      eyebrow: "DOOR PROTOCOLS",
      heading: "ENTRY CHECKLIST & TICKETING RULES",
      description:
        "READ THIS BEFORE YOU UBER TO BARRIO LOGAN. ZERO EXCEPTIONS GRANTED AT THE DOOR.",
      steps: [
        {
          stepNumber: "01",
          title: "PHYSICAL ID + WILL-CALL",
          summary:
            "NO DIGITAL PHONE SCREENSHOTS OF IDs. REAL PLASTIC CARDS ONLY.",
          guidanceText: "Expired IDs will be turned away without refund.",
        },
        {
          stepNumber: "02",
          title: "CASH AT THE TICKET WINDOW",
          summary: "BAR ACCEPTS CARDS, BUT TICKET GRATE REMAINS CASH-ONLY.",
          guidanceText: "ATM inside has a $3 surcharge. Bring twenties.",
        },
        {
          stepNumber: "03",
          title: "RESPECT THE NEIGHBORHOOD",
          summary: "WE EXIST IN A WORKING INDUSTRIAL/RESIDENTIAL DISTRICT.",
          guidanceText:
            "Keep voices down outside on Harbor Dr or cops will shut the show down.",
        },
      ],
      ctaHeadline: "READY TO RUIN YOUR HEARING?",
      ctaBody:
        "NEXT SHOW IS TONIGHT. REMAINING TICKETS HIT THE BOX OFFICE GRATE AT 8:00PM SHARP.",
      ctaPrimaryButton: {
        label: "PURCHASE PRE-SALE PASS",
        url: "#tickets",
        icon: "lucide:ticket",
      },
      ctaSecondaryButton: {
        label: "SEND AUDIO DEMO TAPE",
        url: "mailto:booking@vault-sd.com",
        icon: "lucide:disc",
      },
      guaranteeOrColophonNote:
        "THE VAULT // 2240 LOGAN AVE, SAN DIEGO, CA 92113 // 21+",
      closingImage: {
        src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
        alt: "Vintage neon beer sign reflected on wet pavement outside a venue door",
      },
    },
  },
  educational: {
    hero: {
      eyebrow: "MOVEMENT ANALYSIS // DECONSTRUCTION 02",
      titlePart1: "RAW.",
      titlePart2: "BRUTAL.",
      titlePart3: "UNPARDONED.",
      subtitle:
        "Why digital brutalism rejects polished corporate design systems.",
      tagline:
        "Dissecting how harsh monospace typography, 3px raw borders, terminal aesthetics, and zero decorative padding expose the naked architecture of the web.",
      primaryButton: {
        label: "INSPECT SYSTEM MECHANICS",
        url: "#showcase",
        icon: "lucide:terminal",
      },
      secondaryButton: {
        label: "ARCHITECTURAL BRIEF",
        url: "#narrative",
        icon: "lucide:file-text",
      },
      pillTags: [
        "MONOSPACE CORE",
        "RAW HTML DEFAULTS",
        "ACID CONTRAST",
        "ZERO BORDER-RADIUS",
      ],
      statusText: "CURRICULUM ACTIVE // LESSON 02 DECODING",
      mainImage: {
        src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
        alt: "High-contrast photocopied graphic print demonstrating harsh digital artifacts",
        caption:
          "NOTE THE AGGRESSIVE MONOCHROME THRESHOLD AND COMPLETE LACK OF SOFT SHADOWS.",
      },
      secondaryImage: {
        src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
        alt: "Distorted pixel grid lines and system test patterns",
      },
    },
    narrative: {
      eyebrow: "AESTHETIC FOUNDATIONS",
      heading: "BEAUTY THROUGH HONEST STRUCTURAL EXPOSURE.",
      leadParagraph:
        "Digital Brutalism is a direct reaction against the homogenization of modern web design: the endless sea of rounded pastel SaaS cards, pill buttons, floating glassmorphism, and polite illustrations.",
      bodyParagraphs: [
        "Drawing its name from the French 'béton brut' (raw concrete) and the mid-century architectural movement, brutalist web design treats the browser viewport not as an illusionistic canvas, but as a rigid structural frame.",
        "It celebrates the raw elements of front-end development: harsh high-contrast black borders, native browser input styles, monospace code fonts, unrendered layout shifts, and acid warning hues.",
      ],
      pullQuote: {
        quote:
          "BRUTALISM IS NOT ABOUT UGLINESS. IT IS ABOUT THE COURAGE TO NOT BE SWEET.",
        author: "PASCAL DEVILLE",
        role: "FOUNDER, BRUTALISTWEBSITES.COM",
      },
      metrics: [
        {
          numberOrStat: "0px",
          label: "BORDER-RADIUS",
          caption: "Razor sharp geometric corners",
        },
        {
          numberOrStat: "3px",
          label: "RAW BORDER STROKE",
          caption: "Unsoftened hard line work",
        },
        {
          numberOrStat: "#000",
          label: "ABSOLUTE BLACK",
          caption: "Zero muted charcoal dilution",
        },
      ],
      featureList: [
        {
          title: "THE REJECTION OF POLISH",
          description:
            "Every shadow is a hard drop-shadow (e.g. box-shadow: 6px 6px 0px #000). Zero blur radiuses allowed.",
        },
        {
          title: "RAW SYSTEM MONOSPACE",
          description:
            "Defaulting to Courier, Monaco, or Space Mono to evoke raw terminal output and machine readouts.",
        },
        {
          title: "INTENTIONAL VISUAL FRICTION",
          description:
            "Creating uncomfortable tension through overlapping elements, giant headline scales, and jarring acid tones.",
        },
      ],
      portraitOrAtmosphereImage: {
        src: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=1000&q=80",
        alt: "Raw architectural concrete wall with exposed steel rebar and industrial conduits",
        caption: "MID-CENTURY CONCRETE MEETS NATIVE BROWSER HTML DEFAULTS.",
      },
      accentDetailImage: {
        src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
        alt: "High-contrast technical terminal diagram and grid blueprints",
      },
    },
    showcase: {
      eyebrow: "THE HARD CODING RULES",
      heading: "THREE NON-NEGOTIABLE ATTRIBUTES OF DIGITAL BRUTALISM",
      description:
        "DECONSTRUCTING THE RAW CSS RULES AND STRUCTURAL CONSTRAINTS DRIVING THIS VIEWPORT.",
      categoryFilters: [
        "ALL SYSTEM SPECS",
        "BORDER MECHANICS",
        "TYPOGRAPHY",
        "COLOR GAMUT",
      ],
      items: [
        {
          id: "rule-hard-shadows",
          badge: "RULE 01 // DEPTH",
          title: "HARD PIXEL OFFSETS (ZERO BLUR)",
          subtitle: "Rejecting Gaussian blur algorithms.",
          description:
            "Modern cards use soft ambient shadows (rgba(0,0,0,0.08) with 20px blur). Brutalism uses solid black 4px to 8px hard offset blocks that mimic physical cut paper.",
          tags: ["box-shadow: 6px 6px 0 #000", "Zero Ambient", "High Contrast"],
          specs: [
            { name: "BLUR RADIUS", detail: "0px (Mandatory)" },
            { name: "OFFSET", detail: "4px to 8px X/Y" },
            { name: "OPACITY", detail: "100% Solid (#000)" },
          ],
          image: {
            src: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
            alt: "Diagram illustrating hard drop shadow mechanics without blur",
          },
        },
        {
          id: "rule-monospace-monopoly",
          badge: "RULE 02 // TYPE",
          title: "MONOSPACED INDUSTRIAL HIERARCHY",
          subtitle: "Every character occupies identical width.",
          description:
            "By forcing headlines and bodies into monospaced fonts (Space Mono / Courier), the text layout immediately feels programmatic, anti-marketing, and austere.",
          tags: ["Fixed Width", "Machine Readout", "Uppercase Dominance"],
          specs: [
            { name: "FONT FAMILY", detail: "Space Mono / Courier" },
            { name: "LETTER SPACING", detail: "-0.02em to +0.05em" },
            { name: "TRANSFORM", detail: "text-transform: uppercase" },
          ],
          image: {
            src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
            alt: "Specimen card of brutalist monospaced typography glyphs",
          },
        },
        {
          id: "rule-acid-palette",
          badge: "RULE 03 // COLOR",
          title: "ACID WARNING GAMUTS",
          subtitle: "Pairing pure stark monochrome with hazardous neons.",
          description:
            "Brutalist interfaces thrive on high-voltage accent strikes: hazardous safety yellow (#FFE600), terminal green (#00FF66), or hot neon magenta over stark white and pure black.",
          tags: ["Hazard Yellow", "Pure Hex #000000", "Warning Tones"],
          specs: [
            { name: "CANVAS", detail: "#FFFFFF or #000000" },
            { name: "BORDER COLOR", detail: "#000000 Solid" },
            { name: "ACCENT HIT", detail: "#FFE600 (Hazard Yellow)" },
          ],
          image: {
            src: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=800&q=80",
            alt: "Color swatches featuring safety yellow, pure black, and harsh paper white",
          },
        },
      ],
    },
    vibe: {
      eyebrow: "MOTION & INTERACTION",
      heading: "MECHANICAL DECELERATION & STEP MOTIONS",
      description:
        "HOW AN ANTI-POLISH SYSTEM HANDLES MOUSE CLICKS, HOVERS, AND TRANSITIONS.",
      cards: [
        {
          id: "brutal-motion-1",
          title: "ZERO SMOOTH FADES",
          quoteOrRule:
            "FORGET 300MS EASE-IN-OUT OPACITY FADES. BRUTALIST BUTTONS SWITCH STATES INSTANTLY (0MS DURATION) OR USE STEPPED TICKS (steps(4)).",
          authorOrStandard: "INTERACTION LAW",
          badge: "STATE BEHAVIOR",
          ratingOrPriority: "MANDATORY",
        },
        {
          id: "brutal-motion-2",
          title: "INVERT-ON-HOVER",
          quoteOrRule:
            "THE CLASSIC BRUTALIST MICRO-INTERACTION: ON MOUSEENTER, FLIP BLACK BACKGROUND TO WHITE AND WHITE TEXT TO BLACK IN ONE FRAME.",
          authorOrStandard: "VISUAL SIGNIFIER",
          badge: "HOVER MECHANIC",
          ratingOrPriority: "HIGH PRIORITY",
        },
        {
          id: "brutal-motion-3",
          title: "TRANSLATE-AND-PRESS",
          quoteOrRule:
            "WHEN CLICKED, THE BUTTON MOVES 4PX DOWN AND 4PX RIGHT WHILE REMOVING ITS 4PX DROP-SHADOW, MIMICKING A HEAVY MECHANICAL PLUNGER.",
          authorOrStandard: "TACTILE PHYSICS",
          badge: "BUTTON MECHANIC",
          ratingOrPriority: "TACTILE STANDARD",
        },
      ],
      bannerHeading: "POLISH IS OFTEN JUST AN EXCUSE TO CHARGE MORE.",
      bannerBody:
        "Brutalism reminds us that content is the interface. If your typography, hierarchy, and raw information architecture are broken, no amount of rounded corners and floating blurs will fix it.",
      bannerBadge: "PEDAGOGICAL CORE",
      textureOrMoodImage: {
        src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
        alt: "Abstract photocopy distortion showing extreme mechanical noise and visual grit",
      },
    },
    takeaways: {
      eyebrow: "THE DESIGNER'S CHEAT SHEET",
      heading: "WHEN TO USE BRUTALISM (AND WHEN TO FLEE)",
      description:
        "BRUTALISM IS A WEAPON OF HIGH IDENTITY. DEPLOY IT ONLY WHERE ITS HARSHNESS ADDS VALUE.",
      steps: [
        {
          stepNumber: "01",
          title: "IDEAL USE CASES",
          summary:
            "UNDERGROUND MUSIC VENUES, FASHION LOOKBOOKS, ARCHITECTURE STUDIOS, WEB3 TOOLING.",
          guidanceText:
            "Thrives when the brand represents counter-culture, rebellion, or raw technical prowess.",
        },
        {
          stepNumber: "02",
          title: "DANGEROUS MISTAKES",
          summary:
            "HOSPITAL PATIENT PORTALS, TAX FILING SOFTWARE, ENTERPRISE RETIREMENT ACCOUNTS.",
          guidanceText:
            "Users who are anxious, elderly, or seeking reassurance will interpret brutalism as broken code.",
        },
        {
          stepNumber: "03",
          title: "ACCESSIBILITY TRAP",
          summary: "NEVER SACRIFICE READABILITY FOR AESTHETIC PUNISHMENT.",
          guidanceText:
            "Keep font sizes large and color contrast ratios exceeding WCAG AAA (minimum 7:1).",
        },
      ],
      ctaHeadline: "DECONSTRUCT THE LIVE VENUE INTERFACE?",
      ctaBody:
        "TOGGLE THE HUD SWITCH ABOVE TO SEE HOW THESE BRUTALIST MECHANICS APPLY TO THE SAN DIEGO DIVE BAR.",
      ctaPrimaryButton: {
        label: "SWITCH TO LIVE DIVE BAR",
        url: "?view=live",
        icon: "lucide:refresh-cw",
      },
      ctaSecondaryButton: {
        label: "RETURN TO MOVEMENT ARCHIVE",
        url: "/#styles-index",
        icon: "lucide:arrow-left",
      },
      guaranteeOrColophonNote:
        "CURATED BY THE DESIGN TUTOR • BRUTALIST DISSECTION SERIES",
      closingImage: {
        src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
        alt: "Photocopied barcode and technical serial number stamp",
      },
    },
  },
};
