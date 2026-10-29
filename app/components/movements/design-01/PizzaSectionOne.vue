<!-- components/movements/design-01/PizzaSectionOne.vue -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";
import type { MovementDefinition } from "~/types/movement";

const props = defineProps<{
  // Accepts live.section03 or educational.section02
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
    // 1. Entrance timeline
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
        ".floating-item",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.12 },
        "-=0.6",
      )
      .fromTo(
        ".footer-directive-strip",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.4",
      );

    // 2. Parallax scrub exit
    const exitTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });

    exitTl.to(
      ".section-content-wrap",
      { yPercent: -12, opacity: 0.4, ease: "power1.in" },
      0,
    );
    exitTl.to(".technical-bg-canvas", { yPercent: 8, ease: "none" }, 0);
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
    :id="data.sectionAnchorId || 'section-slices'"
    class="board-stage"
    :aria-label="data.title"
  >
    <!-- =======================================================================
         1. EDITORIAL RETICLE GUIDE LINES (SVG VECTOR)
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
         2. PURE CSS ARCHITECTURAL GRID BACKGROUND
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
        <!-- 
        <p v-if="data.leadCopy" class="section-lead-copy font-mono">
          {{ data.leadCopy }}
        </p> -->
      </header>

      <!-- ===================================================================
           4-CARD SHOWCASE MATRIX (SLICES OR DESIGN RULES)
           =================================================================== -->
      <div v-if="data.cards?.length" class="items-floating-matrix">
        <article
          v-for="(card, idx) in data.cards"
          :key="card.id"
          class="floating-item slice-entity"
        >
          <!-- Media Plate -->
          <div class="entity-image-stage">
            <img
              :src="card.media?.src || '/images/design01/hero-img-pizza.jpg'"
              :alt="card.media?.alt || card.title"
              class="entity-img"
              loading="lazy"
            />
            <div class="image-inner-shadow"></div>

            <!-- Top Overlay Indicators -->
            <div class="entity-status-overlay">
              <span class="status-indicator-pill bg-border font-mono">
                <span
                  class="status-dot"
                  :class="
                    isEducational
                      ? 'dot-edu'
                      : idx === 3
                        ? 'dot-soldout'
                        : 'dot-available'
                  "
                ></span>
                <span class="status-text">
                  {{
                    isEducational
                      ? `RULE // 0${idx + 1}`
                      : idx === 3
                        ? "LAST BAKE SOLD"
                        : "IN OVEN ROTATION"
                  }}
                </span>
              </span>

              <span
                v-if="!isEducational && idx === 0"
                class="badge-popular bg-border font-mono"
              >
                <span class="status-dot dot-popular"></span>
                <span>SIGNATURE</span>
              </span>
            </div>

            <!-- Price or Metric Stamp -->
            <span
              v-if="card.priceOrMetric"
              class="entity-price bg-border font-mono"
            >
              {{ card.priceOrMetric }}
            </span>
          </div>

          <!-- Card Content Body -->
          <div class="entity-content-block">
            <div class="entity-meta-top font-mono">
              <span class="entity-category">{{ card.category }}</span>
              <span class="entity-badge">{{ card.badge }}</span>
            </div>

            <h3 class="entity-title font-display">{{ card.title }}</h3>
            <span v-if="card.subtitle" class="entity-subtitle font-mono">
              {{ card.subtitle }}
            </span>

            <p class="entity-desc">{{ card.description }}</p>

            <!-- Specs Grid -->
            <div v-if="card.specs?.length" class="entity-specs-list font-mono">
              <div
                v-for="(spec, sIdx) in card.specs"
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
           FOOTER DIRECTIVE STRIP
           =================================================================== -->
      <footer
        v-if="data.footerNote || data.globalAction"
        class="footer-directive-strip bg-border font-mono"
      >
        <div v-if="data.footerNote" class="directive-note">
          <Icon name="lucide:info" class="note-icon" />
          <span>{{ data.footerNote }}</span>
        </div>

        <a
          v-if="data.globalAction?.targetId"
          :href="data.globalAction.targetId"
          class="global-action-link"
        >
          <span>{{ data.globalAction.label }}</span>
          <Icon name="lucide:arrow-right" class="action-icon" />
        </a>
      </footer>
    </div>
  </section>
</template>

<style scoped>
/* =============================================================================
   REUSABLE TOKENS & UTILITIES
   ============================================================================= */
.bg-border {
  background-color: rgba(10, 10, 10, 0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
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
  padding-block: clamp(5rem, 10vh, 8rem);
  padding-inline: var(--layout-gutter);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--color-canvas);
  box-sizing: border-box;
}

/* Coordinate drafting background */
.technical-bg-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
  background-color: var(--color-canvas, #121212);
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
  bottom: 24%;
  animation: float-horizontal-2 22s ease-in-out infinite alternate;
}

.anim-line-v-1 {
  top: 0;
  bottom: 0;
  width: 1px;
  left: 22%;
  animation: float-vertical-1 20s ease-in-out infinite alternate;
}

.anim-line-v-2 {
  top: 0;
  bottom: 0;
  width: 1px;
  right: 28%;
  animation: float-vertical-2 26s ease-in-out infinite alternate;
}

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
  font-weight: 900;
}

.headline-italic {
  font-style: italic;
  font-weight: 300;
  color: var(--color-text-primary);
  padding-left: 1rem;
}

.section-subtitle {
  font-family: var(--font-family-body);
  font-size: var(--text-size-body);
  color: var(--color-text-secondary);
  line-height: var(--leading-normal);
  max-width: 640px;
  margin: 0;
}

.section-lead-copy {
  font-size: var(--text-size-xs);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 720px;
  margin: 0;
}

/* =============================================================================
   CARD SHOWCASE MATRIX
   ============================================================================= */
.items-floating-matrix {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-5);
  width: 100%;
}

.floating-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  padding: var(--space-4);
  transition:
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.25s ease;
}

.floating-item:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 255, 255, 0.25);
}

/* Image Stage */
.entity-image-stage {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background-color: var(--color-canvas);
  border: var(--border-width-hairline) solid var(--color-border);
  padding: 2rem;
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
  transform: scale(1.15);
  filter: brightness(1) contrast(1.1);
}

.image-inner-shadow {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.65) 0%,
    rgba(10, 10, 10, 0) 40%,
    rgba(10, 10, 10, 0.75) 100%
  );
  pointer-events: none;
}

/* Status Overlay */
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
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-primary);
}

/* Indicator Dots */
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
}

.dot-popular {
  background-color: #eab308;
  box-shadow: 0 0 8px #eab308;
}

.dot-edu {
  background-color: var(--color-primary-1);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
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

.entity-price {
  position: absolute;
  bottom: var(--space-2);
  right: var(--space-2);
  padding: 0.3rem 0.65rem;
  font-size: var(--text-size-xs);
  letter-spacing: var(--tracking-widest);
  color: var(--color-highlight);
  z-index: 2;
}

/* Card Body */
.entity-content-block {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.entity-meta-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.entity-subtitle {
  font-size: var(--text-size-xs);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
}

.entity-desc {
  font-family: var(--font-family-body);
  font-size: var(--text-size-sm);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  margin: 0;
}

/* Specs */
.entity-specs-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: var(--space-3);
  margin-top: var(--space-1);
  border-top: var(--border-width-hairline) solid var(--color-border-subtle);
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

/* Footer Directive Strip */
.footer-directive-strip {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-5);
  width: 100%;
}

.directive-note {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-size-xs);
  color: var(--color-text-secondary);
}

.note-icon {
  font-size: 0.95rem;
  color: var(--color-primary-1);
  flex-shrink: 0;
}

.global-action-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-primary-1);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.global-action-link:hover {
  transform: translateX(3px);
  opacity: 0.85;
}

.action-icon {
  font-size: 0.85rem;
}

/* =============================================================================
   RESPONSIVE OVERRIDES
   ============================================================================= */
@media (max-width: 900px) {
  .items-floating-matrix {
    grid-template-columns: 1fr;
    gap: var(--space-5);
  }

  .footer-directive-strip {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .anim-line-v-1,
  .anim-line-v-2,
  .drafting-cross {
    display: none;
  }
}
</style>
