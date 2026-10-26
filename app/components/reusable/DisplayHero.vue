<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Props {
  word1: string;
  word2: string;
  word3: string;
  tagline?: string;
}

const props = withDefaults(defineProps<Props>(), {
  tagline: "",
});

const taglineRef = ref<HTMLElement | null>(null);
const fill1 = ref<HTMLElement | null>(null);
const fill2 = ref<HTMLElement | null>(null);
const fill3 = ref<HTMLElement | null>(null);

onMounted(async () => {
  // Dynamically load GSAP on the client to avoid SSR issues
  const { gsap } = await import("gsap");

  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  gsap.set(".hero-word-wrapper span", { y: "110%" });
  if (taglineRef.value) gsap.set(taglineRef.value, { opacity: 0 });

  const fillLayers = [fill1.value, fill2.value, fill3.value].filter(Boolean);
  gsap.set(fillLayers, {
    clipPath: "inset(100% 0% 0% 0%)",
  });

  tl.to(".hero-word-wrapper span", {
    y: "0%",
    duration: 0.5,
    stagger: 0.2,
  });

  if (taglineRef.value) {
    tl.to(taglineRef.value, { opacity: 1, duration: 1 }, "-=0.5");
  }

  const highlightTl = gsap.timeline({ repeat: -1, delay: 1.1 });

  highlightTl
    .to(fillLayers, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 0.8,
      ease: "power2.inOut",
      stagger: 0.8,
    })
    .to(
      fillLayers,
      {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.8,
        ease: "power2.inOut",
      },
      "+=1.5",
    )
    .set(fillLayers, { clipPath: "inset(100% 0% 0% 0%)" });
});
</script>

<template>
  <section class="display-hero relative flex-col no-select">
    <div class="hero-container relative flex-col">
      <!-- Line 1: Word 1 (Gold Accent) -->
      <div class="hero-row row-start flex-center">
        <h1 class="hero-word-wrapper relative font-display">
          <span class="base-text">{{ word1 }}</span>
          <span ref="fill1" class="fill-text fill-gold cover-absolute">{{
            word1
          }}</span>
        </h1>

        <div class="icon-cluster flex-center">
          <Icon name="lucide:asterisk" class="spin-icon text-gold icon-xl" />
          <Icon
            name="lucide:code-2"
            class="spin-icon text-cyan icon-md opacity-60"
          />
          <Icon
            name="lucide:palette"
            class="spin-icon text-coral icon-lg opacity-60"
          />
          <Icon
            name="lucide:layout-panel-left"
            class="spin-icon text-gold icon-md opacity-40 hide-mobile"
          />
          <Icon
            name="lucide:framer"
            class="spin-icon text-cyan icon-lg opacity-40 hide-mobile"
          />
        </div>
      </div>

      <!-- Line 2: Word 2 (Cyan Accent) -->
      <div class="hero-row row-end flex-center">
        <div class="icon-cluster flex-center">
          <Icon
            name="lucide:git-branch"
            class="spin-icon text-coral icon-md opacity-40 hide-mobile"
          />
          <Icon
            name="lucide:pencil-ruler"
            class="spin-icon text-cyan icon-lg opacity-40 hide-mobile"
          />
          <Icon
            name="lucide:mouse-pointer-2"
            class="spin-icon text-gold icon-lg opacity-60 hide-tablet"
          />
          <Icon
            name="lucide:box"
            class="spin-icon text-coral icon-md opacity-60"
          />
          <Icon name="lucide:command" class="spin-icon text-cyan icon-xl" />
        </div>

        <h1 class="hero-word-wrapper relative font-display">
          <span class="base-text">{{ word2 }}</span>
          <span ref="fill2" class="fill-text fill-cyan cover-absolute">{{
            word2
          }}</span>
        </h1>
      </div>

      <!-- Line 3: Word 3 (Coral Accent) -->
      <div class="hero-row row-start flex-center">
        <h1 class="hero-word-wrapper relative font-display">
          <span class="base-text">{{ word3 }}</span>
          <span ref="fill3" class="fill-text fill-coral cover-absolute">{{
            word3
          }}</span>
        </h1>

        <div class="icon-cluster flex-center">
          <Icon name="lucide:component" class="spin-icon text-gold icon-xl" />
          <Icon
            name="lucide:terminal"
            class="spin-icon text-cyan icon-md opacity-60"
          />
          <Icon
            name="lucide:layers"
            class="spin-icon text-coral icon-lg opacity-60"
          />
          <Icon
            name="lucide:wand-2"
            class="spin-icon text-gold icon-md opacity-40 hide-mobile"
          />
          <Icon
            name="lucide:cpu"
            class="spin-icon text-cyan icon-lg opacity-40 hide-mobile"
          />
          <Icon
            name="lucide:mouse-pointer-click"
            class="spin-icon text-coral icon-lg"
          />
          <Icon
            name="lucide:sparkles"
            class="spin-icon text-gold icon-md opacity-60"
          />
          <Icon
            name="lucide:layout-template"
            class="spin-icon text-cyan icon-md opacity-40"
          />
        </div>
      </div>

      <!-- Footer Row: Tagline & Optional Action Slots -->
      <footer class="hero-footer flex-between">
        <div v-if="tagline" ref="taglineRef" class="tagline-wrapper">
          <p class="tagline-text font-body">
            {{ tagline }}
          </p>
        </div>
        <div class="hero-actions flex-center">
          <slot name="actions" />
        </div>
      </footer>
    </div>
  </section>
</template>

<style scoped>
/* ==========================================================================
   DISPLAY HERO CONTAINER
   ========================================================================== */
.display-hero {
  width: 100%;
  overflow: hidden;
  padding: var(--space-6) var(--space-5);
  background-color: var(--shell-surface);
  background-image: radial-gradient(var(--shell-border) 1px, transparent 1px);
  background-size: 10px 10px;
}

.hero-container {
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
  gap: var(--space-2);
}

/* ==========================================================================
   WORD ROWS & ALIGNMENT
   ========================================================================== */
.hero-row {
  width: 100%;
  gap: var(--space-4);
  line-height: 0.72;
}

.row-start {
  justify-content: flex-start;
}

.row-end {
  justify-content: flex-end;
}

/* ==========================================================================
   MASSIVE DISPLAY HEADINGS
   ========================================================================== */
.hero-word-wrapper {
  font-size: clamp(3.5rem, 15vw, 14.5rem);
  line-height: 0.9;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  display: inline-block;
}

.hero-word-wrapper span {
  display: block;
}

/* Subtle underlying text matching active theme */
.base-text {
  color: var(--shell-text);
  opacity: 0.12;
}

/* Highlight Color Overlays */
.fill-text {
  clip-path: inset(100% 0% 0% 0%);
}

.fill-gold {
  color: var(--shell-accent-gold);
}

.fill-cyan {
  color: var(--shell-accent-cyan);
}

.fill-coral {
  color: var(--shell-accent-coral);
}

/* ==========================================================================
   LUCIDE ICONS & ROTATING ANIMATION
   ========================================================================== */
.icon-cluster {
  gap: var(--space-3);
  flex-shrink: 0;
}

.spin-icon {
  animation: spin-slow 10s linear infinite;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Icon Sizing Tokens */
.icon-md {
  font-size: 1.5rem;
}

.icon-lg {
  font-size: 2.25rem;
}

.icon-xl {
  font-size: 3.25rem;
}

/* Icon Accent Colors */
.text-gold {
  color: var(--shell-accent-gold);
}

.text-cyan {
  color: var(--shell-accent-cyan);
}

.text-coral {
  color: var(--shell-accent-coral);
}

/* Opacity utilities */
.opacity-60 {
  opacity: 0.6;
}

.opacity-40 {
  opacity: 0.4;
}

/* Responsive Icon Visibility */
.hide-mobile {
  display: none;
}

/* ==========================================================================
   FOOTER (TAGLINE + ACTIONS)
   ========================================================================== */
.hero-footer {
  margin-top: var(--space-5);
  gap: var(--space-5);
  align-items: flex-end;
  flex-wrap: wrap;
}

.tagline-wrapper {
  max-width: 640px;
}

.tagline-text {
  font-size: var(--text-lg);
  line-height: 1.6;
  color: var(--shell-muted);
}

.hero-actions {
  gap: var(--space-3);
  margin-left: auto;
}

/* ==========================================================================
   RESPONSIVE BREAKPOINTS
   ========================================================================== */
@media (min-width: 768px) {
  .display-hero {
    padding: var(--space-6) var(--space-6);
  }

  .hero-row {
    gap: var(--space-5);
  }

  .icon-cluster {
    gap: var(--space-4);
  }

  .hide-tablet {
    display: inline-block;
  }

  .tagline-text {
    font-size: var(--text-xl);
  }
}

@media (min-width: 1024px) {
  .hide-mobile {
    display: inline-block;
  }

  .icon-xl {
    font-size: 4rem;
  }
}
</style>
