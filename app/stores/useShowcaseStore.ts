// stores/useShowcaseStore.ts
import { defineStore } from "pinia";
import type {
  MovementDefinition,
  ViewMode,
  MovementSections,
  ClientBrief,
} from "~/types/movement";

import { minimalismMovement } from "~/content/movements/minimalism";
import { brutalismMovement } from "~/content/movements/brutalism";

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
  minimalism: minimalismMovement,
  brutalism: brutalismMovement,
};

// 2. Card catalog metadata for the homepage index
const catalogMeta: MovementMetaCard[] = [
  {
    id: "minimalism-ishikawa",
    slug: "minimalism",
    vol: "Style 01",
    edition: "Launch Release",
    category: "Minimalist",
    title: "Japanese Minimalism & Spatial Ma (間)",
    description:
      "Radical negative space, strict asymmetric balance, and muted natural materials applied to an artisanal Ishikawa confectionery.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80",
    icon: "lucide:circle-dot",
  },
  {
    id: "brutalism-sd-music",
    slug: "brutalism",
    vol: "Style 02",
    edition: "Revision 02",
    category: "Brutalism",
    title: "Digital Brutalism & Structural Rawness",
    description:
      "Harsh monospaced typography, 3px solid black borders, hazard accents, and anti-polish aesthetics applied to an underground San Diego venue.",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80",
    icon: "lucide:square",
  },
];

export const useShowcaseStore = defineStore("showcase", () => {
  const route = useRoute();
  const router = useRouter();

  const currentMovement = ref<MovementDefinition | null>(null);
  const activeMode = ref<ViewMode>("edu");
  const isBriefOpen = ref<boolean>(false);

  // Expose catalog cards
  const allMovements = computed(() => catalogMeta);

  const activeSections = computed<MovementSections | null>(() => {
    if (!currentMovement.value) return null;
    return activeMode.value === "edu"
      ? currentMovement.value.educational
      : currentMovement.value.live;
  });

  const activeBrief = computed<ClientBrief | null>(() => {
    return currentMovement.value?.brief ?? null;
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

  return {
    allMovements,
    currentMovement,
    activeMode,
    isBriefOpen,
    activeSections,
    activeBrief,
    isEduMode,
    isLiveMode,
    loadMovement,
    setMode,
    toggleMode,
    openBrief,
    closeBrief,
    toggleBrief,
  };
});
