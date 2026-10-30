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
        class="overview-drawer-panel flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Design Overview and Rationale"
        @click.stop
      >
        <!-- Modal Top Bar -->
        <header class="drawer-header flex-between">
          <div class="header-meta flex-col">
            <span class="meta-tag text-micro-caps">Design Rationale</span>
            <h2 class="drawer-title font-display">System Overview</h2>
          </div>

          <button
            type="button"
            class="btn-close flex-center"
            aria-label="Close Overview Modal"
            @click="store.closeCaseStudy"
          >
            <Icon name="lucide:x" class="close-icon" />
          </button>
        </header>

        <!-- Drawer Content Body -->
        <div v-if="caseStudy" class="drawer-body flex-col">
          <!-- 01. High-Level Strategy & Goal -->
          <section class="overview-block flex-col">
            <h3 class="block-label text-micro-caps">01 / Business Objective</h3>
            <p class="body-lead">{{ caseStudy.businessGoal }}</p>
          </section>

          <!-- 02. Target Mindset -->
          <section class="overview-block flex-col">
            <h3 class="block-label text-micro-caps">
              02 / User Mindset & Context
            </h3>
            <p class="body-lead">{{ caseStudy.targetUserMindset }}</p>
          </section>

          <!-- 03. Competitor Contrast Matrix -->
          <section class="overview-block flex-col">
            <h3 class="block-label text-micro-caps">
              03 / Strategic Differentiation
            </h3>
            <div class="comparison-grid">
              <div class="contrast-col industry-norm">
                <span class="sub-label">Standard Industry Norms</span>
                <p>
                  {{ caseStudy.competitorComparison.standardIndustryNorms }}
                </p>
              </div>
              <div class="contrast-col our-choice">
                <span class="sub-label">Our Strategic Choice</span>
                <p>{{ caseStudy.competitorComparison.ourStrategicChoice }}</p>
              </div>
            </div>
          </section>

          <!-- 04. Data & Industry Research Sources -->
          <section
            v-if="caseStudy.industrySources && caseStudy.industrySources.length"
            class="overview-block flex-col"
          >
            <h3 class="block-label text-micro-caps">
              04 / Industry Benchmarks
            </h3>
            <div class="sources-stack flex-col">
              <article
                v-for="(item, idx) in caseStudy.industrySources"
                :key="idx"
                class="source-card flex-col"
              >
                <div class="source-header flex-between">
                  <span class="source-name font-body">{{ item.source }}</span>
                </div>
                <p class="source-insight font-body">{{ item.insight }}</p>
              </article>
            </div>
          </section>

          <!-- 05. Section-by-Section Structural Breakdown -->
          <section
            v-if="
              caseStudy.sectionRationales && caseStudy.sectionRationales.length
            "
            class="overview-block flex-col"
          >
            <h3 class="block-label text-micro-caps">05 / Section Decisions</h3>
            <div class="rationale-stack flex-col">
              <article
                v-for="(slotData, idx) in caseStudy.sectionRationales"
                :key="idx"
                class="rationale-item flex-col"
              >
                <div class="slot-badge-bar flex-between">
                  <span class="slot-tag font-body text-micro-caps">
                    {{ slotData.slot }}
                  </span>
                </div>

                <p class="slot-intent font-body">
                  <strong>Intent:</strong> {{ slotData.intent }}
                </p>

                <div class="decisions-box">
                  <span class="decision-sub-label">Key Decisions:</span>
                  <ul class="decisions-list">
                    <li
                      v-for="(decision, dIdx) in slotData.keyDecisions"
                      :key="dIdx"
                    >
                      {{ decision }}
                    </li>
                  </ul>
                </div>

                <div
                  v-if="slotData.pitfallToAvoid"
                  class="pitfall-warning flex-col"
                >
                  <span class="pitfall-label text-micro-caps"
                    >Pitfall Avoided</span
                  >
                  <p class="pitfall-text font-body">
                    {{ slotData.pitfallToAvoid }}
                  </p>
                </div>
              </article>
            </div>
          </section>
        </div>

        <!-- Fallback if caseStudy object is missing -->
        <div v-else class="drawer-empty flex-center">
          <p class="font-body">
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
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: flex-start;
  animation: fadeIn 0.2s ease forwards;
}

.overview-drawer-panel {
  width: 100%;
  max-width: 540px;
  height: 100%;
  background-color: var(--shell-bg, #121212);
  border-right: 1px solid var(--shell-border, rgba(255, 255, 255, 0.12));
  color: var(--shell-text, #f5f4f0);
  box-shadow: 20px 0 50px rgba(0, 0, 0, 0.6);
  animation: slideInLeft 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  overflow: hidden;
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
  border-bottom: 1px solid var(--shell-border, rgba(255, 255, 255, 0.1));
  flex-shrink: 0;
}

.meta-tag {
  color: var(--shell-accent-gold, #e5a93c);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
}

.drawer-title {
  font-size: 1.35rem;
  margin-top: 0.25rem;
}

.btn-close {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: transparent;
  border: 1px solid var(--shell-border, rgba(255, 255, 255, 0.1));
  color: var(--shell-muted, #8a8884);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-close:hover {
  color: var(--shell-text, #f5f4f0);
  border-color: var(--shell-text, #f5f4f0);
}

.close-icon {
  font-size: 1.15rem;
}

/* Body */
.drawer-body {
  padding: 1.75rem;
  overflow-y: auto;
  gap: 2.25rem;
}

.overview-block {
  gap: 0.85rem;
}

.block-label {
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  color: var(--shell-muted, #8a8884);
  border-bottom: 1px solid var(--shell-border, rgba(255, 255, 255, 0.08));
  padding-bottom: 0.4rem;
}

.body-lead {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--shell-text, #f5f4f0);
}

/* Competitor Grid */
.comparison-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contrast-col {
  padding: 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
  line-height: 1.5;
}

.industry-norm {
  background-color: var(--shell-surface, #1a1a1a);
  border: 1px solid var(--shell-border, rgba(255, 255, 255, 0.08));
  color: var(--shell-muted, #8a8884);
}

.our-choice {
  background-color: rgba(229, 169, 60, 0.08);
  border: 1px solid rgba(229, 169, 60, 0.25);
  color: var(--shell-text, #f5f4f0);
}

.sub-label {
  display: block;
  font-family: monospace;
  font-size: 0.7rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  letter-spacing: 0.04em;
}

.our-choice .sub-label {
  color: var(--shell-accent-gold, #e5a93c);
}

/* Industry Sources */
.sources-stack {
  gap: 0.75rem;
}

.source-card {
  padding: 1rem;
  background-color: var(--shell-surface, #1a1a1a);
  border: 1px solid var(--shell-border, rgba(255, 255, 255, 0.08));
  border-radius: 6px;
  gap: 0.5rem;
}

.source-name {
  font-size: 0.75rem;
  color: var(--shell-accent-gold, #e5a93c);
}

.source-insight {
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--shell-text, #f5f4f0);
}

/* Section Rationales */
.rationale-stack {
  gap: 1.25rem;
}

.rationale-item {
  padding: 1.25rem;
  background-color: var(--shell-surface, #1a1a1a);
  border: 1px solid var(--shell-border, rgba(255, 255, 255, 0.1));
  border-radius: 6px;
  gap: 0.85rem;
}

.slot-tag {
  background-color: var(--shell-bg, #121212);
  border: 1px solid var(--shell-border, rgba(255, 255, 255, 0.15));
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.65rem;
  color: var(--shell-accent-gold, #e5a93c);
}

.slot-intent {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--shell-text, #f5f4f0);
}

.decision-sub-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--shell-muted, #8a8884);
  margin-bottom: 0.4rem;
}

.decisions-list {
  padding-left: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.decisions-list li {
  font-size: 0.82rem;
  line-height: 1.45;
  color: var(--shell-muted, #8a8884);
}

.pitfall-warning {
  margin-top: 0.25rem;
  padding: 0.75rem;
  background-color: rgba(255, 85, 85, 0.08);
  border-left: 2px solid #ff5555;
  gap: 0.25rem;
}

.pitfall-label {
  font-size: 0.65rem;
  color: #ff5555;
  letter-spacing: 0.08em;
}

.pitfall-text {
  font-size: 0.78rem;
  color: var(--shell-text, #f5f4f0);
  line-height: 1.4;
}

.drawer-empty {
  padding: 3rem;
  color: var(--shell-muted, #8a8884);
  font-size: 0.85rem;
}

@media (max-width: 640px) {
  .overview-drawer-panel {
    max-width: 100%;
  }
}
</style>
