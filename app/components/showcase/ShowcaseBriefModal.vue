<!-- components/showcase/ShowcaseBriefModal.vue -->
<script setup lang="ts">
import { useShowcaseStore } from "~/stores/useShowcaseStore";

const store = useShowcaseStore();
const brief = computed(() => store.activeBrief);

const closeOnEsc = (e: KeyboardEvent) => {
  if (e.key === "Escape" && store.isBriefOpen) {
    store.closeBrief();
  }
};

onMounted(() => {
  window.addEventListener("keydown", closeOnEsc);
});

onUnmounted(() => {
  window.removeEventListener("keydown", closeOnEsc);
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="store.isBriefOpen"
      class="brief-modal-backdrop"
      @click="store.closeBrief"
    >
      <aside
        class="brief-drawer-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Client Brief"
        @click.stop
      >
        <!-- Header -->
        <header class="drawer-header">
          <div class="header-titles">
            <span class="eyebrow">DESIGN ASSIGNMENT</span>
            <h2 class="drawer-title font-display">Client Brief</h2>
          </div>

          <button
            type="button"
            class="btn-close"
            aria-label="Close Client Brief"
            @click="store.closeBrief"
          >
            <Icon name="lucide:x" class="close-icon" />
          </button>
        </header>

        <!-- Body -->
        <div v-if="brief" class="drawer-body">
          <!-- 01. The Client -->
          <section class="drawer-section">
            <span class="eyebrow">THE CLIENT</span>
            <div class="client-meta">
              <h3 class="client-name font-display">{{ brief.clientName }}</h3>
              <p class="body-small client-context">
                {{ brief.industry }} · {{ brief.location }}
              </p>
            </div>
          </section>

          <hr class="section-divider" />

          <!-- 02. Aesthetic Direction -->
          <section class="drawer-section">
            <span class="eyebrow">AESTHETIC DIRECTION</span>
            <div class="takeaway-banner">
              <p class="body-standard">{{ brief.aestheticGoal }}</p>
            </div>
          </section>

          <hr class="section-divider" />

          <!-- 03. The Challenge -->
          <section class="drawer-section">
            <span class="eyebrow">THE CORE CHALLENGE</span>
            <p class="body-lead">{{ brief.coreChallenge }}</p>
          </section>

          <hr class="section-divider" />

          <!-- 04. Brand Tone -->
          <section
            v-if="brief.brandTone && brief.brandTone.length"
            class="drawer-section"
          >
            <span class="eyebrow">BRAND TONE</span>
            <div class="tone-tags-wrap">
              <span
                v-for="tone in brief.brandTone"
                :key="tone"
                class="tone-pill"
              >
                {{ tone }}
              </span>
            </div>
          </section>

          <hr class="section-divider" />

          <!-- 05. Required Deliverables -->
          <section
            v-if="brief.deliverables && brief.deliverables.length"
            class="drawer-section"
          >
            <span class="eyebrow">REQUIRED DELIVERABLES</span>
            <div class="deliverables-stack">
              <div
                v-for="(item, idx) in brief.deliverables"
                :key="idx"
                class="deliverable-card"
              >
                <div class="deliverable-lead">
                  <span class="accent-index">{{
                    String(idx + 1).padStart(2, "0")
                  }}</span>
                  <span class="body-standard">{{ item }}</span>
                </div>
                <Icon name="lucide:check" class="check-icon" />
              </div>
            </div>
          </section>
        </div>

        <!-- Fallback -->
        <div v-else class="drawer-empty">
          <p class="body-standard">No client brief loaded for this movement.</p>
        </div>
      </aside>
    </div>
  </Teleport>
</template>

<style scoped>
.brief-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.72);
  display: flex;
  justify-content: flex-end;
  animation: fadeIn 0.2s ease forwards;
}

.brief-drawer-panel {
  width: 100%;
  max-width: 560px;
  height: 100%;
  background-color: #191919;
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

/* Header */
.drawer-header {
  padding: 1.5rem 1.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
}

.header-titles {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.drawer-title {
  font-size: 1.35rem;
  font-weight: 600;
  color: #ffffff;
}

.btn-close {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #d4a373;
  width: 34px;
  height: 34px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    color 0.15s ease;
}

.btn-close:hover {
  border-color: #d4a373;
  color: #ffffff;
}

.close-icon {
  font-size: 1.1rem;
}

/* Scroll Area */
.drawer-body {
  padding: 1.75rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.drawer-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Divider */
.section-divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  margin: 0;
}

/* Shared Typography Scale */
.eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #d4a373;
  font-weight: 600;
}

.body-lead {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #ffffff;
}

.body-standard {
  font-size: 0.9rem;
  line-height: 1.55;
  color: #f0f0f0;
}

.body-small {
  font-size: 0.82rem;
  line-height: 1.5;
  color: #f0f0f0;
}

/* Client Block */
.client-meta {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.client-name {
  font-size: 1.3rem;
  color: #ffffff;
}

.client-context {
  color: #aaa;
}

/* Accent Banner */
.takeaway-banner {
  background-color: #161616;
  border-left: 3px solid #d4a373;
  border-radius: 0 4px 4px 0;
  padding: 1rem 1.1rem;
}

/* Tone Tag Pills */
.tone-tags-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tone-pill {
  background-color: #161616;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  padding: 0.35rem 0.75rem;
  font-size: 0.8rem;
  color: #f0f0f0;
}

/* Deliverable Cards */
.deliverables-stack {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.deliverable-card {
  background-color: #161616;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  padding: 0.85rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.deliverable-lead {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.accent-index {
  font-family: monospace;
  font-size: 0.82rem;
  color: #d4a373;
  font-weight: 700;
  flex-shrink: 0;
}

.check-icon {
  font-size: 1rem;
  color: #d4a373;
  flex-shrink: 0;
}

.drawer-empty {
  padding: 2.5rem;
}

/* Responsive */
@media (max-width: 640px) {
  .brief-drawer-panel {
    max-width: 100%;
    border-left: none;
  }

  .drawer-header {
    padding: 1.25rem 1.5rem;
  }

  .drawer-body {
    padding: 1.5rem;
    gap: 1.5rem;
  }
}
</style>
