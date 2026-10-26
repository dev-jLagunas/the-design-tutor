<!-- pages/about.vue -->
<script setup lang="ts">
useHead({
  title: "About | The Design Tutor",
  meta: [
    {
      name: "description",
      content: "Learn about the mission and story behind The Design Tutor.",
    },
  ],
});
</script>

<template>
  <div class="page-container flex-col">
    <header class="page-header flex-col">
      <span class="page-eyebrow text-micro-caps">About the project</span>
      <h1 class="page-title font-display">The Design Tutor</h1>
    </header>

    <div class="page-body font-body">
      <p>
        Visual designs analyzed, decomposed, and explained. Living breakdowns of
        historic and modern UI movements.
      </p>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  width: 100%;
  max-width: 1000px;
  margin-inline: auto;
  padding: var(--space-6) var(--space-5);
  gap: var(--space-5);
}

.page-header {
  gap: var(--space-2);
}

.page-eyebrow {
  color: var(--shell-accent-gold);
}

.page-title {
  font-size: var(--text-4xl);
  color: var(--shell-text);
}

.page-body {
  font-size: var(--text-lg);
  color: var(--shell-muted);
  line-height: 1.7;
}
</style>
