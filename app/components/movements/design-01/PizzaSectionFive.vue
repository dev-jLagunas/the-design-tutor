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
        [".orbit-left-quadrant", ".orbit-right-quadrant"],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15 },
        "-=0.8",
      )
      .fromTo(
        [".socials-pod-strip", ".manifesto-block"],
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.75, stagger: 0.1 },
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

    scrollTl.to(".orbit-left-quadrant", { yPercent: -12, ease: "none" }, 0);
    scrollTl.to(".orbit-right-quadrant", { yPercent: 12, ease: "none" }, 0);
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
         1. ARCHITECTURAL RETICLE & DRIFTING DRAFT LINES (SECTION 3 REUSE)
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

      <!-- =====================================================================
           RADIAL PIZZA ORBIT ARENA
           ===================================================================== -->
      <div class="orbit-arena">
        <!-- Center Spinning Whole Deep Dish Pie (Top-Down View) -->
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
          <div class="pie-hud-pill bg-border font-mono">
            <span class="status-dot dot-baking"></span>
            <span>14" CAST-IRON BAKE ROTATION</span>
          </div>
        </div>

        <!-- Left Orbit Quadrant: Story Narrative -->
        <div class="orbit-left-quadrant">
          <article
            v-if="data.storyParagraphs?.length"
            class="orbit-story-card bg-border"
          >
            <div class="card-meta-line font-mono">
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

          <!-- Core Value 01 -->
          <article
            v-if="data.coreValues?.[0]"
            class="orbit-value-card bg-border"
          >
            <div class="value-header">
              <span class="value-num font-mono">{{
                data.coreValues[0].index
              }}</span>
              <span class="value-tag font-mono">{{
                data.coreValues[0].label
              }}</span>
            </div>
            <h3 class="value-title font-display">
              {{ data.coreValues[0].title }}
            </h3>
            <p class="value-desc">{{ data.coreValues[0].description }}</p>
          </article>
        </div>

        <!-- Right Orbit Quadrant: Core Values 02 & 03 -->
        <div class="orbit-right-quadrant">
          <article
            v-if="data.coreValues?.[1]"
            class="orbit-value-card bg-border"
          >
            <div class="value-header">
              <span class="value-num font-mono">{{
                data.coreValues[1].index
              }}</span>
              <span class="value-tag font-mono">{{
                data.coreValues[1].label
              }}</span>
            </div>
            <h3 class="value-title font-display">
              {{ data.coreValues[1].title }}
            </h3>
            <p class="value-desc">{{ data.coreValues[1].description }}</p>
          </article>

          <article
            v-if="data.coreValues?.[2]"
            class="orbit-value-card bg-border"
          >
            <div class="value-header">
              <span class="value-num font-mono">{{
                data.coreValues[2].index
              }}</span>
              <span class="value-tag font-mono">{{
                data.coreValues[2].label
              }}</span>
            </div>
            <h3 class="value-title font-display">
              {{ data.coreValues[2].title }}
            </h3>
            <p class="value-desc">{{ data.coreValues[2].description }}</p>
          </article>
        </div>
      </div>

      <!-- =====================================================================
           SOCIAL CHANNELS & COMMUNITY DISPATCH PODS
           ===================================================================== -->
      <div v-if="data.socialChannels?.length" class="socials-pod-strip">
        <a
          v-for="(channel, sIdx) in data.socialChannels"
          :key="sIdx"
          :href="channel.url"
          target="_blank"
          rel="noopener noreferrer"
          class="social-pod bg-border"
        >
          <div class="pod-header">
            <span class="pod-platform font-mono">{{ channel.platform }}</span>
            <Icon name="lucide:arrow-up-right" class="pod-arrow" />
          </div>
          <div class="pod-handle font-display">{{ channel.handle }}</div>
          <div class="pod-label font-mono">{{ channel.label }}</div>
        </a>
      </div>

      <!-- Closing Manifesto Banner -->
      <footer v-if="data.closingManifesto" class="manifesto-block bg-border">
        <div class="manifesto-indicator font-mono">
          <Icon name="lucide:shield-check" class="manifesto-icon" />
          <span>HOUSE COMMITMENT</span>
        </div>
        <p class="manifesto-text font-mono">{{ data.closingManifesto }}</p>
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
   PURE CSS ARCHITECTURAL GRID BACKGROUND (SECTION 3 REUSE)
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
  max-width: 660px;
  margin: 0;
}

/* =============================================================================
   RADIAL PIZZA ORBIT ARENA
   ============================================================================= */
.orbit-arena {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(320px, 420px) 1fr;
  align-items: center;
  gap: var(--space-6);
  min-height: 480px;
}

/* -----------------------------------------------------------------------------
   CENTER SPINNING REALISTIC PIZZA DISC
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

/* Pan Status Tag */
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
   ORBITING COPY QUADRANTS (LEFT & RIGHT)
   ----------------------------------------------------------------------------- */
.orbit-left-quadrant,
.orbit-right-quadrant {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  z-index: 3;
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
  color: var(--color-text-muted);
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
   SOCIAL DISPATCH PODS
   ============================================================================= */
.socials-pod-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  width: 100%;
}

.social-pod {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-5);
  text-decoration: none;
  transition:
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.25s ease,
    background-color 0.2s ease;
}

.social-pod:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary-1);
  background-color: rgba(25, 25, 25, 0.7);
}

.pod-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pod-platform {
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.pod-arrow {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  transition:
    transform 0.2s ease,
    color 0.2s ease;
}

.social-pod:hover .pod-arrow {
  color: var(--color-primary-1);
  transform: translate(2px, -2px);
}

.pod-handle {
  font-size: var(--text-size-title-sm);
  color: var(--color-text-primary);
  letter-spacing: var(--tracking-tight);
}

.pod-label {
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-muted);
  text-transform: uppercase;
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
   RESPONSIVE OVERRIDES
   ============================================================================= */
@media (max-width: 1024px) {
  .orbit-arena {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .pie-stage {
    order: -1;
  }

  .pie-disc-wrap {
    max-width: 280px;
  }

  .socials-pod-strip {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }

  .anim-line-v-1,
  .anim-line-v-2,
  .drafting-cross {
    display: none;
  }
}

@media (max-width: 640px) {
  .manifesto-block {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2);
  }

  .pie-disc-wrap {
    max-width: 230px;
  }
}
</style>
