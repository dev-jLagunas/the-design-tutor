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
    <!-- Design 01: Japanese Minimalism -->
    <MovementsMovementMinimalism v-if="slug === 'minimalism'" />

    <!-- Design 02: Brutalism (When we build it) -->
    <MovementsMovementBrutalismBar v-else-if="slug === 'brutalism'" />

    <!-- Design 03: Retro Cyber / Flash (When we build it) -->
    <MovementsMovementRetroDigital v-else-if="slug === 'retro-digital'" />
  </main>
</template>
