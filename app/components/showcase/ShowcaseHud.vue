<script setup lang="ts">
import { useShowcaseStore } from "~/stores/useShowcaseStore";

const store = useShowcaseStore();
</script>

<template>
  <aside
    class="showcase-hud-root fixed no-select"
    aria-label="Showcase Controls"
  >
    <!-- Discrete Upper-Left Back Button -->
    <NuxtLink
      to="/#styles-index"
      class="hud-back-btn flex-center"
      title="Return to Catalog"
      aria-label="Return to Catalog"
    >
      <Icon name="lucide:arrow-left" class="hud-icon" />
    </NuxtLink>

    <!-- 2x2 Floating Action Grid -->
    <div class="hud-grid-pod">
      <!-- Top Row: View Mode Switcher -->
      <button
        type="button"
        class="pod-btn top-left"
        :class="{ active: store.isEduMode }"
        title="Curriculum Mode"
        aria-label="Curriculum Mode"
        @click="store.setMode('edu')"
      >
        <Icon name="lucide:book-open" class="hud-icon" />
      </button>

      <button
        type="button"
        class="pod-btn top-right"
        :class="{ active: store.isLiveMode }"
        title="Live Demo Mode"
        aria-label="Live Demo Mode"
        @click="store.setMode('live')"
      >
        <Icon name="lucide:eye" class="hud-icon" />
      </button>

      <!-- Bottom Row: Drawers -->
      <button
        type="button"
        class="pod-btn bottom-left"
        :class="{ active: store.isCaseStudyOpen }"
        title="Design Overview"
        aria-label="Design Overview"
        @click="store.toggleCaseStudy"
      >
        <Icon name="lucide:layers" class="hud-icon" />
      </button>

      <button
        type="button"
        class="pod-btn bottom-right"
        :class="{ active: store.isBriefOpen }"
        title="Client Brief"
        aria-label="Client Brief"
        @click="store.toggleBrief"
      >
        <Icon name="lucide:file-text" class="hud-icon" />
      </button>
    </div>
  </aside>
</template>

<style scoped>
.showcase-hud-root {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
}

/* Standalone Discrete Back Button */
.hud-back-btn {
  pointer-events: auto;
  position: absolute;
  top: 43%;
  left: var(--space-4, 1.25rem);
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  border-radius: 8px;
  background-color: transparent;
  color: var(--shell-text, #f5f4f0);
  opacity: 0.28;
  backdrop-filter: blur(12px);
  text-decoration: none;
  transition:
    opacity 0.1s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;
}

.hud-back-btn:hover,
.hud-back-btn:focus-visible {
  opacity: 1;
  border-color: var(--shell-muted, #8a8884);
  color: var(--shell-accent-coral);
}

/* 2x2 Cluster Positioned in the Upper-Left (Directly below Back Button) */
.hud-grid-pod {
  pointer-events: auto;
  position: absolute;
  top: 50%;
  left: var(--space-4, 1.25rem);
  transform: translateY(-50%);
  display: grid;
  grid-template-columns: repeat(2, 42px);
  grid-template-rows: repeat(2, 42px);
  gap: 1px;
  background-color: var(--shell-border, rgba(255, 255, 255, 0.12));
  border: 1px solid var(--shell-border, rgba(255, 255, 255, 0.12));
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(12px);
  opacity: 0.28;
  transition:
    opacity 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.hud-grid-pod:hover,
.hud-grid-pod:focus-within {
  opacity: 1;
  border-color: var(--shell-muted, #8a8884);
}

/* Individual Grid Buttons */
.pod-btn {
  position: relative;
  width: 42px;
  height: 42px;
  background-color: transparent;
  border: none;
  color: var(--shell-muted, #8a8884);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition:
    color 0.15s ease,
    background-color 0.15s ease;
}

.pod-btn:hover {
  color: var(--shell-text, #f5f4f0);
  background-color: transparent;
}

.pod-btn.active {
  background-color: var(--shell-accent-gold, #e5a93c);
  color: #121212;
}

.hud-icon {
  font-size: 1.15rem;
}

/* Mobile Alignment: Stays pinned top-left with slightly higher idle opacity */
@media (max-width: 640px) {
  .hud-back-btn,
  .hud-grid-pod {
    opacity: 0.65;
  }
}
</style>
