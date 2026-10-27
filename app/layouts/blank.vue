<template>
  <div class="blank-canvas-root relative">
    <!-- Floating Persistent HUD Controls -->
    <ShowcaseHud />

    <!-- Slide-over Brief Drawer -->
    <ShowcaseBriefModal />

    <!-- Page Content (Pure Blank Slate) -->
    <slot />
  </div>
</template>

<style scoped>
.blank-canvas-root {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
}
</style>
