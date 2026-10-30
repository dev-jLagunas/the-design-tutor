<!-- pages/styles/[slug].vue -->
<script setup lang="ts">
import { useShowcaseStore } from "~/stores/useShowcaseStore";

definePageMeta({
  layout: "blank",
});

const route = useRoute();
const store = useShowcaseStore();
const slug = computed(() => route.params.slug as string);

onMounted(() => {
  store.loadMovement(
    route.params.slug as string,
    route.query.view as "live" | "edu",
  );
});
</script>

<template>
  <main v-if="store.currentMovement" class="showcase-canvas-root">
    <MovementsDesign01EditorialPizzaLanding
      v-if="route.params.slug === 'editorial-pizza'"
    />

    <!-- Design 02 (Your New Fake Project) -->
    <!-- <MovementsDesign02Design02Landing
      v-else-if="route.params.slug === 'editorial-nail-studio'"
    /> -->
  </main>
</template>
