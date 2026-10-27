<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

useHead({
  title: "Contact & Inquiries | The Design Tutor",
  meta: [
    {
      name: "description",
      content:
        "Connect with the creator behind The Design Tutor. Explore open-source repositories, design writing, and collaboration opportunities.",
    },
  ],
});

const pageRoot = ref<HTMLElement | null>(null);
const copied = ref(false);

let ctx: any = null;
let ScrollTriggerInstance: any = null;

const emailAddress = "hello@thedesigntutor.com";

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(emailAddress);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2500);
  } catch (err) {
    console.error("Clipboard copy failed:", err);
  }
};

const scrollToCollage = () => {
  const target = document.getElementById("canvas-dossier");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(async () => {
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");

  gsap.registerPlugin(ScrollTrigger);
  ScrollTriggerInstance = ScrollTrigger;

  // Fix TS error: Pass undefined if pageRoot.value is null
  ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    // ========================================================================
    // DESKTOP & TABLET (> 768px): Fluid Scrubbed & Staggered Motion
    // ========================================================================
    mm.add("(min-width: 769px)", () => {
      // Zone 1: Dossier Parallax Assembly
      const tlDossier = gsap.timeline({
        scrollTrigger: {
          trigger: "#canvas-dossier",
          start: "top 85%",
          end: "center 35%",
          scrub: 1,
        },
      });

      tlDossier
        .from(".stage-portrait", {
          y: 120,
          x: -40,
          rotation: -5,
          opacity: 0.2,
          ease: "power2.out",
        })
        .from(".stage-badge", { x: 30, opacity: 0, ease: "power2.out" }, "<0.1")
        .from(
          ".stage-headline",
          { y: 50, opacity: 0, ease: "power2.out" },
          "<0.1",
        )
        .from(".stage-bio", { y: 30, opacity: 0, ease: "power2.out" }, "<0.15")
        .from(
          ".stage-stack",
          { y: 20, opacity: 0, ease: "power2.out" },
          "<0.15",
        )
        .from(
          ".stage-pill",
          {
            scale: 0.7,
            opacity: 0,
            stagger: 0.05,
            ease: "back.out(1.4)",
          },
          "<0.1",
        );

      // Zone 2: Public Channels Cards (Triggered Stagger - Never Stuck)
      const tlMatrix = gsap.timeline({
        scrollTrigger: {
          trigger: "#canvas-matrix",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tlMatrix
        .from(".matrix-headline-block", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        })
        .from(
          ".matrix-box",
          {
            y: 80,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "all", // Automatically cleans up inline styles when done
          },
          "-=0.3",
        );

      // Zone 3: Direct Dispatch Hub
      const tlDispatch = gsap.timeline({
        scrollTrigger: {
          trigger: "#canvas-dispatch",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tlDispatch
        .from(".inquiry-station", {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          clearProps: "all",
        })
        .from(
          ".sponsor-station",
          {
            x: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            clearProps: "all",
          },
          "<0.2",
        );
    });

    // ========================================================================
    // MOBILE (<= 768px): Lightweight Scroll Triggers
    // ========================================================================
    mm.add("(max-width: 768px)", () => {
      const sections = [
        "#canvas-dossier",
        "#canvas-matrix",
        "#canvas-dispatch",
      ];

      sections.forEach((secId) => {
        gsap.from(`${secId} .anim-mobile`, {
          scrollTrigger: {
            trigger: secId,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 35,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "all",
        });
      });
    });
  }, pageRoot.value || undefined);
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
  <div ref="pageRoot" class="contact-page relative flex-col no-select">
    <!-- ====================================================================
         HERO SECTION
         ==================================================================== -->
    <section class="hero-screen relative flex-col">
      <ReusableDisplayHero
        word1="Wanna"
        word2="Know"
        word3="More?"
        tagline="A visual repository decoding architectural layout logic, motion easing curves, and design systems for the modern web."
      >
        <template #actions>
          <UiActionPair
            :primary="{
              label: 'Explore Styles',
              to: '/#styles-index',
              icon: 'lucide:arrow-down-right',
            }"
            :secondary="{
              label: 'View Dossier',
              icon: 'lucide:chevron-down',
              title: 'Scroll to contact canvas',
            }"
            @secondary-click="scrollToCollage"
          />
        </template>
      </ReusableDisplayHero>
    </section>

    <!-- ====================================================================
         CANVAS STAGE 1: CREATOR DOSSIER
         ==================================================================== -->
    <section
      id="canvas-dossier"
      class="canvas-section dossier-canvas relative bg-dot-grid"
    >
      <div class="canvas-boundary flex-between">
        <!-- Media Frame -->
        <div class="stage-portrait anim-mobile relative">
          <div class="portrait-card relative">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
              alt="Creator"
              class="img-cover profile-frame-image"
            />
            <div class="portrait-meta-tag text-micro-caps">
              <span>FOUNDER // TDT</span>
            </div>
          </div>
        </div>

        <!-- Narrative Content -->
        <div class="stage-dossier-text flex-col">
          <div class="stage-badge anim-mobile flex-center">
            <span class="status-pulse"></span>
            <span class="text-micro-caps">Active: Documenting Web History</span>
          </div>

          <h2 class="stage-headline anim-mobile font-display">
            Design is a balance of rigor and expression.
          </h2>

          <p class="stage-bio anim-mobile font-body">
            I am a product designer obsessed with component mechanics, design
            tokens, and interface history. <em>The Design Tutor</em> exists to
            strip away the mystery of complex digital aesthetics, demonstrating
            how pure structure and CSS hierarchy turn chaotic ideas into
            production realities.
          </p>

          <div class="stage-stack anim-mobile flex-col">
            <span class="stack-heading text-micro-caps"
              >Primary Engineering & Design Stack</span
            >
            <div class="stack-row flex-center">
              <span class="stage-pill">Vue 3</span>
              <span class="stage-pill">Nuxt 3</span>
              <span class="stage-pill">GSAP</span>
              <span class="stage-pill">Design Tokens</span>
              <span class="stage-pill">TypeScript</span>
              <span class="stage-pill">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================================
         CANVAS STAGE 2: PUBLIC CHANNELS MATRIX
         ==================================================================== -->
    <section
      id="canvas-matrix"
      class="canvas-section matrix-canvas relative bg-dot-grid"
    >
      <div class="canvas-boundary flex-col">
        <header class="matrix-headline-block anim-mobile flex-col">
          <span class="eyebrow-accent text-micro-caps">The Network</span>
          <h2 class="section-title font-display">Public Channels</h2>
        </header>

        <div class="matrix-stage-grid">
          <a
            href="https://github.com/dev-jLagunas"
            target="_blank"
            rel="noopener noreferrer"
            class="matrix-box anim-mobile box-cyan flex-col transition-smooth"
          >
            <div class="box-top flex-between">
              <Icon name="lucide:github" class="box-icon" />
              <Icon name="lucide:arrow-up-right" class="vector-arrow" />
            </div>
            <div class="box-bottom flex-col">
              <span class="box-meta text-micro-caps">Repository</span>
              <h3 class="box-name font-display">GitHub</h3>
              <p class="box-desc font-body">
                Browse open source case studies, audit design tokens, or
                contribute to component breakdowns.
              </p>
            </div>
          </a>

          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            class="matrix-box anim-mobile box-gold flex-col transition-smooth"
          >
            <div class="box-top flex-between">
              <Icon name="lucide:pen-tool" class="box-icon" />
              <Icon name="lucide:arrow-up-right" class="vector-arrow" />
            </div>
            <div class="box-bottom flex-col">
              <span class="box-meta text-micro-caps">Writing</span>
              <h3 class="box-name font-display">Medium</h3>
              <p class="box-desc font-body">
                Long-form technical essays covering historical design movements,
                grid theory, and frontend architecture.
              </p>
            </div>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            class="matrix-box anim-mobile box-coral flex-col transition-smooth"
          >
            <div class="box-top flex-between">
              <Icon name="lucide:linkedin" class="box-icon" />
              <Icon name="lucide:arrow-up-right" class="vector-arrow" />
            </div>
            <div class="box-bottom flex-col">
              <span class="box-meta text-micro-caps">Network</span>
              <h3 class="box-name font-display">LinkedIn</h3>
              <p class="box-desc font-body">
                Connect for design system advisory, product design contracts,
                and frontend design architecture.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- ====================================================================
         CANVAS STAGE 3: DIRECT INQUIRY & SUPPORT
         ==================================================================== -->
    <section
      id="canvas-dispatch"
      class="canvas-section dispatch-canvas relative bg-dot-grid"
    >
      <div class="canvas-boundary flex-between">
        <div class="inquiry-station anim-mobile flex-col">
          <span class="eyebrow-accent text-micro-caps">Direct Channel</span>
          <h2 class="station-heading font-display">Start a Conversation</h2>
          <p class="station-text font-body">
            Interested in suggesting a design movement for dissection, inquiring
            about component licensing, or reviewing system mechanics? Ping me
            directly.
          </p>

          <div class="interactive-copy-station flex-between">
            <span class="address-text font-display">{{ emailAddress }}</span>
            <button
              type="button"
              class="copy-trigger font-body flex-center transition-smooth"
              @click="copyEmail"
            >
              <Icon
                :name="copied ? 'lucide:check' : 'lucide:copy'"
                class="btn-copy-icon"
              />
              <span>{{ copied ? "Copied" : "Copy" }}</span>
            </button>
          </div>
        </div>

        <div class="sponsor-station anim-mobile flex-col">
          <div class="sponsor-brand flex-col">
            <Icon name="lucide:coffee" class="coffee-icon" />
            <span class="text-micro-caps">Independent Studio</span>
            <h3 class="sponsor-title font-display">Keep It Open</h3>
          </div>
          <p class="sponsor-body font-body">
            <em>The Design Tutor</em> operates without paywalls or sponsor
            banners. Contributions directly fund component research, typography
            licensing, and hosting infrastructure.
          </p>

          <a
            href="https://buymeacoffee.com"
            target="_blank"
            rel="noopener noreferrer"
            class="sponsor-button font-display flex-center transition-smooth"
          >
            <span>Buy Me A Coffee</span>
            <Icon name="lucide:external-link" class="sponsor-icon-sm" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ==========================================================================
   PAGE STRUCTURAL BASE
   ========================================================================== */
.contact-page {
  width: 100%;
  background-color: var(--shell-surface);
  color: var(--shell-text);
  overflow-x: hidden;
}

.hero-screen {
  width: 100%;
  height: 100vh;
  min-height: 680px;
}

.hero-screen :deep(.display-hero) {
  height: 100%;
  width: 100%;
}

.canvas-section {
  width: 100%;
  padding-block: clamp(4rem, 10vw, 8rem);
  padding-inline: var(--space-5);
  background-color: var(--shell-surface);
}

.canvas-boundary {
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
  gap: var(--space-6);
  position: relative;
}

.bg-dot-grid {
  background-image: radial-gradient(var(--shell-border) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* ==========================================================================
   CANVAS STAGE 1: DOSSIER
   ========================================================================== */

.stage-portrait {
  flex: 0 0 38%;
  max-width: 440px;
  width: 100%;
  transform-origin: center center;
}

.portrait-card {
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--shell-border);
  box-shadow: 0 24px 60px -15px rgba(0, 0, 0, 0.45);
  background-color: var(--shell-surface);
}

.portrait-meta-tag {
  position: absolute;
  bottom: var(--space-3);
  left: var(--space-3);
  background-color: var(--shell-bg);
  color: var(--shell-text);
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  border: 1px solid var(--shell-border);
}

.stage-dossier-text {
  flex: 0 0 56%;
  gap: var(--space-4);
  align-items: flex-start;
}

.stage-badge {
  gap: var(--space-2);
  padding: 0.4rem 0.95rem;
  background-color: var(--shell-surface);
  border: 1px solid var(--shell-border);
  border-radius: 9999px;
  color: var(--shell-text);
}

.status-pulse {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background-color: #10b981;
  box-shadow: 0 0 8px #10b981;
}

.stage-headline {
  font-size: clamp(2rem, 4vw, 3.75rem);
  line-height: 1.05;
  color: var(--shell-text);
}

.stage-bio {
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--shell-muted);
}

.stage-stack {
  gap: var(--space-2);
  margin-top: var(--space-2);
}

.stack-heading {
  color: var(--shell-muted);
}

.stack-row {
  gap: var(--space-2);
  flex-wrap: wrap;
  justify-content: flex-start;
}

.stage-pill {
  font-size: var(--text-xs);
  padding: 0.35rem 0.8rem;
  background-color: var(--shell-surface);
  border: 1px solid var(--shell-border);
  border-radius: 4px;
  color: var(--shell-text);
}

/* ==========================================================================
   CANVAS STAGE 2: CHANNELS MATRIX
   ========================================================================== */
.matrix-canvas {
  background-color: var(--shell-surface);
}

.matrix-headline-block {
  gap: var(--space-1);
  margin-bottom: var(--space-5);
}

.eyebrow-accent {
  color: var(--shell-accent-gold);
}

.section-title {
  font-size: clamp(2.25rem, 4.5vw, 4rem);
  color: var(--shell-text);
}

.matrix-stage-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
  width: 100%;
}

.matrix-box {
  padding: var(--space-5);
  border-radius: 8px;
  text-decoration: none;
  min-height: 320px;
  justify-content: space-between;
}

.matrix-box:hover {
  transform: translateY(-6px);
}

.box-icon {
  font-size: 2.5rem;
}

.vector-arrow {
  font-size: 1.5rem;
  transition: transform 0.25s ease;
}

.matrix-box:hover .vector-arrow {
  transform: translate(4px, -4px);
}

.box-bottom {
  gap: var(--space-2);
}

.box-name {
  font-size: var(--text-3xl);
  line-height: 1;
}

.box-desc {
  font-size: var(--text-sm);
  line-height: 1.55;
  opacity: 0.9;
}

.box-cyan {
  background-color: var(--shell-accent-cyan);
  color: #131314;
}

.box-gold {
  background-color: var(--shell-accent-gold);
  color: #131314;
}

.box-coral {
  background-color: var(--shell-accent-coral);
  color: #ffffff;
}

/* ==========================================================================
   CANVAS STAGE 3: DIRECT INQUIRY & SUPPORT
   ========================================================================== */
.dispatch-canvas {
  padding-bottom: clamp(6rem, 12vw, 10rem);
}

.inquiry-station {
  flex: 0 0 52%;
  gap: var(--space-4);
}

.station-heading {
  font-size: clamp(2.25rem, 4vw, 3.8rem);
  color: var(--shell-text);
  line-height: 1.05;
}

.station-text {
  font-size: var(--text-lg);
  color: var(--shell-muted);
  line-height: 1.6;
}

.interactive-copy-station {
  background-color: var(--shell-surface);
  border: 1px solid var(--shell-border);
  padding: var(--space-3) var(--space-4);
  border-radius: 6px;
  gap: var(--space-3);
  margin-top: var(--space-2);
}

.address-text {
  font-size: var(--text-lg);
  color: var(--shell-text);
  word-break: break-all;
}

.copy-trigger {
  background-color: var(--shell-accent-cyan);
  color: #131314;
  border: none;
  padding: 0.65rem 1.35rem;
  border-radius: 4px;
  cursor: pointer;
  gap: var(--space-2);
  font-weight: 600;
  flex-shrink: 0;
}

.copy-trigger:hover {
  filter: brightness(1.1);
}

.btn-copy-icon {
  font-size: 1.05rem;
}

.sponsor-station {
  flex: 0 0 42%;
  background-color: var(--shell-surface);
  border: 1px solid var(--shell-border);
  padding: var(--space-5);
  border-radius: 8px;
  gap: var(--space-4);
}

.coffee-icon {
  font-size: 2.25rem;
  color: var(--shell-accent-gold);
  margin-bottom: var(--space-2);
}

.sponsor-title {
  font-size: var(--text-3xl);
  color: var(--shell-text);
}

.sponsor-body {
  font-size: var(--text-reg);
  color: var(--shell-muted);
  line-height: 1.6;
}

.sponsor-button {
  background-color: var(--shell-accent-gold);
  color: #131314;
  text-decoration: none;
  padding: 0.95rem var(--space-4);
  border-radius: 4px;
  gap: var(--space-2);
  margin-top: var(--space-2);
  font-size: var(--text-sm);
}

.sponsor-button:hover {
  filter: brightness(1.08);
  transform: translateY(-2px);
}

/* ==========================================================================
   RESPONSIVE DESIGN (TABLET & MOBILE)
   ========================================================================== */
@media (max-width: 1024px) {
  .canvas-boundary {
    flex-direction: column;
    align-items: stretch;
  }

  .stage-portrait {
    max-width: 100%;
    margin-inline: auto;
  }

  .stage-dossier-text,
  .inquiry-station,
  .sponsor-station {
    flex: 1 1 100%;
  }

  .matrix-stage-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .matrix-box {
    min-height: 220px;
  }
}

@media (max-width: 768px) {
  .hero-screen {
    height: auto;
    min-height: 100vh;
  }

  .interactive-copy-station {
    flex-direction: column;
    align-items: stretch;
  }

  .copy-trigger {
    justify-content: center;
    width: 100%;
  }
}
</style>
