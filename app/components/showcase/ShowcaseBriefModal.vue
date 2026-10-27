<!-- components/showcase/ShowcaseBriefModal.vue -->
<script setup lang="ts">
import { useShowcaseStore } from "~/stores/useShowcaseStore";

const store = useShowcaseStore();
const brief = computed(() => store.activeBrief);
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="store.isBriefOpen"
        class="brief-backdrop fixed cover-absolute"
        @click="store.closeBrief"
      ></div>
    </Transition>

    <Transition name="slide">
      <aside
        v-if="store.isBriefOpen"
        class="brief-drawer fixed flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Client Brief"
      >
        <!-- Header -->
        <header class="drawer-header flex-between">
          <div class="brief-title-wrap flex-col">
            <span class="text-micro-caps eyebrow-tag">Design Assignment</span>
            <h2 class="font-display drawer-title">Client Brief</h2>
          </div>
          <button
            type="button"
            class="close-btn flex-center"
            aria-label="Close Brief"
            @click="store.closeBrief"
          >
            <Icon name="lucide:x" class="close-icon" />
          </button>
        </header>

        <!-- Body Content -->
        <div v-if="brief" class="drawer-scroll-body flex-col font-body">
          <!-- Client & Scope -->
          <div class="brief-section flex-col">
            <span class="brief-label text-micro-caps">The Client</span>
            <h3 class="brief-client-name font-display">
              {{ brief.clientName }}
            </h3>
            <p class="brief-text">
              {{ brief.industry }} • {{ brief.location }}
            </p>
          </div>

          <!-- Aesthetic Goal -->
          <div class="brief-section flex-col">
            <span class="brief-label text-micro-caps">Aesthetic Direction</span>
            <p class="brief-text highlight-box">{{ brief.aestheticGoal }}</p>
          </div>

          <!-- Core Challenge -->
          <div class="brief-section flex-col">
            <span class="brief-label text-micro-caps">The Challenge</span>
            <p class="brief-text">{{ brief.coreChallenge }}</p>
          </div>

          <!-- Brand Tone Tags -->
          <div class="brief-section flex-col">
            <span class="brief-label text-micro-caps">Brand Tone</span>
            <div class="tone-tag-row flex-center">
              <span
                v-for="tone in brief.brandTone"
                :key="tone"
                class="tone-pill text-micro-caps"
              >
                {{ tone }}
              </span>
            </div>
          </div>

          <!-- Deliverables Checklist -->
          <div class="brief-section flex-col">
            <span class="brief-label text-micro-caps"
              >Required Deliverables</span
            >
            <ul class="deliverables-list flex-col">
              <li
                v-for="(item, idx) in brief.deliverables"
                :key="idx"
                class="deliverable-item flex-between"
              >
                <span>{{ item }}</span>
                <Icon name="lucide:check" class="check-icon" />
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>

<style scoped>
.brief-backdrop {
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
}

.brief-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 480px;
  background-color: var(--shell-surface);
  border-left: 1px solid var(--shell-border);
  z-index: 99;
  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.5);
}

.drawer-header {
  padding: var(--space-5);
  border-bottom: 1px solid var(--shell-border);
}

.eyebrow-tag {
  color: var(--shell-accent-gold);
}

.drawer-title {
  font-size: var(--text-2xl);
  color: var(--shell-text);
}

.close-btn {
  background: var(--shell-bg);
  border: 1px solid var(--shell-border);
  color: var(--shell-text);
  width: 36px;
  height: 36px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.close-btn:hover {
  background-color: var(--shell-border);
}

.drawer-scroll-body {
  padding: var(--space-5);
  gap: var(--space-5);
  overflow-y: auto;
}

.brief-section {
  gap: var(--space-2);
}

.brief-label {
  color: var(--shell-muted);
}

.brief-client-name {
  font-size: var(--text-xl);
  color: var(--shell-text);
}

.brief-text {
  font-size: var(--text-sm);
  color: var(--shell-muted);
  line-height: 1.6;
}

.highlight-box {
  background-color: var(--shell-bg);
  border: 1px solid var(--shell-border);
  padding: var(--space-3);
  border-radius: 6px;
  color: var(--shell-text);
}

.tone-tag-row {
  gap: var(--space-2);
  flex-wrap: wrap;
  justify-content: flex-start;
}

.tone-pill {
  padding: 0.3rem 0.65rem;
  border-radius: 4px;
  background-color: var(--shell-bg);
  border: 1px solid var(--shell-border);
  font-size: 0.68rem;
  color: var(--shell-text);
}

.deliverables-list {
  list-style: none;
  gap: var(--space-2);
}

.deliverable-item {
  font-size: var(--text-sm);
  padding: var(--space-2) var(--space-3);
  background-color: var(--shell-bg);
  border: 1px solid var(--shell-border);
  border-radius: 4px;
  color: var(--shell-text);
  line-height: 1.4;
}

.check-icon {
  color: #10b981;
  flex-shrink: 0;
  margin-left: var(--space-2);
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
