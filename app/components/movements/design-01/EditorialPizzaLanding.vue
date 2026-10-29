<!-- components/movements/design-01/EditorialPizzaLanding.vue -->
<script setup lang="ts">
import { computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useShowcaseStore } from "~/stores/useShowcaseStore";
import PizzaSection0 from "./PizzaSectionZero.vue";
import PizzaSectionOne from "./PizzaSectionOne.vue";
import PizzaSectionTwo from "./PizzaSectionTwo.vue";
import PizzaSectionThree from "./PizzaSectionThree.vue";
import PizzaBackToTop from "./PizzaBackToTop.vue";
import PizzaSectionFour from "./PizzaSectionFour.vue";
import PizzaSectionFive from "./PizzaSectionFive.vue";
import PizzaFooter from "./PizzaFooter.vue";

const route = useRoute();
const store = useShowcaseStore();

watch(
  () => route.query.view,
  (view) => {
    store.setMode(view === "live" ? "live" : "edu");
  },
  { immediate: true },
);

const sections = computed(() => store.activeSections);
const isEdu = computed(() => store.isEduMode);
</script>

<template>
  <div v-if="sections" class="foundry-landing-root">
    <PizzaSection0 :navbar="sections.navbar" :hero="sections.hero" />
    <!-- Section 1: The Slices (Live) or Core Characteristics (Edu) -->
    <PizzaSectionOne
      :data="isEdu ? sections.section02 : sections.section03"
      :is-educational="isEdu"
    />
    <!-- Section 2: Visitor Protocol & Telemetry (Live) or Implementation Cheat Sheet (Edu) -->
    <PizzaSectionTwo :data="sections.section05" :is-educational="isEdu" />

    <!-- Section 3: Sound & Night Vibe (Live) or Archival Roots & Trivia (Edu) -->
    <PizzaSectionThree :data="sections.section04" :is-educational="isEdu" />

    <!-- Section 4: Fullscreen Horizontal Image Reel -->
    <PizzaSectionFour />

    <!-- Section 5: The Foundry Story, Core Values & Socials -->
    <PizzaSectionFive :data="sections.section02" :is-educational="isEdu" />

    <!-- Footer: Colophon, Operational Metrics & Archives -->
    <PizzaFooter :data="sections.footer" :is-educational="isEdu" />

    <PizzaBackToTop />
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
