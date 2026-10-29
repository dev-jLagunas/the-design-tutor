<!-- components/movements/design-01/PizzaFooter.vue -->
<script setup lang="ts">
import type { MovementDefinition } from "~/types/movement";

const props = defineProps<{
  data:
    | MovementDefinition["live"]["footer"]
    | MovementDefinition["educational"]["footer"];
  isEducational?: boolean;
}>();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <footer class="foundry-footer-stage" aria-label="Footer and Colophon">
    <!-- Background Frame with Scrim Overlay -->
    <div class="footer-bg-frame">
      <img
        src="/images/design01/hero-img-pizza.jpg"
        alt="Foundry Katamachi Team and Counter Atmosphere"
        class="footer-bg-image"
      />
      <div class="footer-scrim"></div>
    </div>

    <!-- Editorial Reticle Lines -->
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
      <line x1="85" y1="0" x2="-15" y2="100" class="guide-line" />
    </svg>

    <!-- Content Structure -->
    <div class="footer-content-wrap">
      <!-- Top Bar: Colophon Brand & Back to Top -->
      <div class="footer-masthead-row">
        <div class="colophon-pill bg-border">
          <span class="status-pulse-dot"></span>
          <span class="colophon-text">{{ data.brandColophon }}</span>
        </div>
      </div>

      <!-- Center Dynamic Grid -->
      <div class="footer-main-grid">
        <!-- Col 1: Operational Meta Details -->
        <div class="footer-col">
          <span class="col-heading font-mono">OPERATIONAL DATA</span>
          <ul class="col-list font-mono" aria-label="Operational details">
            <li
              v-for="(detail, dIdx) in data.operationalDetails"
              :key="dIdx"
              class="col-list-item"
            >
              <span class="item-caret">›</span>
              <span>{{ detail }}</span>
            </li>
          </ul>
        </div>

        <!-- Col 2: Secondary / Resource Links -->
        <div class="footer-col">
          <span class="col-heading font-mono">
            {{ isEducational ? "ACADEMIC ARCHIVES" : "DISPATCHES & AUDIO" }}
          </span>

          <!-- Educational Mode Resource Links -->
          <ul
            v-if="
              isEducational &&
              'resourceLinks' in data &&
              data.resourceLinks?.length
            "
            class="col-links-list"
          >
            <li v-for="(res, rIdx) in data.resourceLinks" :key="rIdx">
              <a
                :href="res.url"
                target="_blank"
                rel="noopener noreferrer"
                class="footer-link-card bg-border"
              >
                <div class="link-meta font-mono">
                  <span>{{ res.tag }}</span>
                  <Icon name="lucide:arrow-up-right" class="link-arrow" />
                </div>
                <span class="link-label font-display">{{ res.label }}</span>
                <span v-if="res.description" class="link-desc font-mono">
                  {{ res.description }}
                </span>
              </a>
            </li>
          </ul>

          <!-- Live Mode Secondary Links -->
          <ul
            v-else-if="'secondaryLinks' in data && data.secondaryLinks?.length"
            class="col-links-list"
          >
            <li v-for="(link, sIdx) in data.secondaryLinks" :key="sIdx">
              <a
                v-if="link.href"
                :href="link.href"
                :target="link.isExternal ? '_blank' : undefined"
                :rel="link.isExternal ? 'noopener noreferrer' : undefined"
                class="footer-link-card bg-border"
              >
                <div class="link-meta font-mono">
                  <span>NETWORK</span>
                  <Icon name="lucide:arrow-up-right" class="link-arrow" />
                </div>
                <span class="link-label font-display">{{ link.label }}</span>
              </a>
              <button
                v-else-if="link.targetId"
                type="button"
                class="footer-link-card bg-border"
                @click="scrollToTop"
              >
                <div class="link-meta font-mono">
                  <span>ANCHOR</span>
                  <Icon name="lucide:arrow-up" class="link-arrow" />
                </div>
                <span class="link-label font-display">{{ link.label }}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar: Legal & Attribution Notice -->
      <div class="footer-bottom-bar bg-border">
        <p class="legal-notice font-mono">{{ data.legalNotice }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.bg-border {
  background-color: rgba(10, 10, 10, 0.6);

  border: var(--border-width-hairline) solid var(--color-border);
  box-sizing: border-box;
}

.foundry-footer-stage {
  position: relative;
  width: 100%;
  min-height: 55vh;
  padding-block: clamp(4rem, 8vh, 6rem);
  padding-inline: var(--layout-gutter);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--color-canvas);
  box-sizing: border-box;
}

/* Background image & gradient scrim */
.footer-bg-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.footer-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
  display: block;
  transform: scale(1.05);
}

.footer-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.98) 0%,
    rgba(10, 10, 10, 0.75) 40%,
    rgba(10, 10, 10, 0.85) 75%,
    rgba(10, 10, 10, 0.98) 100%
  );
  pointer-events: none;
}

/* Reticle Lines */
.editorial-guide-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.editorial-guide-canvas .guide-line {
  stroke: rgba(255, 255, 255, 0.04);
  stroke-width: 1px;
  vector-effect: non-scaling-stroke;
}

.editorial-guide-canvas .guide-line-ghost {
  stroke: rgba(255, 255, 255, 0.02);
}

/* Content Container */
.footer-content-wrap {
  position: relative;
  z-index: 5;
  width: min(var(--layout-container-max), 100%);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

/* Top Row */
.footer-masthead-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-4);
}

.colophon-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  padding: 0.5rem 1rem;
}

.status-pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: var(--radius-pill);
  background-color: var(--color-primary-1);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
}

.colophon-text {
  font-size: var(--text-size-sm);
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-primary);
  font-weight: 700;
}

.back-top-trigger {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.5rem 1rem;
  color: var(--color-text-secondary);
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.back-top-trigger:hover {
  background-color: var(--color-primary-1);
  border-color: var(--color-primary-1);
  color: var(--color-canvas);
  transform: translateY(-2px);
}

.trigger-icon {
  font-size: 0.85rem;
}

/* Center Grid */
.footer-main-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  width: 100%;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.col-heading {
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-muted);
  text-transform: uppercase;
}

.col-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.col-list-item {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-size: var(--text-size-xs);
  color: var(--color-text-secondary);
  line-height: var(--leading-normal);
}

.item-caret {
  color: var(--color-primary-1);
  font-weight: 700;
}

/* Link Cards */
.col-links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.footer-link-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: var(--space-3) var(--space-4);
  text-decoration: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition:
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.footer-link-card:hover {
  transform: translateY(-2px);
  border-color: var(--color-primary-1);
  background-color: rgba(25, 25, 25, 0.8);
}

.link-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-muted);
  text-transform: uppercase;
}

.link-arrow {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  transition:
    transform 0.2s ease,
    color 0.2s ease;
}

.footer-link-card:hover .link-arrow {
  color: var(--color-primary-1);
  transform: translate(2px, -2px);
}

.link-label {
  font-size: var(--text-size-sm);
  color: var(--color-text-primary);
  line-height: var(--leading-tight);
}

.link-desc {
  font-size: var(--text-size-micro);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
}

/* Bottom Bar */
.footer-bottom-bar {
  padding: var(--space-3) var(--space-4);
  width: 100%;
}

.legal-notice {
  font-size: var(--text-size-micro);
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin: 0;
}

@media (max-width: 768px) {
  .footer-masthead-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-main-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}
</style>
