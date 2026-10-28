<!-- components/movements/design-01/pizza-section0.vue -->
<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  nextTick,
  watch,
} from "vue";
import type { MovementDefinition } from "~/types/movement";

const props = defineProps<{
  navbar: MovementDefinition["live"]["navbar"];
  hero: MovementDefinition["live"]["hero"];
}>();

// Navigation drawer state
const isNavOpen = ref(false);
const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};
const closeNav = () => {
  isNavOpen.value = false;
};

// Smooth scroll to sections
const scrollToTarget = (targetId: string) => {
  closeNav();
  const el = document.querySelector(targetId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

// Check if currently within operating hours (18:00 to 02:00 JST)
const isDoorsOpen = computed(() => {
  const now = new Date();
  const hour = now.getHours();
  // Open if 18:00 (6 PM) to 23:59 OR 00:00 to 01:59 (before 2 AM)
  return hour >= 18 || hour < 2;
});

// GSAP context and ScrollTrigger setup
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
    const enterTl = gsap.timeline({ defaults: { ease: "power4.out" } });

    enterTl
      .fromTo(
        ".hero-bg-image",
        { scale: 1.15, filter: "brightness(0.65)" },
        {
          scale: 1.0,
          filter: "brightness(1)",
          duration: 1.6,
          onComplete: () => {
            // Initiate extremely slow, subtle continuous zoom
            gsap.to(".hero-bg-image", {
              scale: 1.05,
              duration: 20,
              ease: "sine.out",
            });
          },
        },
      )
      .fromTo(
        [".masthead-brand", ".nav-trigger-btn"],
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        "-=1.2",
      )
      .fromTo(
        ".headline-mask-inner",
        { yPercent: 110, rotate: 2, opacity: 0 },
        { yPercent: 0, rotate: 0, opacity: 1, duration: 1, stagger: 0.12 },
        "-=0.9",
      )
      .fromTo(
        [".secondary-lead", ".hero-actions", ".hero-stats", ".guide-line"],
        { opacity: 0, scaleX: 0, transformOrigin: "left" },
        { opacity: 1, scaleX: 1, duration: 0.85, stagger: 0.1 },
        "-=0.5",
      );

    // 2. Scroll parallax and exit timeline
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });

    scrollTl.to(
      ".hero-bg-image",
      {
        yPercent: 24,
        scale: 1.08,
        ease: "none",
      },
      0,
    );

    scrollTl.to(
      ".hero-copy-block",
      {
        yPercent: -28,
        opacity: 0,
        ease: "power1.in",
      },
      0,
    );

    scrollTl.to(
      ".masthead-floating",
      {
        yPercent: -15,
        opacity: 0.4,
        ease: "none",
      },
      0,
    );
  }, sectionRef.value);
};

onMounted(() => {
  initAnimations();
});

watch(
  () => props.hero,
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
  <header ref="sectionRef" class="hero-stage">
    <!-- =======================================================================
         8 EDITORIAL GUIDE LINES (SUBTLE CAMERA/CANVAS RETICLE)
         ======================================================================= -->
    <svg
      class="editorial-guide-canvas"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <!-- Group A: 3 lines from the left (~25% down) slanting down toward the pizza (~58% down, ~72% across) -->
      <line x1="0" y1="24.5" x2="100" y2="70" class="guide-line" />
      <line
        x1="0"
        y1="25.5"
        x2="100"
        y2="71"
        class="guide-line guide-line-ghost"
      />
      <line
        x1="0"
        y1="26.8"
        x2="100"
        y2="72.3"
        class="guide-line guide-line-faint"
      />

      <!-- Group B: 3 lines from the top-right (~80% across) slanting down toward the bottom-left -->
      <line x1="80" y1="0" x2="-20" y2="100" class="guide-line" />
      <line
        x1="81.5"
        y1="0"
        x2="-18.5"
        y2="100"
        class="guide-line guide-line-ghost"
      />
      <line
        x1="83"
        y1="0"
        x2="-17"
        y2="100"
        class="guide-line guide-line-faint"
      />
    </svg>

    <!-- =======================================================================
         FULL-BLEED PHOTOGRAPHIC CANVAS
         ======================================================================= -->
    <div class="hero-canvas-frame">
      <img
        src="/images/design01/hero-img-pizza.jpg"
        alt="Foundry Katamachi Nightlife"
        class="hero-bg-image"
      />
      <div class="hero-soft-scrim"></div>
    </div>

    <!-- =======================================================================
         SUBTLE EYE-GUIDE DESIGN LINES
         ======================================================================= -->
    <div class="guide-line guide-line-top-h" aria-hidden="true"></div>
    <div class="guide-line guide-line-side-v" aria-hidden="true"></div>

    <!-- =======================================================================
         FLOATING TOP MASTHEAD
         ======================================================================= -->
    <nav class="masthead-floating" aria-label="Primary Navigation">
      <div class="masthead-brand">
        <div class="brand-text bg-border">
          <span class="brand-name">{{ navbar.brandMark }}</span>
        </div>
      </div>

      <div class="masthead-actions">
        <span class="status-indicator bg-border">
          <span
            class="status-dot"
            :class="isDoorsOpen ? 'dot-open' : 'dot-closed'"
          ></span>
          <span class="status-label">{{ navbar.statusBadge }}</span>
        </span>

        <button
          type="button"
          class="nav-trigger-btn"
          :class="{ 'is-active': isNavOpen }"
          aria-label="Toggle navigation drawer"
          @click="toggleNav"
        >
          <span class="trigger-label">{{ isNavOpen ? "CLOSE" : "MENU" }}</span>
          <div class="trigger-burger">
            <span class="burger-bar bar-1"></span>
            <span class="burger-bar bar-2"></span>
          </div>
        </button>
      </div>
    </nav>

    <!-- =======================================================================
         HERO CONTENT LAYER
         ======================================================================= -->
    <div class="hero-content-layer">
      <div class="hero-copy-block">
        <div class="headline-mask">
          <!-- <p class="headline-mask-inner secondary-lead">
            {{ hero.titleSecondary }}
          </p> -->
        </div>

        <h1 class="hero-headline font-display">
          <div class="headline-mask">
            <span class="headline-mask-inner title-roman">{{
              hero.title
            }}</span>
          </div>
          <div class="headline-mask">
            <em class="headline-mask-inner title-italic">{{
              hero.titleItalic
            }}</em>
          </div>
        </h1>

        <!-- Sub-headline subtle division guide line -->
        <div class="guide-line guide-line-desc" aria-hidden="true"></div>

        <p class="hero-desc">{{ hero.subtitle }}</p>

        <!-- Actions Cluster -->
        <div class="hero-actions">
          <button
            v-if="hero.primaryAction"
            type="button"
            class="btn-primary"
            @click="scrollToTarget(hero.primaryAction.targetId)"
          >
            <span class="btn-primary-text">{{ hero.primaryAction.label }}</span>
            <Icon name="lucide:arrow-down-right" class="action-icon" />
          </button>

          <button
            v-if="hero.secondaryAction"
            type="button"
            class="btn-secondary"
            @click="scrollToTarget(hero.secondaryAction.targetId)"
          >
            <span>{{ hero.secondaryAction.label }}</span>
          </button>
        </div>

        <!-- Quantitative Stat Band (Responsive Flex Cluster) -->
        <div v-if="hero.liveStats?.length" class="hero-stats">
          <div
            v-for="(stat, idx) in hero.liveStats"
            :key="idx"
            class="stat-item bg-border"
          >
            <span class="stat-num font-display">{{ stat.value }}</span>

            <span class="stat-caption">{{ stat.description }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- =======================================================================
         SIDEBAR NAVIGATION DRAWER (WITH MATCHING HERO IMAGE BACKDROP)
         ======================================================================= -->
    <aside
      class="sidebar-drawer"
      :class="{ 'is-open': isNavOpen }"
      aria-hidden="!isNavOpen"
    >
      <div class="drawer-canvas-frame">
        <img
          src="/images/design01/hero-img-pizza.jpg"
          alt="Drawer Background"
          class="drawer-bg-image"
        />
        <div class="drawer-scrim"></div>
      </div>

      <div class="drawer-inner-content">
        <div class="drawer-top">
          <span class="drawer-caption">DIRECTORY</span>
          <button
            type="button"
            class="drawer-close"
            aria-label="Close directory menu"
            @click="closeNav"
          >
            <Icon name="lucide:x" class="close-icon" />
          </button>
        </div>

        <div class="drawer-main">
          <ul class="nav-links">
            <li
              v-for="item in navbar.navItems"
              :key="item.indexNumber"
              class="nav-link-item"
            >
              <button
                type="button"
                class="nav-item-btn"
                @click="scrollToTarget(item.targetId)"
              >
                <span class="item-num">{{ item.indexNumber }}</span>
                <span class="item-text font-display">{{ item.label }}</span>
                <Icon name="lucide:arrow-right" class="item-arrow" />
              </button>
            </li>
          </ul>

          <div v-if="navbar.ctaAction" class="drawer-cta">
            <button
              type="button"
              class="drawer-cta-action"
              @click="scrollToTarget(navbar.ctaAction.targetId)"
            >
              <span class="drawer-cta-text">{{ navbar.ctaAction.label }}</span>
              <Icon name="lucide:arrow-down" class="action-icon" />
            </button>
          </div>
        </div>

        <div class="drawer-meta">
          <span>DOORS: 18:00 – 02:00</span>
          <span>WALK-INS ONLY</span>
        </div>
      </div>
    </aside>

    <!-- Overlay backdrop -->
    <div v-if="isNavOpen" class="drawer-backdrop" @click="closeNav"></div>
  </header>
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
   1PX BEAUTIFUL DESIGN GUIDING LINES (SUBTLE TENSION FOR Noir GRIT)
   ============================================================================= */
/* Base guide line token */
.guide-line {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.08);
  z-index: 5;
  pointer-events: none;
}

/* Full-bleed vector canvas sitting between the image scrim and content */
.editorial-guide-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  pointer-events: none;
  overflow: visible;
}

/* Base line: crisp 1px stroke regardless of aspect ratio or screen size */
.editorial-guide-canvas .guide-line {
  stroke: rgba(255, 255, 255, 0.04);
  stroke-width: 1px;
  vector-effect: non-scaling-stroke;
}

/* Secondary echo lines with slight opacity falloffs for depth */
.editorial-guide-canvas .guide-line-ghost {
  stroke: rgba(255, 255, 255, 0.02);
}

.editorial-guide-canvas .guide-line-faint {
  stroke: rgba(255, 255, 255, 0.02);
}

/* =============================================================================
   HERO STAGE LAYOUT
   ============================================================================= */
.hero-stage {
  position: relative;
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background-color: var(--color-canvas);
}

.hero-canvas-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: var(--layer-base, 1);
  will-change: transform;
}

.hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
  transform: scale(1);
  will-change: transform;
}

.hero-soft-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.2) 0%,
    rgba(10, 10, 10, 0.1) 40%,
    rgba(10, 10, 10, 0.6) 75%,
    rgba(10, 10, 10, 0.92) 100%
  );
  pointer-events: none;
}

/* =============================================================================
   MASTHEAD
   ============================================================================= */
.masthead-floating {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--layout-gutter);
  background: transparent;
  border: none;
  pointer-events: none;
  margin-inline: auto;
}

.masthead-brand,
.masthead-actions {
  pointer-events: auto;
}

.masthead-brand {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.brand-name {
  font-family: var(--font-family-body);
  font-size: var(--text-size-xs);
  font-weight: 700;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-primary);
}

.brand-sub {
  font-family: var(--font-family-body);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.masthead-actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.status-indicator {
  font-family: var(--font-family-body);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-primary);
}

/* Glowing Indicator Dot */
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-pill);
  flex-shrink: 0;
}

.dot-open {
  background-color: #22c55e;
  box-shadow: 0 0 10px #22c55e;
  animation: pulse-open 1.8s infinite ease-in-out;
}

.dot-closed {
  background-color: #ef4444;
  box-shadow: 0 0 10px #ef4444;
  animation: pulse-closed 2.2s infinite ease-in-out;
}

@keyframes pulse-open {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 10px #22c55e;
  }
  50% {
    transform: scale(0.85);
    opacity: 0.5;
    box-shadow: 0 0 4px #22c55e;
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
    transform: scale(0.85);
    opacity: 0.45;
    box-shadow: 0 0 3px #ef4444;
  }
}

.nav-trigger-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-4);
  background-color: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: var(--border-width-hairline) solid var(--color-border);
  color: var(--color-text-primary);
  font-family: var(--font-family-body);
  font-size: var(--text-size-xs);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  cursor: pointer;
  pointer-events: auto;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.nav-trigger-btn:hover {
  background-color: var(--color-primary-1);
  color: var(--color-canvas);
  border-color: var(--color-primary-1);
}

.nav-trigger-btn:hover .burger-bar {
  background-color: var(--color-canvas);
}

.trigger-burger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 18px;
}

.burger-bar {
  display: block;
  width: 100%;
  height: 1px;
  background-color: var(--color-text-primary);
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}

.nav-trigger-btn.is-active .bar-1 {
  transform: translateY(3px) rotate(45deg);
}
.nav-trigger-btn.is-active .bar-2 {
  transform: translateY(-3px) rotate(-45deg);
}

/* =============================================================================
   HERO CONTENT
   ============================================================================= */
.hero-content-layer {
  position: relative;
  z-index: var(--layer-above, 10);
  width: min(
    var(--layout-container-max),
    calc(100% - (var(--layout-gutter) * 2))
  );
  margin-inline: auto;
  padding-top: 4rem;
  padding-bottom: var(--space-7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  box-sizing: border-box;
}

.hero-copy-block {
  max-width: 980px;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  will-change: transform, opacity;
}

.headline-mask {
  overflow: hidden;
}

.headline-mask-inner {
  display: block;
  will-change: transform, opacity;
}

.secondary-lead {
  font-family: var(--font-family-body);
  font-size: var(--text-size-xs);
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  margin: 0;
}

.hero-headline {
  display: flex;
  flex-direction: column;
  font-family: var(--font-family-display);
  font-size: var(--text-size-hero);
  line-height: var(--leading-none);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-primary);
  margin: 0;
}

.title-roman {
  font-weight: 400;
}

.title-italic {
  font-style: italic;
  font-weight: 300;
  color: var(--color-text-primary);
  padding-left: clamp(0rem, 5vw, 4rem);
}

.hero-desc {
  font-family: var(--font-family-body);
  font-size: var(--text-size-body-lg);
  line-height: var(--leading-normal);
  color: var(--color-text-secondary);
  max-width: 550px;
  margin: 0;
}

/* Actions Cluster */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-2);
}

/* 1. PATTERN ANIMATION FOR PRIMARY BUTTON (WITH 5-SECOND RETURNING ATTENTION PULSE) */
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

/* 2. SUBDUED ANIMATION FOR SECONDARY BUTTON */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 0.95rem 1.85rem;
  background-color: transparent;
  color: var(--color-text-primary);
  border: var(--border-width-hairline) solid rgba(255, 255, 255, 0.25);
  font-family: var(--font-family-body);
  font-size: var(--text-size-xs);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  cursor: pointer;
  transition:
    background-color 0.4s ease,
    border-color 0.4s ease,
    color 0.4s ease,
    transform 0.2s ease;
}

.btn-secondary:hover {
  background-color: rgba(10, 10, 10, 0.4);
  border-color: var(--color-text-primary);
  transform: translateY(-1px);
}

.action-icon {
  font-size: 1rem;
}

/* Responsive Stat Band (Flex wrapping) */
.hero-stats {
  display: grid;
  gap: var(--space-3);
  padding-top: var(--space-4);
  margin-top: var(--space-3);
  border-top: var(--border-width-hairline) solid var(--color-border-subtle);
  width: 100%;
}
@media (max-width: 639px) {
  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-item:last-child {
    grid-column: 1 / -1;
  }
}

/* 640px and up: 3 equal columns in a single row */
@media (min-width: 640px) {
  .hero-stats {
    grid-template-columns: repeat(3, 1fr);
  }
}
.stat-item {
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  box-sizing: border-box;
}

.stat-num {
  font-family: var(--font-family-display);
  font-size: var(--text-size-title-md);
  color: var(--color-text-primary);
  line-height: var(--leading-none);
}

.stat-heading {
  font-family: var(--font-family-body);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-primary);
  margin-top: 4px;
}

.stat-caption {
  font-family: var(--font-family-body);
  font-size: var(--text-size-micro);
  color: var(--color-text-muted);
}

/* =============================================================================
   SIDEBAR DRAWER WITH MATCHING PRIMARY HOVER ANIMATION
   ============================================================================= */
.sidebar-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: min(440px, 100vw);
  height: 100vh;
  height: 100dvh;
  z-index: var(--layer-drawer, 1000);
  border-left: var(--border-width-hairline) solid var(--color-border);
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.sidebar-drawer.is-open {
  transform: translateX(0);
}

.drawer-canvas-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.drawer-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.drawer-scrim {
  position: absolute;
  inset: 0;
  background-color: rgba(10, 10, 10, 0.88);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
}

.drawer-inner-content {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.drawer-top {
  padding: var(--space-4) var(--space-5);
  border-bottom: var(--border-width-hairline) solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.drawer-caption {
  font-family: var(--font-family-body);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.drawer-close {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 10, 10, 0.5);
  border: var(--border-width-hairline) solid var(--color-border);
  color: var(--color-text-muted);
  cursor: pointer;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;
}

.drawer-close:hover {
  color: var(--color-text-primary);
  border-color: var(--color-text-primary);
}

.close-icon {
  font-size: 1.25rem;
}

.drawer-main {
  padding: var(--space-6) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  flex-grow: 1;
  overflow-y: auto;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.nav-item-btn {
  width: 100%;
  display: flex;
  align-items: baseline;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-2);
  background: transparent;
  border: none;
  border-bottom: var(--border-width-hairline) solid var(--color-border-subtle);
  color: var(--color-text-primary);
  cursor: pointer;
  text-align: left;
  transition: padding-left 0.2s ease;
}

.nav-item-btn:hover {
  padding-left: var(--space-3);
}

.item-num {
  font-family: var(--font-family-body);
  font-size: var(--text-size-xs);
  color: var(--color-text-muted);
}

.item-text {
  font-family: var(--font-family-display);
  font-size: var(--text-size-title-sm);
  font-weight: 400;
  letter-spacing: var(--tracking-tight);
  flex-grow: 1;
}

.item-arrow {
  font-size: 1rem;
  color: var(--color-secondary-2);
}

.drawer-cta {
  margin-top: auto;
}

/* Primary Sliding Hover Pattern on the Drawer CTA */
.drawer-cta-action {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-4);
  background-color: var(--color-primary-1);
  color: var(--color-canvas);
  border: var(--border-width-hairline) solid var(--color-primary-1);
  font-family: var(--font-family-body);
  font-size: var(--text-size-xs);
  font-weight: 700;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition:
    color 0.35s cubic-bezier(0.25, 1, 0.5, 1),
    transform 0.2s ease;
}

.drawer-cta-action::before {
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

.drawer-cta-action:hover {
  color: var(--color-primary-1);
  transform: translateY(-2px);
}

.drawer-cta-action:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

.drawer-meta {
  padding: var(--space-4) var(--space-5);
  border-top: var(--border-width-hairline) solid var(--color-border);
  display: flex;
  justify-content: space-between;
  font-family: var(--font-family-body);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.drawer-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: calc(var(--layer-drawer, 1000) - 1);
}

/* =============================================================================
   RESPONSIVE OVERRIDES
   ============================================================================= */
@media (max-width: 768px) {
  .masthead-floating {
    padding: var(--space-3) var(--layout-gutter);
  }

  .status-indicator {
    display: none;
  }

  .hero-headline {
    font-size: clamp(2.5rem, 12vw, 4.2rem);
  }

  .title-italic {
    padding-left: 0;
  }

  .hero-stats {
    flex-direction: column;
    gap: var(--space-2);
  }

  .stat-item {
    flex: 1 1 100%;
    width: 100%;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }

  .guide-line-side-v {
    display: none;
  }
}
</style>
