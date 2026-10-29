// types/movement.ts

// =============================================================================
// 00. VIEW MODE & GLOBAL PRIMITIVES
// =============================================================================

export type ViewMode = "edu" | "live";

export interface ActionLink {
  label: string;
  href?: string;
  targetId?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  isExternal?: boolean;
}

export interface MediaAsset {
  src?: string;
  alt: string;
  caption?: string;
  badge?: string;
  aspectRatio?: "16:9" | "4:3" | "1:1" | "3:4" | "21:9" | "auto" | string;
  focalPoint?: string;
}

export interface MetricItem {
  value: string;
  label: string;
  unit?: string;
  description?: string;
}

export interface TaggedItem {
  id?: string;
  tag?: string;
  label: string;
  description?: string;
  meta?: string;
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
// 02. STRUCTURAL CONTENT SLOTS
// =============================================================================

// --- Slot 00: Global Navbar ---
export interface NavAnchorItem {
  label: string;
  targetId: string;
  indexNumber?: string;
  badge?: string;
}

export interface NavbarContent {
  brandMark: string;
  subBrandMark?: string;
  statusBadge: string;
  navItems: NavAnchorItem[];
  ctaAction?: ActionLink;
}

// --- Slot 01: Tier 1 Hero ---
export interface HeroSectionContent {
  eyebrow?: string;
  title: string;
  titleItalic?: string;
  titleSecondary?: string;
  subtitle: string;
  leadParagraph?: string;
  statusBadge?: string;
  tags?: string[];
  primaryAction: ActionLink;
  secondaryAction?: ActionLink;
  media?: MediaAsset;
  liveStats?: MetricItem[];
}

// --- Slot 02: Tier 2 Section 02 (The Story & Socials / Curriculum Anatomy) ---
export interface CoreValueItem {
  index: string;
  label: string;
  title: string;
  description: string;
}

export interface SocialChannelItem {
  platform: string;
  handle: string;
  label: string;
  url: string;
}

export interface Section02Content {
  sectionNumber: string;
  sectionAnchorId: string;
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  leadCopy?: string;
  storyParagraphs?: string[];
  coreValues?: CoreValueItem[];
  socialChannels?: SocialChannelItem[];
  closingManifesto?: string;
  media?: MediaAsset;
  cards?: ShowcaseCard[]; // Permits SectionOne to render either section03 or section02
  footerNote?: string;
  globalAction?: ActionLink;
  // Legacy fields
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
  badge?: string;
  title: string;
  subtitle?: string;
  category?: string;
  description: string;
  specs?: SpecItem[];
  priceOrMetric?: string;
  action?: ActionLink;
  media?: MediaAsset;
  tags?: string[];
}

export interface Section03Content {
  sectionNumber: string;
  sectionAnchorId: string;
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  leadCopy?: string;
  cards: ShowcaseCard[];
  footerNote?: string;
  globalAction?: ActionLink;
}

// --- Slot 04: Tier 4 Section 04 (Sound & Vibe / Room Atmosphere) ---
export interface VibePillarItem {
  index: string;
  label: string;
  title: string;
  description: string;
}

export interface Section04Content {
  sectionNumber: string;
  sectionAnchorId: string;
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  leadCopy?: string;
  vibePillars?: VibePillarItem[];
  footerNote?: string;
  media?: MediaAsset;
  primaryStreamTitle?: string;
  primaryStreamSubtitle?: string;
  primaryItems?: any[];
  secondaryStreamTitle?: string;
  secondaryStreamSubtitle?: string;
  secondaryItems?: any[];
}

// --- Slot 05: Tier 5 Section 05 (Action Protocol & Arrival / Telemetry) ---
export interface StepProtocolItem {
  stepNumber: string;
  title: string;
  directive: string;
  details?: string;
  tag?: string;
}

export interface TerminalBlock {
  eyebrow: string;
  headline: string;
  subheadline?: string;
  codeLines: string[];
  action?: ActionLink;
  statusIndicator?: {
    label: string;
    isActive: boolean;
  };
}

export interface Section05Content {
  sectionNumber: string;
  sectionAnchorId: string;
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  steps: StepProtocolItem[];
  terminal: TerminalBlock;
  alertBanner?: {
    level: "info" | "warning" | "highlight";
    message: string;
  };
}

// --- Slot 06: Bottom Tier Footer ---
export interface ResourceLink {
  label: string;
  url: string;
  tag?: string;
  description?: string;
}

export interface FooterContent {
  brandColophon: string;
  legalNotice?: string;
  operationalDetails?: string[];
  resourceLinks?: ResourceLink[];
  secondaryLinks?: ActionLink[];
  backToTopText?: string;
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
// 04. ROOT MOVEMENT DEFINITION
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
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  tags: string[];
  era: string;
  summary: string;
  brief: ClientBrief;
  live: MovementSections;
  educational: MovementSections;
  caseStudy?: CaseStudyRationale;
}
