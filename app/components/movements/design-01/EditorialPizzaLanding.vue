<script setup lang="ts">
import { useShowcaseStore } from "~/stores/useShowcaseStore";

const store = useShowcaseStore();
const sections = computed(() => store.activeSections);
</script>

<template>
  <main v-if="sections" class="movement-root">
    <!-- 00. State Verification Header -->
    <header class="debug-bar">
      <span>{{ sections.navbar.brandMark }}</span>
      <span>MODE: {{ store.activeMode.toUpperCase() }}</span>
    </header>

    <!-- 01. Hero Verification -->
    <section class="test-hero">
      <h1>
        {{ sections.hero.title }} <em>{{ sections.hero.titleItalic }}</em>
      </h1>
      <p>{{ sections.hero.subtitle }}</p>
    </section>

    <!-- 02. Slot Outline Placeholders -->
    <div class="test-slots">
      <div>02: {{ sections.section02.title }}</div>
      <div>03: {{ sections.section03.title }}</div>
      <div>04: {{ sections.section04.title }}</div>
      <div>05: {{ sections.section05.title }}</div>
      <div>FOOTER: {{ sections.footer.brandColophon }}</div>
    </div>
  </main>
</template>

<style scoped>
.movement-root {
  min-height: 100vh;
  padding: 2rem;
  background-color: #121212;
  color: #f5f4f0;
  font-family: sans-serif;
}

.debug-bar {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  font-family: monospace;
  font-size: 0.85rem;
  color: #8a8884;
}

.test-hero {
  margin: 3rem 0;
}

.test-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.test-hero em {
  font-style: italic;
  color: #e5a93c;
}

.test-slots {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-family: monospace;
  font-size: 0.85rem;
  color: #8a8884;
}

.test-slots div {
  padding: 0.5rem;
  border: 1px dashed rgba(255, 255, 255, 0.1);
}
</style>
