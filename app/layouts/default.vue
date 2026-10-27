<!-- layouts/default.vue -->
<script setup lang="ts">
function handleRandomStyle() {
  console.log("Random style triggered");
}
</script>

<template>
  <div class="tutor-shell">
    <NavigationTheNavbar />
    <main class="shell-content">
      <slot />
    </main>
    <NavigationTheFooter />
    <NavigationMobileBottomNav />
    <UiBackTop />
  </div>
</template>

<style scoped>
.tutor-shell {
  min-height: 100vh;
  width: 100%;
}

.shell-content {
  width: 100%;
  flex: 1;
}

@media (max-width: 767px) {
  .shell-content {
    padding-bottom: calc(64px + env(safe-area-inset-bottom, 0px));
  }
}
</style>
