<script setup lang="ts">
import { useShowcaseStore } from "~/stores/useShowcaseStore";

const store = useShowcaseStore();
</script>

<template>
  <aside
    class="showcase-hud-root fixed no-select"
    aria-label="Showcase Controls"
  >
    <div class="hud-vertical-stack">
      <!-- 1. Discrete Back Button on Top (No bg/border, scales & turns red on hover) -->
      <NuxtLink
        to="/#styles-index"
        class="hud-back-btn flex-center"
        title="Return to Catalog"
        aria-label="Return to Catalog"
      >
        <Icon name="lucide:arrow-left" class="hud-icon" />
      </NuxtLink>

      <!-- 2. Mode Switchers Pod -->
      <div class="hud-btn-group">
        <button
          type="button"
          class="pod-btn"
          :class="{ active: store.isEduMode }"
          title="Curriculum Mode"
          aria-label="Curriculum Mode"
          @click="store.setMode('edu')"
        >
          <Icon name="lucide:book-open" class="hud-icon" />
        </button>

        <button
          type="button"
          class="pod-btn"
          :class="{ active: store.isLiveMode }"
          title="Live Demo Mode"
          aria-label="Live Demo Mode"
          @click="store.setMode('live')"
        >
          <Icon name="lucide:eye" class="hud-icon" />
        </button>
      </div>

      <!-- 3. Drawers Pod (Separated by small vertical space) -->
      <div class="hud-btn-group">
        <button
          type="button"
          class="pod-btn"
          :class="{ active: store.isCaseStudyOpen }"
          title="Design Overview"
          aria-label="Design Overview"
          @click="store.toggleCaseStudy"
        >
          <Icon name="lucide:layers" class="hud-icon" />
        </button>

        <button
          type="button"
          class="pod-btn"
          :class="{ active: store.isBriefOpen }"
          title="Client Brief"
          aria-label="Client Brief"
          @click="store.toggleBrief"
        >
          <Icon name="lucide:file-text" class="hud-icon" />
        </button>
      </div>
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

/* Vertical Stack Pinned to Far-Right Center */
.hud-vertical-stack {
  pointer-events: auto;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2, 8px);
}

/* Standalone Back Button (No background or border, expands and turns red on hover) */
.hud-back-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  color: var(--shell-text, #f5f4f0);
  opacity: 0.35;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
    color 0.2s ease,
    opacity 0.2s ease;
}

.hud-back-btn:hover,
.hud-back-btn:focus-visible {
  opacity: 1;
  color: #ef4444;
  transform: scale(1.22);
}

/* Button Pod Enclosures */
.hud-btn-group {
  display: flex;
  flex-direction: column;
  background-color: var(--shell-border, rgba(255, 255, 255, 0.12));
  border: 1px solid var(--shell-border, rgba(255, 255, 255, 0.12));
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 12px 28px -8px rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  gap: 1px;
  opacity: 0.35;
  transition:
    opacity 0.2s ease,
    border-color 0.2s ease;
}

.hud-vertical-stack:hover .hud-btn-group,
.hud-btn-group:focus-within {
  opacity: 1;
  border-color: var(--shell-muted, #8a8884);
}

/* Individual Vertical Pod Buttons */
.pod-btn {
  position: relative;
  width: 36px;
  height: 36px;
  background-color: rgba(18, 18, 18, 0.65);
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
  background-color: rgba(30, 30, 30, 0.85);
}

.pod-btn.active {
  background-color: var(--shell-accent-gold, #e5a93c);
  color: #121212;
}

.hud-icon {
  font-size: 1.05rem;
}

/* Mobile Screens: Kept tiny & out of the way to preserve visual immersion */
@media (max-width: 640px) {
  .hud-vertical-stack {
    right: 4px;
    gap: 4px;
  }

  .hud-back-btn {
    width: 28px;
    height: 28px;
    opacity: 0.3;
  }

  .hud-back-btn .hud-icon {
    font-size: 0.85rem;
  }

  .hud-btn-group {
    border-radius: 4px;
    opacity: 0.3;
  }

  .pod-btn {
    width: 28px;
    height: 28px;
  }

  .pod-btn .hud-icon {
    font-size: 0.85rem;
  }
}
</style>
