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

const emailAddress = "dev.jlagunas@gmail.com";

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

  ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    // ========================================================================
    // DESKTOP (> 1024px): Bi-directional Parallax & Reveal-Dissolve
    // ========================================================================
    mm.add("(min-width: 1025px)", () => {
      // 1. Dossier Stage: Portrait slides, text block scales in and out.
      const tlDossier = gsap.timeline({
        scrollTrigger: {
          trigger: "#canvas-dossier",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      tlDossier
        .from(
          ".stage-portrait",
          { y: 120, x: -60, rotation: -6, opacity: 0.1, ease: "none" },
          0,
        )
        .from(
          ".stage-dossier-text",
          {
            scale: 0.75,
            transformOrigin: "center center",
            opacity: 0,
            ease: "none",
          },
          0,
        )
        .from(
          ".stage-pill",
          { scale: 0.7, opacity: 0, stagger: 0.04, ease: "none" },
          0.1,
        )
        .to(
          ".stage-portrait",
          { y: -100, x: -30, rotation: 4, opacity: 0.1, ease: "none" },
          0.6,
        )
        .to(
          ".stage-dossier-text",
          { scale: 0.85, opacity: 0, ease: "none" },
          0.6,
        );

      // 2. Matrix Stage: Simple scroll-triggered reveal
      gsap.fromTo(
        ".matrix-headline-block",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: "#canvas-matrix",
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".matrix-box",
        { y: 90, scale: 0.92, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: "#canvas-matrix",
            start: "top 75%",
            once: true,
          },
        },
      );

      // 3. Dispatch Hub: Enters with spatial perspective, rests, then animates out past the top.
      const tlDispatch = gsap.timeline({
        scrollTrigger: {
          trigger: "#canvas-dispatch",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      tlDispatch
        .from(
          ".inquiry-station",
          { x: -80, y: 100, rotation: -4, opacity: 0, ease: "none" },
          0,
        )
        .from(
          ".sponsor-station",
          { x: 80, y: 100, rotation: 4, opacity: 0, ease: "none" },
          0,
        )
        .to(".inquiry-station", { y: -100, opacity: 0, ease: "none" }, 0.6)
        .to(".sponsor-station", { y: -100, opacity: 0, ease: "none" }, 0.6);
    });

    // ========================================================================
    // TABLET & MOBILE (<= 1024px): Lightweight Scroll Triggers
    // ========================================================================
    mm.add("(max-width: 1024px)", () => {
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
          stagger: 0.08,
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
  <div ref="pageRoot" class="contact-page relative flex-col no-select bg-dots">
    <!-- ====================================================================
         HERO SECTION
         ==================================================================== -->
    <section class="hero-screen relative flex-col">
      <ReusableDisplayHero
        word1="Wanna"
        word2="GetIn"
        word3="Touch?"
        tagline="Here is a bit more information about me and my contact information! I am always looking to connect and learn!"
      >
        <template #actions>
          <UiActionPair
            :primary="{
              label: 'Explore Styles',
              to: '/#styles-index',
              icon: 'lucide:arrow-down-right',
            }"
            :secondary="{
              label: 'View About Me',
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
      class="canvas-section dossier-canvas relative bg-dots"
    >
      <div class="canvas-boundary flex-between">
        <!-- Media Frame -->
        <div class="stage-portrait anim-mobile relative">
          <div class="portrait-card relative">
            <img
              src="/images/profile.jpg"
              alt="Juan Angel Lagunas"
              class="img-cover profile-frame-image"
            />
            <div class="portrait-meta-tag text-micro-caps">
              <span>MYSELF</span>
            </div>
          </div>
        </div>

        <!-- Narrative Content -->
        <div class="stage-dossier-text anim-mobile flex-col">
          <div class="stage-badge flex-center">
            <span class="status-pulse"></span>
            <span class="font-b-group">Active: Still Improving My Craft</span>
          </div>

          <h2 class="stage-headline font-display">
            Making cool things for the web never gets old.
          </h2>

          <p class="stage-bio font-body">
            I'm a product designer who genuinely loves tinkering with layouts,
            motion, and front-end quirks. <em>The Design Tutor</em> is really
            just my public sandbox: a fun place to break down interesting web
            styles, figure out why they work, and share the experiments along
            the way.
          </p>

          <div class="stage-stack flex-col">
            <span class="stack-heading font-b-group"
              >Primary Engineering & Design Stack</span
            >
            <div class="stack-row flex-center">
              <span class="stage-pill">Figma</span>
              <span class="stage-pill">Vue 3</span>
              <span class="stage-pill">Nuxt 3</span>
              <span class="stage-pill">GSAP</span>
              <span class="stage-pill">TypeScript</span>
              <span class="stage-pill">Tailwind</span>
              <span class="stage-pill">Claude</span>
              <span class="stage-pill">Chat GPT</span>
              <span class="stage-pill">Affinity</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================================
         CANVAS STAGE 2: PUBLIC CHANNELS & WORKS MATRIX (6 CARDS)
         ==================================================================== -->
    <section
      id="canvas-matrix"
      class="canvas-section matrix-canvas relative bg-dots"
    >
      <div class="canvas-boundary flex-col">
        <header class="matrix-headline-block anim-mobile flex-col">
          <span class="eyebrow-accent text-micro-caps">The Network</span>
          <h2 class="section-title font-display">Public Channels & Works</h2>
        </header>

        <div class="matrix-stage-grid">
          <!-- Card 1: GitHub -->
          <a
            href="https://github.com/dev-jLagunas"
            target="_blank"
            rel="noopener noreferrer"
            class="matrix-box card-1 anim-mobile box-coral flex-col"
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

          <!-- Card 2: Medium -->
          <a
            href="https://medium.com/@dev.jlagunas"
            target="_blank"
            rel="noopener noreferrer"
            class="matrix-box card-2 anim-mobile box-gold flex-col"
          >
            <div class="box-top flex-between">
              <Icon name="lucide:pen-tool" class="box-icon" />
              <Icon name="lucide:arrow-up-right" class="vector-arrow" />
            </div>
            <div class="box-bottom flex-col">
              <span class="box-meta text-micro-caps">Writing</span>
              <h3 class="box-name font-display">Medium</h3>
              <p class="box-desc font-body">
                Long-form essays covering historical design movements, grid
                theory, and frontend architecture.
              </p>
            </div>
          </a>

          <!-- Card 3: LinkedIn -->
          <a
            href="https://www.linkedin.com/in/juan-lagunas/"
            target="_blank"
            rel="noopener noreferrer"
            class="matrix-box card-3 anim-mobile box-cyan flex-col"
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
                and UI architecture.
              </p>
            </div>
          </a>

          <!-- Card 4: UX Portfolio -->
          <a
            href="https://juan-lagunas.com/#/"
            target="_blank"
            rel="noopener noreferrer"
            class="matrix-box card-4 anim-mobile box-gold flex-col"
          >
            <div class="box-top flex-between">
              <Icon name="lucide:briefcase" class="box-icon" />
              <Icon name="lucide:arrow-up-right" class="vector-arrow" />
            </div>
            <div class="box-bottom flex-col">
              <span class="box-meta text-micro-caps">Selected Works</span>
              <h3 class="box-name font-display">UX Portfolio</h3>
              <p class="box-desc font-body">
                In-depth product case studies, mobile UX, component
                architectures, and digital product workflows.
              </p>
            </div>
          </a>

          <!-- Card 5: The Language Friends -->
          <a
            href="https://www.amazon.co.jp/s?i=digital-text&rh=p_27%3AJoe%2BLapalo&s=relevancerank&language=en&text=Joe+Lapalo&ref=dp_byline_sr_ebooks_1"
            target="_blank"
            rel="noopener noreferrer"
            class="matrix-box card-5 anim-mobile box-cyan flex-col"
          >
            <div class="box-top flex-between">
              <Icon name="lucide:book-marked" class="box-icon" />
              <Icon name="lucide:arrow-up-right" class="vector-arrow" />
            </div>
            <div class="box-bottom flex-col">
              <span class="box-meta text-micro-caps">Children's Books</span>
              <h3 class="box-name font-display">Kids Books Series</h3>
              <p class="box-desc font-body">
                An illustrated educational book series designed to inspire
                curiosity, phonetics, and early multilingual communication.
              </p>
            </div>
          </a>

          <!-- Card 6: Instagram -->
          <a
            href="https://www.instagram.com/j.lag_works/"
            target="_blank"
            rel="noopener noreferrer"
            class="matrix-box card-6 anim-mobile box-coral flex-col"
          >
            <div class="box-top flex-between">
              <Icon name="lucide:instagram" class="box-icon" />
              <Icon name="lucide:arrow-up-right" class="vector-arrow" />
            </div>
            <div class="box-bottom flex-col">
              <span class="box-meta text-micro-caps">Visual Log</span>
              <h3 class="box-name font-display">Instagram</h3>
              <p class="box-desc font-body">
                Visual snippets, work-in-progress layouts, motion sketches, and
                aesthetic explorations from the studio.
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
      class="canvas-section dispatch-canvas relative bg-dots"
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
  margin-top: -4rem;
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

/* ==========================================================================
   CANVAS STAGE 1: DOSSIER
   ========================================================================== */
.stage-portrait {
  flex: 0 0 38%;
  max-width: 440px;
  width: 100%;
  transform-origin: center center;
  will-change: transform, opacity;
}

.portrait-card {
  width: 100%;
  max-width: 500px;
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
  will-change: transform, opacity;
}

.stage-badge {
  gap: var(--space-2);
  padding: 0.4rem 0.95rem;
  background-color: var(--shell-surface);
  border: 1px solid var(--shell-border);
  border-radius: 4px;
  color: var(--shell-muted);
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
  color: var(--shell-accent-coral);
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
  will-change: transform, opacity;
}

/* ==========================================================================
   CANVAS STAGE 2: CHANNELS MATRIX (2x3 GRID ON LARGE SCREENS)
   ========================================================================== */
.matrix-canvas {
  background-color: var(--shell-surface);
}

.matrix-headline-block {
  gap: var(--space-1);
  margin-bottom: var(--space-5);
  will-change: transform, opacity;
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
  perspective: 1200px;
}

.matrix-box {
  transform-origin: center center;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--space-5);
  border-radius: 8px;
  text-decoration: none;
  min-height: 300px;
  justify-content: space-between;
  will-change: transform, opacity;
  transition:
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    background-color 0.35s ease,
    color 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;
  border: 1px solid transparent;
}

/* Hover Enhancements */
.matrix-box:hover {
  transform: translateY(
    -8px
  ) !important; /* Overrides GSAP inline transform safely */
  background-color: var(--shell-bg) !important; /* Neutralize background */
  color: var(--shell-text) !important;
  border-color: var(--shell-border);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
}

.box-icon,
.box-name,
.vector-arrow {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.matrix-box:hover .box-icon {
  transform: scale(1.2);
}

.matrix-box:hover .box-name {
  transform: scale(1.1);
  transform-origin: left center;
}

.matrix-box:hover .vector-arrow {
  transform: translate(6px, -6px) scale(1.1);
  color: var(--shell-text) !important;
}

.matrix-box:hover .box-meta,
.matrix-box:hover .box-desc {
  color: var(--shell-muted) !important;
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

/* Color Tokens */
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
  color: #131314;
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
  will-change: transform, opacity;
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
  will-change: transform, opacity;
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
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }

  .matrix-box {
    min-height: 240px;
  }
}

@media (max-width: 768px) {
  .hero-screen {
    height: auto;
    min-height: 100vh;
    margin-top: 1rem;
  }

  .matrix-stage-grid {
    grid-template-columns: 1fr;
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
