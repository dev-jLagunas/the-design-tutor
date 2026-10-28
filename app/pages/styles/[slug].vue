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
  store.loadMovement(slug.value);
});
</script>

<template>
  <main v-if="store.currentMovement" class="showcase-canvas-root">
    <MovementsDesign01EditorialPizzaLanding
      v-if="route.params.slug === 'editorial-pizza'"
    />
  </main>
</template>
