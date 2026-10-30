// types/movements/schema.ts

// 1. Mandatory Phase 01 Brief (Strict)
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

// 2. Movement Meta Info
export interface MovementMeta {
  id: string; // e.g. "editorial-pizza"
  title: string; // e.g. "Downtown Editorial Noir & Cast-Iron Craft"
  styleName: string; // e.g. "Editorial Noir"
  date: string;
  category: string;
  description: string;
  liveUrl?: string;
  tags?: string[];
}

// 3. Exhaustive Media / Asset Descriptor
export interface MediaAsset {
  src: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  type?: "image" | "video" | "audio";
  poster?: string;
}

// 4. Exhaustive Interactive Item / Card / Product Model
export interface UniversalItem {
  id?: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  description?: string;
  body?: string | string[];
  price?: string | number;
  badge?: string;
  status?: string; // e.g., "IN OVEN", "READY", "SOLD OUT"
  tags?: string[];
  media?: MediaAsset | string;
  metadata?: Record<string, string | number | boolean>;
  link?: {
    label?: string;
    href?: string;
    target?: string;
  };
  features?: string[];
}

// 5. Exhaustive Metric / Statistic Pill
export interface MetricItem {
  value: string; // e.g. "18:00 - 02:00", "450°F", "18 SEATS"
  label: string; // e.g. "Service Hours", "Stone Deck Heat"
  caption?: string;
}

// 6. Audio / Music Module Spec
export interface AudioModule {
  trackTitle?: string;
  artist?: string;
  album?: string;
  bpm?: string | number;
  rpm?: string; // e.g. "33⅓ RPM"
  audioSrc?: string;
  spotifyUrl?: string;
  coverArt?: string;
}

// 7. THE UNIVERSAL SECTION BLOCK
// Every single section (01 to 05, Hero, etc.) uses this exact same shape.
export interface UniversalSectionBlock {
  // Identifiers
  id: string; // e.g. "hero", "slices", "story", "sound"
  sectionNumber?: string; // e.g. "01", "02"
  label?: string; // Menu label e.g. "Pizza Slices"

  // Typographic Hierarchy
  eyebrow?: string;
  title?: string;
  titleItalic?: string; // Second-line italic display hook
  subtitle?: string;
  description?: string;
  body?: string | string[];

  // Statuses, Badges & Labels
  badge?: string;
  status?: string;
  tags?: string[];

  // Media & Visuals
  heroImage?: MediaAsset | string;
  gallery?: Array<MediaAsset | string>;
  skilletImage?: string; // Or rotating centerpiece asset

  // Numeric Stats / Fast Facts (e.g. Hero 3-stat strip)
  metrics?: MetricItem[];

  // Repeated Items / Cards / Lineups / FAQs
  items?: UniversalItem[];

  // Calls to Action / Links
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };

  // Specialized Embedded Widgets (Optional)
  audio?: AudioModule;
  locationDetails?: {
    address?: string;
    neighborhood?: string;
    coordinates?: string;
    hours?: string[];
    policies?: string[]; // e.g. ["Walk-ins strictly", "Cash & Card"]
  };

  // Safety Escape Hatch (Accepts any edge-case field without breaking)
  [key: string]: any;
}

// 8. Global Navigation & Footer
export interface GlobalNavData {
  brandName: string;
  menuLabel?: string;
  links: Array<{
    id?: string;
    label: string;
    href: string;
  }>;
}

export interface GlobalFooterData {
  colophonText?: string;
  copyright?: string;
  backToTopLabel?: string;
  socialLinks?: Array<{
    label: string;
    href: string;
  }>;
}

// 9. Phase 11: Build Teardown & Case Study Architecture
export interface KeyDecision {
  area: string; // e.g., "Hero Layout", "Typography Pair", "Audio Module"
  choice: string; // What was implemented
  rationale: string; // Direct practical reason behind the choice
}

export interface CommercialSignal {
  vector: string; // e.g., "Operational Friction", "Direct Conversion", "Foot Traffic"
  expectedOutcome: string; // Realistic expected change
}

export interface CommercialHypothesis {
  primaryGoal: string; // Core business intent
  signals: CommercialSignal[];
}

export interface CaseStudyRationale {
  angle: string; // The simulated brief & cliché avoided
  decisions: KeyDecision[]; // Key choices and the "why"
  scrapped: string[]; // Real trials/failures scrapped during the build
  takeaway: string; // 1 actionable rule learned
  hypothesis: CommercialHypothesis; // Commercial viability & expected conversion impact
}

// 10. Root Movement Contract
export interface DesignMovementPayload {
  meta: MovementMeta;
  brief: ClientBrief;
  nav: GlobalNavData;
  hero: UniversalSectionBlock;
  section01: UniversalSectionBlock;
  section02: UniversalSectionBlock;
  section03: UniversalSectionBlock;
  section04: UniversalSectionBlock;
  section05: UniversalSectionBlock;
  footer: GlobalFooterData;
  caseStudy: CaseStudyRationale;
  tokens?: Record<string, any>;
  curriculum?: Record<string, any>;
}
