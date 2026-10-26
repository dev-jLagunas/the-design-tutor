<script setup lang="ts">
const { isDark } = useTheme();

// Binds <html data-theme="dark"> or <html data-theme="light"> automatically
useHead({
  htmlAttrs: {
    "data-theme": computed(() => (isDark.value ? "dark" : "light")),
  },
});

// Temporary filler handler for the random style trigger
function handleRandomStyle() {
  console.log("Random style triggered");
}
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
          <UiActionPair
            :primary="{
              label: 'Explore Styles',
              to: '/#styles-index',
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
    </main>
  </div>
</template>

<style scoped>
.tutor-shell {
  min-height: 100vh;
}
</style>
