<!-- components/movements/design-01/PizzaSectionTwo.vue -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";
import type { MovementDefinition } from "~/types/movement";

const props = defineProps<{
  data:
    | MovementDefinition["live"]["section05"]
    | MovementDefinition["educational"]["section05"];
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
    // 1. Entrance Trigger with Continuous Slow Background Zoom
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
        { scale: 1.15, filter: "brightness(0.5)" },
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
        ".step-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
        "-=0.6",
      )
      .fromTo(
        [".terminal-panel", ".guide-line"],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.1 },
        "-=0.5",
      );

    // 2. Parallax Exit Scrub
    const exitTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });

    exitTl.to(".section-bg-image", { yPercent: 22, ease: "none" }, 0);

    exitTl.to(
      ".section-content-wrap",
      { yPercent: -18, opacity: 0.25, ease: "power1.in" },
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
  <section
    ref="sectionRef"
    :id="data.sectionAnchorId || 'section05'"
    class="protocol-stage"
    aria-label="Visitor Information and Directives"
  >
    <!-- =======================================================================
         1. 8 EDITORIAL GUIDE LINES
         ======================================================================= -->
    <svg
      class="editorial-guide-canvas"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1="15" x2="100" y2="52" class="guide-line" />
      <line
        x1="0"
        y1="16.2"
        x2="100"
        y2="53.2"
        class="guide-line guide-line-ghost"
      />
      <line
        x1="0"
        y1="17.5"
        x2="100"
        y2="54.5"
        class="guide-line guide-line-faint"
      />

      <line x1="84" y1="0" x2="-15" y2="100" class="guide-line" />
      <line
        x1="85.5"
        y1="0"
        x2="-13.5"
        y2="100"
        class="guide-line guide-line-ghost"
      />
      <line
        x1="87"
        y1="0"
        x2="-12"
        y2="100"
        class="guide-line guide-line-faint"
      />
    </svg>

    <!-- =======================================================================
         2. FULL-BLEED PHOTOGRAPHIC CANVAS WITH DUAL SCRIM
         ======================================================================= -->
    <div class="section-canvas-frame">
      <img
        src="/images/design01/sect-2-img.jpg"
        alt="Foundry Katamachi Nightlife Room Atmosphere"
        class="section-bg-image"
      />
      <div class="section-soft-scrim"></div>
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
           3-STEP ORDERING & ARRIVAL DIRECTIVES
           =================================================================== -->
      <div v-if="data.steps?.length" class="steps-matrix">
        <article
          v-for="(step, idx) in data.steps"
          :key="idx"
          class="step-card bg-border"
        >
          <div class="step-card-header">
            <span class="step-index font-mono">{{ step.stepNumber }}</span>
            <span v-if="step.tag" class="step-tag bg-border">{{
              step.tag
            }}</span>
          </div>

          <div class="step-card-body">
            <h3 class="step-title font-display">{{ step.title }}</h3>
            <p class="step-directive">{{ step.directive }}</p>
            <p class="step-details">{{ step.details }}</p>
          </div>
        </article>
      </div>

      <!-- ===================================================================
           TERMINAL DISPATCH: COORDINATES, SERVICE HOURS, LOGISTICS
           =================================================================== -->
      <div v-if="data.terminal" class="terminal-panel bg-border">
        <div class="terminal-bar">
          <div class="terminal-eyebrow font-mono">
            <Icon name="lucide:terminal" class="terminal-icon" />
            <span>{{ data.terminal.eyebrow }}</span>
          </div>

          <div
            v-if="data.terminal.statusIndicator"
            class="terminal-status bg-border font-mono"
          >
            <span
              class="status-dot"
              :class="
                data.terminal.statusIndicator.isActive
                  ? 'dot-open'
                  : 'dot-closed'
              "
            ></span>
            <span>{{ data.terminal.statusIndicator.label }}</span>
          </div>
        </div>

        <div class="terminal-main-grid">
          <!-- Terminal Left: Headline, Subheadline & Action -->
          <div class="terminal-meta-block">
            <h3 class="terminal-headline font-display">
              {{ data.terminal.headline }}
            </h3>
            <p class="terminal-subheadline font-mono">
              {{ data.terminal.subheadline }}
            </p>

            <div v-if="data.terminal.action" class="terminal-cta-wrap">
              <a
                v-if="
                  'href' in data.terminal.action && data.terminal.action.href
                "
                :href="data.terminal.action.href"
                :target="data.terminal.action.isExternal ? '_blank' : undefined"
                :rel="
                  data.terminal.action.isExternal
                    ? 'noopener noreferrer'
                    : undefined
                "
                class="btn-primary"
              >
                <span>{{ data.terminal.action.label }}</span>
                <Icon name="lucide:arrow-up-right" class="action-icon" />
              </a>
              <button v-else type="button" class="btn-primary">
                <span>{{ data.terminal.action.label }}</span>
                <Icon name="lucide:arrow-down-right" class="action-icon" />
              </button>
            </div>
          </div>

          <!-- Terminal Right: Monospaced Telemetry / Spec Sheet -->
          <div class="terminal-log-block">
            <ul class="terminal-lines font-mono" aria-label="Venue Logistics">
              <li
                v-for="(line, lIdx) in data.terminal.codeLines"
                :key="lIdx"
                class="terminal-line-item"
              >
                <span class="line-caret">›</span>
                <span class="line-text">{{ line }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Optional Alert Banner -->
      <div v-if="data.alertBanner" class="alert-banner-block bg-border">
        <div class="alert-indicator font-mono">
          <Icon name="lucide:info" class="alert-icon" />
          <span>DIRECTIVE NOTICE</span>
        </div>
        <p class="alert-body">{{ data.alertBanner.message }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =============================================================================
   REUSABLE BACKDROP UTILITIES
   ============================================================================= */
.bg-border {
  background-color: rgba(10, 10, 10, 0.45);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: var(--border-width-hairline) solid var(--color-border);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  box-sizing: border-box;
}

.bg-border-light {
  background-color: rgba(255, 255, 255, 0.88);
  color: var(--color-canvas);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: var(--border-width-hairline) solid var(--color-secondary-1);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
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
.protocol-stage {
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
    rgba(10, 10, 10, 0.92) 0%,
    rgba(10, 10, 10, 0.65) 30%,
    rgba(10, 10, 10, 0.78) 70%,
    rgba(10, 10, 10, 0.96) 100%
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
  gap: var(--space-6);
  will-change: transform, opacity;
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
   3-STEP ORDERING DIRECTIVES (EDITORIAL CARDS)
   ============================================================================= */
.steps-matrix {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  width: 100%;
}

.step-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: var(--space-5);
  gap: var(--space-4);
  width: 100%;
  transition:
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.25s ease;
}

.step-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.25);
}

.step-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.step-index {
  font-family: var(--font-family-mono);
  font-size: var(--text-size-title-sm);
  color: var(--color-primary-1);
  font-weight: 700;
}

.step-tag {
  font-family: var(--font-family-body);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.step-card-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
}

.step-title {
  font-family: var(--font-family-display);
  font-size: var(--text-size-title-sm);
  color: var(--color-text-primary);
  line-height: var(--leading-tight);
  margin: 0;
}

.step-directive {
  font-family: var(--font-family-body);
  font-size: var(--text-size-sm);
  font-weight: 600;
  color: var(--color-text-primary);
  line-height: var(--leading-normal);
  margin: 0;
}

.step-details {
  font-family: var(--font-family-body);
  font-size: var(--text-size-xs);
  color: var(--color-text-secondary);
  line-height: var(--leading-normal);
  margin: 0;
}

/* =============================================================================
   TERMINAL DISPATCH: TELEMETRY & COORDINATES
   ============================================================================= */
.terminal-panel {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-5);
  width: 100%;
}

.terminal-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: var(--space-3);
  border-bottom: var(--border-width-hairline) solid var(--color-border-subtle);
}

.terminal-eyebrow {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.terminal-icon {
  font-size: 0.9rem;
  color: var(--color-primary-1);
}

.terminal-status {
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-primary);
}

/* Glowing Indicator Dot */
.status-dot {
  width: 7px;
  height: 7px;
  border-radius: var(--radius-pill);
  flex-shrink: 0;
}

.dot-open {
  background-color: #22c55e;
  box-shadow: 0 0 8px #22c55e;
  animation: pulse-open 2s infinite ease-in-out;
}

.dot-closed {
  background-color: #ef4444;
  box-shadow: 0 0 8px #ef4444;
  animation: pulse-closed 2.4s infinite ease-in-out;
}

@keyframes pulse-open {
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

@keyframes pulse-closed {
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

.terminal-main-grid {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: var(--space-6);
  width: 100%;
}

.terminal-meta-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-4);
}

.terminal-headline {
  font-family: var(--font-family-display);
  font-size: var(--text-size-title-md);
  color: var(--color-text-primary);
  line-height: var(--leading-tight);
  margin: 0;
}

.terminal-subheadline {
  font-size: var(--text-size-xs);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  margin: 0;
}

.terminal-cta-wrap {
  margin-top: auto;
}

/* Pattern Animation Primary Button with 5s Recurring Pulse */
.btn-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.95rem 1.85rem;
  background-color: var(--color-primary-1);
  color: var(--color-canvas);
  border: var(--border-width-hairline) solid var(--color-primary-1);
  font-family: var(--font-family-body);
  font-size: var(--text-size-xs);
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition:
    color 0.35s cubic-bezier(0.25, 1, 0.5, 1),
    transform 0.2s ease,
    box-shadow 0.3s ease;
  animation: primary-cta-guide 5s infinite cubic-bezier(0.25, 1, 0.5, 1);
}

.btn-primary::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-canvas);
  transform: scaleX(0);
  transform-origin: right;
  z-index: -1;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.btn-primary:hover {
  color: var(--color-primary-1);
  transform: translateY(-2px);
  animation-play-state: paused;
}

.btn-primary:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

.action-icon {
  font-size: 1rem;
}

@keyframes primary-cta-guide {
  0%,
  82%,
  100% {
    transform: translateY(0);
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
  88% {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px -4px rgba(255, 255, 255, 0.45);
  }
  94% {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(255, 255, 255, 0.15);
  }
}

/* Monospaced Telemetry Lines */
.terminal-log-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.terminal-lines {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.terminal-line-item {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-2);
  border-bottom: var(--border-width-hairline) solid rgba(255, 255, 255, 0.04);
}

.line-caret {
  color: var(--color-primary-1);
  font-weight: 700;
  user-select: none;
}

.line-text {
  font-size: var(--text-size-xs);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  word-break: break-word;
}

/* Alert Banner */
.alert-banner-block {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-5);
  width: 100%;
}

.alert-indicator {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-primary-1);
  white-space: nowrap;
}

.alert-icon {
  font-size: 0.95rem;
}

.alert-body {
  font-family: var(--font-family-body);
  font-size: var(--text-size-xs);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
  margin: 0;
}

/* =============================================================================
   RESPONSIVE OVERRIDES
   ============================================================================= */
@media (max-width: 900px) {
  .steps-matrix {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }

  .terminal-main-grid {
    grid-template-columns: 1fr;
    gap: var(--space-5);
  }

  .alert-banner-block {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2);
  }
}

@media (max-width: 640px) {
  .terminal-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2);
  }

  .btn-primary {
    width: 100%;
    justify-content: center;
  }
}
</style>
