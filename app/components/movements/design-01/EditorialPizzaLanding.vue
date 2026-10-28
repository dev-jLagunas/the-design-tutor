<!-- components/movements/design-01/EditorialPizzaLanding.vue -->
<script setup lang="ts">
import { computed } from "vue";
import { useShowcaseStore } from "~/stores/useShowcaseStore";
import PizzaSection0 from "./PizzaSectionZero.vue";

const store = useShowcaseStore();
const sections = computed(() => store.activeSections);
</script>

<template>
  <div v-if="sections" class="foundry-landing-root">
    <PizzaSection0 :navbar="sections.navbar" :hero="sections.hero" />
  </div>
</template>

<style scoped>
@import "~/assets/css/design-01/editorial-pizza.css";

.foundry-landing-root {
  min-height: 100vh;
  width: 100%;
  background-color: var(--color-canvas);
  color: var(--color-text-primary);
  font-family: var(--font-family-body);
  position: relative;
  box-sizing: border-box;
}

.foundry-landing-root :deep(*),
.foundry-landing-root :deep(*::before),
.foundry-landing-root :deep(*::after) {
  box-sizing: border-box;
}
</style>
