<!-- components/showcase/ShowcaseHud.vue -->
<script setup lang="ts">
import { useShowcaseStore } from "~/stores/useShowcaseStore";

const store = useShowcaseStore();
</script>

<template>
  <aside
    class="showcase-hud-root fixed flex-center no-select"
    aria-label="Showcase Controls"
  >
    <div class="hud-pill flex-between">
      <!-- Back to Main Directory -->
      <NuxtLink
        to="/#styles-index"
        class="hud-action-btn flex-center"
        title="Return to Styles Archive"
      >
        <Icon name="lucide:arrow-left" class="hud-icon" />
        <span class="hud-label text-micro-caps">Catalog</span>
      </NuxtLink>

      <div class="hud-divider"></div>

      <!-- Live vs Edu Mode Switcher -->
      <div class="mode-switch-group flex-center">
        <button
          type="button"
          class="mode-toggle-btn text-micro-caps transition-smooth"
          :class="{ active: store.isEduMode }"
          @click="store.setMode('edu')"
        >
          <Icon name="lucide:book-open" class="btn-sub-icon" />
          <span>Curriculum</span>
        </button>

        <button
          type="button"
          class="mode-toggle-btn text-micro-caps transition-smooth"
          :class="{ active: store.isLiveMode }"
          @click="store.setMode('live')"
        >
          <Icon name="lucide:eye" class="btn-sub-icon" />
          <span>Live Demo</span>
        </button>
      </div>

      <div class="hud-divider"></div>

      <!-- Client Brief Trigger -->
      <button
        type="button"
        class="hud-action-btn brief-btn flex-center transition-smooth"
        :class="{ active: store.isBriefOpen }"
        title="View Client Brief"
        @click="store.toggleBrief"
      >
        <Icon name="lucide:file-text" class="hud-icon" />
        <span class="hud-label text-micro-caps">Brief</span>
      </button>
    </div>
  </aside>
</template>

<style scoped>
.showcase-hud-root {
  top: var(--space-4);
  left: 50%;
  transform: translateX(-50%);
  z-index: 90;
  width: auto;
  pointer-events: none; /* Let page underneath be clickable */
}

.hud-pill {
  pointer-events: auto;
  background-color: var(--shell-bg);
  border: 1px solid var(--shell-border);
  box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.5);
  border-radius: 9999px;
  padding: 0.35rem 0.6rem;
  gap: var(--space-2);
  backdrop-filter: blur(12px);
}

.hud-divider {
  width: 1px;
  height: 20px;
  background-color: var(--shell-border);
}

.hud-action-btn {
  background: transparent;
  border: none;
  color: var(--shell-muted);
  gap: 0.4rem;
  padding: 0.45rem 0.75rem;
  border-radius: 9999px;
  cursor: pointer;
  text-decoration: none;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

.hud-action-btn:hover,
.hud-action-btn.active {
  color: var(--shell-text);
  background-color: var(--shell-surface);
}

.hud-icon {
  font-size: 1rem;
}

.hud-label {
  font-size: 0.68rem;
}

/* Mode Switch Tabs */
.mode-switch-group {
  background-color: var(--shell-surface);
  border: 1px solid var(--shell-border);
  border-radius: 9999px;
  padding: 2px;
  gap: 2px;
}

.mode-toggle-btn {
  background: transparent;
  border: none;
  color: var(--shell-muted);
  padding: 0.4rem 0.85rem;
  border-radius: 9999px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.68rem;
}

.btn-sub-icon {
  font-size: 0.85rem;
}

.mode-toggle-btn:hover {
  color: var(--shell-text);
}

.mode-toggle-btn.active {
  background-color: var(--shell-accent-gold);
  color: #131314;
  font-weight: 700;
}

@media (max-width: 640px) {
  .showcase-hud-root {
    top: auto;
    bottom: var(--space-4);
    width: calc(100% - 2rem);
  }

  .hud-pill {
    width: 100%;
    justify-content: space-between;
  }

  .hud-label {
    display: none;
  }
}
</style>
