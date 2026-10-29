<!-- components/movements/design-01/PizzaSectionThree.vue -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";
import type { MovementDefinition } from "~/types/movement";

const props = defineProps<{
  data:
    | MovementDefinition["live"]["section04"]
    | MovementDefinition["educational"]["section04"];
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
    // 1. SCROLL-TRIGGERED ENTRANCE TIMELINE
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
        ".section-header-block",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.9 },
      )
      .fromTo(
        ".vinyl-stage",
        { opacity: 0, scale: 0.85, rotate: -25 },
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
        ".footer-note-block",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.4",
      );

    // -------------------------------------------------------------------------
    // 2. PARALLAX DRIFT TIMELINE (Orbiting Text Floating Around Center)
    // -------------------------------------------------------------------------
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    // Opposite vertical drifts create an optical circular float around the disc
    scrollTl.to(".orbit-left-quadrant", { yPercent: -14, ease: "none" }, 0);
    scrollTl.to(".orbit-right-quadrant", { yPercent: 12, ease: "none" }, 0);
    scrollTl.to(".vinyl-disc", { rotate: "+=120", ease: "none" }, 0);
    scrollTl.to(".technical-bg-canvas", { yPercent: 8, ease: "none" }, 0);
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
  <section
    ref="sectionRef"
    :id="data.sectionAnchorId || 'section04'"
    class="vibe-stage"
    aria-label="Sound, Vinyl Rotation, and Room Atmosphere"
  >
    <!-- =======================================================================
         1. PURE CSS RETICLE & FLOATING LINE BACKGROUND
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
      <line x1="0" y1="22" x2="100" y2="78" class="guide-line" />
      <line
        x1="0"
        y1="23.2"
        x2="100"
        y2="79.2"
        class="guide-line guide-line-ghost"
      />
      <line
        x1="0"
        y1="24.5"
        x2="100"
        y2="80.5"
        class="guide-line guide-line-faint"
      />

      <line x1="75" y1="0" x2="-25" y2="100" class="guide-line" />
      <line
        x1="76.5"
        y1="0"
        x2="-23.5"
        y2="100"
        class="guide-line guide-line-ghost"
      />
      <line
        x1="78"
        y1="0"
        x2="-22"
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
           RADIAL VINYL ORBIT ARENA
           ===================================================================== -->
      <div class="orbit-arena">
        <!-- Center Vinyl Disc (SVG with Pure CSS Microgrooves & Infinite Spin) -->
        <div class="vinyl-stage" aria-label="Acoustic Vinyl Turntable Display">
          <div class="vinyl-disc-wrap">
            <svg
              class="vinyl-disc"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <!-- Outer Heavy Shell -->
              <circle cx="200" cy="200" r="196" class="vinyl-outer-rim" />

              <!-- Micro-Groove Layers -->
              <circle cx="200" cy="200" r="182" class="vinyl-groove" />
              <circle cx="200" cy="200" r="168" class="vinyl-groove" />
              <circle cx="200" cy="200" r="154" class="vinyl-groove" />
              <circle cx="200" cy="200" r="140" class="vinyl-groove" />
              <circle cx="200" cy="200" r="126" class="vinyl-groove" />
              <circle cx="200" cy="200" r="112" class="vinyl-groove" />
              <circle cx="200" cy="200" r="98" class="vinyl-groove" />
              <circle cx="200" cy="200" r="84" class="vinyl-groove" />

              <!-- Run-Out Vinyl Band -->
              <circle cx="200" cy="200" r="74" class="vinyl-runout" />

              <!-- Center Paper Label -->
              <circle cx="200" cy="200" r="62" class="vinyl-center-label" />
              <circle cx="200" cy="200" r="60" class="vinyl-label-border" />

              <!-- Center Brandmark & Calibration Monospace Text -->
              <text
                x="200"
                y="188"
                text-anchor="middle"
                class="vinyl-label-title font-display"
              >
                FOUNDRY
              </text>
              <text
                x="200"
                y="204"
                text-anchor="middle"
                class="vinyl-label-sub font-mono"
              >
                33⅓ RPM // ANALOG
              </text>
              <text
                x="200"
                y="218"
                text-anchor="middle"
                class="vinyl-label-meta font-mono"
              >
                KANAZAWA
              </text>

              <!-- Turntable Spindle Hole -->
              <circle cx="200" cy="200" r="10" class="vinyl-spindle" />
              <circle cx="200" cy="200" r="11" class="vinyl-spindle-edge" />
            </svg>

            <!-- Holographic Sheen Filter -->
            <div class="vinyl-light-sheen"></div>
          </div>

          <!-- Turntable Status Tag -->
          <div class="vinyl-hud-pill bg-border font-mono">
            <span class="status-dot dot-spinning"></span>
            <span>TECHNICS 1200MK7 ACTIVE</span>
          </div>
        </div>

        <!-- Left Orbit Quadrant: Lead Narrative & Vibe Pillar 01 -->
        <div class="orbit-left-quadrant">
          <div v-if="data.leadCopy" class="orbit-lead-card bg-border">
            <div class="card-meta-line font-mono">
              <Icon name="lucide:disc-3" class="meta-icon" />
              <span>THE ACOUSTIC PHILOSOPHY</span>
            </div>
            <p class="orbit-lead-text">{{ data.leadCopy }}</p>
          </div>

          <article
            v-if="data.vibePillars?.[0]"
            class="orbit-pillar-card bg-border"
          >
            <div class="pillar-header">
              <span class="pillar-num font-mono">{{
                data.vibePillars[0].index
              }}</span>
              <span class="pillar-tag font-mono">{{
                data.vibePillars[0].label
              }}</span>
            </div>
            <h3 class="pillar-title font-display">
              {{ data.vibePillars[0].title }}
            </h3>
            <p class="pillar-desc">{{ data.vibePillars[0].description }}</p>
          </article>
        </div>

        <!-- Right Orbit Quadrant: Vibe Pillars 02 & 03 -->
        <div class="orbit-right-quadrant">
          <article
            v-if="data.vibePillars?.[1]"
            class="orbit-pillar-card bg-border"
          >
            <div class="pillar-header">
              <span class="pillar-num font-mono">{{
                data.vibePillars[1].index
              }}</span>
              <span class="pillar-tag font-mono">{{
                data.vibePillars[1].label
              }}</span>
            </div>
            <h3 class="pillar-title font-display">
              {{ data.vibePillars[1].title }}
            </h3>
            <p class="pillar-desc">{{ data.vibePillars[1].description }}</p>
          </article>

          <article
            v-if="data.vibePillars?.[2]"
            class="orbit-pillar-card bg-border"
          >
            <div class="pillar-header">
              <span class="pillar-num font-mono">{{
                data.vibePillars[2].index
              }}</span>
              <span class="pillar-tag font-mono">{{
                data.vibePillars[2].label
              }}</span>
            </div>
            <h3 class="pillar-title font-display">
              {{ data.vibePillars[2].title }}
            </h3>
            <p class="pillar-desc">{{ data.vibePillars[2].description }}</p>
          </article>
        </div>
      </div>

      <!-- Footer Directive Note -->
      <footer v-if="data.footerNote" class="footer-note-block bg-border">
        <div class="footer-note-indicator font-mono">
          <Icon name="lucide:volume-2" class="audio-icon" />
          <span>SESSION DIRECTIVE</span>
        </div>
        <p class="footer-note-text font-mono">{{ data.footerNote }}</p>
      </footer>
    </div>
  </section>
</template>

<style scoped>
/* =============================================================================
   REUSABLE BACKDROP UTILITIES
   ============================================================================= */
.bg-border {
  background-color: rgba(10, 10, 10, 0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: var(--border-width-hairline) solid var(--color-border);
  box-sizing: border-box;
}

/* =============================================================================
   PURE CSS ARCHITECTURAL GRID BACKGROUND (FROM SECTION TWO PATTERN)
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
  top: 20%;
  animation: float-horizontal-1 16s ease-in-out infinite alternate;
}

.anim-line-h-2 {
  left: 0;
  right: 0;
  height: 1px;
  bottom: 22%;
  animation: float-horizontal-2 22s ease-in-out infinite alternate;
}

.anim-line-v-1 {
  top: 0;
  bottom: 0;
  width: 1px;
  left: 20%;
  animation: float-vertical-1 20s ease-in-out infinite alternate;
}

.anim-line-v-2 {
  top: 0;
  bottom: 0;
  width: 1px;
  right: 20%;
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
  top: 20%;
  left: 20%;
  transform: translate(-50%, -50%);
}
.cross-tr {
  top: 20%;
  right: 20%;
  transform: translate(50%, -50%);
}
.cross-bl {
  bottom: 22%;
  left: 20%;
  transform: translate(-50%, 50%);
}
.cross-br {
  bottom: 22%;
  right: 20%;
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
.vibe-stage {
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
   RADIAL VINYL ORBIT ARENA (CENTER DISC + SURROUNDING FLOATING COPY)
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
   CENTER VINYL DISC (SVG WITH ROTATING GROOVES)
   ----------------------------------------------------------------------------- */
.vinyl-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  position: relative;
  z-index: 2;
}

.vinyl-disc-wrap {
  position: relative;
  width: 100%;
  max-width: 380px;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.85));
}

.vinyl-disc {
  width: 100%;
  height: 100%;
  display: block;
  transform-origin: 50% 50%;
  animation: vinyl-spin 18s linear infinite;
}

@keyframes vinyl-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.vinyl-outer-rim {
  fill: #0d0d0d;
  stroke: rgba(255, 255, 255, 0.22);
  stroke-width: 1.5px;
}

.vinyl-groove {
  fill: none;
  stroke: rgba(255, 255, 255, 0.045);
  stroke-width: 0.75px;
}

.vinyl-runout {
  fill: #141414;
  stroke: rgba(255, 255, 255, 0.08);
  stroke-width: 1px;
}

.vinyl-center-label {
  fill: #1f1f1f;
}

.vinyl-label-border {
  fill: none;
  stroke: rgba(255, 255, 255, 0.25);
  stroke-width: 1px;
}

.vinyl-label-title {
  fill: var(--color-text-primary);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.22em;
}

.vinyl-label-sub {
  fill: var(--color-primary-1);
  font-size: 6px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.vinyl-label-meta {
  fill: var(--color-text-muted);
  font-size: 5.5px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.vinyl-spindle {
  fill: var(--color-canvas);
}

.vinyl-spindle-edge {
  fill: none;
  stroke: rgba(255, 255, 255, 0.35);
  stroke-width: 0.75px;
}

/* Subtle Holographic Light Sheen */
.vinyl-light-sheen {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-pill);
  background: conic-gradient(
    from 45deg,
    transparent 0deg,
    rgba(255, 255, 255, 0.06) 60deg,
    transparent 120deg,
    rgba(255, 255, 255, 0.06) 240deg,
    transparent 300deg
  );
  pointer-events: none;
}

/* Turntable Status Tag */
.vinyl-hud-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.3rem 0.7rem;
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

.dot-spinning {
  background-color: #22c55e;
  box-shadow: 0 0 8px #22c55e;
  animation: pulse-spin 1.8s infinite ease-in-out;
}

@keyframes pulse-spin {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 8px #22c55e;
  }
  50% {
    transform: scale(0.8);
    opacity: 0.55;
    box-shadow: 0 0 3px #22c55e;
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

.orbit-lead-card,
.orbit-pillar-card {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  transition:
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.25s ease;
}

.orbit-lead-card:hover,
.orbit-pillar-card:hover {
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

.orbit-lead-text {
  font-family: var(--font-family-body);
  font-size: var(--text-size-sm);
  line-height: var(--leading-normal);
  color: var(--color-text-secondary);
  margin: 0;
}

.pillar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pillar-num {
  font-size: var(--text-size-title-sm);
  color: var(--color-primary-1);
  font-weight: 700;
}

.pillar-tag {
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-muted);
}

.pillar-title {
  font-family: var(--font-family-display);
  font-size: var(--text-size-title-sm);
  color: var(--color-text-primary);
  line-height: var(--leading-tight);
  margin: 0;
}

.pillar-desc {
  font-family: var(--font-family-body);
  font-size: var(--text-size-xs);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  margin: 0;
}

/* -----------------------------------------------------------------------------
   FOOTER DIRECTIVE NOTE
   ----------------------------------------------------------------------------- */
.footer-note-block {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-5);
  width: 100%;
}

.footer-note-indicator {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-primary-1);
  white-space: nowrap;
}

.audio-icon {
  font-size: 0.95rem;
}

.footer-note-text {
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

  .vinyl-stage {
    order: -1;
  }

  .vinyl-disc-wrap {
    max-width: 280px;
  }

  .anim-line-v-1,
  .anim-line-v-2,
  .drafting-cross {
    display: none;
  }
}

@media (max-width: 640px) {
  .footer-note-block {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2);
  }

  .vinyl-disc-wrap {
    max-width: 230px;
  }
}
</style>
