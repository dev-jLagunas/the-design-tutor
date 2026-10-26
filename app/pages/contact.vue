<!-- pages/contact.vue -->
<script setup lang="ts">
useHead({
  title: "Contact & Links | The Design Tutor",
  meta: [
    {
      name: "description",
      content: "Connect with the creator of The Design Tutor.",
    },
  ],
});
</script>

<template>
  <div class="page-container flex-col">
    <header class="page-header flex-col">
      <span class="page-eyebrow text-micro-caps">Get in touch</span>
      <h1 class="page-title font-display">Connect & Support</h1>
    </header>

    <div class="page-body font-body flex-col">
      <p>Links, portfolio, and support channels coming soon.</p>

      <ul class="contact-list flex-col">
        <li>
          <a
            href="https://github.com/dev-jLagunas"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link transition-smooth"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  width: 100%;
  max-width: 1000px;
  margin-inline: auto;
  padding: var(--space-6) var(--space-5);
  gap: var(--space-5);
}

.page-header {
  gap: var(--space-2);
}

.page-eyebrow {
  color: var(--shell-accent-cyan);
}

.page-title {
  font-size: var(--text-4xl);
  color: var(--shell-text);
}

.page-body {
  font-size: var(--text-lg);
  color: var(--shell-muted);
  gap: var(--space-4);
}

.contact-list {
  list-style: none;
  gap: var(--space-2);
}

.contact-link {
  color: var(--shell-text);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.contact-link:hover {
  color: var(--shell-accent-cyan);
}
</style>
