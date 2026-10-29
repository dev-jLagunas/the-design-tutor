<!-- components/movements/design-01/PizzaSectionFive.vue -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";
import type { MovementDefinition } from "~/types/movement";

const props = defineProps<{
  data:
    | MovementDefinition["live"]["section02"]
    | MovementDefinition["educational"]["section02"];
  isEducational?: boolean;
}>();

const sectionRef = ref<HTMLElement | null>(null);
let gsapCtx: any = null;

const initAnimations = async () => {
  if (import.meta.server) return;
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");

  gsap.registerPlugin(ScrollTrigger);

  await nextTick();
  if (gsapCtx) gsapCtx.revert();
  if (!sectionRef.value) return;

  gsapCtx = gsap.context(() => {
    // 1. Entrance Trigger
    const enterTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power4.out" },
    });

    enterTl
      .fromTo(
        ".section-header-block",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.9 },
      )
      .fromTo(
        ".pie-stage",
        { opacity: 0, scale: 0.85, rotate: -20 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1.2 },
        "-=0.7",
      )
      .fromTo(
        [".story-narrative-container", ".core-values-matrix"],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15 },
        "-=0.8",
      )
      .fromTo(
        ".manifesto-block",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.75 },
        "-=0.5",
      );

    // 2. Parallax Dynamic Scrub
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    scrollTl.to(
      ".story-narrative-container",
      { yPercent: -10, ease: "none" },
      0,
    );
    scrollTl.to(".core-values-matrix", { yPercent: 10, ease: "none" }, 0);
    scrollTl.to(".spinning-pie-img", { rotate: "+=90", ease: "none" }, 0);
    scrollTl.to(".technical-bg-canvas", { yPercent: 6, ease: "none" }, 0);
  }, sectionRef.value);
};

onMounted(() => {
  initAnimations();
});

watch(
  () => props.data,
  () => {
    initAnimations();
  },
  { deep: true },
);

onBeforeUnmount(() => {
  if (gsapCtx) gsapCtx.revert();
});
</script>

<template>
  <section ref="sectionRef" id="section-story" class="story-stage">
    <!-- =======================================================================
         1. ARCHITECTURAL RETICLE & DRIFTING DRAFT LINES
         ======================================================================= -->
    <div class="technical-bg-canvas" aria-hidden="true">
      <div class="anim-line anim-line-h-1"></div>
      <div class="anim-line anim-line-h-2"></div>
      <div class="anim-line anim-line-v-1"></div>
      <div class="anim-line anim-line-v-2"></div>

      <span class="drafting-cross cross-tl">+</span>
      <span class="drafting-cross cross-tr">+</span>
      <span class="drafting-cross cross-bl">+</span>
      <span class="drafting-cross cross-br">+</span>
    </div>

    <!-- =======================================================================
         2. EDITORIAL RETICLE GUIDE LINES (SVG VECTOR STROKES)
         ======================================================================= -->
    <svg
      class="editorial-guide-canvas"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1="26" x2="100" y2="74" class="guide-line" />
      <line
        x1="0"
        y1="27.2"
        x2="100"
        y2="75.2"
        class="guide-line guide-line-ghost"
      />
      <line
        x1="0"
        y1="28.5"
        x2="100"
        y2="76.5"
        class="guide-line guide-line-faint"
      />

      <line x1="72" y1="0" x2="-28" y2="100" class="guide-line" />
      <line
        x1="73.5"
        y1="0"
        x2="-26.5"
        y2="100"
        class="guide-line guide-line-ghost"
      />
      <line
        x1="75"
        y1="0"
        x2="-25"
        y2="100"
        class="guide-line guide-line-faint"
      />
    </svg>

    <!-- =======================================================================
         3. SECTION STAGE CONTENT WRAPPER
         ======================================================================= -->
    <div class="section-content-wrap">
      <!-- Section Header -->
      <header class="section-header-block">
        <div class="eyebrow-row">
          <span class="eyebrow-badge bg-border">{{ data.eyebrow }}</span>
        </div>

        <h2 class="section-headline font-display">
          <span>{{ data.title }}</span>
          <em v-if="data.titleHighlight" class="headline-italic">
            {{ data.titleHighlight }}
          </em>
        </h2>

        <p class="section-subtitle">{{ data.subtitle }}</p>
      </header>

      <!-- =====================================================================
           STORY SPREAD ARENA (NARRATIVE + ROTATING PIE + CORE VALUES)
           ===================================================================== -->
      <div class="story-spread-arena">
        <!-- 1. Left Wing: Narrative Block -->
        <div class="story-narrative-container">
          <article v-if="data.storyParagraphs?.length" class="orbit-story-card">
            <div class="card-meta-line">
              <Icon name="lucide:flame" class="meta-icon" />
              <span>THE FOUNDRY NARRATIVE</span>
            </div>
            <div class="story-paragraphs">
              <p
                v-for="(para, pIdx) in data.storyParagraphs"
                :key="pIdx"
                class="story-text"
              >
                {{ para }}
              </p>
            </div>
          </article>
        </div>

        <!-- 2. Center Wing: Spinning Whole Cast-Iron Deep Dish Pie -->
        <div class="pie-stage" aria-label="Rotating Whole Pan Deep Dish Pizza">
          <div class="pie-disc-wrap">
            <img
              src="/images/design01/whole-pizza-img.png"
              alt="Freshly baked cast-iron 14-inch whole deep dish pizza viewed from top"
              class="spinning-pie-img"
            />
            <div class="pie-ambient-shadow"></div>
            <div class="pie-reticle-ring"></div>
          </div>

          <!-- Pan Status Tag -->
          <div class="pie-hud-pill bg-border">
            <span class="status-dot dot-baking"></span>
            <span>14" READY TO GO</span>
          </div>
        </div>

        <!-- 3. Right Wing: Core Values Matrix -->
        <div v-if="data.coreValues?.length" class="core-values-matrix">
          <article
            v-for="(val, idx) in data.coreValues"
            :key="idx"
            class="orbit-value-card bg-border"
          >
            <div class="value-header">
              <span class="value-num">{{ val.index }}</span>
              <span class="value-tag">{{ val.label }}</span>
            </div>
            <h3 class="value-title font-display">{{ val.title }}</h3>
            <p class="value-desc">{{ val.description }}</p>
          </article>
        </div>
      </div>

      <!-- =====================================================================
           CLOSING HOUSE COMMITMENT BANNER
           ===================================================================== -->
      <footer v-if="data.closingManifesto" class="manifesto-block bg-border">
        <div class="manifesto-indicator">
          <Icon name="lucide:shield-check" class="manifesto-icon" />
          <span>HOUSE COMMITMENT</span>
        </div>
        <p class="manifesto-text">{{ data.closingManifesto }}</p>
      </footer>
    </div>
  </section>
</template>

<style scoped>
/* =============================================================================
   REUSABLE BACKDROP UTILITY
   ============================================================================= */
.bg-border {
  background-color: rgba(10, 10, 10, 0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: var(--border-width-hairline) solid var(--color-border);
  box-sizing: border-box;
}

/* =============================================================================
   PURE CSS ARCHITECTURAL GRID BACKGROUND
   ============================================================================= */
.technical-bg-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
  background-color: var(--color-canvas);
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    radial-gradient(
      circle at 50% 50%,
      rgba(20, 20, 20, 0) 0%,
      rgba(10, 10, 10, 0.95) 100%
    );
  background-size:
    120px 120px,
    120px 120px,
    100% 100%;
}

.anim-line {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.08);
  pointer-events: none;
}

.anim-line-h-1 {
  left: 0;
  right: 0;
  height: 1px;
  top: 18%;
  animation: float-horizontal-1 16s ease-in-out infinite alternate;
}

.anim-line-h-2 {
  left: 0;
  right: 0;
  height: 1px;
  bottom: 20%;
  animation: float-horizontal-2 22s ease-in-out infinite alternate;
}

.anim-line-v-1 {
  top: 0;
  bottom: 0;
  width: 1px;
  left: 18%;
  animation: float-vertical-1 20s ease-in-out infinite alternate;
}

.anim-line-v-2 {
  top: 0;
  bottom: 0;
  width: 1px;
  right: 18%;
  animation: float-vertical-2 26s ease-in-out infinite alternate;
}

.drafting-cross {
  position: absolute;
  font-family: var(--font-family-body);
  font-size: var(--text-size-sm);
  line-height: 1;
  color: rgba(255, 255, 255, 0.16);
  user-select: none;
}

.cross-tl {
  top: 18%;
  left: 18%;
  transform: translate(-50%, -50%);
}
.cross-tr {
  top: 18%;
  right: 18%;
  transform: translate(50%, -50%);
}
.cross-bl {
  bottom: 20%;
  left: 18%;
  transform: translate(-50%, 50%);
}
.cross-br {
  bottom: 20%;
  right: 18%;
  transform: translate(50%, 50%);
}

@keyframes float-horizontal-1 {
  0% {
    transform: translateY(0);
    opacity: 0.04;
  }
  50% {
    opacity: 0.12;
  }
  100% {
    transform: translateY(28px);
    opacity: 0.06;
  }
}

@keyframes float-horizontal-2 {
  0% {
    transform: translateY(0);
    opacity: 0.08;
  }
  50% {
    opacity: 0.03;
  }
  100% {
    transform: translateY(-22px);
    opacity: 0.11;
  }
}

@keyframes float-vertical-1 {
  0% {
    transform: translateX(0);
    opacity: 0.05;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    transform: translateX(-35px);
    opacity: 0.04;
  }
}

@keyframes float-vertical-2 {
  0% {
    transform: translateX(0);
    opacity: 0.09;
  }
  50% {
    opacity: 0.03;
  }
  100% {
    transform: translateX(30px);
    opacity: 0.07;
  }
}

/* =============================================================================
   EDITORIAL GUIDE CANVAS (RETICLE)
   ============================================================================= */
.editorial-guide-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  pointer-events: none;
  overflow: visible;
}

.editorial-guide-canvas .guide-line {
  stroke: rgba(255, 255, 255, 0.05);
  stroke-width: 1px;
  vector-effect: non-scaling-stroke;
}

.editorial-guide-canvas .guide-line-ghost {
  stroke: rgba(255, 255, 255, 0.025);
}

.editorial-guide-canvas .guide-line-faint {
  stroke: rgba(255, 255, 255, 0.015);
}

/* =============================================================================
   SECTION STAGE & BOUNDS
   ============================================================================= */
.story-stage {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-block: clamp(5rem, 10vh, 8rem);
  padding-inline: var(--layout-gutter);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--color-canvas);
  box-sizing: border-box;
}

.section-content-wrap {
  position: relative;
  z-index: var(--layer-above, 10);
  width: min(var(--layout-container-max), 100%);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-7);
}

/* Header */
.section-header-block {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 860px;
}

.eyebrow-row {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.eyebrow-badge,
.header-index {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.section-headline {
  font-family: var(--font-family-display);
  font-size: var(--text-size-title-lg);
  line-height: var(--leading-tight);
  color: var(--color-text-primary);
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.headline-italic {
  font-style: italic;
  font-weight: 300;
  padding-left: 1rem;
  color: var(--color-text-primary);
}

.section-subtitle {
  font-family: var(--font-family-body);
  font-size: var(--text-size-body);
  color: var(--color-text-secondary);
  line-height: var(--leading-normal);
  max-width: 660px;
  margin: 0;
}

/* =============================================================================
   STORY SPREAD ARENA (3-WING COMPOSITION)
   ============================================================================= */
.story-spread-arena {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

/* -----------------------------------------------------------------------------
   CENTER SPINNING PIZZA DISC
   ----------------------------------------------------------------------------- */
.pie-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  position: relative;
  z-index: 2;
}

.pie-disc-wrap {
  position: relative;
  width: 100%;
  max-width: 380px;
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-pill);
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinning-pie-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-pill);
  display: block;
  transform-origin: 50% 50%;
  animation: pizza-spin 28s linear infinite;
  box-shadow:
    0 0 0 2px rgba(255, 255, 255, 0.15),
    0 24px 50px rgba(0, 0, 0, 0.9);
}

@keyframes pizza-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.pie-ambient-shadow {
  position: absolute;
  inset: -12px;
  border-radius: var(--radius-pill);
  box-shadow: inset 0 0 35px rgba(0, 0, 0, 0.8);
  pointer-events: none;
}

.pie-reticle-ring {
  position: absolute;
  inset: -16px;
  border-radius: var(--radius-pill);
  border: 1px dashed rgba(255, 255, 255, 0.12);
  pointer-events: none;
}

.pie-hud-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.35rem 0.8rem;
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-primary);
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: var(--radius-pill);
  flex-shrink: 0;
}

.dot-baking {
  background-color: #e5a93c;
  box-shadow: 0 0 8px #e5a93c;
  animation: pulse-bake 2s infinite ease-in-out;
}

@keyframes pulse-bake {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 8px #e5a93c;
  }
  50% {
    transform: scale(0.8);
    opacity: 0.55;
    box-shadow: 0 0 3px #e5a93c;
  }
}

/* -----------------------------------------------------------------------------
   NARRATIVE & VALUE CARDS
   ----------------------------------------------------------------------------- */
.story-narrative-container {
  width: 100%;
}

.orbit-story-card,
.orbit-value-card {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  transition:
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.25s ease;
}

.orbit-story-card {
  border: none;
}

.orbit-story-card:hover,
.orbit-value-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.25);
}

.card-meta-line {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  color: var(--color-primary-1);
}

.meta-icon {
  font-size: 0.95rem;
}

.story-paragraphs {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.story-text {
  font-family: var(--font-family-body);
  font-size: var(--text-size-sm);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  margin: 0;
}

/* Core Values Matrix */
.core-values-matrix {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

.value-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.value-num {
  font-size: var(--text-size-title-sm);
  color: var(--color-primary-1);
  font-weight: 700;
}

.value-tag {
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  color: var(--color-highlight);
}

.value-title {
  font-family: var(--font-family-display);
  font-size: var(--text-size-title-sm);
  color: var(--color-text-primary);
  line-height: var(--leading-tight);
  margin: 0;
}

.value-desc {
  font-family: var(--font-family-body);
  font-size: var(--text-size-xs);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  margin: 0;
}

/* =============================================================================
   CLOSING MANIFESTO BANNER
   ============================================================================= */
.manifesto-block {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-5);
  width: 100%;
  margin-top: 2rem;
}

.manifesto-indicator {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-primary-1);
  white-space: nowrap;
}

.manifesto-icon {
  font-size: 0.95rem;
}

.manifesto-text {
  font-size: var(--text-size-xs);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
  margin: 0;
}

/* =============================================================================
   RESPONSIVE DESIGN SYSTEM
   ============================================================================= */

/* TABLET BREAKPOINT (768px - 1199px): 2 on top, 1 spanning bottom */
@media (min-width: 768px) and (max-width: 1199px) {
  .core-values-matrix {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }

  .core-values-matrix .orbit-value-card:last-child {
    grid-column: 1 / -1;
  }

  .pie-disc-wrap {
    max-width: 300px;
  }
}

/* DESKTOP BREAKPOINT (>= 1200px): 3-Column Asymmetric Spread */
@media (min-width: 1200px) {
  .story-spread-arena {
    display: grid;
    grid-template-columns: 1fr minmax(320px, 380px) 1.15fr;
    align-items: center;
    gap: var(--space-6);
    min-height: 520px;
  }

  .core-values-matrix {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .core-values-matrix .orbit-value-card:last-child {
    grid-column: auto;
  }
}

/* MOBILE REFINEMENTS (< 768px) */
@media (max-width: 767px) {
  .pie-stage {
    order: -1;
  }

  .pie-disc-wrap {
    max-width: 240px;
  }

  .manifesto-block {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2);
  }

  .anim-line-v-1,
  .anim-line-v-2,
  .drafting-cross {
    display: none;
  }
}
</style>
