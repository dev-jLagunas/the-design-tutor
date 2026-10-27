<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const isVisible = ref(false);

const checkScroll = () => {
  // Show button after scrolling past 400px
  isVisible.value = window.scrollY > 400;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<template>
  <Transition name="back-top">
    <button
      v-if="isVisible"
      type="button"
      class="back-top-btn flex-center no-select"
      aria-label="Scroll back to top"
      title="Back to Top"
      @click="scrollToTop"
    >
      <div class="btn-inner flex-center">
        <Icon name="lucide:arrow-up" class="arrow-icon" />
        <span class="btn-text text-micro-caps">Top</span>
      </div>
    </button>
  </Transition>
</template>

<style scoped>
/* ==========================================================================
   BACK TO TOP FLOATING BUTTON
   ========================================================================== */
.back-top-btn {
  position: fixed;
  bottom: var(--space-5);
  right: var(--space-5);
  z-index: 40;
  background-color: var(--shell-surface);
  color: var(--shell-text);
  border: 1px solid var(--shell-border);
  border-radius: 4px;
  padding: 0;
  cursor: pointer;
  box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.45);
  transition:
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.btn-inner {
  padding: 0.6rem 0.9rem;
  gap: var(--space-2);
}

.arrow-icon {
  font-size: 1rem;
  color: var(--shell-accent-gold);
  transition: transform 0.25s ease;
}

.btn-text {
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  color: var(--shell-text);
  transition: color 0.2s ease;
}

/* Hover States matching editorial styling */
.back-top-btn:hover {
  transform: translateY(-4px);
  border-color: var(--shell-accent-gold);
  background-color: var(--shell-bg);
}

.back-top-btn:hover .arrow-icon {
  transform: translateY(-2px);
}

.back-top-btn:hover .btn-text {
  color: var(--shell-accent-gold);
}

/* ==========================================================================
   TRANSITION ANIMATION (FADE & POP)
   ========================================================================== */
.back-top-enter-active {
  transition:
    opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.back-top-leave-active {
  transition:
    opacity 0.2s ease-in,
    transform 0.2s ease-in;
}

.back-top-enter-from,
.back-top-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.9);
}

/* ==========================================================================
   RESPONSIVE (HOVER ABOVE MOBILE DOCK ON < 768px)
   ========================================================================== */
@media (max-width: 768px) {
  .back-top-btn {
    /* Clears mobile navigation dock (64px + safe area + margin) */
    bottom: calc(76px + env(safe-area-inset-bottom, 0px));
    right: var(--space-4);
  }

  .btn-text {
    display: none; /* Icon-only compact badge on mobile */
  }

  .btn-inner {
    padding: 0.65rem;
  }
}
</style>
