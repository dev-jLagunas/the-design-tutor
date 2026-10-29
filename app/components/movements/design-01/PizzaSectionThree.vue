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

// =============================================================================
// AUDIO PLAYBACK STATE & TONEARM CONTROLS
// =============================================================================
const audioRef = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);

const toggleAudio = () => {
  if (!audioRef.value) return;
  if (isPlaying.value) {
    audioRef.value.pause();
    isPlaying.value = false;
  } else {
    audioRef.value
      .play()
      .then(() => {
        isPlaying.value = true;
      })
      .catch(() => {
        isPlaying.value = false;
      });
  }
};

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

    // 2. Parallax drift
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    scrollTl.to(".orbit-left-quadrant", { yPercent: -14, ease: "none" }, 0);
    scrollTl.to(".orbit-right-quadrant", { yPercent: 12, ease: "none" }, 0);
    scrollTl.to(".technical-bg-canvas", { yPercent: 8, ease: "none" }, 0);
  }, sectionRef.value);
};

onMounted(() => {
  if (audioRef.value) {
    audioRef.value.volume = 0.22;
  }
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
  if (audioRef.value) {
    audioRef.value.pause();
  }
});
</script>

<template>
  <section
    ref="sectionRef"
    :id="data.sectionAnchorId || 'section-sound'"
    class="vibe-stage"
  >
    <!-- Hidden Audio Engine -->
    <audio
      ref="audioRef"
      src="/sounds/bg-beats.mp3"
      loop
      preload="auto"
    ></audio>

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
        <!-- Center Vinyl Turntable Display with Mechanical Tonearm -->
        <div class="vinyl-stage" aria-label="Acoustic Vinyl Turntable Display">
          <div class="turntable-deck">
            <div
              class="vinyl-disc-wrap"
              :class="{ 'is-active-spin': isPlaying }"
              @click="toggleAudio"
            >
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
                  y="170"
                  text-anchor="middle"
                  class="vinyl-label-title font-display"
                >
                  FOUNDRY
                </text>
                <text
                  x="200"
                  y="228"
                  text-anchor="middle"
                  class="vinyl-label-sub"
                >
                  33⅓ RPM // ANALOG
                </text>
                <text
                  x="200"
                  y="242"
                  text-anchor="middle"
                  class="vinyl-label-meta"
                >
                  KANAZAWA
                </text>
              </svg>

              <!-- Central Play / Pause Controller Button -->
              <button
                type="button"
                class="center-spindle-play-btn"
                :aria-label="isPlaying ? 'Pause audio' : 'Play audio'"
                @click.stop="toggleAudio"
              >
                <Icon
                  :name="isPlaying ? 'lucide:pause' : 'lucide:play'"
                  class="play-toggle-icon"
                  :class="{ 'icon-offset': !isPlaying }"
                />
              </button>

              <!-- Holographic Sheen Filter -->
              <div class="vinyl-light-sheen"></div>
            </div>

            <!-- Stylus Tonearm Assembly -->
            <div
              class="tonearm-assembly"
              :class="{ 'is-needle-dropped': isPlaying }"
              aria-hidden="true"
            >
              <div class="tonearm-pivot-base"></div>
              <div class="tonearm-lever">
                <div class="tonearm-cartridge">
                  <div class="cartridge-stylus-pin"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Dynamic Status HUD Tag -->
          <button
            type="button"
            class="vinyl-hud-pill bg-border"
            @click="toggleAudio"
          >
            <span
              class="status-dot"
              :class="isPlaying ? 'dot-spinning' : 'dot-idle'"
            ></span>
            <span>
              {{
                isPlaying
                  ? "CURRENTLY PLAYING // ANALOG VINYL"
                  : "PLAY SONG // 33⅓ RPM"
              }}
            </span>
          </button>
        </div>

        <!-- Left Orbit Quadrant: Lead Narrative & Vibe Pillar 01 -->
        <div class="orbit-left-quadrant">
          <div
            v-if="data.leadCopy"
            class="orbit-lead-card bg-border special-border"
          >
            <div class="card-meta-line">
              <Icon name="lucide:disc-3" class="meta-icon" />
              <span>ACOUSTIC PHILOSOPHY</span>
            </div>
            <p class="orbit-lead-text">{{ data.leadCopy }}</p>
          </div>

          <article
            v-if="data.vibePillars?.[0]"
            class="orbit-pillar-card bg-border"
          >
            <div class="pillar-header">
              <span class="pillar-num">{{ data.vibePillars[0].index }}</span>
              <span class="pillar-tag">{{ data.vibePillars[0].label }}</span>
            </div>
            <h3 class="pillar-title">
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
              <span class="pillar-num">{{ data.vibePillars[1].index }}</span>
              <span class="pillar-tag">{{ data.vibePillars[1].label }}</span>
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
              <span class="pillar-num">{{ data.vibePillars[2].index }}</span>
              <span class="pillar-tag">{{ data.vibePillars[2].label }}</span>
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
        <div class="footer-note-indicator">
          <Icon name="lucide:volume-2" class="audio-icon" />
          <span>SESSION DIRECTIVE</span>
        </div>
        <p class="footer-note-text">{{ data.footerNote }}</p>
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

.eyebrow-badge {
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
  padding-left: 1rem;
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
   RADIAL VINYL ORBIT ARENA
   ============================================================================= */
.orbit-arena {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(340px, 440px) 1fr;
  align-items: center;
  gap: var(--space-6);
  min-height: 480px;
}

/* -----------------------------------------------------------------------------
   TURNTABLE DECK & MECHANICAL TONEARM
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

.turntable-deck {
  position: relative;
  width: 100%;
  max-width: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  cursor: pointer;
  user-select: none;
}

.vinyl-disc {
  width: 100%;
  height: 100%;
  display: block;
  transform-origin: 50% 50%;
  animation: vinyl-spin 18s linear infinite;
  animation-play-state: paused;
  transition: filter 0.3s ease;
}

.is-active-spin .vinyl-disc {
  animation-play-state: running;
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
  fill: #1a1a1a;
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

/* Center Spindle Play Button */
.center-spindle-play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  border-radius: var(--radius-pill);
  background-color: rgba(10, 10, 10, 0.9);
  border: var(--border-width-hairline) solid rgba(255, 255, 255, 0.4);
  color: var(--color-primary-1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 6;
  transition:
    transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
    background-color 0.2s ease,
    border-color 0.2s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
}

.center-spindle-play-btn:hover {
  transform: translate(-50%, -50%) scale(1.12);
  background-color: var(--color-primary-1);
  color: var(--color-canvas);
  border-color: var(--color-primary-1);
}

.play-toggle-icon {
  font-size: 1.15rem;
}

.play-toggle-icon.icon-offset {
  margin-left: 2px;
}

/* Light Sheen */
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

/* =============================================================================
   MECHANICAL TONEARM (STYLUS NEEDLE ASSEMBLY)
   ============================================================================= */
.tonearm-assembly {
  position: absolute;
  top: 4px;
  right: 18px;
  width: 70px;
  height: 220px;
  z-index: 5;
  pointer-events: none;
  transform-origin: 35px 24px;
  transform: rotate(0deg);
  transition: transform 0.85s cubic-bezier(0.25, 1, 0.5, 1);
}

.tonearm-assembly.is-needle-dropped {
  transform: rotate(28deg);
}

.tonearm-pivot-base {
  position: absolute;
  top: 10px;
  left: 21px;
  width: 28px;
  height: 28px;
  border-radius: var(--radius-pill);
  background: radial-gradient(circle, #3a3a3a 0%, #151515 100%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
}

.tonearm-lever {
  position: absolute;
  top: 24px;
  left: 33px;
  width: 3px;
  height: 165px;
  background: linear-gradient(180deg, #888 0%, #555 100%);
  border-radius: 2px;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.5);
}

.tonearm-cartridge {
  position: absolute;
  bottom: -4px;
  left: -8px;
  width: 14px;
  height: 28px;
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 1px;
  transform: rotate(18deg);
  transform-origin: top center;
}

.cartridge-stylus-pin {
  position: absolute;
  bottom: -2px;
  left: 5px;
  width: 3px;
  height: 4px;
  background-color: var(--color-primary-1);
  box-shadow: 0 0 4px var(--color-primary-1);
}

/* =============================================================================
   TURNTABLE HUD STATUS PILL
   ============================================================================= */
.vinyl-hud-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.35rem 0.85rem;
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-primary);
  background: transparent;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.vinyl-hud-pill:hover {
  border-color: rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.05);
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

.dot-idle {
  background-color: #71717a;
  box-shadow: 0 0 4px rgba(113, 113, 122, 0.5);
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

.orbit-right-quadrant {
  margin-top: -4rem;
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

.special-border {
  border: none;
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
  color: var(--color-highlight);
}

.pillar-title {
  font-family: var(--font-family-display);
  font-size: var(--text-size-title-sm);
  color: var(--color-text-primary);
  line-height: var(--leading-tight);
  margin: 0;
  text-transform: uppercase;
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

  .tonearm-assembly {
    display: none;
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
