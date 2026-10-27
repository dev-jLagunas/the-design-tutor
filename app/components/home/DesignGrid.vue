<script setup lang="ts">
import { ref, onMounted } from "vue";

// Self-contained filler data (ready to link to Pinia store later)
const searchQuery = ref("");
const activeCategory = ref("All");

const categories = [
  "All",
  "Swiss / Grid",
  "Brutalism",
  "Retro Digital",
  "Minimalist",
  "Editorial",
];

const mockDesigns = [
  {
    id: "swiss-grid",
    vol: "Style 1",
    edition: "October 31, 2026",
    category: "Minimalism",
    title: "International Typographic Style",
    description:
      "Mathematical modular grids, strict asymmetric alignment, and functional hierarchy derived from postwar graphic principles.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    learnRoute: "/styles/swiss-grid",
    liveRoute: "/live/swiss-grid",
    icon: "lucide:layout-grid",
  },
];

// Typewriter Placeholder Logic
const fullPlaceholder = "START TYPING...";
const currentPlaceholder = ref("");
let charIndex = 0;

const typeWriter = () => {
  if (charIndex < fullPlaceholder.length) {
    currentPlaceholder.value += fullPlaceholder.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 140);
  } else {
    setTimeout(() => {
      currentPlaceholder.value = "";
      charIndex = 0;
      typeWriter();
    }, 2200);
  }
};

onMounted(() => {
  typeWriter();
});
</script>

<template>
  <section
    id="styles-index"
    class="design-grid-section relative bg-dots no-select"
  >
    <div class="grid-container flex-col">
      <!-- ====================================================================
           SEARCH & CATEGORY NAV
           ==================================================================== -->
      <header class="grid-search-header flex-col">
        <div class="search-meta flex-between">
          <p class="eyebrow font-b-group">Search Styles</p>
        </div>

        <div class="search-field-wrap relative">
          <input
            v-model="searchQuery"
            type="search"
            :placeholder="currentPlaceholder"
            aria-label="Search design movements"
            class="search-giant-input font-display"
          />
          <Icon name="lucide:search" class="search-giant-icon" />
        </div>

        <nav
          class="category-filter-nav flex-center"
          aria-label="Filter Movements"
        >
          <button
            v-for="cat in categories"
            :key="cat"
            type="button"
            class="btn-cat-filter transition-smooth font-b-group"
            :class="{ 'is-active': activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </nav>
      </header>

      <!-- ====================================================================
           THE DESIGN SYSTEM CARDS
           ==================================================================== -->
      <div class="cards-layout">
        <!-- Standard Movement Card -->
        <article
          v-for="design in mockDesigns"
          :key="design.id"
          class="design-card flex-col transition-smooth"
        >
          <!-- Top Card Meta -->
          <div class="card-meta-bar flex-between">
            <div class="card-vol flex-col">
              <span class="vol-tag font-b-group">{{ design.vol }}</span>
              <span class="edition-tag font-b-group">{{ design.edition }}</span>
            </div>
            <div class="card-icon-frame flex-center">
              <Icon :name="design.icon" class="movement-icon" />
            </div>
          </div>

          <!-- Movement Image Showcase -->
          <div class="card-image-stage relative overflow-hidden">
            <img
              :src="design.image"
              :alt="design.title"
              class="img-cover card-img transition-smooth"
            />
            <span class="card-category-badge font-b-group">
              {{ design.category }}
            </span>
          </div>

          <!-- Title & Editorial Description -->
          <div class="card-content-block flex-col">
            <h2 class="card-heading font-display">
              {{ design.title }}
            </h2>
            <p class="card-summary font-body">
              {{ design.description }}
            </p>
          </div>

          <!-- Direct Dual Action Pair (No Selling / Clean CTAs) -->
          <div class="card-actions-group flex-col">
            <NuxtLink
              :to="design.learnRoute"
              class="btn-card-action btn-gold font-body flex-center transition-smooth"
            >
              <span>Educational UI</span>
              <Icon name="lucide:arrow-right" class="action-icon-sm" />
            </NuxtLink>

            <NuxtLink
              :to="design.liveRoute"
              class="btn-card-action btn-ghost font-body flex-center transition-smooth"
            >
              <Icon name="lucide:layout" class="action-icon-sm" />
              <span>Live UI</span>
            </NuxtLink>
          </div>
        </article>

        <!-- Up Next / Editorial Status Card -->
        <article class="design-card card-upcoming flex-col transition-smooth">
          <div class="card-meta-bar flex-between">
            <div class="card-vol flex-col">
              <span class="vol-tag text-micro-caps">VOL_NEXT</span>
              <span class="edition-tag font-body">IN DEVELOPMENT</span>
            </div>
            <div class="card-icon-frame flex-center">
              <Icon
                name="lucide:sparkles"
                class="movement-icon icon-rotating"
              />
            </div>
          </div>

          <div class="card-image-stage relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              alt="Future Movements"
              class="img-cover card-img transition-smooth"
            />
            <span class="card-category-badge font-b-group">
              Active Pipeline
            </span>
          </div>

          <div class="card-content-block flex-col">
            <h2 class="card-heading font-display">More Movements Decoding</h2>
            <p class="card-summary font-body">
              New design system deconstructions are drafted and pushed
              periodically. From De Stijl geometry to 90s Flash maximalism.
            </p>
          </div>

          <div class="card-actions-group flex-col">
            <NuxtLink
              to="/contact"
              class="btn-card-action btn-gold font-body flex-center transition-smooth"
            >
              <span>Learn More</span>
              <Icon name="lucide:arrow-up-right" class="action-icon-sm" />
            </NuxtLink>

            <NuxtLink
              to="/about"
              class="btn-card-action btn-ghost font-body flex-center transition-smooth"
            >
              <Icon name="lucide:book-open" class="action-icon-sm" />
              <span>Get in Touch</span>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ==========================================================================
   GRID LAYOUT & SECTION
   ========================================================================== */
.design-grid-section {
  width: 100%;
  background-color: var(--shell-bg);
  color: var(--shell-text);
  padding-block: clamp(4rem, 8vw, 6rem);
  padding-inline: var(--space-5);
}

.grid-container {
  width: 100%;
  max-width: 1600px;
  margin-inline: auto;
  gap: var(--space-6);
}

/* ==========================================================================
   GIANT SEARCH DISPLAY & CATEGORY BAR
   ========================================================================== */
.grid-search-header {
  gap: var(--space-4);
  padding-bottom: var(--space-5);
}

.eyebrow {
  color: var(--shell-accent-coral);
}

.live-counter {
  color: var(--shell-muted);
}
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
  height: 14px;
  width: 14px;
  background-color: var(--shell-accent-coral);
  -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><line x1='18' y1='6' x2='6' y2='18'></line><line x1='6' y1='6' x2='18' y2='18'></line></svg>")
    no-repeat center;
  mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><line x1='18' y1='6' x2='6' y2='18'></line><line x1='6' y1='6' x2='18' y2='18'></line></svg>")
    no-repeat center;
  cursor: pointer;
}

.search-field-wrap {
  width: 100%;
  display: flex;
  align-items: center;
}

.search-giant-input {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: clamp(2.5rem, 8vw, 6.5rem);
  line-height: 1;
  color: var(--shell-text);
  letter-spacing: -0.04em;
  padding-right: var(--space-6);
}

.search-giant-input::placeholder {
  color: var(--shell-muted);
  opacity: 0.2;
}

.search-giant-icon {
  position: absolute;
  right: 0;
  font-size: clamp(2rem, 5vw, 4rem);
  color: var(--shell-muted);
  opacity: 0.2;
  pointer-events: none;
}

.category-filter-nav {
  gap: var(--space-3);
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: var(--space-2);
}

.btn-cat-filter {
  background: transparent;
  border: 1px solid var(--shell-dots);
  color: var(--shell-muted);
  padding: 0.45rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: var(--text-xs);
}

.btn-cat-filter:hover {
  color: var(--shell-text);
  border-color: var(--shell-text);
}

.btn-cat-filter.is-active {
  background-color: var(--shell-surface);
  color: var(--shell-accent-coral);
  border-color: var(--shell-accent-coral);
}

/* ==========================================================================
   CARD SYSTEM MATRIX
   ========================================================================== */
.cards-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: var(--space-6);
  width: 100%;
}

.design-card {
  background-color: var(--shell-surface);
  border: 1px solid var(--shell-border);
  padding: var(--space-5);
  border-radius: 6px;
  gap: var(--space-4);
  justify-content: space-between;
}

.design-card:hover {
  transform: translateY(-4px);
  border-color: var(--shell-accent-gold);
  box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.45);
}

/* Meta Top Row */
.card-vol {
  gap: 2px;
}

.vol-tag {
  color: var(--shell-text);
  font-size: 0.7rem;
}

.edition-tag {
  color: var(--shell-muted);
  font-size: 0.65rem;
  font-weight: 100;
}

.card-icon-frame {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  background-color: var(--shell-bg);
  border: 1px solid var(--shell-border);
}

.movement-icon {
  font-size: 1.25rem;
  color: var(--shell-accent-cyan);
}

.icon-rotating {
  animation: spin-slow 12s linear infinite;
  color: var(--shell-accent-gold);
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Media Showcase */
.card-image-stage {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 4px;
  border: 1px solid var(--shell-border);
  background-color: var(--shell-bg);
}

.card-img {
  filter: grayscale(85%);
}

.design-card:hover .card-img {
  filter: grayscale(0%);
  transform: scale(1.04);
}

.card-category-badge {
  position: absolute;
  top: var(--space-2);
  left: var(--space-2);
  background-color: var(--shell-accent-cyan);
  color: #191919;
  padding: 0.25rem 0.6rem;
  border-radius: 3px;

  font-size: 0.65rem;
}

/* Card Typography (Un-crunched layout) */
.card-content-block {
  gap: var(--space-2);
}

.card-heading {
  font-size: var(--text-2xl);
  line-height: 1.15;
  color: var(--shell-text);
  word-break: normal;
  overflow-wrap: break-word;
}

.design-card:hover .card-heading {
  color: var(--shell-accent-gold);
}

.card-summary {
  font-size: var(--text-sm);
  color: var(--shell-muted);
  line-height: 1.5;
  margin-top: var(--space-1);
}

/* Action Group */
.card-actions-group {
  gap: var(--space-2);
  margin-top: auto;
  padding-top: var(--space-2);
}

.btn-card-action {
  width: 100%;
  padding: 0.75rem var(--space-3);
  border-radius: 4px;
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-decoration: none;
  cursor: pointer;
  line-height: 1;
  gap: var(--space-2);
}

/* Yellow Primary Button */
.btn-gold {
  background-color: var(--shell-accent-gold);
  color: #131314;
  border: 1px solid var(--shell-accent-gold);
}

.btn-gold:hover {
  filter: brightness(1.08);
}

/* Ghost Secondary Button */
.btn-ghost {
  background-color: transparent;
  color: var(--shell-text);
  border: 1px solid var(--shell-border);
}

.btn-ghost:hover {
  border-color: var(--shell-accent-cyan);
  color: var(--shell-accent-cyan);
}

.action-icon-sm {
  font-size: 0.95rem;
}

/* Upcoming Card Theme */
.card-upcoming {
  border-style: dashed;
}

/* ==========================================================================
   RESPONSIVE QUERIES
   ========================================================================== */
@media (max-width: 768px) {
  .cards-layout {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .search-giant-input {
    font-size: clamp(2rem, 10vw, 3.5rem);
  }

  .search-giant-icon {
    font-size: 1.75rem;
  }
}
</style>
