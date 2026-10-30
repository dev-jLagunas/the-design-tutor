<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

useHead({
  title: "About | The Design Tutor",
  meta: [
    {
      name: "description",
      content:
        "Deconstructing the architectural logic, motion standards, and design systems of our scalable visual ecosystem.",
    },
  ],
});

const mainContainer = ref<HTMLElement | null>(null);
const activeIndex = ref(1);

let ctx: any = null;
let ScrollTriggerInstance: any = null;

// 6 Core Cards
const steps = [
  {
    num: "1",
    label: "WHAT IS THIS PLATFORM?",
    category: "Living Websites, Not Static Mockups",
    icon: "lucide:layers",
    desc: "A hands-on gallery breaking down distinct visual design styles through complete, production-ready landing pages. Every project explores a unique aesthetic pairing, letting you inspect real code, layout systems, and responsive hierarchy directly in the browser.",
    colorTheme: "card-gold",
  },
  {
    num: "2",
    label: "WHAT IS THE DUAL-MODE HUD?",
    category: "Live Experience vs. Educational Deconstruction",
    icon: "lucide:sliders",
    desc: "Every design includes an on-screen HUD. 'Live Demo' lets you experience the website exactly as a real customer would. 'Curriculum' instantly transforms every section into an in-situ lesson explaining typography scales, layout rules, and spatial decisions.",
    colorTheme: "card-coral",
  },
  {
    num: "3",
    label: "WHAT IS THE CLIENT BRIEF?",
    category: "Real-World Business Constraints",
    icon: "lucide:file-text",
    desc: "Design does not happen in a vacuum. Opening the Brief drawer reveals the business scenario behind the work: target audience, operational challenges, budget guardrails, and the practical goals the interface was built to solve.",
    colorTheme: "card-cyan",
  },
  {
    num: "4",
    label: "WHAT IS THE DESIGN OVERVIEW?",
    category: "The Rationale Behind Every Decision",
    icon: "lucide:book-open",
    desc: "The Overview drawer walks through the strategic thinking. It compares our choices against standard industry tropes, cites real hospitality or retail benchmark data, and breaks down the UX intent and pitfalls avoided for each section.",
    colorTheme: "card-gold",
  },
  {
    num: "5",
    label: "HOW SHOULD YOU USE THIS?",
    category: "Reference, Study, And Execution",
    icon: "lucide:sparkles",
    desc: "Browse the catalog to find visual inspiration for your next client project, inspect how specific type and motion combinations work in code, or dissect the drawer rationale to see how design decisions connect directly to business objectives.",
    colorTheme: "card-coral",
  },
  {
    num: "6",
    label: "WHAT IS THE RELEASE CADENCE?",
    category: "A Fresh Style Every Month",
    icon: "lucide:compass",
    desc: "New designs are researched, built, and launched every one to two months. From sharp editorial layouts and brutalist grids to retro digital and kinetic interfaces, each release deconstructs a completely new visual system.",
    colorTheme: "card-cyan",
  },
];
const totalSlides = steps.length + 1; // 1 Hero + 6 Cards = 7 total

const scrollNext = () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth",
  });
};

onMounted(async () => {
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");

  gsap.registerPlugin(ScrollTrigger);
  ScrollTriggerInstance = ScrollTrigger;

  ctx = gsap.context(() => {
    const items = gsap.utils.toArray<HTMLElement>(".item");
    const totalItems = items.length;

    // Stack cards 1-6 down below viewport initially
    gsap.set(items.slice(1), { yPercent: 100 });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.value,
        pin: true,
        start: "top top",
        end: () => `+=${totalItems * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const index = Math.floor(self.progress * totalItems);
          activeIndex.value = Math.min(index + 1, totalItems);
        },
      },
    });

    items.forEach((item, index) => {
      if (index < totalItems - 1) {
        scrollTl
          .to(item, {
            scale: 0.88,
            opacity: 0.2,
            borderRadius: "32px",
            ease: "none",
          })
          .to(
            items[index + 1],
            {
              yPercent: 0,
              ease: "none",
            },
            "<",
          );
      }
    });
  }, mainContainer.value);
});

onBeforeUnmount(() => {
  if (ctx) ctx.revert();
  if (ScrollTriggerInstance) {
    ScrollTriggerInstance.getAll().forEach((t: any) => t.kill());
    ScrollTriggerInstance.refresh();
  }
});
</script>

<template>
  <div ref="mainContainer" class="deck-container relative no-select">
    <!-- Floating Numeric Tracker -->
    <div class="card-indicator font-display">
      <span class="index-current">0{{ activeIndex }}</span>
      <span class="index-dot">.</span>
      <span class="index-total">0{{ totalSlides }}</span>
    </div>

    <div class="deck-wrapper cover-absolute">
      <!-- Slide 0: Reusable Hero -->
      <div class="item hero-item" :style="{ zIndex: 1 }">
        <ReusableDisplayHero
          word1="What"
          word2="IsThis"
          word3="Project?"
          tagline="Real visual styles built for practical needs. I design them, analyze why they work, and share what I learn along the way."
        >
          <template #actions>
            <UiActionPair
              :primary="{
                label: 'Home',
                to: '/',
                icon: 'lucide:arrow-left',
              }"
              :secondary="{
                label: 'Contact',
                to: '/contact',
                icon: 'lucide:send',
              }"
            />
          </template>
        </ReusableDisplayHero>

        <button
          type="button"
          class="scroll-hint flex-col flex-center"
          aria-label="Scroll to next phase"
          @click="scrollNext"
        >
          <span class="hint-text text-micro-caps">Explore</span>
          <div class="hint-line"></div>
        </button>
      </div>

      <!-- Slides 1 - 6: Syllabus Steps -->
      <div
        v-for="(step, index) in steps"
        :key="step.num"
        class="item syllabus-item bg-dots"
        :style="{ zIndex: index + 2 }"
      >
        <div class="item-media flex-center" :class="step.colorTheme">
          <h2 class="big-number font-display">{{ step.num }}</h2>
        </div>

        <div class="item-content flex-col">
          <div class="meta-block flex-col">
            <Icon :name="step.icon" class="step-icon" />
            <span class="phase-label font-b-group">{{ step.label }}</span>
            <span class="category-tag font-b-group">{{ step.category }}</span>
          </div>
          <p class="description-text font-body">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ==========================================================================
   DECK BASE CONTAINER
   ========================================================================== */
.deck-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--shell-bg);
  color: var(--shell-text);
}

.deck-wrapper {
  z-index: 1;
  margin-top: 0;
}

/* ==========================================================================
   INDEX PROGRESS TRACKER
   ========================================================================== */
.card-indicator {
  position: absolute;
  top: 15%;
  right: var(--space-6);
  z-index: 999;
  display: flex;
  align-items: baseline;
  gap: var(--space-1);
  pointer-events: none;
}

.index-current,
.index-dot {
  font-size: var(--text-3xl);
  color: var(--shell-text);
}

.index-total {
  font-size: var(--text-xl);
  color: var(--shell-text);
  opacity: 0.45;
}

/* ==========================================================================
   ITEM / CARD STRUCTURE
   ========================================================================== */
.item {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--shell-bg);
  transform-origin: center center;
}

/* Hero Item Layout */
.hero-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 5rem;
}

/* Syllabus Cards Layout */
.syllabus-item {
  display: flex;
  flex-direction: row;
}

.syllabus-item:nth-child(even) {
  flex-direction: row-reverse;
}

.item-media {
  flex: 0 0 30%;
  height: 100%;
}

.item-content {
  flex: 0 0 70%;
  height: 100%;
  justify-content: center;
  padding-inline: 8%;
  gap: var(--space-4);
}

/* ==========================================================================
   CARD THEMES & NUMBER TYPOGRAPHY
   ========================================================================== */
.big-number {
  font-size: clamp(8rem, 25vw, 360px);
  line-height: 0.8;
  letter-spacing: -0.06em;
}

.card-gold {
  background-color: var(--shell-accent-gold);
  color: #131314;
}

.card-cyan {
  background-color: var(--shell-accent-cyan);
  color: #131314;
}

.card-coral {
  background-color: var(--shell-accent-coral);
  color: #ffffff;
}

/* ==========================================================================
   CONTENT & META TYPOGRAPHY
   ========================================================================== */
.meta-block {
  gap: var(--space-1);
}

.step-icon {
  font-size: 2.75rem;
  color: var(--shell-text);
  margin-bottom: var(--space-2);
}

.phase-label {
  color: var(--shell-accent-gold);
}

.category-tag {
  color: var(--shell-muted);
  font-weight: 100;
}

.description-text {
  font-size: clamp(1.25rem, 2.5vw, 2.25rem);
  line-height: 1.35;
  color: var(--shell-text);
  max-width: 900px;
}

/* ==========================================================================
   SCROLL HINT BUTTON
   ========================================================================== */
.scroll-hint {
  position: absolute;
  bottom: var(--space-5);
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 50;
  gap: var(--space-2);
}

.hint-text {
  color: var(--shell-accent-gold);
}

.hint-line {
  width: 2px;
  height: 48px;
  background-color: var(--shell-accent-gold);
  animation: line-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes line-pulse {
  0%,
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
  50% {
    transform: scaleY(0.5);
    opacity: 0.4;
  }
}

/* ==========================================================================
   RESPONSIVE BREAKPOINTS
   ========================================================================== */
@media (max-width: 768px) {
  .card-indicator {
    top: var(--space-4);
    right: var(--space-4);
  }

  .deck-wrapper {
    margin-top: -7rem;
  }

  .hero-item {
    padding-bottom: 0;
  }

  .syllabus-item,
  .syllabus-item:nth-child(even) {
    flex-direction: column-reverse;
  }

  .item-media {
    flex: 0 0 35%;
    width: 100%;
  }

  .item-content {
    flex: 0 0 65%;
    width: 100%;
    padding-inline: var(--space-5);
    padding-top: var(--space-6);
  }

  .big-number {
    font-size: clamp(6rem, 20vw, 180px);
  }

  .description-text {
    font-size: var(--text-lg);
  }
}
</style>
