// stores/useShowcaseStore.ts
import { defineStore } from "pinia";
import type {
  MovementDefinition,
  ViewMode,
  MovementSections,
  ClientBrief,
  CaseStudyRationale,
} from "~/types/movement";

import { editorialPizzaMovement } from "~/content/movements/editorial_pizza";

export interface MovementMetaCard {
  id: string;
  slug: string;
  vol: string;
  edition: string;
  category: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

// 1. Single source of truth registry for complete movement definitions
const movementRegistry: Record<string, MovementDefinition> = {
  "editorial-pizza": editorialPizzaMovement,
};

// 2. Card catalog metadata for the homepage index
const catalogMeta: MovementMetaCard[] = [
  {
    id: "editorial-noir-foundry",
    slug: "editorial-pizza",
    vol: "Style 01",
    edition: "October 31, 2026",
    category: "Editorial",
    title: "Downtown Editorial Noir & Cast-Iron Craft",
    description:
      "Severe Didone serifs, brushed steel textures, and high-contrast flash photography applied to a late-night Katamachi pizza and vinyl counter.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    icon: "lucide:disc",
  },
  {
    id: "kinetic-techno-kinetic",
    slug: "kinetic-club",
    vol: "Style 02",
    edition: "November 15, 2026",
    category: "Kinetic",
    title: "Berlin Sub-Bass & Wireframe Brutalism",
    description:
      "Strobe-reactive typography, distorted vector grids, and heavy monochrome contrast designed for an industrial underground venue.",
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=900&q=80",
    icon: "lucide:activity",
  },
  {
    id: "swiss-archival-botanics",
    slug: "swiss-botanics",
    vol: "Style 03",
    edition: "December 01, 2026",
    category: "International Typographic",
    title: "Alpine Flora & Asymmetric Grid Systems",
    description:
      "Strict Akzidenz-Grotesk scales, clinical catalog indices, and high-saturation macro floral photography for an apothecary laboratory.",
    image:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=900&q=80",
    icon: "lucide:grid",
  },
  {
    id: "retro-futurism-aerospace",
    slug: "retro-aerospace",
    vol: "Style 04",
    edition: "December 20, 2026",
    category: "Retro-Futurism",
    title: "Mid-Century Avionics & Warm Amber CRT",
    description:
      "Phosphor-glow amber displays, brushed titanium bezels, and technical telemetry diagrams applied to a boutique flight instrument workshop.",
    image:
      "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=900&q=80",
    icon: "lucide:gauge",
  },
];

export const useShowcaseStore = defineStore("showcase", () => {
  const route = useRoute();
  const router = useRouter();

  const currentMovement = ref<MovementDefinition | null>(null);
  const activeMode = ref<ViewMode>("edu");
  const isBriefOpen = ref<boolean>(false);
  const isCaseStudyOpen = ref<boolean>(false);

  // Expose catalog cards
  const allMovements = computed(() => catalogMeta);

  // Active section data switching based on HUD mode
  const activeSections = computed<MovementSections | null>(() => {
    if (!currentMovement.value) return null;
    return activeMode.value === "edu"
      ? currentMovement.value.educational
      : currentMovement.value.live;
  });

  // Client Brief getter
  const activeBrief = computed<ClientBrief | null>(() => {
    return currentMovement.value?.brief ?? null;
  });

  // Case study / Designer rationale getter
  const activeCaseStudy = computed<CaseStudyRationale | null>(() => {
    return currentMovement.value?.caseStudy ?? null;
  });

  const isEduMode = computed(() => activeMode.value === "edu");
  const isLiveMode = computed(() => activeMode.value === "live");

  function loadMovement(slug: string) {
    const movement = movementRegistry[slug];
    if (movement) {
      currentMovement.value = movement;
    } else {
      console.warn(`Movement with slug "${slug}" not found in registry.`);
      currentMovement.value = null;
    }

    const initialView = route.query.view;
    if (initialView === "live" || initialView === "edu") {
      activeMode.value = initialView;
    } else {
      activeMode.value = "edu";
    }
  }

  function setMode(mode: ViewMode) {
    activeMode.value = mode;
    router.replace({
      query: {
        ...route.query,
        view: mode,
      },
    });
  }

  function toggleMode() {
    setMode(activeMode.value === "edu" ? "live" : "edu");
  }

  function openBrief() {
    isBriefOpen.value = true;
  }

  function closeBrief() {
    isBriefOpen.value = false;
  }

  function toggleBrief() {
    isBriefOpen.value = !isBriefOpen.value;
  }

  function openCaseStudy() {
    isCaseStudyOpen.value = true;
  }

  function closeCaseStudy() {
    isCaseStudyOpen.value = false;
  }

  function toggleCaseStudy() {
    isCaseStudyOpen.value = !isCaseStudyOpen.value;
  }

  return {
    allMovements,
    currentMovement,
    activeMode,
    isBriefOpen,
    isCaseStudyOpen,
    activeSections,
    activeBrief,
    activeCaseStudy,
    isEduMode,
    isLiveMode,
    loadMovement,
    setMode,
    toggleMode,
    openBrief,
    closeBrief,
    toggleBrief,
    openCaseStudy,
    closeCaseStudy,
    toggleCaseStudy,
  };
});
