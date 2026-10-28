<!-- components/movements/design-01/EditorialPizzaLanding.vue -->
<script setup lang="ts">
import { computed } from "vue";
import { useShowcaseStore } from "~/stores/useShowcaseStore";

const store = useShowcaseStore();
const sections = computed(() => store.activeSections);
</script>

<template>
  <div v-if="sections" class="foundry-landing-root">
    <p>stuff goes here</p>
  </div>
</template>

<style scoped>
/* =============================================================================
   SCOPED DESIGN SYSTEM TOKENS
   Pure variables only — no pre-built components or restrictive utilities.
   ============================================================================= */

.foundry-landing-root {
  /* ---------------------------------------------------------------------------
     1. COLOR PALETTE
     --------------------------------------------------------------------------- */
  --bg-canvas: #121212;
  --bg-surface: #1a1a1a;
  --bg-elevated: #242424;

  --text-primary: #f5f4f0;
  --text-body: #d0cfca;
  --text-muted: #8a8884;
  --text-dim: #54524f;

  --accent-amber: #e5a93c;
  --accent-amber-subtle: #5a4828;

  --line-border: #2e2e2e;
  --line-subtle: rgba(255, 255, 255, 0.08);

  /* ---------------------------------------------------------------------------
     2. TYPOGRAPHY FAMILIES
     --------------------------------------------------------------------------- */
  --font-display: "Bodoni Moda", "Playfair Display", Georgia, serif;
  --font-body:
    "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "Space Mono", "SF Mono", Menlo, Consolas, monospace;

  /* ---------------------------------------------------------------------------
     3. TYPE SCALE
     --------------------------------------------------------------------------- */
  --text-display-xl: clamp(2.75rem, 7.5vw, 6rem);
  --text-display-lg: clamp(2rem, 4.5vw, 3.5rem);
  --text-display-md: clamp(1.4rem, 2.5vw, 2rem);
  --text-xl: 1.25rem;
  --text-lg: 1.125rem;
  --text-base: 1rem;
  --text-sm: 0.875rem;
  --text-xs: 0.75rem;
  --text-micro: 0.68rem;

  /* ---------------------------------------------------------------------------
     4. STANDARD 4PX/8PX SPACING SCALE
     --------------------------------------------------------------------------- */
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem; /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-5: 1.5rem; /* 24px */
  --space-6: 2rem; /* 32px */
  --space-7: 3rem; /* 48px */
  --space-8: 4rem; /* 64px */
  --space-9: 6rem; /* 96px */
  --space-10: 8rem; /* 128px */

  /* ---------------------------------------------------------------------------
     5. BORDERS & RADII
     --------------------------------------------------------------------------- */
  --radius-none: 0px;
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-pill: 9999px;

  --border-hairline: 1px solid var(--line-border);
  --border-subtle: 1px solid var(--line-subtle);

  /* ---------------------------------------------------------------------------
     6. MOTION
     --------------------------------------------------------------------------- */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 150ms;
  --duration-normal: 250ms;

  /* ---------------------------------------------------------------------------
     7. CONTAINER BOUNDS
     --------------------------------------------------------------------------- */
  --container-max: 1200px;
  --gutter: clamp(1.25rem, 4vw, 2.5rem);

  /* Host Scope Reset */
  min-height: 100vh;
  width: 100%;
  background-color: var(--bg-canvas);
  color: var(--text-primary);
  font-family: var(--font-body);
  line-height: 1.5;
  box-sizing: border-box;
}

/* Scoped child box-sizing reset */
.foundry-landing-root *,
.foundry-landing-root *::before,
.foundry-landing-root *::after {
  box-sizing: border-box;
}
.foundry-landing-root {
  background-color: var(--accent-amber);
}
</style>
