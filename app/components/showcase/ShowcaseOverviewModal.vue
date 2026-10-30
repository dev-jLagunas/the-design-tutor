<!-- components/showcase/ShowcaseOverviewModal.vue -->
<script setup lang="ts">
import { useShowcaseStore } from "~/stores/useShowcaseStore";

const store = useShowcaseStore();
const caseStudy = computed(() => store.activeCaseStudy);

const closeOnEsc = (e: KeyboardEvent) => {
  if (e.key === "Escape" && store.isCaseStudyOpen) {
    store.closeCaseStudy();
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
      v-if="store.isCaseStudyOpen"
      class="overview-modal-backdrop"
      @click="store.closeCaseStudy"
    >
      <aside
        class="overview-drawer-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Case Study Rationale"
        @click.stop
      >
        <!-- Header -->
        <header class="drawer-header">
          <div class="header-titles">
            <span class="eyebrow">DESIGN RATIONALE</span>
            <h2 class="drawer-title font-display">Case Study</h2>
          </div>

          <button
            type="button"
            class="btn-close"
            aria-label="Close Case Study"
            @click="store.closeCaseStudy"
          >
            <Icon name="lucide:x" class="close-icon" />
          </button>
        </header>

        <!-- Body -->
        <div v-if="caseStudy" class="drawer-body">
          <!-- 01. The Angle -->
          <section class="drawer-section">
            <span class="eyebrow">THE ANGLE</span>
            <p class="body-lead">{{ caseStudy.angle }}</p>
          </section>

          <hr class="section-divider" />

          <!-- 02. Key Decisions & The Why -->
          <section
            v-if="caseStudy.decisions && caseStudy.decisions.length"
            class="drawer-section"
          >
            <span class="eyebrow">KEY DECISIONS & THE WHY</span>
            <div class="decisions-stack">
              <article
                v-for="(item, idx) in caseStudy.decisions"
                :key="idx"
                class="decision-card"
              >
                <div class="card-head">
                  <span class="accent-index">{{
                    String(idx + 1).padStart(2, "0")
                  }}</span>
                  <h3 class="card-title">{{ item.area }}</h3>
                </div>

                <p class="body-standard">{{ item.choice }}</p>

                <div class="why-callout">
                  <span class="accent-label">Why:</span>
                  <p class="body-small">{{ item.rationale }}</p>
                </div>
              </article>
            </div>
          </section>

          <hr class="section-divider" />

          <!-- 03. What Got Scrapped -->
          <section
            v-if="caseStudy.scrapped && caseStudy.scrapped.length"
            class="drawer-section"
          >
            <span class="eyebrow">WHAT GOT SCRAPPED</span>
            <ul class="scrapped-list">
              <li
                v-for="(trial, sIdx) in caseStudy.scrapped"
                :key="sIdx"
                class="body-standard"
              >
                {{ trial }}
              </li>
            </ul>
          </section>

          <hr class="section-divider" />

          <!-- 04. Takeaway -->
          <section v-if="caseStudy.takeaway" class="drawer-section">
            <span class="eyebrow">CORE TAKEAWAY</span>
            <div class="takeaway-banner">
              <p class="body-standard">{{ caseStudy.takeaway }}</p>
            </div>
          </section>

          <hr class="section-divider" />

          <!-- 05. Commercial Hypothesis -->
          <section v-if="caseStudy.hypothesis" class="drawer-section">
            <span class="eyebrow">COMMERCIAL HYPOTHESIS</span>
            <p class="body-lead">{{ caseStudy.hypothesis.primaryGoal }}</p>

            <div
              v-if="
                caseStudy.hypothesis.signals &&
                caseStudy.hypothesis.signals.length
              "
              class="signals-stack"
            >
              <div
                v-for="(signal, sigIdx) in caseStudy.hypothesis.signals"
                :key="sigIdx"
                class="signal-card"
              >
                <span class="accent-label">{{ signal.vector }}</span>
                <p class="body-small">{{ signal.expectedOutcome }}</p>
              </div>
            </div>
          </section>
        </div>

        <!-- Fallback -->
        <div v-else class="drawer-empty">
          <p class="body-standard">
            No case study rationale defined for this design.
          </p>
        </div>
      </aside>
    </div>
  </Teleport>
</template>

<style scoped>
.overview-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.72);
  display: flex;
  justify-content: flex-start;
  animation: fadeIn 0.2s ease forwards;
}

.overview-drawer-panel {
  width: 100%;
  max-width: 560px;
  height: 100%;
  background-color: #191919;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: slideInLeft 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
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

/* Structural Divider */
.section-divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  margin: 0;
}

/* Strict Typography Scale: Eyebrow, Lead/Standard, Small */
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

/* Accent Highlights */
.accent-index {
  font-family: monospace;
  font-size: 0.85rem;
  color: #d4a373;
  font-weight: 700;
}

.accent-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: #d4a373;
  display: inline-block;
}

/* Decision Cards */
.decisions-stack {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.decision-card {
  background-color: #161616;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.card-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card-title {
  font-size: 0.92rem;
  font-weight: 600;
  color: #ffffff;
}

.why-callout {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  padding-top: 0.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

/* Scrapped List */
.scrapped-list {
  padding-left: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.scrapped-list li {
  padding-left: 0.2rem;
}

/* Takeaway Banner */
.takeaway-banner {
  background-color: #161616;
  border-left: 3px solid #d4a373;
  border-radius: 0 4px 4px 0;
  padding: 1rem 1.1rem;
}

/* Hypothesis Signals */
.signals-stack {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-top: 0.25rem;
}

.signal-card {
  background-color: #161616;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  padding: 0.85rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.drawer-empty {
  padding: 2.5rem;
}

/* Responsive */
@media (max-width: 640px) {
  .overview-drawer-panel {
    max-width: 100%;
    border-right: none;
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
