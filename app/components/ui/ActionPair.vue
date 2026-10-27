<script setup lang="ts">
interface ActionConfig {
  label: string;
  to?: string;
  icon?: string;
  title?: string;
}

interface Props {
  primary: ActionConfig;
  secondary?: ActionConfig;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "primary-click"): void;
  (e: "secondary-click"): void;
}>();
</script>

<template>
  <div class="action-pair">
    <!-- Primary Button (Gold Accent Fill) -->
    <NuxtLink
      v-if="primary.to"
      :to="primary.to"
      class="btn-action btn-primary font-body flex-center transition-smooth"
      :title="primary.title || primary.label"
    >
      <span>{{ primary.label }}</span>
      <Icon v-if="primary.icon" :name="primary.icon" class="btn-icon" />
    </NuxtLink>
    <button
      v-else
      type="button"
      class="btn-action btn-primary font-body flex-center transition-smooth"
      :title="primary.title || primary.label"
      @click="emit('primary-click')"
    >
      <span>{{ primary.label }}</span>
      <Icon v-if="primary.icon" :name="primary.icon" class="btn-icon" />
    </button>

    <!-- Secondary Button (Ghost Border) -->
    <template v-if="secondary">
      <NuxtLink
        v-if="secondary.to"
        :to="secondary.to"
        class="btn-action btn-ghost font-body flex-center transition-smooth"
        :title="secondary.title || secondary.label"
      >
        <Icon
          v-if="secondary.icon"
          :name="secondary.icon"
          class="btn-icon-sm"
        />
        <span>{{ secondary.label }}</span>
      </NuxtLink>
      <button
        v-else
        type="button"
        class="btn-action btn-ghost font-body flex-center transition-smooth"
        :title="secondary.title || secondary.label"
        @click="emit('secondary-click')"
      >
        <Icon
          v-if="secondary.icon"
          :name="secondary.icon"
          class="btn-icon-sm"
        />
        <span>{{ secondary.label }}</span>
      </button>
    </template>
  </div>
</template>

<style scoped>
.action-pair {
  flex-direction: row;
  gap: var(--space-3);
  display: flex;
}

.btn-action {
  padding: 0.85rem 1.6rem;
  font-size: var(--text-sm);
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  line-height: 1;
}

/* Primary Accent */
.btn-primary {
  background-color: var(--shell-accent-gold);
  color: #131314;
  border: 1px solid var(--shell-accent-gold);
  gap: var(--space-2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  filter: brightness(1.05);
}

/* Ghost Secondary */
.btn-ghost {
  color: var(--shell-text);
  gap: var(--space-2);
  border: 1px solid var(--shell-dots);
  background-color: transparent;
}

.btn-ghost:hover {
  border-color: var(--shell-accent-cyan);
  color: var(--shell-accent-cyan);
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1.15rem;
}

.btn-icon-sm {
  font-size: 0.95rem;
}

@media (max-width: 767px) {
}
</style>
