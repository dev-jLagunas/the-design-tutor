<!-- components/movements/design-01/pizza-section-4.vue -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

// 8 Curated Placeholders for the nocturnal gallery
const galleryImages = [
  {
    id: 1,
    src: "/images/design01/extra-img-1.webp",
    alt: "Cast-iron baked deep dish pizza slice on steel bar",
    tag: "VINYL ROTATION",
  },
  {
    id: 2,
    src: "/images/design01/hero-img-pizza.webp",
    alt: "Renovated steel counter and late-night patrons",
    tag: "MIDNIGHT SERVICE",
  },
  {
    id: 3,
    src: "/images/design01/extra-img-3.webp",
    alt: "Rich tomato sauce and thick cheese pull",
    tag: "NATURAL PAIRINGS",
  },
  {
    id: 4,
    src: "/images/design01/extra-img-4.webp",
    alt: "Technics turntable with vinyl spinning under halogen beam",
    tag: "FRESHLY BAKED",
  },
  {
    id: 5,
    src: "/images/design01/extra-img-5.webp",
    alt: "Poured concrete bar, natural wine, and amaro pours",
    tag: "PERFECT TEXTURES",
  },
  {
    id: 6,
    src: "/images/design01/extra-img-6.webp",
    alt: "Print menus and typographic details",
    tag: "LOCAL INGREDIENTS",
  },
  {
    id: 7,
    src: "/images/design01/extra-img-2.webp",
    alt: "Direct-flash chiaroscuro photography of the interior",
    tag: "MONTHLY VARIATIONS",
  },
  {
    id: 8,
    src: "/images/design01/sect-2-img.webp",
    alt: "Final nightcap and quiet counter reflection",
    tag: "OUTDOOR SEATING",
  },
];

const activeIndex = ref(0);
const pinContainerRef = ref<HTMLElement | null>(null);
const horizontalTrackRef = ref<HTMLElement | null>(null);
let gsapCtx: any = null;
let stInstance: any = null;

// Native scroll bridge: translates target slide indices into native scroll positions
const scrollToSlide = (index: number) => {
  if (!stInstance) return;
  const targetIndex = Math.max(0, Math.min(index, galleryImages.length - 1));
  const start = stInstance.start;
  const totalDistance = stInstance.end - start;
  const targetScroll =
    start + (targetIndex / (galleryImages.length - 1)) * totalDistance;

  window.scrollTo({
    top: targetScroll,
    behavior: "smooth",
  });
};

const goToPrev = () => {
  scrollToSlide(activeIndex.value - 1);
};

const goToNext = () => {
  scrollToSlide(activeIndex.value + 1);
};

const skipToEnd = () => {
  scrollToSlide(galleryImages.length - 1);
};

const initHorizontalScroll = async () => {
  if (import.meta.server) return;
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");

  gsap.registerPlugin(ScrollTrigger);

  await nextTick();
  if (gsapCtx) gsapCtx.revert();
  if (!pinContainerRef.value) return;
  gsapCtx = gsap.context(() => {
    const track = horizontalTrackRef.value;
    const pinContainer = pinContainerRef.value;
    if (!track || !pinContainer) return;

    const panels = gsap.utils.toArray<HTMLElement>(".gallery-slide");
    const totalPanels = panels.length;

    // Horizontal Scroll Trigger with Screen Pinning
    const hTween = gsap.to(panels, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: pinContainer,
        pin: true,
        scrub: 0.8,
        end: () => `+=${window.innerWidth * (totalPanels - 1)}`,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const index = Math.round(self.progress * (totalPanels - 1));
          activeIndex.value = Math.min(Math.max(index, 0), totalPanels - 1);
        },
      },
    });

    stInstance = hTween.scrollTrigger;

    // Parallax nudge during the horizontal scrub
    panels.forEach((panel) => {
      const img = panel.querySelector(".slide-image");
      if (img) {
        gsap.fromTo(
          img,
          { xPercent: -5 },
          {
            xPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: pinContainer,
              start: "top top",
              end: () => `+=${window.innerWidth * (totalPanels - 1)}`,
              scrub: true,
            },
          },
        );
      }
    });
  }, pinContainerRef.value);
};

onMounted(() => {
  initHorizontalScroll();
});

onBeforeUnmount(() => {
  if (gsapCtx) gsapCtx.revert();
  stInstance = null;
});
</script>

<template>
  <section
    ref="pinContainerRef"
    id="section-gallery"
    class="horizontal-gallery-stage"
  >
    <!-- =======================================================================
         1. EDITORIAL RETICLE GUIDE LINES
         ======================================================================= -->
    <svg
      class="editorial-guide-canvas"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1="20" x2="100" y2="80" class="guide-line" />
      <line
        x1="0"
        y1="21.2"
        x2="100"
        y2="81.2"
        class="guide-line guide-line-ghost"
      />
      <line
        x1="0"
        y1="22.5"
        x2="100"
        y2="82.5"
        class="guide-line guide-line-faint"
      />

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
         2. PURE CSS ARCHITECTURAL RETICLE LINES
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
         3. HORIZONTAL FULL-SCREEN IMAGE SLIDER TRACK
         ======================================================================= -->
    <div ref="horizontalTrackRef" class="horizontal-track">
      <div v-for="img in galleryImages" :key="img.id" class="gallery-slide">
        <div class="slide-image-scaler">
          <img
            :src="img.src"
            :alt="img.alt"
            class="slide-image"
            loading="lazy"
          />
        </div>
        <div class="slide-scrim"></div>
        <div class="slide-tag bg-border">{{ img.tag }}</div>
      </div>
    </div>

    <!-- =======================================================================
         4. FIXED OVERLAY: CENTERED BRAND MARK & HERO-MATCHED BOUNCE
         ======================================================================= -->
    <div class="static-overlay">
      <div class="center-content-lockup">
        <!-- Deep Dish, By The Slice typography matching SectionZero Hero -->
        <h2 class="hero-headline font-display floating-bounce">
          <span class="title-roman">DEEP DISH,</span>
          <em class="title-italic">BY THE SLICE.</em>
        </h2>
      </div>

      <!-- UX Controls: Prev Arrow, Interactive Dots, Next Arrow, Skip Button -->
      <nav class="gallery-controls-bar" aria-label="Gallery Controls">
        <button
          type="button"
          class="nav-arrow-btn"
          :disabled="activeIndex === 0"
          aria-label="Previous slide"
          @click="goToPrev"
        >
          <Icon name="lucide:arrow-left" class="arrow-icon" />
        </button>

        <div class="dots-cluster" role="tablist">
          <button
            v-for="(_, idx) in galleryImages"
            :key="idx"
            type="button"
            class="step-dot"
            :class="{ active: idx === activeIndex }"
            role="tab"
            :aria-selected="idx === activeIndex"
            :aria-label="`Slide ${idx + 1}`"
            @click="scrollToSlide(idx)"
          ></button>
        </div>

        <button
          type="button"
          class="nav-arrow-btn"
          :disabled="activeIndex === galleryImages.length - 1"
          aria-label="Next slide"
          @click="goToNext"
        >
          <Icon name="lucide:arrow-right" class="arrow-icon" />
        </button>

        <button
          v-if="activeIndex < galleryImages.length - 1"
          type="button"
          class="skip-photos-btn font-body"
          aria-label="Skip to final slide"
          @click="skipToEnd"
        >
          SKIP
        </button>
      </nav>
    </div>
  </section>
</template>

<style scoped>
/* =============================================================================
   REUSABLE BACKDROP UTILITY (MATCHED TO SECTION 0)
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

/* =============================================================================
   STAGE & FULLSCREEN PIN BOUNDS
   ============================================================================= */
.horizontal-gallery-stage {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: var(--color-canvas);
  box-sizing: border-box;
}

/* =============================================================================
   SLIDER TRACK & FULL-BLEED SLIDES WITH CONTINUOUS ZOOM ANIMATION
   ============================================================================= */
.horizontal-track {
  display: flex;
  height: 100%;
  width: 100%;
  will-change: transform;
}

.gallery-slide {
  position: relative;
  flex: 0 0 100vw;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* Zoom animation container */
.slide-image-scaler {
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: image-ambient-zoom 16s ease-in-out infinite alternate;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transform: scale(1.08);
  will-change: transform;
}

/* Gentle continuous zoom-in / zoom-out breathing motion */
@keyframes image-ambient-zoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.12);
  }
}

/* Nocturnal dark gradient scrim to protect centered typography readability */

.slide-tag {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-family-body);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-primary);
  text-transform: uppercase;
  z-index: 5;
  height: fit-content;
}

/* =============================================================================
   FIXED OVERLAY: FULL-CENTERED COPY & HERO DESIGN SYSTEM MATCH
   ============================================================================= */
.static-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--layout-gutter);
  pointer-events: none;
  box-sizing: border-box;
}

.center-content-lockup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: var(--space-4);
}

/* 1. Exact Navbar Brand Typography from PizzaSectionZero */

/* 2. Exact Headline Typography from PizzaSectionZero */
.hero-headline {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  font-family: var(--font-family-display);
  font-size: var(--text-size-hero);
  line-height: var(--leading-none);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-primary);
  margin: 0;
  text-shadow: 0 8px 32px rgba(0, 0, 0, 0.9);
}

.title-roman {
  font-weight: 400;
}

.title-italic {
  font-style: italic;
  font-weight: 300;
  color: var(--color-text-primary);
  margin-top: 0.15em;
}

/* Subtle continuous floating physics bounce */
.floating-bounce {
  animation: float-soft-bounce 5.5s ease-in-out infinite alternate;
}

@keyframes float-soft-bounce {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-9px);
  }
  100% {
    transform: translateY(4px);
  }
}

/* =============================================================================
   CONTROLS BAR: ARROWS, DOTS, & SKIP BUTTON
   ============================================================================= */
.gallery-controls-bar {
  position: absolute;
  bottom: clamp(1.5rem, 4vh, 3rem);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 14px;
  background: transparent;
  border: none;
  padding: 0;
  pointer-events: auto;
}

.nav-arrow-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.45);
  cursor: pointer;
  padding: 4px;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.nav-arrow-btn:hover:not(:disabled) {
  color: var(--color-primary-1);
  transform: scale(1.18);
}

.nav-arrow-btn:disabled {
  opacity: 0.2;
  cursor: default;
}

.arrow-icon {
  font-size: 0.95rem;
}

.dots-cluster {
  display: flex;
  align-items: center;
  gap: 10px;
}

.step-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--radius-pill);
  background-color: rgba(255, 255, 255, 0.28);
  border: none;
  padding: 0;
  cursor: pointer;
  transition:
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    background-color 0.3s ease,
    width 0.3s ease;
}

.step-dot:hover {
  background-color: rgba(255, 255, 255, 0.6);
}

.step-dot.active {
  width: 18px;
  background-color: var(--color-primary-1);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
}

.skip-photos-btn {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  cursor: pointer;
  padding: 2px 6px;
  margin-left: 6px;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.skip-photos-btn:hover {
  color: var(--color-primary-1);
  transform: translateY(-1px);
}

/* =============================================================================
   RETICLE GUIDE CANVAS & FLOATING TECHNICAL LINES
   ============================================================================= */
.editorial-guide-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 6;
  pointer-events: none;
  overflow: visible;
}

.editorial-guide-canvas .guide-line {
  stroke: rgba(255, 255, 255, 0.04);
  stroke-width: 1px;
  vector-effect: non-scaling-stroke;
}

.editorial-guide-canvas .guide-line-ghost {
  stroke: rgba(255, 255, 255, 0.02);
}

.editorial-guide-canvas .guide-line-faint {
  stroke: rgba(255, 255, 255, 0.015);
}

.technical-bg-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 7;
  pointer-events: none;
  overflow: hidden;
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
  top: 15%;
  animation: float-horizontal-1 16s ease-in-out infinite alternate;
}

.anim-line-h-2 {
  left: 0;
  right: 0;
  height: 1px;
  bottom: 18%;
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
  right: 22%;
  animation: float-vertical-2 26s ease-in-out infinite alternate;
}

.drafting-cross {
  position: absolute;
  font-family: var(--font-family-body);
  font-size: var(--text-size-sm);
  line-height: 1;
  color: rgba(255, 255, 255, 0.18);
  user-select: none;
}

.cross-tl {
  top: 15%;
  left: 18%;
  transform: translate(-50%, -50%);
}
.cross-tr {
  top: 15%;
  right: 22%;
  transform: translate(50%, -50%);
}
.cross-bl {
  bottom: 18%;
  left: 18%;
  transform: translate(-50%, 50%);
}
.cross-br {
  bottom: 18%;
  right: 22%;
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
    transform: translateY(24px);
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
    transform: translateY(-20px);
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
    transform: translateX(-30px);
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
    transform: translateX(25px);
    opacity: 0.07;
  }
}

/* =============================================================================
   RESPONSIVE ADJUSTMENTS
   ============================================================================= */
@media (max-width: 768px) {
  .anim-line-v-1,
  .anim-line-v-2,
  .drafting-cross {
    display: none;
  }

  .hero-headline {
    font-size: clamp(2.4rem, 11vw, 4rem);
  }

  .gallery-controls-bar {
    gap: 8px;
  }
}
</style>
