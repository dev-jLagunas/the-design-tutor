<!-- pages/styles/[slug].vue -->
<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useShowcaseStore } from "~/stores/useShowcaseStore";

definePageMeta({
  layout: "blank",
});

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;700&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap",
    },
  ],
});

const route = useRoute();
const store = useShowcaseStore();

onMounted(() => {
  store.loadMovement(route.params.slug as string);
});

// Access the active 5-beat payload (dynamically swaps between Live & Edu)
const content = computed(() => store.activeSections);
</script>

<template>
  <div v-if="content" class="zen-canvas relative flex-col">
    <!-- ====================================================================
         BRAND SUB-NAVBAR (Integrated into Canvas)
         ==================================================================== -->
    <header class="zen-brand-bar flex-between">
      <div class="brand-signature flex-center">
        <span class="hanko-seal text-micro-caps">木</span>
        <div class="brand-naming flex-col">
          <span class="brand-roman font-serif">KOMOREBI</span>
          <span class="brand-kanji text-micro-caps">木漏れ日 製菓 • 石川</span>
        </div>
      </div>

      <nav class="zen-nav-links flex-center font-sans">
        <a href="#narrative" class="nav-item">Story</a>
        <a href="#showcase" class="nav-item">Collections</a>
        <a href="#vibe" class="nav-item">Sensory</a>
        <a href="#takeaways" class="nav-item">Reserve</a>
      </nav>

      <div class="brand-status-chip flex-center">
        <span class="status-dot"></span>
        <span class="text-micro-caps">{{ content.hero.statusText }}</span>
      </div>
    </header>

    <!-- ====================================================================
         BEAT 1: HERO STAGE
         ==================================================================== -->
    <section id="hero" class="beat-section hero-stage relative">
      <div class="zen-grid-boundary">
        <!-- Text Column -->
        <div class="hero-editorial flex-col">
          <div class="eyebrow-line flex-center">
            <span class="dash-line"></span>
            <span class="text-micro-caps">{{ content.hero.eyebrow }}</span>
          </div>

          <h1 class="hero-huge-title font-serif">
            <span class="line-break">{{ content.hero.titlePart1 }}</span>
            <span class="line-break italic-accent">{{
              content.hero.titlePart2
            }}</span>
            <span
              v-if="content.hero.titlePart3"
              class="line-break quiet-tail"
              >{{ content.hero.titlePart3 }}</span
            >
          </h1>

          <p class="hero-tagline font-sans">
            {{ content.hero.tagline }}
          </p>

          <div class="hero-actions-row flex-center">
            <a
              :href="content.hero.primaryButton.url"
              class="btn-zen-primary font-sans flex-center"
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
              class="btn-zen-ghost font-sans flex-center"
            >
              <span>{{ content.hero.secondaryButton.label }}</span>
            </a>
          </div>

          <!-- Subtle pill tags -->
          <div class="pill-rack flex-center">
            <span
              v-for="tag in content.hero.pillTags"
              :key="tag"
              class="zen-pill text-micro-caps"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Visual Art Frame -->
        <div class="hero-media-wrapper flex-col">
          <div class="hero-frame-large relative overflow-hidden">
            <img
              :src="content.hero.mainImage.src"
              :alt="content.hero.mainImage.alt"
              class="img-cover zen-img"
            />
          </div>
          <p
            v-if="content.hero.mainImage.caption"
            class="media-caption font-sans"
          >
            {{ content.hero.mainImage.caption }}
          </p>
        </div>
      </div>
    </section>

    <!-- ====================================================================
         BEAT 2: NARRATIVE & CRAFT ORIGINS
         ==================================================================== -->
    <section id="narrative" class="beat-section narrative-stage border-top-zen">
      <div class="zen-grid-boundary">
        <!-- Left: Founder Atmosphere Photo -->
        <div class="narrative-media-col flex-col">
          <div class="atmosphere-frame relative overflow-hidden">
            <img
              :src="content.narrative.portraitOrAtmosphereImage.src"
              :alt="content.narrative.portraitOrAtmosphereImage.alt"
              class="img-cover zen-img"
            />
          </div>
          <p
            v-if="content.narrative.portraitOrAtmosphereImage.caption"
            class="media-caption font-sans"
          >
            {{ content.narrative.portraitOrAtmosphereImage.caption }}
          </p>

          <!-- Pull Quote -->
          <blockquote
            v-if="content.narrative.pullQuote"
            class="zen-pullquote flex-col"
          >
            <p class="quote-text font-serif">
              “{{ content.narrative.pullQuote.quote }}”
            </p>
            <footer class="quote-author text-micro-caps">
              {{ content.narrative.pullQuote.author }} —
              {{ content.narrative.pullQuote.role }}
            </footer>
          </blockquote>
        </div>

        <!-- Right: Story Copy & Metrics -->
        <div class="narrative-content-col flex-col">
          <span class="text-micro-caps zen-accent-label">{{
            content.narrative.eyebrow
          }}</span>
          <h2 class="narrative-title font-serif">
            {{ content.narrative.heading }}
          </h2>
          <p class="narrative-lead font-sans">
            {{ content.narrative.leadParagraph }}
          </p>

          <div class="narrative-paragraphs flex-col font-sans">
            <p v-for="(p, i) in content.narrative.bodyParagraphs" :key="i">
              {{ p }}
            </p>
          </div>

          <!-- Metric counters -->
          <div class="metric-rack flex-between">
            <div
              v-for="m in content.narrative.metrics"
              :key="m.label"
              class="metric-box flex-col"
            >
              <span class="metric-val font-serif">{{ m.numberOrStat }}</span>
              <span class="metric-lbl text-micro-caps">{{ m.label }}</span>
              <span v-if="m.caption" class="metric-sub font-sans">{{
                m.caption
              }}</span>
            </div>
          </div>

          <!-- Feature items list -->
          <div class="feature-list-zen flex-col">
            <div
              v-for="feat in content.narrative.featureList"
              :key="feat.title"
              class="feat-item flex-col"
            >
              <h3 class="feat-heading font-serif">{{ feat.title }}</h3>
              <p class="feat-desc font-sans">{{ feat.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================================
         BEAT 3: SHOWCASE / PRODUCT CATALOG
         ==================================================================== -->
    <section
      id="showcase"
      class="beat-section showcase-stage border-top-zen bg-subtle-wash"
    >
      <div class="zen-container flex-col">
        <header class="showcase-header flex-between">
          <div class="header-text-block flex-col">
            <span class="text-micro-caps zen-accent-label">{{
              content.showcase.eyebrow
            }}</span>
            <h2 class="section-title font-serif">
              {{ content.showcase.heading }}
            </h2>
            <p class="section-subtitle font-sans">
              {{ content.showcase.description }}
            </p>
          </div>

          <!-- Category Filter Bar -->
          <div class="category-pills flex-center">
            <span
              v-for="(cat, idx) in content.showcase.categoryFilters"
              :key="cat"
              class="cat-pill text-micro-caps"
              :class="{ 'is-active': idx === 0 }"
            >
              {{ cat }}
            </span>
          </div>
        </header>

        <!-- 3-Item Card Grid -->
        <div class="catalog-grid">
          <article
            v-for="item in content.showcase.items"
            :key="item.id"
            class="catalog-card flex-col"
          >
            <div class="card-media-stage relative overflow-hidden">
              <img
                :src="item.image.src"
                :alt="item.image.alt"
                class="img-cover zen-img"
              />
              <span class="card-badge text-micro-caps">{{ item.badge }}</span>
            </div>

            <div class="card-body-block flex-col">
              <div class="card-title-wrap flex-col">
                <h3 class="item-title font-serif">{{ item.title }}</h3>
                <span class="item-subtitle font-sans">{{ item.subtitle }}</span>
              </div>

              <p class="item-desc font-sans">{{ item.description }}</p>

              <!-- Technical Specs -->
              <div class="spec-matrix flex-col">
                <div
                  v-for="spec in item.specs"
                  :key="spec.name"
                  class="spec-row flex-between font-sans"
                >
                  <span class="spec-name">{{ spec.name }}</span>
                  <span class="spec-detail">{{ spec.detail }}</span>
                </div>
              </div>

              <!-- Tags -->
              <div class="tag-row flex-center">
                <span
                  v-for="t in item.tags"
                  :key="t"
                  class="spec-tag text-micro-caps"
                  >{{ t }}</span
                >
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ====================================================================
         BEAT 4: SENSORY IMPRESSIONS & VIBE
         ==================================================================== -->
    <section id="vibe" class="beat-section vibe-stage border-top-zen">
      <div class="zen-container flex-col">
        <header class="vibe-header flex-col">
          <span class="text-micro-caps zen-accent-label">{{
            content.vibe.eyebrow
          }}</span>
          <h2 class="section-title font-serif">{{ content.vibe.heading }}</h2>
          <p class="section-subtitle font-sans">
            {{ content.vibe.description }}
          </p>
        </header>

        <!-- Review / Impressions Row -->
        <div class="impressions-grid">
          <div
            v-for="card in content.vibe.cards"
            :key="card.id"
            class="impression-box flex-col"
          >
            <span class="card-badge-line text-micro-caps">{{
              card.badge
            }}</span>
            <h4 class="impression-title font-serif">“{{ card.title }}”</h4>
            <p class="impression-quote font-sans">{{ card.quoteOrRule }}</p>
            <div class="impression-author-block flex-between">
              <span class="author-name font-sans">{{
                card.authorOrStandard
              }}</span>
              <span
                v-if="card.ratingOrPriority"
                class="author-rating text-micro-caps"
                >{{ card.ratingOrPriority }}</span
              >
            </div>
          </div>
        </div>

        <!-- Wide Atmospheric Callout -->
        <div
          v-if="content.vibe.textureOrMoodImage"
          class="mood-banner relative overflow-hidden flex-center"
        >
          <img
            :src="content.vibe.textureOrMoodImage.src"
            :alt="content.vibe.textureOrMoodImage.alt"
            class="img-cover mood-bg-image"
          />
          <div class="mood-overlay-card flex-col flex-center text-center">
            <span class="mood-badge text-micro-caps">{{
              content.vibe.bannerBadge
            }}</span>
            <h3 class="mood-heading font-serif">
              {{ content.vibe.bannerHeading }}
            </h3>
            <p class="mood-text font-sans">{{ content.vibe.bannerBody }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================================
         BEAT 5: TAKEAWAYS & RESERVATION CTA
         ==================================================================== -->
    <section id="takeaways" class="beat-section takeaways-stage border-top-zen">
      <div class="zen-container flex-col">
        <header class="takeaways-header flex-col">
          <span class="text-micro-caps zen-accent-label">{{
            content.takeaways.eyebrow
          }}</span>
          <h2 class="section-title font-serif">
            {{ content.takeaways.heading }}
          </h2>
          <p class="section-subtitle font-sans">
            {{ content.takeaways.description }}
          </p>
        </header>

        <!-- 3-Step Process -->
        <div class="steps-grid">
          <div
            v-for="step in content.takeaways.steps"
            :key="step.stepNumber"
            class="step-card flex-col"
          >
            <span class="step-num font-serif">{{ step.stepNumber }}</span>
            <h3 class="step-title font-serif">{{ step.title }}</h3>
            <p class="step-summary font-sans">{{ step.summary }}</p>
            <p class="step-guidance font-sans">{{ step.guidanceText }}</p>
          </div>
        </div>

        <!-- Closing Conversion Box -->
        <div class="closing-reservation-box flex-between">
          <div class="reservation-text flex-col">
            <h3 class="reserve-headline font-serif">
              {{ content.takeaways.ctaHeadline }}
            </h3>
            <p class="reserve-body font-sans">
              {{ content.takeaways.ctaBody }}
            </p>
            <span class="reserve-colophon text-micro-caps">{{
              content.takeaways.guaranteeOrColophonNote
            }}</span>
          </div>

          <div class="reservation-cta-group flex-col">
            <a
              :href="content.takeaways.ctaPrimaryButton.url"
              class="btn-zen-primary font-sans flex-center"
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
              class="btn-zen-ghost font-sans flex-center"
            >
              <span>{{ content.takeaways.ctaSecondaryButton.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Minimal Brand Colophon -->
    <footer class="zen-brand-footer flex-between border-top-zen font-sans">
      <span class="text-micro-caps"
        >© 2026 Komorebi Bakehouse • Ishikawa, Japan</span
      >
      <span class="text-micro-caps"
        >Stone-Ground • Small Batch • Certified Plant-Based</span
      >
    </footer>
  </div>
</template>

<style scoped>
/* ==========================================================================
   PALETTE & TYPOGRAPHY SYSTEM
   Japanese Minimalist Color Tokens:
   Chalk White (#f8f7f4), Charcoal Sumi (#1c1c1a), Hairline borders (#e7e5df),
   Subtle Pastels: Matcha (#eef2eb), Sesame (#eae8e4), Yuzu (#faf5e8)
   ========================================================================== */
.zen-canvas {
  --zen-bg: #f8f7f4;
  --zen-surface: #ffffff;
  --zen-text: #1c1c1a;
  --zen-muted: #6e6d68;
  --zen-border: #e7e5df;
  --zen-border-dark: #1c1c1a;
  --zen-matcha-wash: #eef2eb;
  --zen-yuzu-wash: #faf5e8;
  --zen-accent-matcha: #4d5c48;

  width: 100%;
  min-height: 100vh;
  background-color: var(--zen-bg);
  color: var(--zen-text);
  overflow-x: hidden;
  font-feature-settings: "palt" 1;
}

.font-serif {
  font-family: "Cinzel", "Cormorant Garamond", "Noto Serif JP", serif;
  letter-spacing: -0.02em;
}

.font-sans {
  font-family:
    "Plus Jakarta Sans",
    "Noto Sans JP",
    -apple-system,
    sans-serif;
}

.text-micro-caps {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 500;
}

/* ==========================================================================
   COMMON LAYOUT RIG
   ========================================================================== */
.zen-container {
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
  gap: clamp(3rem, 6vw, 5rem);
}

.zen-grid-boundary {
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(2rem, 5vw, 6rem);
  align-items: start;
}

.beat-section {
  width: 100%;
  padding-block: clamp(5rem, 9vw, 9rem);
  padding-inline: clamp(1.5rem, 5vw, 4rem);
}

.border-top-zen {
  border-top: 1px solid var(--zen-border);
}

.bg-subtle-wash {
  background-color: #f3f2ee;
}

.zen-accent-label {
  color: var(--zen-accent-matcha);
  margin-bottom: 0.75rem;
}

/* ==========================================================================
   BRAND INTEGRATED HEADER
   ========================================================================== */
.zen-brand-bar {
  width: 100%;
  padding: 1.5rem clamp(1.5rem, 5vw, 4rem);
  border-bottom: 1px solid var(--zen-border);
  background-color: var(--zen-bg);
}

.hanko-seal {
  width: 32px;
  height: 32px;
  background-color: #b84b3d;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-radius: 2px;
  margin-right: 0.85rem;
  font-size: 1rem;
}

.brand-roman {
  font-size: 1.1rem;
  letter-spacing: 0.15em;
  font-weight: 600;
  line-height: 1;
}

.brand-kanji {
  font-size: 0.6rem;
  color: var(--zen-muted);
  margin-top: 4px;
}

.zen-nav-links {
  gap: 2.5rem;
}

.nav-item {
  color: var(--zen-muted);
  text-decoration: none;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.2s ease;
}

.nav-item:hover {
  color: var(--zen-text);
}

.brand-status-chip {
  gap: 0.6rem;
  padding: 0.4rem 0.9rem;
  background-color: var(--zen-matcha-wash);
  border: 1px solid #dce4d6;
  border-radius: 9999px;
  color: var(--zen-accent-matcha);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background-color: var(--zen-accent-matcha);
}

/* ==========================================================================
   BEAT 1: HERO
   ========================================================================== */
.hero-stage {
  padding-top: clamp(4rem, 7vw, 7rem);
}

.hero-editorial {
  gap: clamp(1.5rem, 3vw, 2.5rem);
}

.eyebrow-line {
  gap: 1rem;
  justify-content: flex-start;
  color: var(--zen-muted);
}

.dash-line {
  width: 28px;
  height: 1px;
  background-color: var(--zen-muted);
}

.hero-huge-title {
  font-size: clamp(3.2rem, 8vw, 7rem);
  line-height: 0.95;
  font-weight: 400;
  color: var(--zen-text);
}

.line-break {
  display: block;
}

.italic-accent {
  font-style: italic;
  letter-spacing: -0.04em;
  color: #3b3a36;
}

.quiet-tail {
  color: var(--zen-muted);
  font-size: 0.8em;
}

.hero-tagline {
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  line-height: 1.7;
  color: var(--zen-muted);
  max-width: 580px;
  font-weight: 300;
}

.hero-actions-row {
  gap: 1.5rem;
  justify-content: flex-start;
}

.btn-zen-primary {
  background-color: var(--zen-text);
  color: var(--zen-bg);
  padding: 1rem 2rem;
  text-decoration: none;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  gap: 0.75rem;
  border: 1px solid var(--zen-text);
  transition: all 0.25s ease;
}

.btn-zen-primary:hover {
  background-color: #3b3a36;
}

.btn-zen-ghost {
  background: transparent;
  color: var(--zen-text);
  padding: 1rem 1.75rem;
  text-decoration: none;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid var(--zen-border);
  transition: border-color 0.2s ease;
}

.btn-zen-ghost:hover {
  border-color: var(--zen-text);
}

.pill-rack {
  gap: 0.5rem;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.zen-pill {
  padding: 0.35rem 0.75rem;
  border: 1px solid var(--zen-border);
  background-color: var(--zen-surface);
  color: var(--zen-muted);
  font-size: 0.62rem;
}

.hero-media-wrapper {
  gap: 0.75rem;
}

.hero-frame-large {
  width: 100%;
  aspect-ratio: 4 / 5;
  background-color: #ecebe6;
  border: 1px solid var(--zen-border);
}

.media-caption {
  font-size: 0.75rem;
  color: var(--zen-muted);
  font-style: italic;
  line-height: 1.5;
}

/* ==========================================================================
   BEAT 2: NARRATIVE
   ========================================================================== */
.atmosphere-frame {
  width: 100%;
  aspect-ratio: 4 / 5;
  border: 1px solid var(--zen-border);
}

.zen-pullquote {
  gap: 1rem;
  padding: 2rem 0;
  border-top: 1px solid var(--zen-border);
  border-bottom: 1px solid var(--zen-border);
  margin-top: 2rem;
}

.quote-text {
  font-size: 1.35rem;
  font-style: italic;
  line-height: 1.45;
  color: var(--zen-text);
}

.quote-author {
  color: var(--zen-muted);
}

.narrative-content-col {
  gap: 2rem;
}

.narrative-title {
  font-size: clamp(2.2rem, 4vw, 3.8rem);
  line-height: 1.05;
  font-weight: 400;
}

.narrative-lead {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--zen-text);
}

.narrative-paragraphs {
  gap: 1.25rem;
  color: var(--zen-muted);
  font-size: 0.95rem;
  line-height: 1.8;
  font-weight: 300;
}

.metric-rack {
  gap: 1.5rem;
  padding: 2rem 0;
  border-top: 1px solid var(--zen-border);
  border-bottom: 1px solid var(--zen-border);
}

.metric-val {
  font-size: 2.75rem;
  line-height: 1;
}

.metric-lbl {
  color: var(--zen-accent-matcha);
  margin-top: 0.35rem;
}

.metric-sub {
  font-size: 0.75rem;
  color: var(--zen-muted);
}

.feature-list-zen {
  gap: 1.5rem;
}

.feat-item {
  gap: 0.35rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px dashed var(--zen-border);
}

.feat-heading {
  font-size: 1.1rem;
}

.feat-desc {
  font-size: 0.9rem;
  color: var(--zen-muted);
  line-height: 1.6;
}

/* ==========================================================================
   BEAT 3: SHOWCASE / CATALOG
   ========================================================================== */
.showcase-header {
  gap: 2rem;
}

.section-title {
  font-size: clamp(2rem, 3.5vw, 3.25rem);
  line-height: 1.1;
  font-weight: 400;
  margin-block: 0.5rem 0.75rem;
}

.section-subtitle {
  font-size: 1rem;
  color: var(--zen-muted);
  font-weight: 300;
}

.category-pills {
  gap: 0.5rem;
  flex-wrap: wrap;
}

.cat-pill {
  padding: 0.45rem 1rem;
  background-color: var(--zen-bg);
  border: 1px solid var(--zen-border);
  color: var(--zen-muted);
  cursor: pointer;
}

.cat-pill.is-active {
  background-color: var(--zen-text);
  color: var(--zen-bg);
  border-color: var(--zen-text);
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  width: 100%;
}

.catalog-card {
  background-color: var(--zen-surface);
  border: 1px solid var(--zen-border);
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
}

.catalog-card:hover {
  transform: translateY(-6px);
  border-color: var(--zen-text);
}

.card-media-stage {
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #ebeae4;
}

.card-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.35rem 0.65rem;
  background-color: var(--zen-bg);
  border: 1px solid var(--zen-border);
  color: var(--zen-text);
}

.card-body-block {
  padding: 2rem;
  gap: 1.25rem;
}

.item-title {
  font-size: 1.25rem;
  line-height: 1.2;
}

.item-subtitle {
  font-size: 0.8rem;
  color: var(--zen-accent-matcha);
  margin-top: 0.25rem;
}

.item-desc {
  font-size: 0.85rem;
  color: var(--zen-muted);
  line-height: 1.6;
}

.spec-matrix {
  border-top: 1px solid var(--zen-border);
  border-bottom: 1px solid var(--zen-border);
  padding: 0.75rem 0;
  gap: 0.45rem;
}

.spec-row {
  font-size: 0.78rem;
}

.spec-name {
  color: var(--zen-muted);
}

.spec-detail {
  font-weight: 500;
}

.tag-row {
  gap: 0.4rem;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.spec-tag {
  font-size: 0.6rem;
  padding: 0.25rem 0.55rem;
  background-color: var(--zen-matcha-wash);
  color: var(--zen-accent-matcha);
}

/* ==========================================================================
   BEAT 4: VIBE & SENSORY
   ========================================================================== */
.impressions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
}

.impression-box {
  background-color: var(--zen-surface);
  border: 1px solid var(--zen-border);
  padding: 2.5rem;
  gap: 1rem;
  justify-content: space-between;
}

.card-badge-line {
  color: var(--zen-accent-matcha);
}

.impression-title {
  font-size: 1.35rem;
  font-style: italic;
  line-height: 1.2;
}

.impression-quote {
  font-size: 0.9rem;
  color: var(--zen-muted);
  line-height: 1.7;
}

.impression-author-block {
  border-top: 1px solid var(--zen-border);
  padding-top: 1rem;
}

.author-name {
  font-size: 0.8rem;
  font-weight: 600;
}

.author-rating {
  color: var(--zen-accent-matcha);
}

.mood-banner {
  width: 100%;
  min-height: 480px;
  border: 1px solid var(--zen-border);
  padding: 3rem;
}

.mood-bg-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  filter: brightness(0.75);
}

.mood-overlay-card {
  position: relative;
  z-index: 2;
  background-color: rgba(248, 247, 244, 0.95);
  backdrop-filter: blur(8px);
  padding: clamp(2.5rem, 5vw, 4rem);
  max-width: 680px;
  gap: 1rem;
  border: 1px solid var(--zen-border);
}

.mood-heading {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
}

.mood-text {
  font-size: 0.95rem;
  color: var(--zen-muted);
  line-height: 1.7;
}

/* ==========================================================================
   BEAT 5: TAKEAWAYS & RESERVATION
   ========================================================================== */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
}

.step-card {
  border: 1px solid var(--zen-border);
  background-color: var(--zen-surface);
  padding: 2.5rem;
  gap: 1rem;
}

.step-num {
  font-size: 3rem;
  line-height: 1;
  color: #3b3a36;
}

.step-title {
  font-size: 1.25rem;
  line-height: 1.2;
}

.step-summary {
  font-size: 0.9rem;
  color: var(--zen-text);
  line-height: 1.6;
}

.step-guidance {
  font-size: 0.8rem;
  color: var(--zen-muted);
  line-height: 1.5;
  margin-top: auto;
  border-top: 1px dashed var(--zen-border);
  padding-top: 0.75rem;
}

.closing-reservation-box {
  background-color: var(--zen-matcha-wash);
  border: 1px solid #dce4d6;
  padding: clamp(2.5rem, 5vw, 4rem);
  gap: 2.5rem;
}

.reserve-headline {
  font-size: clamp(1.8rem, 3vw, 2.75rem);
  line-height: 1.1;
  color: #293826;
}

.reserve-body {
  font-size: 1rem;
  color: var(--zen-accent-matcha);
  margin-block: 0.75rem 1.25rem;
  line-height: 1.6;
}

.reserve-colophon {
  color: #5d6e57;
}

.reservation-cta-group {
  gap: 0.85rem;
  flex-shrink: 0;
}

.zen-brand-footer {
  padding: 2rem clamp(1.5rem, 5vw, 4rem);
  color: var(--zen-muted);
}

/* ==========================================================================
   RESPONSIVE DESIGN (TABLET & MOBILE)
   ========================================================================== */
@media (max-width: 1024px) {
  .zen-grid-boundary {
    grid-template-columns: 1fr;
  }

  .catalog-grid,
  .impressions-grid,
  .steps-grid {
    grid-template-columns: 1fr;
  }

  .closing-reservation-box {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .zen-nav-links {
    display: none;
  }

  .showcase-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .metric-rack {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .hero-actions-row {
    flex-direction: column;
    width: 100%;
  }

  .btn-zen-primary,
  .btn-zen-ghost {
    width: 100%;
    justify-content: center;
  }
}
</style>
