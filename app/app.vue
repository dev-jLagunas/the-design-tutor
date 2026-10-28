<script setup lang="ts">
const { isDark } = useTheme();

// Binds <html data-theme="dark"> or <html data-theme="light"> automatically
useHead({
  htmlAttrs: {
    "data-theme": computed(() => (isDark.value ? "dark" : "light")),
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
