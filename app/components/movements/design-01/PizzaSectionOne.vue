<!-- components/movements/design-01/PizzaSectionOne.vue -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";
import type { MovementDefinition } from "~/types/movement";

const props = defineProps<{
  // Accepts either live.section03 or educational.section02
  data:
    | MovementDefinition["live"]["section03"]
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

  gsapCtx = gsap.context(() => {
    // -------------------------------------------------------------------------
    // 1. SCROLL-TRIGGERED ENTRANCE & PARALLAX
    // -------------------------------------------------------------------------
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
        ".section-bg-image",
        { scale: 1.15, filter: "brightness(0.55)" },
        {
          scale: 1.0,
          filter: "brightness(1)",
          duration: 1.6,
          onComplete: () => {
            gsap.to(".section-bg-image", {
              scale: 1.06,
              duration: 22,
              ease: "sine.out",
            });
          },
        },
      )
      .fromTo(
        ".section-header-block",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=1.1",
      )
      .fromTo(
        ".floating-item",
        { opacity: 0, y: 45 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.12 },
        "-=0.6",
      )
      .fromTo(
        ".guide-line",
        { opacity: 0, scaleX: 0, transformOrigin: "left" },
        { opacity: 1, scaleX: 1, duration: 1 },
        "-=0.8",
      );

    // -------------------------------------------------------------------------
    // 2. PARALLAX SCRUB EXIT
    // -------------------------------------------------------------------------
    const exitTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });

    exitTl.to(".section-bg-image", { yPercent: 20, ease: "none" }, 0);

    exitTl.to(
      ".section-content-wrap",
      { yPercent: -15, opacity: 0.2, ease: "power1.in" },
      0,
    );
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
  <section ref="sectionRef" id="section03" class="board-stage">
    <!-- =======================================================================
         1. 8 EDITORIAL GUIDE LINES
         ======================================================================= -->
    <svg
      class="editorial-guide-canvas"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1="18" x2="100" y2="60" class="guide-line" />
      <line
        x1="0"
        y1="19.2"
        x2="100"
        y2="61.2"
        class="guide-line guide-line-ghost"
      />
      <line
        x1="0"
        y1="20.5"
        x2="100"
        y2="62.5"
        class="guide-line guide-line-faint"
      />

      <line x1="88" y1="0" x2="-10" y2="100" class="guide-line" />
      <line
        x1="89.5"
        y1="0"
        x2="-8.5"
        y2="100"
        class="guide-line guide-line-ghost"
      />
      <line
        x1="91"
        y1="0"
        x2="-7"
        y2="100"
        class="guide-line guide-line-faint"
      />
    </svg>

    <!-- =======================================================================
         2. FULL-BLEED PHOTOGRAPHIC CANVAS
         ======================================================================= -->
    <div class="technical-bg-canvas" aria-hidden="true">
      <!-- Subtle drifting hairline vectors -->
      <div class="anim-line anim-line-h-1"></div>
      <div class="anim-line anim-line-h-2"></div>
      <div class="anim-line anim-line-v-1"></div>
      <div class="anim-line anim-line-v-2"></div>

      <!-- Technical drafting crosshair accents -->
      <span class="drafting-cross cross-tl">+</span>
      <span class="drafting-cross cross-tr">+</span>
      <span class="drafting-cross cross-bl">+</span>
      <span class="drafting-cross cross-br">+</span>
    </div>

    <!-- =======================================================================
         3. CONTENT WRAPPER
         ======================================================================= -->
    <div class="section-content-wrap">
      <!-- Section Header -->
      <header class="section-header-block">
        <div class="eyebrow-row">
          <span class="eyebrow-badge bg-border">{{ data.eyebrow }}</span>
          <span class="header-index bg-border"
            >STAGE {{ data.sectionNumber }}</span
          >
        </div>

        <h2 class="section-headline font-display">
          <span>{{ data.title }}</span>
          <em v-if="'titleHighlight' in data" class="headline-italic">
            {{ data.titleHighlight }}
          </em>
        </h2>

        <p class="section-subtitle">{{ data.subtitle }}</p>
      </header>

      <!-- ===================================================================
           MODE A: LIVE ROTATING PIZZA SLICES (Tier 3: Section 03)
           =================================================================== -->
      <div
        v-if="!isEducational && 'cards' in data"
        class="items-floating-matrix"
      >
        <article
          v-for="(slice, idx) in data.cards"
          :key="slice.id"
          class="floating-item slice-entity"
        >
          <!-- Floating Pizza Media -->
          <div class="entity-image-stage">
            <img
              :src="slice.media?.src || '/images/design01/hero-img-pizza.jpg'"
              :alt="slice.title"
              class="entity-img"
            />
            <div class="image-inner-shadow"></div>

            <!-- Top Indicator Bar -->
            <div class="entity-status-overlay">
              <!-- Available / Sold Out Status (slice 04 set to sold out for demonstration) -->
              <span class="status-indicator-pill bg-border">
                <span
                  class="status-dot"
                  :class="idx === 3 ? 'dot-soldout' : 'dot-available'"
                ></span>
                <span class="status-text">{{
                  idx === 3 ? "SOLD OUT" : "IN ROTATION"
                }}</span>
              </span>

              <!-- Most Popular Indicator (Item #1) -->
              <span v-if="idx === 0" class="badge-popular bg-border">
                <span class="status-dot dot-popular"></span>
                <span>MOST POPULAR</span>
              </span>
            </div>

            <!-- Price Tag -->
            <span class="entity-price bg-border font-display">
              {{ slice.priceOrMetric }}
            </span>
          </div>

          <!-- Metadata & Details -->
          <div class="entity-content-block">
            <div class="entity-meta-top">
              <span class="entity-category">{{ slice.category }}</span>
              <span class="entity-badge">{{ slice.badge }}</span>
            </div>

            <h3 class="entity-title font-display">{{ slice.title }}</h3>
            <p class="entity-desc">{{ slice.description }}</p>

            <!-- Curated Specs / Beverage Pairing -->
            <div v-if="slice.specs?.length" class="entity-specs-list">
              <div
                v-for="(spec, sIdx) in slice.specs"
                :key="sIdx"
                class="spec-line"
              >
                <span class="spec-label">{{ spec.label }}</span>
                <span class="spec-val">{{ spec.value }}</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- ===================================================================
           MODE B: EDUCATIONAL BREAKDOWN (Tier 2: Section 02)
           =================================================================== -->
      <div
        v-else-if="'featurePillars' in data"
        class="items-floating-matrix edu-matrix"
      >
        <article
          v-for="pillar in data.featurePillars"
          :key="pillar.id"
          class="floating-item pillar-entity bg-border"
        >
          <div class="entity-meta-top">
            <span class="status-dot dot-available"></span>
            <span class="entity-category">{{ pillar.tag }}</span>
          </div>
          <h3 class="entity-title font-display">{{ pillar.label }}</h3>
          <p class="entity-desc">{{ pillar.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =============================================================================
   REUSABLE TOKENS & UTILITIES
   ============================================================================= */
.bg-border {
  background-color: rgba(10, 10, 10, 0.45);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: var(--border-width-hairline) solid var(--color-border);
  box-sizing: border-box;
}

/* =============================================================================
   EDITORIAL RETICLE GUIDE LINES
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
   SECTION STAGE & BACKGROUND
   ============================================================================= */
.board-stage {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-block: clamp(6rem, 12vh, 10rem);
  padding-inline: var(--layout-gutter);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--color-canvas);
}

.section-canvas-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: var(--layer-base, 1);
  will-change: transform;
}

.section-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transform: scale(1);
  will-change: transform;
}

.section-soft-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.88) 0%,
    rgba(10, 10, 10, 0.55) 40%,
    rgba(10, 10, 10, 0.75) 75%,
    rgba(10, 10, 10, 0.95) 100%
  );
  pointer-events: none;
}

/* =============================================================================
   CONTENT CONTAINER
   ============================================================================= */
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
  max-width: 840px;
}

.eyebrow-row {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.eyebrow-badge,
.header-index {
  padding: var(--space-1) var(--space-3);
  font-family: var(--font-family-body);
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
  color: var(--color-text-primary);
}

.section-subtitle {
  font-family: var(--font-family-body);
  font-size: var(--text-size-body);
  color: var(--color-text-secondary);
  line-height: var(--leading-normal);
  max-width: 620px;
  margin: 0;
}

/* =============================================================================
   FLOATING PIZZA ENTITIES (BORDERLESS FLOATING CARDS)
   ============================================================================= */
.items-floating-matrix {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
  width: 100%;
}

.floating-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  background: transparent;
  border: none;
  box-shadow: none;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.floating-item:hover {
  transform: translateY(-6px);
}

/* Image Stage */
.entity-image-stage {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background-color: var(--color-surface);
}

.entity-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(0.9) contrast(1.05);
  transition:
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.3s ease;
}

.floating-item:hover .entity-img {
  transform: scale(1.05);
  filter: brightness(1) contrast(1.1);
}

.image-inner-shadow {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.65) 0%,
    rgba(10, 10, 10, 0) 40%,
    rgba(10, 10, 10, 0.7) 100%
  );
  pointer-events: none;
}

/* Status Overlay & Glowing Indicators */
.entity-status-overlay {
  position: absolute;
  top: var(--space-2);
  left: var(--space-2);
  right: var(--space-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-2);
  z-index: 2;
}

.status-indicator-pill,
.badge-popular {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.25rem 0.55rem;
  font-family: var(--font-family-body);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-primary);
}

/* Glowing Indicator Dots */
.status-dot {
  width: 7px;
  height: 7px;
  border-radius: var(--radius-pill);
  flex-shrink: 0;
}

.dot-available {
  background-color: #22c55e;
  box-shadow: 0 0 8px #22c55e;
  animation: pulse-green 2s infinite ease-in-out;
}

.dot-soldout {
  background-color: #ef4444;
  box-shadow: 0 0 8px #ef4444;
  animation: pulse-red 2.4s infinite ease-in-out;
}

.dot-popular {
  background-color: #eab308;
  box-shadow: 0 0 8px #eab308;
  animation: pulse-yellow 1.8s infinite ease-in-out;
}

@keyframes pulse-green {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 8px #22c55e;
  }
  50% {
    transform: scale(0.8);
    opacity: 0.5;
    box-shadow: 0 0 3px #22c55e;
  }
}

@keyframes pulse-red {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 8px #ef4444;
  }
  50% {
    transform: scale(0.8);
    opacity: 0.5;
    box-shadow: 0 0 3px #ef4444;
  }
}

@keyframes pulse-yellow {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 8px #eab308;
  }
  50% {
    transform: scale(0.85);
    opacity: 0.55;
    box-shadow: 0 0 4px #eab308;
  }
}

.entity-price {
  position: absolute;
  bottom: var(--space-2);
  right: var(--space-2);
  padding: 0.3rem 0.65rem;
  font-size: var(--text-size-body);
  color: var(--color-text-primary);
  z-index: 2;
}

/* Entity Details */
.entity-content-block {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.entity-meta-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-family-body);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
}

.entity-category {
  color: var(--color-primary-1);
}

.entity-badge {
  color: var(--color-text-muted);
}

.entity-title {
  font-family: var(--font-family-display);
  font-size: var(--text-size-title-sm);
  color: var(--color-text-primary);
  line-height: var(--leading-tight);
  margin: 0;
}

.entity-desc {
  font-family: var(--font-family-body);
  font-size: var(--text-size-sm);
  line-height: var(--leading-normal);
  color: var(--color-text-secondary);
  margin: 0;
}

/* Specifications / Pairings */
.entity-specs-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: var(--space-2);
  margin-top: var(--space-1);
  border-top: var(--border-width-hairline) solid var(--color-border-subtle);
  font-family: var(--font-family-body);
  font-size: var(--text-size-micro);
}

.spec-line {
  display: flex;
  justify-content: space-between;
  gap: var(--space-2);
}

.spec-label {
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

.spec-val {
  color: var(--color-text-primary);
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Educational Pillars */
.edu-matrix {
  grid-template-columns: repeat(3, 1fr);
}

.pillar-entity {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
/* =============================================================================
   PURE CSS ARCHITECTURAL GRID CANVAS
   ============================================================================= */
.technical-bg-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
  background-color: var(--color-canvas, #121212);
  /* 1px faint coordinate grid + subtle radial vignette */
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

/* Base Hairline Token */
.anim-line {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.08);
  pointer-events: none;
}

/* Horizontal Line 1: Slowly breathes vertically and shifts opacity */
.anim-line-h-1 {
  left: 0;
  right: 0;
  height: 1px;
  top: 18%;
  animation: float-horizontal-1 16s ease-in-out infinite alternate;
}

/* Horizontal Line 2: Subtle bottom anchor line */
.anim-line-h-2 {
  left: 0;
  right: 0;
  height: 1px;
  bottom: 24%;
  animation: float-horizontal-2 22s ease-in-out infinite alternate;
}

/* Vertical Line 1: Slow lateral drift across the left margin */
.anim-line-v-1 {
  top: 0;
  bottom: 0;
  width: 1px;
  left: 22%;
  animation: float-vertical-1 20s ease-in-out infinite alternate;
}

/* Vertical Line 2: Secondary framing line on the right side */
.anim-line-v-2 {
  top: 0;
  bottom: 0;
  width: 1px;
  right: 28%;
  animation: float-vertical-2 26s ease-in-out infinite alternate;
}

/* Micro-crosshairs in the quadrant corners */
.drafting-cross {
  position: absolute;
  font-family: var(--font-family-body, sans-serif);
  font-size: 13px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.16);
  user-select: none;
}

.cross-tl {
  top: 18%;
  left: 22%;
  transform: translate(-50%, -50%);
}
.cross-tr {
  top: 18%;
  right: 28%;
  transform: translate(50%, -50%);
}
.cross-bl {
  bottom: 24%;
  left: 22%;
  transform: translate(-50%, 50%);
}
.cross-br {
  bottom: 24%;
  right: 28%;
  transform: translate(50%, 50%);
}

/* Subtle floating animations */
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

@media (max-width: 768px) {
  .anim-line-v-1,
  .anim-line-v-2,
  .drafting-cross {
    display: none;
  }
}

/* =============================================================================
   RESPONSIVE OVERRIDES
   ============================================================================= */
@media (max-width: 1024px) {
  .items-floating-matrix {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-5);
  }
}

@media (max-width: 639px) {
  .items-floating-matrix {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .entity-image-stage {
    aspect-ratio: 16 / 10;
  }
}
</style>
