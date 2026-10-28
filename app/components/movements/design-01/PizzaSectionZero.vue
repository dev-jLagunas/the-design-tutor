<!-- components/movements/design-01/pizza-section0.vue -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";
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
    // -------------------------------------------------------------------------
    // 1. ENTRANCE TIMELINE (Punches in on mount)
    // -------------------------------------------------------------------------
    const enterTl = gsap.timeline({ defaults: { ease: "power4.out" } });

    enterTl
      .fromTo(
        ".hero-bg-image",
        { scale: 1.15, filter: "brightness(0.65)" },
        { scale: 1, filter: "brightness(1)", duration: 1.6 },
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
        [".hero-eyebrow-row", ".hero-actions", ".hero-stats"],
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.1 },
        "-=0.5",
      );

    // -------------------------------------------------------------------------
    // 2. SCROLL TRIGGER TIMELINE (Parallax + scrubbed exit on scroll down)
    // -------------------------------------------------------------------------
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });

    // Parallax background image (slower shift)
    scrollTl.to(
      ".hero-bg-image",
      {
        yPercent: 24,
        scale: 1.08,
        ease: "none",
      },
      0,
    );

    // Typography & Content float upward and fade out
    scrollTl.to(
      ".hero-copy-block",
      {
        yPercent: -28,
        opacity: 0,
        ease: "power1.in",
      },
      0,
    );

    // Masthead fades subtly on initial scroll
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

// Re-init if props shift between Live and Educational
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
         FULL-BLEED PHOTOGRAPHIC CANVAS (NO VIGNETTE / DIRECT 35MM)
         ======================================================================= -->
    <div class="hero-canvas-frame">
      <img
        src="/images/design01/hero-img-pizza.jpg"
        alt="Foundry Katamachi Nightlife"
        class="hero-bg-image"
      />
      <!-- Minimal soft falloff purely for bottom text legibility -->
      <div class="hero-soft-scrim"></div>
    </div>

    <!-- =======================================================================
         FLOATING TOP MASTHEAD (NO UNDERLINE / ZERO BORDER)
         ======================================================================= -->
    <nav class="masthead-floating" aria-label="Primary Navigation">
      <div class="masthead-brand">
        <div class="brand-symbol">
          <Icon name="lucide:disc" class="symbol-icon" />
        </div>
        <div class="brand-text">
          <span class="brand-name">{{ navbar.brandMark }}</span>
          <span class="brand-sub">{{ navbar.subBrandMark }}</span>
        </div>
      </div>

      <div class="masthead-actions">
        <span class="status-indicator">
          <span class="status-dot"></span>
          {{ navbar.statusBadge }}
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
         HERO CONTENT LAYER (PULLING FROM TOKENS)
         ======================================================================= -->
    <div class="hero-content-layer">
      <div class="hero-copy-block">
        <!-- Eyebrow & Status Row -->
        <div class="hero-eyebrow-row">
          <span class="eyebrow-lead">{{ hero.eyebrow }}</span>
          <span class="eyebrow-status">{{ hero.statusBadge }}</span>
        </div>

        <!-- Headline with overflow-hidden wrappers for clip animation -->
        <h1 class="hero-headline">
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

        <div class="headline-mask">
          <p class="headline-mask-inner secondary-lead">
            {{ hero.titleSecondary }}
          </p>
        </div>

        <p class="hero-desc">{{ hero.subtitle }}</p>

        <!-- Neutral Actions Cluster -->
        <div class="hero-actions">
          <button
            v-if="hero.primaryAction"
            type="button"
            class="btn-primary"
            @click="scrollToTarget(hero.primaryAction.targetId)"
          >
            <span>{{ hero.primaryAction.label }}</span>
            <Icon name="lucide:arrow-down-right" class="action-icon" />
          </button>

          <button
            v-if="hero.secondaryAction"
            type="button"
            class="btn-ghost"
            @click="scrollToTarget(hero.secondaryAction.targetId)"
          >
            <span>{{ hero.secondaryAction.label }}</span>
          </button>
        </div>

        <!-- Quantitative Stat Band -->
        <div v-if="hero.liveStats?.length" class="hero-stats">
          <div
            v-for="(stat, idx) in hero.liveStats"
            :key="idx"
            class="stat-item"
          >
            <span class="stat-num">{{ stat.value }}</span>
            <span class="stat-heading">{{ stat.label }}</span>
            <span class="stat-caption">{{ stat.description }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- =======================================================================
         SIDEBAR NAVIGATION DRAWER
         ======================================================================= -->
    <aside
      class="sidebar-drawer"
      :class="{ 'is-open': isNavOpen }"
      aria-hidden="!isNavOpen"
    >
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
              <span class="item-text">{{ item.label }}</span>
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
            <span>{{ navbar.ctaAction.label }}</span>
            <Icon name="lucide:arrow-down" class="action-icon" />
          </button>
        </div>
      </div>

      <div class="drawer-meta">
        <span>DOORS: 18:00 – 02:00</span>
        <span>WALK-INS ONLY</span>
      </div>
    </aside>

    <!-- Overlay backdrop -->
    <div v-if="isNavOpen" class="drawer-backdrop" @click="closeNav"></div>
  </header>
</template>

<style scoped>
/* =============================================================================
   HERO STAGE LAYOUT
   ============================================================================= */
.hero-stage {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 700px;
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
  z-index: var(--layer-base);
  will-change: transform;
}

.hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
}

.hero-soft-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.25) 0%,
    rgba(10, 10, 10, 0) 35%,
    rgba(10, 10, 10, 0.45) 70%,
    rgba(10, 10, 10, 0.88) 100%
  );
  pointer-events: none;
}

/* =============================================================================
   MASTHEAD (FLOATING OVER THE CANVAS)
   ============================================================================= */
.masthead-floating {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--layer-above);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-5) var(--layout-gutter);
  background: transparent;
  border: none;
}

.masthead-brand {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.brand-symbol {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: var(--border-width-hairline) solid var(--color-border);
  background-color: rgba(10, 10, 10, 0.4);
  backdrop-filter: blur(10px);
  color: var(--color-text-primary);
}

.symbol-icon {
  font-size: 1.25rem;
}

.brand-text {
  display: flex;
  flex-direction: column;
  font-family: var(--font-family-mono);
  gap: 2px;
}

.brand-name {
  font-size: var(--text-size-xs);
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-primary);
}

.brand-sub {
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-muted);
}

.masthead-actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-family: var(--font-family-mono);
}

.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-primary);
  background-color: rgba(10, 10, 10, 0.5);
  backdrop-filter: blur(10px);
  border: var(--border-width-hairline) solid var(--color-border);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--radius-pill);
  background-color: var(--color-primary-1);
  box-shadow: 0 0 6px var(--color-primary-1);
}

.nav-trigger-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-4);
  background-color: rgba(10, 10, 10, 0.5);
  backdrop-filter: blur(10px);
  border: var(--border-width-hairline) solid var(--color-border);
  color: var(--color-text-primary);
  font-family: var(--font-family-mono);
  font-size: var(--text-size-xs);
  letter-spacing: var(--tracking-widest);
  cursor: pointer;
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
  z-index: var(--layer-above);
  width: min(
    var(--layout-container-max),
    calc(100% - (var(--layout-gutter) * 2))
  );
  margin-inline: auto;
  padding-bottom: var(--space-6);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
}

.hero-copy-block {
  max-width: 960px;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  will-change: transform, opacity;
}

.hero-eyebrow-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
  font-family: var(--font-family-mono);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
}

.eyebrow-lead {
  color: var(--color-text-muted);
}

.eyebrow-status {
  color: var(--color-text-primary);
  border-left: var(--border-width-hairline) solid var(--color-border);
  padding-left: var(--space-3);
}

.headline-mask {
  overflow: hidden;
}

.headline-mask-inner {
  display: block;
  will-change: transform, opacity;
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

.secondary-lead {
  font-family: var(--font-family-mono);
  font-size: var(--text-size-xs);
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-muted);
  text-transform: uppercase;
  margin: 0;
}

.hero-desc {
  font-family: var(--font-family-body);
  font-size: var(--text-size-body-lg);
  line-height: var(--leading-normal);
  color: var(--color-text-secondary);
  max-width: 680px;
  margin: 0;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-2);
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.9rem 1.8rem;
  background-color: var(--color-primary-1);
  color: var(--color-canvas);
  border: var(--border-width-hairline) solid var(--color-primary-1);
  font-family: var(--font-family-mono);
  font-size: var(--text-size-xs);
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.btn-primary:hover {
  background-color: var(--color-primary-2);
  transform: translateY(-2px);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 0.9rem 1.8rem;
  background-color: rgba(10, 10, 10, 0.5);
  backdrop-filter: blur(10px);
  color: var(--color-text-primary);
  border: var(--border-width-hairline) solid var(--color-border);
  font-family: var(--font-family-mono);
  font-size: var(--text-size-xs);
  letter-spacing: var(--tracking-wide);
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.btn-ghost:hover {
  border-color: var(--color-text-primary);
}

.action-icon {
  font-size: 1rem;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-4);
  padding-top: var(--space-5);
  margin-top: var(--space-3);
  border-top: var(--border-width-hairline) solid var(--color-border-subtle);
  font-family: var(--font-family-mono);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-num {
  font-family: var(--font-family-display);
  font-size: var(--text-size-title-md);
  color: var(--color-text-primary);
  line-height: var(--leading-none);
}

.stat-heading {
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-primary);
  margin-top: 4px;
}

.stat-caption {
  font-size: var(--text-size-micro);
  color: var(--color-text-muted);
}

/* =============================================================================
   SIDEBAR DRAWER
   ============================================================================= */
.sidebar-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: min(440px, 100%);
  height: 100vh;
  z-index: var(--layer-drawer);
  background-color: var(--color-surface);
  border-left: var(--border-width-hairline) solid var(--color-border);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.sidebar-drawer.is-open {
  transform: translateX(0);
}

.drawer-top {
  padding: var(--space-5);
  border-bottom: var(--border-width-hairline) solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-family-mono);
}

.drawer-caption {
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-muted);
}

.drawer-close {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
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
  font-size: 1.15rem;
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
  font-family: var(--font-family-mono);
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

.drawer-cta-action {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-4);
  background-color: var(--color-primary-1);
  color: var(--color-canvas);
  border: none;
  font-family: var(--font-family-mono);
  font-size: var(--text-size-xs);
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  cursor: pointer;
}

.drawer-meta {
  padding: var(--space-4) var(--space-5);
  border-top: var(--border-width-hairline) solid var(--color-border);
  display: flex;
  justify-content: space-between;
  font-family: var(--font-family-mono);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-muted);
}

.drawer-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(10, 10, 10, 0.65);
  backdrop-filter: blur(4px);
  z-index: var(--layer-scrim);
}

/* =============================================================================
   RESPONSIVE OVERRIDES
   ============================================================================= */
@media (max-width: 768px) {
  .status-indicator {
    display: none;
  }
  .hero-headline {
    font-size: clamp(2.4rem, 11vw, 4rem);
  }
  .title-italic {
    padding-left: 0;
  }
  .hero-stats {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}
</style>
