<!-- components/movements/MovementBrutalismBar.vue -->
<script setup lang="ts">
import { computed } from "vue";
import { useShowcaseStore } from "~/stores/useShowcaseStore";

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
    },
  ],
});

const store = useShowcaseStore();
const content = computed(() => store.activeSections);
</script>

<template>
  <div v-if="content" class="brutal-canvas relative flex-col">
    <!-- ====================================================================
         RAW INDUSTRIAL MARQUEE TICKER
         ==================================================================== -->
    <aside class="brutal-ticker flex-center overflow-hidden">
      <div class="ticker-track flex-center font-mono">
        <span class="ticker-text">{{ content.hero.statusText }}</span>
        <span class="ticker-sep">///</span>
        <span class="ticker-text">{{ content.hero.statusText }}</span>
        <span class="ticker-sep">///</span>
        <span class="ticker-text">{{ content.hero.statusText }}</span>
      </div>
    </aside>

    <!-- ====================================================================
         RAW VENUE SUB-BAR
         ==================================================================== -->
    <header class="brutal-sub-bar flex-between">
      <div class="venue-mark flex-center font-mono">
        <span class="hazard-block flex-center">!</span>
        <span class="venue-name">THE VAULT // 2240 LOGAN</span>
      </div>

      <nav class="brutal-nav-links flex-center font-mono">
        <a href="#narrative" class="nav-item">[01] NARRATIVE</a>
        <a href="#showcase" class="nav-item">[02] GIG_LOG</a>
        <a href="#vibe" class="nav-item">[03] DISPATCH</a>
        <a href="#takeaways" class="nav-item">[04] PROTOCOLS</a>
      </nav>

      <div class="hazard-badge font-mono">
        <span>HIGH VOLTAGE AUDIO</span>
      </div>
    </header>

    <!-- ====================================================================
         BEAT 1: HERO STAGE
         ==================================================================== -->
    <section id="hero" class="brutal-section hero-stage">
      <div class="brutal-layout-grid">
        <!-- Main Headline & Actions -->
        <div class="hero-left-box brutal-card flex-col">
          <div class="hazard-stamp font-mono">
            {{ content.hero.eyebrow }}
          </div>

          <h1 class="hero-brutal-title font-mono">
            <span class="block-word">{{ content.hero.titlePart1 }}</span>
            <span class="block-word highlight-invert">{{
              content.hero.titlePart2
            }}</span>
            <span v-if="content.hero.titlePart3" class="block-word">{{
              content.hero.titlePart3
            }}</span>
          </h1>

          <p class="hero-tagline font-mono">
            {{ content.hero.tagline }}
          </p>

          <div class="brutal-btn-row flex-center">
            <a
              :href="content.hero.primaryButton.url"
              class="btn-brutal-primary font-mono flex-center"
            >
              <span>{{ content.hero.primaryButton.label }}</span>
              <Icon
                :name="content.hero.primaryButton.icon || 'lucide:arrow-right'"
                class="btn-icon"
              />
            </a>

            <a
              v-if="content.hero.secondaryButton"
              :href="content.hero.secondaryButton.url"
              class="btn-brutal-secondary font-mono flex-center"
            >
              <span>{{ content.hero.secondaryButton.label }}</span>
            </a>
          </div>

          <!-- Raw Tag Stacks -->
          <div class="pill-rack flex-center font-mono">
            <span
              v-for="tag in content.hero.pillTags"
              :key="tag"
              class="brutal-pill"
            >
              [{{ tag }}]
            </span>
          </div>
        </div>

        <!-- Poster Stage Frame -->
        <div class="hero-right-frame brutal-card flex-col">
          <div class="frame-terminal-header flex-between font-mono">
            <span>SYS_CAM_01.RAW</span>
            <span>24FPS // LIVE</span>
          </div>
          <div class="raw-media-box relative overflow-hidden">
            <img
              :src="content.hero.mainImage.src"
              :alt="content.hero.mainImage.alt"
              class="img-cover brutal-img"
            />
          </div>
          <p
            v-if="content.hero.mainImage.caption"
            class="caption-terminal font-mono"
          >
            >> {{ content.hero.mainImage.caption }}
          </p>
        </div>
      </div>
    </section>

    <!-- ====================================================================
         BEAT 2: NARRATIVE & ORIGINS
         ==================================================================== -->
    <section
      id="narrative"
      class="brutal-section narrative-stage border-t-brutal"
    >
      <div class="brutal-layout-grid">
        <!-- Media & Pullquote -->
        <div class="narrative-left flex-col">
          <div class="brutal-card flex-col">
            <div class="frame-terminal-header flex-between font-mono">
              <span>EVIDENCE_LOG_02.JPG</span>
              <span>1978_SERIES</span>
            </div>
            <div class="raw-media-box relative overflow-hidden">
              <img
                :src="content.narrative.portraitOrAtmosphereImage.src"
                :alt="content.narrative.portraitOrAtmosphereImage.alt"
                class="img-cover brutal-img"
              />
            </div>
            <p
              v-if="content.narrative.portraitOrAtmosphereImage.caption"
              class="caption-terminal font-mono"
            >
              >> {{ content.narrative.portraitOrAtmosphereImage.caption }}
            </p>
          </div>

          <blockquote
            v-if="content.narrative.pullQuote"
            class="brutal-quote-box brutal-card flex-col font-mono"
          >
            <p class="quote-text">“{{ content.narrative.pullQuote.quote }}”</p>
            <footer class="quote-author">
              // {{ content.narrative.pullQuote.author }} [{{
                content.narrative.pullQuote.role
              }}]
            </footer>
          </blockquote>
        </div>

        <!-- Narrative Content -->
        <div class="narrative-right brutal-card flex-col font-mono">
          <span class="hazard-stamp">{{ content.narrative.eyebrow }}</span>
          <h2 class="narrative-heading">{{ content.narrative.heading }}</h2>
          <p class="narrative-lead">{{ content.narrative.leadParagraph }}</p>

          <div class="body-paragraphs flex-col">
            <p v-for="(p, i) in content.narrative.bodyParagraphs" :key="i">
              {{ p }}
            </p>
          </div>

          <!-- Hard Metrics Row -->
          <div class="metrics-grid">
            <div
              v-for="m in content.narrative.metrics"
              :key="m.label"
              class="metric-cell flex-col"
            >
              <span class="m-val">{{ m.numberOrStat }}</span>
              <span class="m-lbl">{{ m.label }}</span>
              <span v-if="m.caption" class="m-cap">{{ m.caption }}</span>
            </div>
          </div>

          <!-- Raw Feature Rows -->
          <div class="feature-rows flex-col">
            <div
              v-for="feat in content.narrative.featureList"
              :key="feat.title"
              class="feat-row flex-col"
            >
              <span class="feat-title">>>> {{ feat.title }}</span>
              <span class="feat-desc">{{ feat.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================================
         BEAT 3: SHOWCASE / GIG CATALOG / RULES
         ==================================================================== -->
    <section
      id="showcase"
      class="brutal-section showcase-stage border-t-brutal bg-hazard-dots"
    >
      <div class="brutal-container flex-col">
        <header class="showcase-header brutal-card flex-between font-mono">
          <div class="header-titles flex-col">
            <span class="hazard-stamp">{{ content.showcase.eyebrow }}</span>
            <h2 class="section-title">{{ content.showcase.heading }}</h2>
            <p class="section-desc">{{ content.showcase.description }}</p>
          </div>

          <!-- Filters -->
          <div class="filter-group flex-center">
            <button
              v-for="(cat, idx) in content.showcase.categoryFilters"
              :key="cat"
              type="button"
              class="btn-brutal-filter font-mono"
              :class="{ 'is-selected': idx === 0 }"
            >
              {{ cat }}
            </button>
          </div>
        </header>

        <!-- 3-Item Catalog Grid -->
        <div class="cards-trio-grid">
          <article
            v-for="item in content.showcase.items"
            :key="item.id"
            class="brutal-item-card brutal-card flex-col font-mono"
          >
            <div class="card-top-tag flex-between">
              <span>{{ item.badge }}</span>
              <span>ITEM_ID#{{ item.id }}</span>
            </div>

            <div class="card-img-stage relative overflow-hidden">
              <img
                :src="item.image.src"
                :alt="item.image.alt"
                class="img-cover brutal-img"
              />
            </div>

            <div class="card-text-block flex-col">
              <h3 class="item-name">{{ item.title }}</h3>
              <span class="item-sub">{{ item.subtitle }}</span>
              <p class="item-body">{{ item.description }}</p>

              <!-- Specs -->
              <div class="item-specs-table flex-col">
                <div
                  v-for="spec in item.specs"
                  :key="spec.name"
                  class="spec-line flex-between"
                >
                  <span class="s-name">[{{ spec.name }}]</span>
                  <span class="s-val">{{ spec.detail }}</span>
                </div>
              </div>

              <!-- Tags -->
              <div class="item-tags flex-center">
                <span v-for="t in item.tags" :key="t" class="hazard-tag">
                  {{ t }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ====================================================================
         BEAT 4: VIBE / DISPATCHES / INTERACTION
         ==================================================================== -->
    <section id="vibe" class="brutal-section vibe-stage border-t-brutal">
      <div class="brutal-container flex-col">
        <header class="vibe-title-card brutal-card flex-col font-mono">
          <span class="hazard-stamp">{{ content.vibe.eyebrow }}</span>
          <h2 class="section-title">{{ content.vibe.heading }}</h2>
          <p class="section-desc">{{ content.vibe.description }}</p>
        </header>

        <!-- Dispatch Cards -->
        <div class="cards-trio-grid">
          <div
            v-for="card in content.vibe.cards"
            :key="card.id"
            class="brutal-dispatch-card brutal-card flex-col font-mono"
          >
            <div class="dispatch-header flex-between">
              <span class="hazard-badge-sm">{{ card.badge }}</span>
              <span v-if="card.ratingOrPriority" class="priority-tag">{{
                card.ratingOrPriority
              }}</span>
            </div>
            <h4 class="dispatch-title">“{{ card.title }}”</h4>
            <p class="dispatch-quote">{{ card.quoteOrRule }}</p>
            <div class="dispatch-author border-t-solid">
              // {{ card.authorOrStandard }}
            </div>
          </div>
        </div>

        <!-- Heavy Hazard Banner -->
        <div
          v-if="content.vibe.textureOrMoodImage"
          class="hazard-warning-banner brutal-card flex-between font-mono"
        >
          <div class="banner-text-side flex-col">
            <span class="banner-badge">{{ content.vibe.bannerBadge }}</span>
            <h3 class="banner-h3">{{ content.vibe.bannerHeading }}</h3>
            <p class="banner-p">{{ content.vibe.bannerBody }}</p>
          </div>
          <div class="banner-stripe-side flex-center">
            <div class="warning-stripes"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================================
         BEAT 5: TAKEAWAYS & PROTOCOLS
         ==================================================================== -->
    <section
      id="takeaways"
      class="brutal-section takeaways-stage border-t-brutal"
    >
      <div class="brutal-container flex-col">
        <header class="takeaways-header brutal-card flex-col font-mono">
          <span class="hazard-stamp">{{ content.takeaways.eyebrow }}</span>
          <h2 class="section-title">{{ content.takeaways.heading }}</h2>
          <p class="section-desc">{{ content.takeaways.description }}</p>
        </header>

        <!-- Steps Trio -->
        <div class="cards-trio-grid">
          <div
            v-for="step in content.takeaways.steps"
            :key="step.stepNumber"
            class="step-brutal-card brutal-card flex-col font-mono"
          >
            <span class="step-giant-num">#{{ step.stepNumber }}</span>
            <h3 class="step-h3">{{ step.title }}</h3>
            <p class="step-summary">{{ step.summary }}</p>
            <div class="step-guidance border-t-solid">
              >> {{ step.guidanceText }}
            </div>
          </div>
        </div>

        <!-- Terminal Colophon & CTA -->
        <div class="terminal-action-box brutal-card flex-between font-mono">
          <div class="cta-left flex-col">
            <h3 class="cta-h3">{{ content.takeaways.ctaHeadline }}</h3>
            <p class="cta-p">{{ content.takeaways.ctaBody }}</p>
            <span class="colophon-note">{{
              content.takeaways.guaranteeOrColophonNote
            }}</span>
          </div>

          <div class="cta-right flex-col">
            <a
              :href="content.takeaways.ctaPrimaryButton.url"
              class="btn-brutal-primary flex-center"
            >
              <span>{{ content.takeaways.ctaPrimaryButton.label }}</span>
              <Icon
                :name="
                  content.takeaways.ctaPrimaryButton.icon ||
                  'lucide:arrow-right'
                "
                class="btn-icon"
              />
            </a>
            <a
              v-if="content.takeaways.ctaSecondaryButton"
              :href="content.takeaways.ctaSecondaryButton.url"
              class="btn-brutal-secondary flex-center"
            >
              <span>{{ content.takeaways.ctaSecondaryButton.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Colophon Strip -->
    <footer class="brutal-footer flex-between font-mono border-t-brutal">
      <span>THE VAULT // SD NOISE LAB © 2026</span>
      <span>RAW ARCHITECTURE // ZERO POLISH GUARANTEE</span>
    </footer>
  </div>
</template>

<style scoped>
/* ==========================================================================
   BRUTALIST SYSTEM TOKENS
   Pure Pitch Black (#000000), Stark Paper White (#FFFFFF), Hazard Yellow (#FFE600)
   Hard 3px borders, 0px border-radius, hard 6px drop-shadows.
   ========================================================================== */
.brutal-canvas {
  --b-bg: #f4f4f0;
  --b-white: #ffffff;
  --b-black: #000000;
  --b-yellow: #ffe600;
  --b-stroke: 3px solid #000000;
  --b-shadow: 6px 6px 0px #000000;
  --b-shadow-sm: 4px 4px 0px #000000;

  width: 100%;
  min-height: 100vh;
  background-color: var(--b-bg);
  color: var(--b-black);
  overflow-x: hidden;
}

.font-mono {
  font-family: "Space Mono", monospace, monospace;
  text-transform: uppercase;
}

.brutal-card {
  background-color: var(--b-white);
  border: var(--b-stroke);
  box-shadow: var(--b-shadow);
  padding: clamp(1.5rem, 3vw, 2.5rem);
  border-radius: 0;
}

.border-t-brutal {
  border-top: var(--b-stroke);
}

.border-t-solid {
  border-top: 2px solid var(--b-black);
  padding-top: 0.75rem;
}

.bg-hazard-dots {
  background-image: radial-gradient(var(--b-black) 1px, transparent 1px);
  background-size: 16px 16px;
}

/* ==========================================================================
   TICKER & HEADER
   ========================================================================== */
.brutal-ticker {
  background-color: var(--b-yellow);
  border-bottom: var(--b-stroke);
  padding: 0.6rem 0;
  white-space: nowrap;
}

.ticker-track {
  gap: 2rem;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  animation: ticker-slide 20s linear infinite;
}

@keyframes ticker-slide {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}

.ticker-sep {
  color: var(--b-black);
  font-weight: 900;
}

.brutal-sub-bar {
  padding: 1rem clamp(1.5rem, 4vw, 3rem);
  background-color: var(--b-white);
  border-bottom: var(--b-stroke);
}

.venue-mark {
  gap: 0.75rem;
  font-weight: 700;
  font-size: 0.9rem;
}

.hazard-block {
  width: 24px;
  height: 24px;
  background-color: var(--b-yellow);
  border: 2px solid var(--b-black);
  font-weight: 900;
}

.brutal-nav-links {
  gap: 1.5rem;
}

.nav-item {
  color: var(--b-black);
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 700;
}

.nav-item:hover {
  background-color: var(--b-yellow);
}

.hazard-badge {
  background-color: var(--b-black);
  color: var(--b-yellow);
  padding: 0.35rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
}

/* ==========================================================================
   BUTTONS (TACTILE MECHANICAL PRESS)
   ========================================================================== */
.btn-brutal-primary {
  background-color: var(--b-yellow);
  color: var(--b-black);
  border: var(--b-stroke);
  box-shadow: var(--b-shadow-sm);
  padding: 0.85rem 1.75rem;
  font-weight: 700;
  text-decoration: none;
  font-size: 0.85rem;
  gap: 0.5rem;
  cursor: pointer;
  transition: none;
}

.btn-brutal-primary:hover {
  background-color: var(--b-black);
  color: var(--b-white);
}

.btn-brutal-primary:active {
  transform: translate(3px, 3px);
  box-shadow: 1px 1px 0px var(--b-black);
}

.btn-brutal-secondary {
  background-color: var(--b-white);
  color: var(--b-black);
  border: var(--b-stroke);
  box-shadow: var(--b-shadow-sm);
  padding: 0.85rem 1.5rem;
  font-weight: 700;
  text-decoration: none;
  font-size: 0.85rem;
  cursor: pointer;
}

.btn-brutal-secondary:hover {
  background-color: var(--b-black);
  color: var(--b-yellow);
}

.btn-brutal-secondary:active {
  transform: translate(3px, 3px);
  box-shadow: 1px 1px 0px var(--b-black);
}

/* ==========================================================================
   LAYOUT CONTAINERS
   ========================================================================== */
.brutal-section {
  width: 100%;
  padding: clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 3rem);
}

.brutal-container {
  width: 100%;
  max-width: 1500px;
  margin-inline: auto;
  gap: 2.5rem;
}

.brutal-layout-grid {
  width: 100%;
  max-width: 1500px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2.5rem;
  align-items: start;
}

/* ==========================================================================
   BEAT 1: HERO
   ========================================================================== */
.hero-left-box {
  gap: 1.75rem;
}

.hazard-stamp {
  display: inline-block;
  background-color: var(--b-yellow);
  border: 2px solid var(--b-black);
  padding: 0.25rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 700;
  width: fit-content;
}

.hero-brutal-title {
  font-size: clamp(3rem, 7vw, 6.5rem);
  line-height: 0.9;
  font-weight: 700;
  letter-spacing: -0.04em;
}

.block-word {
  display: block;
}

.highlight-invert {
  background-color: var(--b-black);
  color: var(--b-white);
  padding-inline: 0.2rem;
  display: inline-block;
}

.hero-tagline {
  font-size: 1rem;
  line-height: 1.6;
}

.brutal-btn-row {
  gap: 1rem;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.pill-rack {
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.brutal-pill {
  font-size: 0.7rem;
  font-weight: 700;
}

.hero-right-frame {
  gap: 1rem;
}

.frame-terminal-header {
  border-bottom: 2px solid var(--b-black);
  padding-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
}

.raw-media-box {
  width: 100%;
  aspect-ratio: 4 / 3;
  border: 2px solid var(--b-black);
}

.brutal-img {
  filter: grayscale(100%) contrast(140%);
}

.caption-terminal {
  font-size: 0.75rem;
  font-weight: 700;
}

/* ==========================================================================
   BEAT 2: NARRATIVE
   ========================================================================== */
.narrative-left {
  gap: 2rem;
}

.brutal-quote-box {
  background-color: var(--b-yellow);
  gap: 1rem;
}

.quote-text {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.35;
}

.quote-author {
  font-size: 0.8rem;
  font-weight: 700;
}

.narrative-right {
  gap: 1.5rem;
}

.narrative-heading {
  font-size: clamp(1.8rem, 3.5vw, 2.75rem);
  line-height: 1.1;
  font-weight: 700;
}

.narrative-lead {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.6;
}

.body-paragraphs {
  gap: 1rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  border-top: var(--b-stroke);
  border-bottom: var(--b-stroke);
  padding: 1.25rem 0;
}

.m-val {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1;
}

.m-lbl {
  font-size: 0.75rem;
  font-weight: 700;
  margin-top: 0.35rem;
}

.m-cap {
  font-size: 0.65rem;
  color: #555555;
}

.feature-rows {
  gap: 1rem;
}

.feat-row {
  gap: 0.25rem;
  border-bottom: 1px solid var(--b-black);
  padding-bottom: 0.75rem;
}

.feat-title {
  font-weight: 700;
  font-size: 0.85rem;
}

.feat-desc {
  font-size: 0.8rem;
  line-height: 1.4;
}

/* ==========================================================================
   BEAT 3: SHOWCASE & GIGS
   ========================================================================== */
.showcase-header {
  gap: 1.5rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1;
  font-weight: 700;
  margin-block: 0.5rem;
}

.section-desc {
  font-size: 0.85rem;
}

.filter-group {
  gap: 0.5rem;
  flex-wrap: wrap;
}

.btn-brutal-filter {
  background-color: var(--b-white);
  border: 2px solid var(--b-black);
  padding: 0.4rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
}

.btn-brutal-filter.is-selected {
  background-color: var(--b-black);
  color: var(--b-yellow);
}

.cards-trio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
}

.brutal-item-card {
  gap: 1.25rem;
}

.card-top-tag {
  font-size: 0.75rem;
  font-weight: 700;
  border-bottom: 2px solid var(--b-black);
  padding-bottom: 0.5rem;
}

.card-img-stage {
  width: 100%;
  aspect-ratio: 16 / 10;
  border: 2px solid var(--b-black);
}

.card-text-block {
  gap: 0.75rem;
}

.item-name {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.1;
}

.item-sub {
  font-size: 0.75rem;
  color: #444444;
}

.item-body {
  font-size: 0.8rem;
  line-height: 1.5;
}

.item-specs-table {
  border-top: 1px solid var(--b-black);
  border-bottom: 1px solid var(--b-black);
  padding: 0.5rem 0;
  gap: 0.25rem;
  font-size: 0.72rem;
}

.item-tags {
  gap: 0.35rem;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.hazard-tag {
  background-color: var(--b-yellow);
  border: 1px solid var(--b-black);
  padding: 0.2rem 0.45rem;
  font-size: 0.65rem;
  font-weight: 700;
}

/* ==========================================================================
   BEAT 4: VIBE & DISPATCHES
   ========================================================================== */
.brutal-dispatch-card {
  gap: 1rem;
  justify-content: space-between;
}

.hazard-badge-sm {
  background-color: var(--b-black);
  color: var(--b-white);
  padding: 0.2rem 0.5rem;
  font-size: 0.65rem;
  font-weight: 700;
}

.priority-tag {
  font-size: 0.75rem;
  font-weight: 700;
}

.dispatch-title {
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.2;
}

.dispatch-quote {
  font-size: 0.85rem;
  line-height: 1.6;
}

.dispatch-author {
  font-size: 0.75rem;
  font-weight: 700;
}

.hazard-warning-banner {
  background-color: var(--b-yellow);
  gap: 2rem;
}

.banner-badge {
  font-weight: 700;
  font-size: 0.8rem;
}

.banner-h3 {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 700;
  margin-block: 0.25rem;
}

.banner-p {
  font-size: 0.9rem;
  line-height: 1.5;
}

.warning-stripes {
  width: 120px;
  height: 80px;
  background: repeating-linear-gradient(
    -45deg,
    var(--b-black),
    var(--b-black) 10px,
    var(--b-yellow) 10px,
    var(--b-yellow) 20px
  );
  border: 2px solid var(--b-black);
}

/* ==========================================================================
   BEAT 5: TAKEAWAYS & ACTION
   ========================================================================== */
.step-brutal-card {
  gap: 0.75rem;
}

.step-giant-num {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
}

.step-h3 {
  font-size: 1.15rem;
  font-weight: 700;
}

.step-summary {
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1.4;
}

.step-guidance {
  font-size: 0.75rem;
  line-height: 1.5;
  margin-top: auto;
}

.terminal-action-box {
  background-color: var(--b-black);
  color: var(--b-white);
  gap: 2rem;
}

.terminal-action-box .btn-brutal-secondary {
  border-color: var(--b-white);
}

.cta-h3 {
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  font-weight: 700;
  color: var(--b-yellow);
}

.cta-p {
  font-size: 0.95rem;
  margin-block: 0.5rem 1rem;
}

.colophon-note {
  font-size: 0.75rem;
  color: #aaaaaa;
}

.cta-right {
  gap: 1rem;
  flex-shrink: 0;
}

.brutal-footer {
  padding: 1.5rem clamp(1.5rem, 4vw, 3rem);
  background-color: var(--b-white);
  font-size: 0.75rem;
  font-weight: 700;
}

/* ==========================================================================
   RESPONSIVE DESIGN
   ========================================================================== */
@media (max-width: 1024px) {
  .brutal-layout-grid {
    grid-template-columns: 1fr;
  }

  .cards-trio-grid {
    grid-template-columns: 1fr;
  }

  .terminal-action-box,
  .hazard-warning-banner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .brutal-nav-links {
    display: none;
  }

  .showcase-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .brutal-btn-row {
    flex-direction: column;
    width: 100%;
  }

  .btn-brutal-primary,
  .btn-brutal-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>
