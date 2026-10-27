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
    label: "WHAT IS THE BIG IDEA?",
    category: "A Visual Playbook, Not A Textbook",
    icon: "lucide:library",
    desc: "Think of this as a design museum where you can actually poke around the exhibits. Instead of droning on about optimal CSS architecture, I break down what gives a style its personality: where it came from, the vibe it sets, the font pairings, the palette, and the little motion quirks that make it click.",
    colorTheme: "card-gold",
  },
  {
    num: "2",
    label: "WHY DID YOU START THIS?",
    category: "Staying Sane And Building Cool Stuff",
    icon: "lucide:hammer",
    desc: "The job market has been rough, and doom-scrolling job boards gets old real fast. I wanted an excuse to build things without corporate constraints, stay sharp, and just make cool, slightly unhinged web designs while I look for my next role.",
    colorTheme: "card-coral",
  },
  {
    num: "3",
    label: "WHO'S RUNNING THE SHOW?",
    category: "A Designer Who Likes Messing With Code",
    icon: "lucide:user",
    desc: "I am a product designer with a background in linguistics and human-computer psychology. I definitely lean designer first, but I love getting my hands dirty with code to bring weird and fun ideas off the canvas and into the browser.",
    colorTheme: "card-cyan",
  },
  {
    num: "4",
    label: "HOW DOES A BREAKDOWN WORK?",
    category: "History, Vibes, And Visual Rhythm",
    icon: "lucide:sparkles",
    desc: "Every movement gets a consistent, bite-sized breakdown. We look at its historical roots, when you should actually use it, the fonts and colors that define it, and why certain animations work. Simple, structured, and easy to flip through.",
    colorTheme: "card-gold",
  },
  {
    num: "5",
    label: "WHAT'S THE CATCH?",
    category: "Zero Catch, Just Good Vibes",
    icon: "lucide:smile",
    desc: "No courses, no paid templates, and definitely no pitch for seed funding. It is entirely free and open. If I get to learn a bunch of design history, push some creative boundaries, and share the journey with other curious folks, that is a solid win in my book.",
    colorTheme: "card-coral",
  },
  {
    num: "6",
    label: "WHAT CAN WE EXPECT NEXT?",
    category: "Lots Of Wild Layouts",
    icon: "lucide:compass",
    desc: "More designs, more eras, and definitely more experimentation. From brutalist grids to retro computer interfaces and weird pop layouts, I am just going to keep building whatever sparks curiosity and dumping the research here.",
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
          tagline="Deconstructing the architectural logic, motion standards, and design systems of our scalable visual ecosystem."
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
