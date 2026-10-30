<!-- components/MobileBottomNav.vue -->
<script setup lang="ts">
import { useShowcaseStore } from "~/stores/useShowcaseStore";

const route = useRoute();
const store = useShowcaseStore();

function handleRandom() {
  store.navigateToRandomMovement();
}
</script>

<template>
  <nav class="mobile-dock flex-center no-select" aria-label="Mobile Navigation">
    <div class="dock-container flex-between">
      <!-- 1. Home Link -->
      <NuxtLink
        to="/"
        class="dock-item flex-col flex-center transition-smooth"
        :class="{ 'is-active': route.path === '/' }"
      >
        <Icon name="lucide:layout-grid" class="dock-icon" />
        <span class="dock-label text-micro-caps">Home</span>
      </NuxtLink>

      <!-- 2. About Link -->
      <NuxtLink
        to="/about"
        class="dock-item flex-col flex-center transition-smooth"
        :class="{ 'is-active': route.path === '/about' }"
      >
        <Icon name="lucide:compass" class="dock-icon" />
        <span class="dock-label text-micro-caps">About</span>
      </NuxtLink>

      <!-- 3. Random Button -->
      <button
        type="button"
        class="dock-item dock-btn flex-col flex-center transition-smooth"
        title="Shuffle to a random movement"
        @click="handleRandom"
      >
        <Icon name="lucide:shuffle" class="dock-icon shuffle-icon" />
        <span class="dock-label text-micro-caps">Random</span>
      </button>

      <!-- 4. Contact Link -->
      <NuxtLink
        to="/contact"
        class="dock-item flex-col flex-center transition-smooth"
        :class="{ 'is-active': route.path === '/contact' }"
      >
        <Icon name="lucide:send" class="dock-icon" />
        <span class="dock-label text-micro-caps">Contact</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
/* ==========================================================================
   MOBILE DOCK SHELL
   ========================================================================== */
.mobile-dock {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 45;
  background-color: var(--shell-contrast-bg);
  border-top: 1px solid var(--shell-contrast-border);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  /* Accommodates gesture home bars on iOS/modern Android */
  padding-bottom: env(safe-area-inset-bottom, 0px);
}

.dock-container {
  width: 100%;
  height: 64px;
  max-width: 480px;
  margin-inline: auto;
  padding-inline: var(--space-3);
}

/* ==========================================================================
   DOCK ITEM / BUTTON STYLING
   ========================================================================== */
.dock-item {
  flex: 1;
  height: 100%;
  gap: 4px;
  text-decoration: none;
  color: var(--shell-muted);
  cursor: pointer;
  position: relative;
  background: transparent;
  border: none;
}

.dock-btn {
  font-family: inherit;
}

.dock-icon {
  font-size: 1.25rem;
  transition:
    transform 0.2s cubic-bezier(0.2, 0, 0, 1),
    color 0.2s ease;
}

.dock-label {
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  line-height: 1;
  transition: color 0.2s ease;
}

/* ==========================================================================
   HOVER & ACTIVE STATES (ACCENT TOKENS)
   ========================================================================== */
.dock-item:hover {
  color: var(--shell-contrast-text);
}

.dock-item:hover .dock-icon {
  transform: translateY(-2px);
}

/* Active Route: Highlights with gold accent and top indicator bar */
.dock-item.is-active {
  color: var(--shell-accent-gold);
}

.dock-item.is-active .dock-icon {
  transform: scale(1.1);
  color: var(--shell-accent-gold);
}

.dock-item.is-active::after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 2px;
  background-color: var(--shell-accent-gold);
  border-radius: 9999px;
}

/* Special hover state for random shuffle */
.dock-item:hover .shuffle-icon {
  color: var(--shell-accent-cyan);
  transform: rotate(45deg);
}

/* ==========================================================================
   RESPONSIVE DISAPPEAR RULE (>= 768px)
   ========================================================================== */
@media (min-width: 768px) {
  .mobile-dock {
    display: none !important;
  }
}
</style>
