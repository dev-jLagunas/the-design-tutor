<!-- components/movements/design-01/PizzaBackTTop.vue -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const isVisible = ref(false);

const handleScroll = () => {
  // Reveal once the user scrolls beyond the hero section (roughly 400px)
  isVisible.value = window.scrollY > 400;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <button
    type="button"
    class="back-to-top-btn bg-border"
    :class="{ 'is-visible': isVisible }"
    aria-label="Back to top"
    @click="scrollToTop"
  >
    <span class="btn-label font-mono">TOP</span>
    <Icon name="lucide:arrow-up" class="btn-icon" />
  </button>
</template>

<style scoped>
/* Reusable Editorial Backdrop Utility */
.bg-border {
  background-color: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: var(--border-width-hairline) solid var(--color-border);
  box-sizing: border-box;
}

.back-to-top-btn {
  position: fixed;
  bottom: clamp(1.25rem, 3vw, 2.5rem);
  right: clamp(1.25rem, 3vw, 2.5rem);
  z-index: var(--layer-sticky, 20);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.65rem 1rem;
  color: var(--color-text-secondary);
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transform: translateY(12px);
  transition:
    opacity 0.25s ease,
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.back-to-top-btn.is-visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.back-to-top-btn:hover {
  background-color: var(--color-primary-1);
  border-color: var(--color-primary-1);
  color: var(--color-canvas);
  transform: translateY(-2px);
}

.btn-label {
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  font-weight: 700;
  text-transform: uppercase;
}

.btn-icon {
  font-size: 0.85rem;
  transition: transform 0.2s ease;
}

.back-to-top-btn:hover .btn-icon {
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .back-to-top-btn {
    bottom: 1rem;
    right: 1rem;
    padding: 0.5rem 0.75rem;
  }
}
</style>
