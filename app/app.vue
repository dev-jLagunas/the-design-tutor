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
  <div class="tutor-shell">
    <NavigationTheNavbar />
    <main class="tutor-shell">
      <NuxtPage />
    </main>
    <NavigationTheFooter />
    <NavigationMobileBottomNav />
  </div>
</template>

<style scoped>
.tutor-shell {
  padding-bottom: 5rem;
}
</style>
