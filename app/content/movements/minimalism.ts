// content/movements/minimalism.ts
import type { MovementDefinition } from "~/types/movement";

export const minimalismMovement: MovementDefinition = {
  id: "minimalism-ishikawa",
  slug: "minimalism",
  title: "Japanese Minimalism & Spatial Ma (間)",
  era: "Traditional Zen — Contemporary Digital Editorial",
  brief: {
    clientName: "Komorebi Bakehouse (木漏れ日)",
    industry: "Artisanal Plant-Based Confections",
    location: "Hakusan / Kanazawa, Ishikawa Prefecture",
    targetAudience:
      "Mindful epicures, specialty tea houses, and design-conscious gift shoppers.",
    aestheticGoal:
      "A tranquil, high-contrast, text-led visual identity that emphasizes quiet restraint and natural texture.",
    brandTone: ["Quietly Confident", "Organic", "Monastic", "Textural"],
    providedAssets: [
      "Macro photography of raw ingredients",
      "Studio shots of ceramics and cookie textures",
      "Vector seal logo (Hanko mark)",
    ],
    coreChallenge:
      "Communicating the luxury and craft of vegan confections without relying on loud marketing cliches, vibrant saturation, or crowded e-commerce banners.",
    deliverables: [
      "Hero brand hook with seasonal release status",
      "Origin narrative highlighting Ishikawa-sourced rice flour and tea",
      "Three-item signature cookie catalog with tasting notes",
      "Customer sensory reviews and philosophy callout",
      "Order instructions and batch reservation CTA",
    ],
  },
  live: {
    hero: {
      eyebrow: "Artisanal Vegan Confections // Ishikawa, Japan",
      titlePart1: "QUIET",
      titlePart2: "INDULGENCE.",
      titlePart3: "ROOTED.",
      subtitle: "Handcrafted in the foothills of Mount Haku.",
      tagline:
        "Stone-ground local flours, Uji ceremonial matcha, and wild kokuto sugar, baked with monastic precision.",
      primaryButton: {
        label: "Reserve Autumn Batch",
        url: "#catalog",
        icon: "lucide:arrow-down-right",
      },
      secondaryButton: {
        label: "Our Bakery Philosophy",
        url: "#story",
        icon: "lucide:book-open",
      },
      pillTags: [
        "100% Plant-Based",
        "Ishikawa Grown",
        "Zero Refined Sugars",
        "Seasonal Batches",
      ],
      statusText: "Baking Fresh // Orders Open For November Batch",
      mainImage: {
        src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1200&q=80",
        alt: "Studio capture of dark sesame and matcha shortbread cookies on textured ceramic",
        caption:
          "Batch No. 04: Roasted sesame sablés resting on local Kanazawa stoneware.",
      },
      secondaryImage: {
        src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
        alt: "Ceremonial grade matcha powder dusted over a wooden work table",
      },
    },
    narrative: {
      eyebrow: "Origins & Craft",
      heading: "We do not rush what nature spent seasons cultivating.",
      leadParagraph:
        "Founded along the Tedori river basin, Komorebi was born from a singular question: can a confection achieve deep, unforgettable luxury without dairy, egg, or industrial stabilizers?",
      bodyParagraphs: [
        "Our answer lies in Ishikawa's agrarian pantry. We source heirloom rice flour milled by fourth-generation farmers, cold-pressed rapeseed oil from Noto, and rich mineral sugars harvested from sub-tropical cane.",
        "Every batch is mixed by hand in small, forty-piece quantities. We listen to the ambient humidity descending from Mount Haku, adjusting bake times by seconds to preserve delicate aroma profiles.",
      ],
      pullQuote: {
        quote:
          "True luxury is not what is added on top, but what remains when all excess has been stripped away.",
        author: "Kenji Sato",
        role: "Head Baker & Co-Founder",
      },
      metrics: [
        {
          numberOrStat: "100%",
          label: "Plant-Based",
          caption: "Certified cruelty-free and vegan",
        },
        {
          numberOrStat: "0g",
          label: "Refined Sugar",
          caption: "Sweetened purely with Kokuto & dates",
        },
        {
          numberOrStat: "40",
          label: "Piece Batches",
          caption: "Strict small-batch daily yield",
        },
      ],
      featureList: [
        {
          title: "Heirloom Ishikawa Flours",
          description:
            "Stone-milled rice and soba grains delivering a dense, buttery crumb without dairy.",
        },
        {
          title: "Ceremonial Uji Harvest",
          description:
            "Spring-harvested matcha leaves giving a deep umami undertone and vibrant natural hue.",
        },
        {
          title: "Compostable Washi Packaging",
          description:
            "Each package is hand-bound with mulberry paper and sealed with natural pine wax.",
        },
      ],
      portraitOrAtmosphereImage: {
        src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80",
        alt: "Baker shaping dough on a raw cypress counter in morning light",
        caption: "Morning prep in our Hakusan workshop.",
      },
      accentDetailImage: {
        src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        alt: "Detail of raw botanical ingredients and sea salt flakes",
      },
    },
    showcase: {
      eyebrow: "Seasonal Collection",
      heading: "Three expressions of botanical balance.",
      description:
        "Our core autumn selection. Formulated to be paired with light-roast hojicha or pour-over coffee.",
      categoryFilters: [
        "All Selections",
        "Matcha Infusions",
        "Toasted Grains",
        "Single-Origin Cacao",
      ],
      items: [
        {
          id: "cookie-uji-matcha",
          badge: "Signature Reserve",
          title: "Ceremonial Matcha & Coconut Sablé",
          subtitle: "Earthy, velvety, balanced bitterness.",
          description:
            "A melt-in-mouth sablé pairing first-flush Kyoto green tea with raw cold-pressed coconut fats and a pinch of Noto sea salt.",
          tags: ["Organic Matcha", "Gluten-Free", "Low GI"],
          specs: [
            { name: "Flour", detail: "Kaga Rice Flour" },
            { name: "Sweetener", detail: "Organic Kokuto" },
            { name: "Weight", detail: "45g per piece" },
          ],
          image: {
            src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            alt: "Square matcha shortbread on dark slate",
          },
        },
        {
          id: "cookie-kurogoma",
          badge: "Staff Favorite",
          title: "Roasted Black Sesame Crisp",
          subtitle: "Smoky, nutty, deeply aromatic.",
          description:
            "Slow-toasted black sesame paste folded into buckwheat flour and sweetened lightly with brown rice syrup.",
          tags: ["Noto Sesame", "High Mineral", "Nut-Free"],
          specs: [
            { name: "Flour", detail: "Noto Buckwheat" },
            { name: "Sweetener", detail: "Brown Rice Malt" },
            { name: "Weight", detail: "40g per piece" },
          ],
          image: {
            src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
            alt: "Charcoal-toned sesame biscuit with cracked crust",
          },
        },
        {
          id: "cookie-yuzu-almond",
          badge: "Seasonal Harvest",
          title: "Candied Yuzu & Roasted Almond",
          subtitle: "Citrus warmth with a crunchy crumb.",
          description:
            "Wild winter yuzu peel candied slowly over three days, tossed through coarsely crushed Sicilian almonds.",
          tags: ["Wild Citrus", "Rich Texture", "Antioxidant"],
          specs: [
            { name: "Flour", detail: "Almond & White Rice" },
            { name: "Sweetener", detail: "Noto Blossom Honey (Vegan)" },
            { name: "Weight", detail: "42g per piece" },
          ],
          image: {
            src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
            alt: "Golden almond cookie studded with bright citrus zest",
          },
        },
      ],
    },
    vibe: {
      eyebrow: "Sensory Impressions",
      heading: "Shared moments over hot cups.",
      description:
        "How our confections fit into daily rituals of pause and contemplation.",
      cards: [
        {
          id: "review-1",
          title: "Unrivaled crumb density",
          quoteOrRule:
            "Most vegan cookies rely on oils that feel synthetic. Komorebi's sesame crisp tastes like it was baked in a Kyoto monastery three hundred years ago.",
          authorOrStandard: "Emi Yamazaki",
          badge: "Tea Sommelier // Kanazawa",
          ratingOrPriority: "5/5 Stars",
        },
        {
          id: "review-2",
          title: "Restraint as a flavor",
          quoteOrRule:
            "The matcha sablé does not hide behind sweetness. The astringency and salinity hit first, followed by a lingering floral warmth. Remarkable work.",
          authorOrStandard: "Marcus Thorne",
          badge: "Food & Travel Journalist",
          ratingOrPriority: "5/5 Stars",
        },
        {
          id: "review-3",
          title: "Packaging is a sacred ceremony",
          quoteOrRule:
            "Unboxing the washi wrapper is as rewarding as the first bite. You can feel the intention and quiet respect in every single detail.",
          authorOrStandard: "Sora Takahashi",
          badge: "Ceramicist & Collector",
          ratingOrPriority: "5/5 Stars",
        },
      ],
      bannerHeading: "Baked for the ritual of stillness.",
      bannerBody:
        "We intentionally limit production to 200 boxes per month to preserve our relationship with local growers and maintain hand-crafted integrity.",
      bannerBadge: "Small-Batch Allocation",
      textureOrMoodImage: {
        src: "https://images.unsplash.com/photo-1517840905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
        alt: "Minimalist Japanese tea ceremony room with tatami mats and single window light",
      },
    },
    takeaways: {
      eyebrow: "Allocations & Dispatch",
      heading: "How to secure your box.",
      description:
        "Because our confections contain zero chemical preservatives, shipments are dispatched immediately after cooling.",
      steps: [
        {
          stepNumber: "01",
          title: "Select Your Curated Assortment",
          summary:
            "Choose between our 6-piece Discovery Box or 12-piece Heritage Tasting Box.",
          guidanceText:
            "Each box contains an even rotation of all three seasonal recipes.",
        },
        {
          stepNumber: "02",
          title: "Bake Date Confirmation",
          summary:
            "Batches are baked exclusively on Tuesday and Friday mornings.",
          guidanceText:
            "You will receive an automated email detailing when your batch was pulled from the oven.",
        },
        {
          stepNumber: "03",
          title: "Eco-Insulated Express Courier",
          summary: "Delivered within 24 hours of baking across Honshu.",
          guidanceText:
            "Keep in a cool, shaded environment and enjoy within 14 days of receipt.",
        },
      ],
      ctaHeadline: "Experience confections stripped of noise.",
      ctaBody:
        "Next batch dispatches this Friday. Limited boxes remain for current cycle.",
      ctaPrimaryButton: {
        label: "Secure Your Batch Box",
        url: "#reserve",
        icon: "lucide:shopping-bag",
      },
      ctaSecondaryButton: {
        label: "Corporate & Event Gifting",
        url: "mailto:hello@komorebi-bakes.jp",
        icon: "lucide:mail",
      },
      guaranteeOrColophonNote:
        "Handcrafted in Hakusan, Ishikawa. Dispatched across Japan.",
      closingImage: {
        src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
        alt: "Sealed washi package resting on tatami",
      },
    },
  },
  educational: {
    hero: {
      eyebrow: "Movement Analysis // Deconstruction 01",
      titlePart1: "SPACE",
      titlePart2: "AS FORCE.",
      titlePart3: "MA (間).",
      subtitle: "Why Japanese minimalism is subtraction, not emptiness.",
      tagline:
        "Examining how radical negative space, muted natural palettes, and deliberate typographic friction establish quiet authority.",
      primaryButton: {
        label: "Analyze Visual Rules",
        url: "#catalog",
        icon: "lucide:arrow-down-right",
      },
      secondaryButton: {
        label: "Read The Historical Brief",
        url: "#story",
        icon: "lucide:file-text",
      },
      pillTags: [
        "Spatial Ma (間)",
        "Asymmetry",
        "Monochrome Dominance",
        "Micro-Typography",
      ],
      statusText: "Curriculum Live // Lesson 01 Active",
      mainImage: {
        src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1200&q=80",
        alt: "Studio capture illustrating radical compositional negative space",
        caption:
          "Notice how 75% of the frame is unadorned surface, focusing total visual weight onto the subject.",
      },
      secondaryImage: {
        src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
        alt: "High-contrast architectural line detail",
      },
    },
    narrative: {
      eyebrow: "Aesthetic Foundations",
      heading: "Emptiness is not the absence of design; it is the subject.",
      leadParagraph:
        "In Western digital design, empty space is often treated as leftover padding — the margin between cards or buttons. In Japanese aesthetic tradition, space (Ma, 間) is an active, structural participant that gives objects their meaning.",
      bodyParagraphs: [
        "Originating from Zen philosophy and formalized through architectural sukiya-zukuri principles, minimalism rejects decorative ornament to expose structural honesty. In web design, this translates to stripping shadows, gradients, rounded borders, and noisy iconography.",
        "When you remove 90% of decorative visual crutches, the 10% that remains — letter-spacing, line-height, typographic hierarchy, and photograph quality — must be mathematically flawless. There is nowhere to hide poor fundamentals.",
      ],
      pullQuote: {
        quote:
          "Simplicity is not a goal. It is the byproduct of having nothing left to take away.",
        author: "Kenya Hara",
        role: "Graphic Designer & Art Director, Muji",
      },
      metrics: [
        {
          numberOrStat: "80%",
          label: "Negative Space",
          caption: "Minimum canvas ratio reserved for void",
        },
        {
          numberOrStat: "2 Max",
          label: "Type Families",
          caption: "Strict restraint: 1 Editorial Serif, 1 Clean Sans",
        },
        {
          numberOrStat: "0px",
          label: "Box Shadows",
          caption: "Depth generated through typography scale, not blur",
        },
      ],
      featureList: [
        {
          title: "The Law of Active Restraint",
          description:
            "Every element must defend its right to occupy pixels. If it does not advance meaning, delete it.",
        },
        {
          title: "Asymmetric Balance",
          description:
            "Centering everything feels static. Pushing content off-center creates dynamic visual gravity.",
        },
        {
          title: "Tactile Organic Monochromes",
          description:
            "Avoiding pure pitch black (#000000). Using charcoal, warm off-whites, and earthen neutrals.",
        },
      ],
      portraitOrAtmosphereImage: {
        src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80",
        alt: "Architectural frame illustrating natural directional light and timber textures",
        caption:
          "Light and shadow acting as structural UI borders instead of CSS 1px dividers.",
      },
      accentDetailImage: {
        src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        alt: "Japanese typography character breakdown",
      },
    },
    showcase: {
      eyebrow: "The Visual Rules",
      heading: "Three non-negotiable principles of this aesthetic.",
      description:
        "Deconstructing the layout, typography, and contrast rules that govern this landing page.",
      categoryFilters: [
        "All Guidelines",
        "Spatial Rules",
        "Type Mechanics",
        "Color & Contrast",
      ],
      items: [
        {
          id: "rule-asymmetric-grid",
          badge: "Rule 01 // Layout",
          title: "Asymmetric Structural Grids",
          subtitle: "Balance without geometric symmetry.",
          description:
            "Instead of standard 3-column equal boxes, Japanese minimalism uses unequal weights. A massive title on the left is counter-balanced by a tiny, high-contrast caption pinned to the opposite margin.",
          tags: ["Grid Hierarchy", "Visual Tension", "Margin Discipline"],
          specs: [
            { name: "Columns", detail: "12-Col Unequal Split" },
            { name: "Margins", detail: "Minimum 48px Desktop" },
            { name: "Alignment", detail: "Strict Flush-Left" },
          ],
          image: {
            src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            alt: "Grid deconstruction diagram showing negative space margins",
          },
        },
        {
          id: "rule-micro-typography",
          badge: "Rule 02 // Typography",
          title: "Extreme Scale Contrast",
          subtitle: "Pairing giant headlines with micro-captions.",
          description:
            "Avoid gradual font scale stepping (like h1=32px, h2=28px, h3=24px). Jump directly from a massive 72px display headline down to a delicate 12px tracked uppercase label. The tension between large and small creates elegance.",
          tags: ["High Contrast", "Letter-Spacing", "Display Serifs"],
          specs: [
            { name: "Scale Jump", detail: "6x Ratio (72px / 12px)" },
            { name: "Tracking", detail: "+0.12em on Micro Caps" },
            { name: "Line Height", detail: "0.95 on Large Display" },
          ],
          image: {
            src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
            alt: "Typography scale specimen showing contrast jump",
          },
        },
        {
          id: "rule-tactile-neutrals",
          badge: "Rule 03 // Color",
          title: "Earthen Subdued Palettes",
          subtitle: "Zero primary colors. High contrast through values.",
          description:
            "Vibrant saturated blues and neon accents destroy tranquil focus. Minimalist UI relies on bone whites, stone grays, and deep soot charcoals, enlivened only by a single natural botanical accent.",
          tags: [
            "Muted Gamut",
            "Accessibility (AA)",
            "Charcoal vs Pitch Black",
          ],
          specs: [
            { name: "Background", detail: "Warm Chalk (#F7F6F2)" },
            { name: "Typography", detail: "Soot Charcoal (#1C1B1A)" },
            { name: "Accent", detail: "Matcha Botanical (#4A5844)" },
          ],
          image: {
            src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
            alt: "Material swatches showing earthen paper and ceramic color values",
          },
        },
      ],
    },
    vibe: {
      eyebrow: "Motion & Interaction",
      heading: "How tranquility moves in code.",
      description:
        "Animation in minimalist design must feel weighted, deliberate, and free of playful bounce.",
      cards: [
        {
          id: "motion-1",
          title: "Zero Bouncy Springs",
          quoteOrRule:
            "Never use elastic or bouncy easing curves (like easeOutBack). Minimalist UI demands linear deceleration (power2.out or cubic-bezier(0.16, 1, 0.3, 1)) that feels like heavy linen settling on a table.",
          authorOrStandard: "GSAP Timing Guideline",
          badge: "Motion Physics",
          ratingOrPriority: "Non-Negotiable",
        },
        {
          id: "motion-2",
          title: "Staggered Mask Reveals",
          quoteOrRule:
            "Images should not simply fade in like generic slideshows. Reveal imagery using slow, one-directional clip-path sweeps from top to bottom, mirroring the unrolling of a scroll.",
          authorOrStandard: "Visual Mechanics",
          badge: "Spatial Technique",
          ratingOrPriority: "High Priority",
        },
        {
          id: "motion-3",
          title: "Parallax with Extreme Friction",
          quoteOrRule:
            "Background elements should drift at barely perceptible speeds (0.1x to 0.2x scroll velocity). If a user actively notices the parallax moving, it is too fast and breaks the sense of calm.",
          authorOrStandard: "Depth Principle",
          badge: "Scroll Dynamics",
          ratingOrPriority: "Discipline Rule",
        },
      ],
      bannerHeading: "Restraint is harder than decoration.",
      bannerBody:
        "It takes 10 minutes to add drop shadows, border gradients, and floating badges to make a design look 'busy'. It takes days to balance pure typography and whitespace so that the layout feels finished without any ornament.",
      bannerBadge: "Curriculum Insight",
      textureOrMoodImage: {
        src: "https://images.unsplash.com/photo-1517840905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
        alt: "Minimalist spatial composition showing absolute balance of light and darkness",
      },
    },
    takeaways: {
      eyebrow: "The Designer's Cheat Sheet",
      heading: "When to use this style (and when to run).",
      description:
        "Minimalism is a precision tool with strict contextual limits. Here is how to know if your project fits.",
      steps: [
        {
          stepNumber: "01",
          title: "Ideal Use Cases",
          summary:
            "Luxury goods, art architecture portfolios, high-end hospitality, editorial essays.",
          guidanceText:
            "Works whenever the brand value is quiet confidence, craft, and contemplation.",
        },
        {
          stepNumber: "02",
          title: "Dangerous Pitfalls",
          summary:
            "High-density SaaS dashboards, discount e-commerce, youth-targeted social apps.",
          guidanceText:
            "Fails when users need fast multi-tasking, complex data scanning, or high-energy urgency.",
        },
        {
          stepNumber: "03",
          title: "The Golden Metric",
          summary:
            "Remove one element every day until the design breaks. Then restore that last element.",
          guidanceText:
            "If a component doesn't serve either comprehension or emotional tone, eliminate it immediately.",
        },
      ],
      ctaHeadline: "Ready to deconstruct the live implementation?",
      ctaBody:
        "Toggle the mode switch in the floating HUD above to see these exact rules applied to the live cookie storefront.",
      ctaPrimaryButton: {
        label: "Switch to Live Storefront",
        url: "?view=live",
        icon: "lucide:refresh-cw",
      },
      ctaSecondaryButton: {
        label: "Explore All Index Movements",
        url: "/#styles-index",
        icon: "lucide:arrow-left",
      },
      guaranteeOrColophonNote:
        "Curated by The Design Tutor • Open Educational Architecture",
      closingImage: {
        src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
        alt: "Editorial seal mark",
      },
    },
  },
};
