// types/movement.ts

// =============================================================================
// 00. VIEW MODE & GLOBAL PRIMITIVES
// =============================================================================

export type ViewMode = "edu" | "live";

export interface ActionLink {
  label: string;
  href?: string; // External link or tel/mailto
  targetId?: string; // Internal element anchor (e.g., "#section02")
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  isExternal?: boolean;
}

export interface MediaAsset {
  src?: string;
  alt: string;
  caption?: string;
  badge?: string;
  aspectRatio?: "16:9" | "4:3" | "1:1" | "3:4" | "21:9" | "auto";
  focalPoint?: string; // e.g., "center center", "top right"
}

export interface MetricItem {
  value: string; // e.g., "18", "450°F", "6.5 : 1", "98%"
  label: string; // e.g., "Counter Seats", "Scale Ratio"
  unit?: string; // e.g., "seats", "deg", "ratio"
  description?: string; // Supporting sentence explaining the metric
}

export interface TaggedItem {
  id?: string;
  tag?: string; // Category or state: e.g., "DAILY", "RULE 01"
  label: string;
  description?: string;
  meta?: string; // Supporting micro-data: timestamp, author, etc.
}

// =============================================================================
// 01. PHASE 01: CLIENT INTAKE & BRIEF
// =============================================================================

export interface ClientBrief {
  clientName: string;
  industry: string;
  location: string;
  targetAudience: string;
  aestheticGoal: string;
  brandTone: string[];
  providedAssets: string[];
  coreChallenge: string;
  deliverables: string[];
}

// =============================================================================
// 02. STRUCTURAL CONTENT SLOTS (THE 6-PART LIVING ANATOMY)
// =============================================================================

// --- Slot 00: Global Navbar ---
export interface NavAnchorItem {
  label: string;
  targetId: string; // e.g., "#hero", "#section02", "#section03"
  indexNumber?: string; // e.g., "01", "02", "MENU", "CONCEPT"
  badge?: string; // e.g., "NEW", "LIVE", "HOT"
}

export interface NavbarContent {
  brandMark: string; // Trade name or stamped logo text
  subBrandMark?: string; // Secondary descriptor or coordinates
  statusBadge: string; // Live: "DOORS 18:00 - 02:00" | Edu: "SPEC-003 // VERIFIED"
  navItems: NavAnchorItem[]; // Dynamic anchor links
  ctaAction?: ActionLink; // Quick primary action button
}

// --- Slot 01: Tier 1 Hero ---
export interface HeroSectionContent {
  eyebrow?: string; // Category / movement eyebrow
  title: string; // Main display headline
  titleItalic?: string; // High-contrast italic or accented word
  titleSecondary?: string; // Second line / kicker phrase
  subtitle: string; // Lead paragraph or thesis statement
  leadParagraph?: string; // Optional long-form explanatory copy
  statusBadge?: string; // Ticker or status pill
  tags?: string[]; // Category or diagnosis tags
  primaryAction: ActionLink;
  secondaryAction?: ActionLink;
  media?: MediaAsset;
  liveStats?: MetricItem[]; // Real-time counter metrics or diagnostics
}

// --- Slot 02: Tier 2 Section 02 (The Story, Core Values & Social Dispatches) ---
export interface CoreValueItem {
  index: string; // "01", "02", "03"
  label: string; // "DISCIPLINE", "TYPOGRAPHY", etc.
  title: string;
  description: string;
}

export interface SocialChannelItem {
  platform: string; // "Instagram", "Spotify", "Substack"
  handle: string; // "@foundrypizzabar"
  label: string; // "DAILY ROTATIONS & BAKE DISPATCHES"
  url: string;
}

export interface Section02Content {
  sectionNumber: string; // e.g., "05" or "01"
  sectionAnchorId: string; // e.g., "section02"
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  // Refactored properties (Foundry Story & Noir Anatomy)
  storyParagraphs?: string[];
  coreValues?: CoreValueItem[];
  socialChannels?: SocialChannelItem[];
  closingManifesto?: string;
  media?: MediaAsset;
  // Optional legacy properties preserved for backward compatibility
  paragraphs?: string[];
  featurePillars?: TaggedItem[];
  pullquote?: {
    text: string;
    attribution: string;
    role?: string;
  };
  metrics?: MetricItem[];
  closingNote?: string;
}

// --- Slot 03: Tier 3 Section 03 (Product Grid & Decision Matrix) ---
export interface SpecItem {
  label: string;
  value: string;
}

export interface ShowcaseCard {
  id: string;
  badge?: string; // "DAILY ROTATION" | "HIGH AFFINITY" | "AVOID"
  title: string;
  subtitle?: string;
  category?: string;
  description: string;
  specs?: SpecItem[]; // Fermentation, pairings, or cognitive risk factors
  priceOrMetric?: string; // "¥850" or "AFFINITY: 98%"
  action?: ActionLink;
  media?: MediaAsset;
  tags?: string[];
}

export interface Section03Content {
  sectionNumber: string; // e.g., "02"
  sectionAnchorId: string; // e.g., "section03"
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  leadCopy?: string;
  cards: ShowcaseCard[]; // 4-card grid
  footerNote?: string;
  globalAction?: ActionLink;
}

// --- Slot 04: Tier 4 Section 04 (Sound & Vibe / Room Atmosphere) ---
export interface VibePillarItem {
  index: string; // "01", "02", "03"
  label: string; // "AUDIO HARDWARE", "TYPOGRAPHIC ORIGIN"
  title: string;
  description: string;
}

export interface PrimaryListItem {
  index: string; // "01", "1788", "TRACK 01"
  title: string;
  secondaryTitle?: string;
  description: string;
  tag?: string;
  media?: MediaAsset;
  link?: ActionLink;
}

export interface SecondaryListItem {
  title: string;
  body: string;
  authorOrMeta?: string;
  badge?: string;
}

export interface Section04Content {
  sectionNumber: string; // e.g., "03"
  sectionAnchorId: string; // e.g., "section04"
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  // Refactored properties (Sound & Room Vibe layout)
  leadCopy?: string;
  vibePillars?: VibePillarItem[];
  footerNote?: string;
  media?: MediaAsset;
  // Optional legacy stream properties preserved for backward compatibility
  primaryStreamTitle?: string;
  primaryStreamSubtitle?: string;
  primaryItems?: PrimaryListItem[];
  secondaryStreamTitle?: string;
  secondaryStreamSubtitle?: string;
  secondaryItems?: SecondaryListItem[];
}

// --- Slot 05: Tier 5 Section 05 (Action Protocol & Implementation Cheat Sheet) ---
export interface StepProtocolItem {
  stepNumber: string; // "#01", "#02", "#03"
  title: string;
  directive: string; // The immediate instruction or rule
  details?: string; // Supporting guidance, edge cases, or code hints
  tag?: string;
}

export interface TerminalBlock {
  eyebrow: string; // "LIVE COORDINATES & STATUS" | "CSS TOKENS & SPECS"
  headline: string;
  subheadline?: string;
  codeLines: string[]; // Address, schedule, tokens, or configuration strings
  action?: ActionLink;
  statusIndicator?: {
    label: string;
    isActive: boolean;
  };
}

export interface Section05Content {
  sectionNumber: string; // e.g., "04"
  sectionAnchorId: string; // e.g., "section05"
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  steps: StepProtocolItem[]; // Step-by-step boxed rules
  terminal: TerminalBlock; // Terminal card / Map / Spec box
  alertBanner?: {
    level: "info" | "warning" | "highlight";
    message: string;
  };
}

// --- Slot 06: Bottom Tier Footer ---
export interface ResourceLink {
  label: string;
  url: string;
  tag?: string; // "SPECIMEN", "ARCHIVE", "EXTERNAL", "MAP"
  description?: string;
}

export interface FooterContent {
  brandColophon: string; // "FOUNDRY PIZZA BAR © 2026 // KATAMACHI"
  legalNotice?: string;
  operationalDetails?: string[]; // Operating days, hours, contact strings
  resourceLinks?: ResourceLink[]; // "In the Wild" real-world references
  secondaryLinks?: ActionLink[]; // Standard privacy, terms, colophon links
}

// =============================================================================
// 03. COMPLETE SECTION COMPOSITION
// =============================================================================

export interface MovementSections {
  navbar: NavbarContent;
  hero: HeroSectionContent;
  section02: Section02Content;
  section03: Section03Content;
  section04: Section04Content;
  section05: Section05Content;
  footer: FooterContent;
}

// =============================================================================
// 04. ROOT MOVEMENT DEFINITION (CATALOG & ROUTING)
// =============================================================================

export interface SectionDesignRationale {
  slot:
    | "navbar"
    | "hero"
    | "section02"
    | "section03"
    | "section04"
    | "section05"
    | "footer";
  intent: string;
  keyDecisions: string[];
  pitfallToAvoid: string;
}

export interface CaseStudyRationale {
  businessGoal: string;
  targetUserMindset: string;
  competitorComparison: {
    standardIndustryNorms: string;
    ourStrategicChoice: string;
  };
  sectionRationales: SectionDesignRationale[];
  industrySources: {
    source: string;
    insight: string;
  }[];
}

export interface MovementDefinition {
  id: string; // Unique ID: "editorial-noir-foundry"
  slug: string; // Route param: "editorial-noir"
  title: string; // Display name: "Downtown Editorial Noir"
  subtitle?: string; // Secondary descriptor
  category: string; // Catalog filter tag: "Editorial", "Brutalism", etc.
  tags: string[]; // Search keywords: ["New York", "Didone", "Late-Night"]
  era: string; // Historical lineage: "Late 1970s Soho — 1990s Indie Print"
  summary: string; // Catalog card pitch (1-2 sentences)
  brief: ClientBrief; // Phase 01: Client intake dossier data
  live: MovementSections; // Phase 02: Live commercial landing page content
  educational: MovementSections; // Phase 03: Educational in-situ curriculum content
  caseStudy?: CaseStudyRationale; // Phase 04: Designer's UX & strategic rationale (optional)
}
