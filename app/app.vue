<script setup lang="ts">
const { isDark } = useTheme();

// Binds <html data-theme="dark"> or <html data-theme="light"> automatically
useHead({
  htmlAttrs: {
    "data-theme": computed(() => (isDark.value ? "dark" : "light")),
  },
});
</script>

<template>
  <div class="flex-col">
    <NavigationTheNavbar />
    <main class="tutor-shell">
      <ReusableDisplayHero
        word1="Learn"
        word2="Visual"
        word3="Design"
        tagline="Explore historical and modern web design movements through interactive, living case studies and technical breakdowns."
      >
        <template #actions>
          <div class="hero-actions-group flex-center">
            <!-- Primary CTA: Direct entry into the library -->
            <NuxtLink
              to="/#styles-index"
              class="btn-hero-primary font-body flex-center transition-smooth"
            >
              <span>Explore Styles</span>
              <Icon name="lucide:arrow-down-right" class="btn-icon" />
            </NuxtLink>

            <!-- Secondary Utility: Random showcase picker -->
            <button
              type="button"
              class="btn-hero-ghost font-body flex-center transition-smooth"
              title="Load a random design movement"
            >
              <Icon name="lucide:shuffle" class="btn-icon-sm" />
              <span>Random Style</span>
            </button>
          </div>
        </template>
      </ReusableDisplayHero>
    </main>
  </div>
</template>

<style scoped>
.tutor-shell {
  min-height: 100vh;
}

/* ==========================================================================
   HERO ACTIONS BUTTONS
   ========================================================================== */
.hero-actions-group {
  gap: var(--space-3);
  flex-wrap: wrap;
}

/* Primary Button (Gold Accent Fill) */
.btn-hero-primary {
  background-color: var(--shell-accent-gold);
  color: #131314; /* Always readable dark text on gold */
  padding: 0.85rem 1.75rem;
  font-size: var(--text-sm);
  text-decoration: none;
  border-radius: 4px;
  gap: var(--space-2);
  border: 1px solid var(--shell-accent-gold);
  cursor: pointer;
}

.btn-hero-primary:hover {
  transform: translateY(-2px);
  filter: brightness(1.05);
}

/* Ghost Button (Border & Text) */
.btn-hero-ghost {
  background-color: transparent;
  color: var(--shell-text);
  padding: 0.85rem 1.5rem;
  font-size: var(--text-sm);
  border-radius: 4px;
  gap: var(--space-2);
  border: 1px solid var(--shell-border);
  cursor: pointer;
}

.btn-hero-ghost:hover {
  border-color: var(--shell-accent-cyan);
  color: var(--shell-accent-cyan);
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1.15rem;
}

.btn-icon-sm {
  font-size: 0.95rem;
}

@media (max-width: 640px) {
  .hero-actions-group {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }

  .btn-hero-primary,
  .btn-hero-ghost {
    justify-content: center;
    width: 100%;
  }
}
</style>
