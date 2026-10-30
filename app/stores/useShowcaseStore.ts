// stores/useShowcaseStore.ts
import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
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
    image: "/images/design01/design-01-screenshot.webp",
    icon: "lucide:disc",
  },
  // {
  //   id: "editorial-noir-foundry-02",
  //   slug: "editorial-nail-studio",
  //   vol: "Style 02",
  //   edition: "November 2026",
  //   category: "Editorial",
  //   title: "Minimalist Studio & Precision Craft",
  //   description:
  //     "Monochrome framing, hairline borders, and high-fashion editorial typography applied to a boutique private studio.",
  //   image: "/images/design02/placeholder.webp",
  //   icon: "lucide:sparkles",
  // },
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

  // Sync mode whenever URL query changes during client-side navigation
  watch(
    () => route.query.view,
    (newView) => {
      if (newView === "live" || newView === "edu") {
        activeMode.value = newView;
      }
    },
    { immediate: true },
  );

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

  function loadMovement(slug: string, explicitView?: ViewMode) {
    const movement = movementRegistry[slug];
    if (movement) {
      currentMovement.value = movement;
    } else {
      console.warn(`Movement with slug "${slug}" not found in registry.`);
      currentMovement.value = null;
    }

    // Determine target mode: parameter > current URL query > fallback "edu"
    const targetView =
      explicitView ||
      (route.query.view === "live" || route.query.view === "edu"
        ? (route.query.view as ViewMode)
        : "edu");

    activeMode.value = targetView;
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

  // Random Style Navigator
  function navigateToRandomMovement() {
    // 1. Get all available slugs from catalogMeta (or allMovements)
    const availableSlugs = catalogMeta.map((item) => item.slug);

    if (availableSlugs.length === 0) {
      router.push("/styles/editorial-pizza?view=live");
      return;
    }

    // 2. Pick a random index
    const randomIndex = Math.floor(Math.random() * availableSlugs.length);
    const chosenSlug = availableSlugs[randomIndex];

    // 3. Navigate directly to the live UI
    router.push(`/styles/${chosenSlug}?view=live`);
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
    navigateToRandomMovement,
  };
});
