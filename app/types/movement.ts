// types/movement.ts

export type ViewMode = "edu" | "live";

// ============================================================================
// REUSABLE PRIMITIVES
// ============================================================================
export interface ActionLink {
  label: string;
  url?: string;
  icon?: string;
}

export interface MetricHighlight {
  numberOrStat: string; // e.g. "100%", "1953", "0g"
  label: string; // e.g. "Plant-Based", "Origins", "Refined Sugar"
  caption?: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
}

// ============================================================================
// 1. THE CLIENT BRIEF (Guiding star for research & build)
// ============================================================================
export interface ClientBrief {
  clientName: string;
  industry: string;
  location: string;
  targetAudience: string;
  aestheticGoal: string;
  brandTone: string[];
  providedAssets: string[]; // e.g. ["Photo pack", "Typography guidelines"]
  coreChallenge: string;
  deliverables: string[];
}

// ============================================================================
// 2. BEAT 1: HERO SECTION (Images 1 & 2)
// ============================================================================
export interface HeroSectionData {
  eyebrow: string;
  titlePart1: string; // Primary big word/hook
  titlePart2: string;
  titlePart3?: string;
  subtitle: string;
  tagline: string;
  primaryButton: ActionLink;
  secondaryButton?: ActionLink;
  pillTags: string[]; // Quick badges floating or stacked
  statusText: string; // e.g. "Open Daily in Kanazawa" / "Living Index"
  mainImage: ImageAsset; // Image #1: Main hero focal image
  secondaryImage?: ImageAsset; // Image #2: Supporting cutout, texture, or badge
}

// ============================================================================
// 3. BEAT 2: NARRATIVE & ORIGINS (Images 3 & 4)
// ============================================================================
export interface NarrativeSectionData {
  eyebrow: string;
  heading: string;
  leadParagraph: string;
  bodyParagraphs: string[];
  pullQuote?: {
    quote: string;
    author: string;
    role?: string;
  };
  metrics: MetricHighlight[];
  featureList: {
    title: string;
    description: string;
  }[];
  portraitOrAtmosphereImage: ImageAsset; // Image #3: Bakery atmosphere or Era founder
  accentDetailImage?: ImageAsset; // Image #4: Ingredient macro or Book cover
}

// ============================================================================
// 4. BEAT 3: SHOWCASE CATALOG & VISUAL RULES (Images 5, 6, 7, 8)
// ============================================================================
export interface ShowcaseItem {
  id: string;
  badge: string; // e.g. "Seasonal" / "Rule 01: The Grid"
  title: string;
  subtitle: string;
  description: string;
  tags: string[]; // e.g. ["Matcha", "Local"] or ["Type", "Whitespace"]
  specs: {
    name: string;
    detail: string;
  }[];
  image: ImageAsset; // Dedicated image for this card
}

export interface ShowcaseSectionData {
  eyebrow: string;
  heading: string;
  description: string;
  categoryFilters: string[]; // Filter pills at the top of the grid
  items: ShowcaseItem[]; // Typically 3 to 4 items (Images #5, #6, #7, #8)
}

// ============================================================================
// 5. BEAT 4: VIBE, MOVEMENT & REVIEWS (Image 9)
// ============================================================================
export interface ReviewOrPrincipleCard {
  id: string;
  title: string;
  quoteOrRule: string;
  authorOrStandard: string; // e.g. "Kenji S. // Kanazawa" or "Emil Ruder"
  badge: string; // e.g. "Verified Taste" or "Non-Negotiable"
  ratingOrPriority?: string; // e.g. "5/5" or "P1"
}

export interface VibeSectionData {
  eyebrow: string;
  heading: string;
  description: string;
  cards: ReviewOrPrincipleCard[]; // 3 social proof or motion principle cards
  bannerHeading: string;
  bannerBody: string;
  bannerBadge: string;
  textureOrMoodImage?: ImageAsset; // Image #9: Wide moody banner or wireframe
}

// ============================================================================
// 6. BEAT 5: TAKEAWAYS, CHEAT SHEET & CTA (Image 10)
// ============================================================================
export interface TakeawayStep {
  stepNumber: string; // e.g. "01", "02", "03"
  title: string;
  summary: string;
  guidanceText: string; // Instructions or "Do this / Avoid that"
}

export interface TakeawaysSectionData {
  eyebrow: string;
  heading: string;
  description: string;
  steps: TakeawayStep[];
  ctaHeadline: string;
  ctaBody: string;
  ctaPrimaryButton: ActionLink;
  ctaSecondaryButton?: ActionLink;
  guaranteeOrColophonNote: string;
  closingImage?: ImageAsset; // Image #10: Final packshot or editorial seal
}

// ============================================================================
// COMPLETE 5-BEAT MOVEMENT CONTAINER
// ============================================================================
export interface MovementSections {
  hero: HeroSectionData;
  narrative: NarrativeSectionData;
  showcase: ShowcaseSectionData;
  vibe: VibeSectionData;
  takeaways: TakeawaysSectionData;
}

export interface MovementDefinition {
  id: string; // e.g. "minimalism"
  slug: string; // e.g. "minimalism"
  title: string; // e.g. "Japanese Minimalism / Ma (間)"
  era: string; // e.g. "Traditional — Digital Modernism"
  brief: ClientBrief;
  educational: MovementSections;
  live: MovementSections;
}
