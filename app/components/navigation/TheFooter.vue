<script setup lang="ts">
const { isDark } = useTheme();

// The marquee message with programmatic letter coloring
const message = "THANKS FOR STOPPING BY • ";
// Repeats to fill seamless scroll loop
const marqueeStream = Array(4).fill(message).join("");

// Color alternation: Gold -> Cyan -> Coral -> repeat
const colors = ["gold", "cyan", "coral"];
function getLetterColorClass(index: number, char: string) {
  if (char === " " || char === "•") return "";
  return `letter-${colors[index % colors.length]}`;
}
</script>

<template>
  <footer class="site-footer no-select flex-col">
    <!-- ====================================================================
         TOP SCROLLING MARQUEE (Color-cycled letters)
         ==================================================================== -->
    <div
      class="marquee-strip flex-center relative overflow-hidden"
      aria-hidden="true"
    >
      <div class="marquee-track flex-center">
        <!-- Track 1 -->
        <div class="marquee-content font-display flex-center">
          <span
            v-for="(char, idx) in marqueeStream"
            :key="'a-' + idx"
            :class="getLetterColorClass(idx, char)"
            class="marquee-char"
          >
            {{ char === " " ? "\u00A0" : char }}
          </span>
        </div>
        <!-- Track 2 (Clone for infinite seamless loop) -->
        <div class="marquee-content font-display flex-center">
          <span
            v-for="(char, idx) in marqueeStream"
            :key="'b-' + idx"
            :class="getLetterColorClass(idx, char)"
            class="marquee-char"
          >
            {{ char === " " ? "\u00A0" : char }}
          </span>
        </div>
      </div>
    </div>

    <!-- ====================================================================
         EDITORIAL FOOTER BODY
         ==================================================================== -->
    <div class="footer-container flex-col">
      <div class="footer-grid">
        <!-- Col 1: Brand & Thesis -->
        <div class="brand-column flex-col">
          <NuxtLink to="/" class="footer-brand flex-center">
            <img
              :src="
                isDark
                  ? '/images/brand/tdt-logo-transparent-dark.webp'
                  : '/images/brand/tdt-logo-transparent.webp'
              "
              alt="The Design Tutor"
              class="footer-logo"
            />
            <span class="brand-name font-display text-2xl"
              >The Design Tutor</span
            >
          </NuxtLink>
          <p class="brand-description font-body">
            Building web styles from scratch, figuring out what works, and
            explaining why.
          </p>
        </div>

        <!-- Col 2: Navigation Links -->
        <div class="footer-links-column flex-col">
          <span class="column-eyebrow text-micro-caps">Directory</span>
          <nav class="footer-nav flex-col" aria-label="Footer Main Navigation">
            <NuxtLink to="/" class="nav-item font-body transition-smooth"
              >Designs</NuxtLink
            >
            <NuxtLink to="/about" class="nav-item font-body transition-smooth"
              >About The Project</NuxtLink
            >
            <NuxtLink to="/contact" class="nav-item font-body transition-smooth"
              >About Me</NuxtLink
            >
          </nav>
        </div>

        <!-- Col 3: External Outlets -->
        <div class="footer-links-column flex-col">
          <span class="column-eyebrow text-micro-caps">Channels</span>
          <nav class="footer-nav flex-col" aria-label="Footer Channels">
            <a
              href="https://github.com/dev-jLagunas"
              target="_blank"
              rel="noopener noreferrer"
              class="nav-item font-body transition-smooth flex-between"
            >
              <span>GitHub</span>
              <Icon name="lucide:arrow-up-right" class="external-icon" />
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              class="nav-item font-body transition-smooth flex-between"
            >
              <span>Medium</span>
              <Icon name="lucide:arrow-up-right" class="external-icon" />
            </a>
            <a
              href="https://buymeacoffee.com"
              target="_blank"
              rel="noopener noreferrer"
              class="nav-item font-body transition-smooth flex-between"
            >
              <span>Support Project</span>
              <Icon name="lucide:coffee" class="external-icon" />
            </a>
          </nav>
        </div>
      </div>

      <!-- Bottom Edge Bar -->
      <div class="footer-edge flex-between">
        <span class="legal-text text-micro-caps">
          © 2026 THE DESIGN TUTOR • ALL RIGHTS RESERVED
        </span>
        <span class="colophon-text text-micro-caps">
          BUILT WITH NUXT + GSAP
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* ==========================================================================
   FOOTER SHELL
   ========================================================================== */
.site-footer {
  width: 100%;
  background-color: var(--shell-surface);
  border-top: 1px solid var(--shell-border);
  color: var(--shell-text);
  overflow: hidden;
}

/* ==========================================================================
   ALWAYS SCROLLING MARQUEE STRIP
   ========================================================================== */
.marquee-strip {
  width: 100%;
  padding-block: 5rem;
  border-bottom: 1px solid var(--shell-border);
  background-color: var(--shell-bg);
}

.marquee-track {
  display: flex;
  width: max-content;
  will-change: transform;
}

.marquee-content {
  display: flex;
  flex-shrink: 0;
  font-size: clamp(2rem, 5vw, 4.5rem);
  line-height: 0.9;
  letter-spacing: -0.04em;
  white-space: nowrap;
  animation: marquee-roll 28s linear infinite;
}

.marquee-char {
  display: inline-block;
  transition: transform 0.2s ease;
}

/* Alternate Colors matching main.css accents */
.letter-gold {
  color: var(--shell-accent-gold);
}

.letter-cyan {
  color: var(--shell-accent-cyan);
}

.letter-coral {
  color: var(--shell-accent-coral);
}

@keyframes marquee-roll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* ==========================================================================
   BODY CONTENT & GRID
   ========================================================================== */
.footer-container {
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
  padding: var(--space-6) var(--space-5) var(--space-5);
  gap: var(--space-6);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--space-6);
}

/* Brand Column */
.brand-column {
  gap: var(--space-3);
  max-width: 480px;
}

.footer-brand {
  display: inline-flex;
  gap: var(--space-3);
  text-decoration: none;
  color: var(--shell-text);
  width: fit-content;
}

.footer-logo {
  height: 38px;
  width: auto;
  object-fit: contain;
}

.brand-description {
  font-size: var(--text-sm);
  color: var(--shell-muted);
  line-height: 1.6;
  width: 90%;
}

/* Link Columns */
.footer-links-column {
  gap: var(--space-3);
}

.column-eyebrow {
  color: var(--shell-accent-gold);
}

.footer-nav {
  gap: var(--space-2);
}

.nav-item {
  color: var(--shell-text);
  text-decoration: none;
  font-size: var(--text-sm);
  opacity: 0.8;
  padding-block: 2px;
}

.nav-item:hover {
  opacity: 1;
  color: var(--shell-accent-cyan);
  transform: translateX(4px);
}

.external-icon {
  font-size: 0.95rem;
  color: var(--shell-muted);
}

/* ==========================================================================
   FOOTER EDGE BAR
   ========================================================================== */
.footer-edge {
  padding-top: var(--space-4);
  border-top: 1px solid var(--shell-border);
  color: var(--shell-muted);
  font-size: 0.7rem;
  flex-wrap: wrap;
  gap: var(--space-3);
}

/* ==========================================================================
   RESPONSIVE DESIGN (<= 768px)
   ========================================================================== */
@media (max-width: 768px) {
  .marquee-content {
    font-size: clamp(2rem, 9vw, 3rem);
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--space-5);
  }

  .footer-edge {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2);
  }
}
</style>
