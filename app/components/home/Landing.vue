<script setup lang="ts">
import { useShowcaseStore } from "~/stores/useShowcaseStore";

const store = useShowcaseStore();

function handleRandomStyle() {
  store.navigateToRandomMovement();
}
</script>

<template>
  <div class="landing-view flex-col">
    <ReusableDisplayHero
      word1="Learn"
      word2="Visual"
      word3="Design"
      tagline="Explore historical and modern web design styles through interactive, living case studies and  breakdowns."
    >
      <template #actions>
        <UiActionPair
          :primary="{
            label: 'Explore Styles',
            to: '#styles-index',
            icon: 'lucide:arrow-down-right',
          }"
          :secondary="{
            label: 'Random Style',
            icon: 'lucide:shuffle',
            title: 'Load a random design movement',
          }"
          @secondary-click="handleRandomStyle"
        />
      </template>
    </ReusableDisplayHero>
    <HomeDesignGrid></HomeDesignGrid>
  </div>
</template>

<style scoped>
.landing-view {
  width: 100%;
}
</style>
