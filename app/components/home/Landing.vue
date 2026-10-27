<!-- components/home/Landing.vue -->
<script setup lang="ts">
function handleRandomStyle() {
  console.log("Random style triggered");
}
</script>

<template>
  <div class="landing-view flex-col">
    <ReusableDisplayHero
      word1="Learn"
      word2="Visual"
      word3="Design"
      tagline="Explore historical and modern web design movements through interactive, living case studies and technical breakdowns."
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
