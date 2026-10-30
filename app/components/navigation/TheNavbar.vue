<!-- components/TheNavbar.vue -->
<script setup lang="ts">
import { ref } from "vue";

const isDrawerOpen = ref(false);
const { isDark, toggleTheme } = useTheme();

function closeDrawer() {
  isDrawerOpen.value = false;
}

const channels = [
  {
    name: "GitHub",
    category: "Repo",
    icon: "lucide:github",
    url: "https://github.com/dev-jLagunas",
    boxClass: "box-coral",
  },
  {
    name: "Medium",
    category: "Writing",
    icon: "lucide:pen-tool",
    url: "https://medium.com/@dev.jlagunas",
    boxClass: "box-gold",
  },
  {
    name: "LinkedIn",
    category: "Network",
    icon: "lucide:linkedin",
    url: "https://www.linkedin.com/in/juan-lagunas/",
    boxClass: "box-cyan",
  },
  {
    name: "UX Portfolio",
    category: "Works",
    icon: "lucide:briefcase",
    url: "https://juan-lagunas.com/#/",
    boxClass: "box-gold",
  },
  {
    name: "Kids Books",
    category: "Books",
    icon: "lucide:book-marked",
    url: "https://www.amazon.co.jp/s?i=digital-text&rh=p_27%3AJoe%2BLapalo&s=relevancerank&language=en&text=Joe+Lapalo&ref=dp_byline_sr_ebooks_1",
    boxClass: "box-cyan",
  },
  {
    name: "Instagram",
    category: "Log",
    icon: "lucide:instagram",
    url: "https://www.instagram.com/j.lag_works/",
    boxClass: "box-coral",
  },
];
</script>

<template>
  <header class="navbar-wrapper no-select">
    <div class="navbar-container flex-between">
      <!-- Brand Unit: Logo + Title + Tagline -->
      <NuxtLink to="/" class="brand-link" @click="closeDrawer">
        <img
          :src="
            isDark
              ? '/images/brand/tdt-logo-transparent.png'
              : '/images/brand/tdt-logo-transparent-dark.png'
          "
          alt="The Design Tutor Logo"
          class="brand-logo"
        />
        <div class="brand-meta flex-col">
          <span class="brand-title font-display text-display-sm"
            >The Design Tutor</span
          >
          <span class="brand-tagline">
            Visual designs analyzed and explained.
          </span>
        </div>
      </NuxtLink>

      <!-- Interactive Group: Nav Links, Theme & Mobile Controls -->
      <div class="nav-utility-group flex-center">
        <!-- Desktop Navigation Links (>= 1024px) -->
        <nav class="desktop-links" aria-label="Main Navigation">
          <NuxtLink
            to="/"
            class="nav-link nav-link-home font-b-group transition-smooth"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="nav-link nav-link-about font-b-group transition-smooth"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="nav-link nav-link-contact font-b-group transition-smooth"
          >
            Contact
          </NuxtLink>
        </nav>

        <!-- Desktop Theme Toggle Button -->
        <button
          type="button"
          class="desktop-theme-btn flex-center transition-smooth"
          :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          :aria-label="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          @click="toggleTheme"
        >
          <span class="theme-icon">{{ isDark ? "☼" : "☾" }}</span>
        </button>

        <!-- Mobile Controls (< 1024px): Quick Theme Button + Hamburger -->
        <div class="mobile-controls flex-center">
          <button
            type="button"
            class="mobile-theme-btn flex-center transition-smooth"
            :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
            @click="toggleTheme"
          >
            <span>{{ isDark ? "☼" : "☾" }}</span>
          </button>

          <div class="menu-wrapper">
            <input
              type="checkbox"
              id="nav-menu-checkbox"
              v-model="isDrawerOpen"
              aria-label="Toggle navigation menu"
            />
            <label for="nav-menu-checkbox" class="toggle">
              <div class="bars" id="bar1"></div>
              <div class="bars" id="bar2"></div>
              <div class="bars" id="bar3"></div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Slide-In Sidebar -->
    <Transition name="drawer-slide">
      <div v-if="isDrawerOpen" class="mobile-drawer flex-col bg-dots">
        <div class="drawer-top flex-col">
          <nav
            class="drawer-nav drawer-link-home flex-col"
            aria-label="Mobile Navigation"
          >
            <NuxtLink
              to="/"
              class="drawer-link drawer-link-home font-b-group"
              @click="closeDrawer"
            >
              <span>Home</span>
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="drawer-link drawer-link-about font-b-group"
              @click="closeDrawer"
            >
              <span>About</span>
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="drawer-link drawer-link-contact font-b-group"
              @click="closeDrawer"
            >
              <span>Contact</span>
            </NuxtLink>
          </nav>
        </div>

        <div class="drawer-bottom flex-col">
          <!-- Public Channels & Works Compact Grid -->
          <div class="drawer-channels-section flex-col">
            <span class="drawer-section-label text-micro-caps"
              >Channels & Works</span
            >
            <div class="drawer-channels-grid">
              <a
                v-for="item in channels"
                :key="item.name"
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="channel-pill"
                :class="item.boxClass"
              >
                <div class="channel-pill-left flex-center">
                  <Icon :name="item.icon" class="channel-icon" />
                  <span class="channel-name font-body">{{ item.name }}</span>
                </div>
                <Icon name="lucide:arrow-up-right" class="channel-arrow" />
              </a>
            </div>
          </div>

          <p class="drawer-credit">Visual designs analyzed and explained.</p>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* ==========================================================================
   NAVBAR SHELL CONTAINER
   ========================================================================== */
.navbar-wrapper {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background-color: var(--shell-contrast-bg);
  color: var(--shell-contrast-text);
  border-bottom: 1px solid var(--shell-contrast-border);
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}

.navbar-container {
  width: 100%;
  max-width: 1400px;
  height: 90px;
  margin-inline: auto;
  padding-inline: var(--space-5);
  gap: var(--space-4);
}

/* ==========================================================================
   BRAND UNIT
   ========================================================================== */
.brand-link {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  text-decoration: none;
  color: var(--shell-contrast-text);
  min-width: 0;
}

.brand-logo {
  height: 44px;
  width: auto;
  object-fit: contain;
  flex-shrink: 0;
  transition: transform 0.5s cubic-bezier(0.2, 0, 0, 1);
}

.brand-link:hover .brand-logo {
  transform: rotate(12deg);
}

.brand-meta {
  gap: var(--space-1);
  min-width: 0;
}

.brand-title {
  color: var(--shell-contrast-text);
}

.brand-tagline {
  display: none;
  font-size: var(--text-xs);
  color: var(--shell-contrast-muted);
  margin-top: -2px;
  font-family: var(--font-body);
}

/* ==========================================================================
   INTERACTIVE UTILITY GROUP
   ========================================================================== */
.nav-utility-group {
  gap: var(--space-5);
  flex-shrink: 0;
}

/* Desktop Nav Links */
.desktop-links {
  display: none;
  align-items: center;
  justify-content: space-evenly;
  gap: var(--space-5);
}

.nav-link {
  color: var(--shell-contrast-text);
  text-decoration: none;
  font-size: 1rem;
}

.nav-link-about:hover {
  color: var(--shell-accent-gold);
}
.nav-link-home:hover {
  color: var(--shell-accent-coral);
}
.nav-link-contact:hover {
  color: var(--shell-accent-cyan);
}

/* Desktop Round Button */
.desktop-theme-btn {
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background: transparent;
  border: 1px solid var(--shell-contrast-border);
  color: var(--shell-contrast-text);
  cursor: pointer;
  font-size: 1.1rem;
}

.desktop-theme-btn:hover {
  background-color: var(--shell-text);
  color: var(--shell-bg);
}

/* Mobile Controls (< 1024px) */
.mobile-controls {
  gap: var(--space-3);
}

.mobile-theme-btn {
  background: transparent;
  border: none;
  color: var(--shell-contrast-text);
  font-size: 1.25rem;
  cursor: pointer;
  padding: var(--space-1);
}

.mobile-theme-btn:hover {
  transform: scale(1.1);
}

/* ==========================================================================
   ANIMATED HAMBURGER ICON
   ========================================================================== */
#nav-menu-checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition-duration: 0.5s;
}

.bars {
  width: 100%;
  height: 3px;
  background-color: var(--shell-accent-coral);
  border-radius: 4px;
}

#bar2 {
  transition-duration: 0.8s;
}

#bar1,
#bar3 {
  width: 70%;
}

#nav-menu-checkbox:checked + .toggle .bars {
  position: absolute;
  transition-duration: 0.5s;
}

#nav-menu-checkbox:checked + .toggle #bar2 {
  transform: scaleX(0);
  transition-duration: 0.5s;
}

#nav-menu-checkbox:checked + .toggle #bar1 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: 0.5s;
}

#nav-menu-checkbox:checked + .toggle #bar3 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: 0.5s;
}

#nav-menu-checkbox:checked + .toggle {
  transition-duration: 0.5s;
  transform: rotate(180deg);
}

/* ==========================================================================
   MOBILE FULL-PAGE DRAWER
   ========================================================================== */
.mobile-drawer {
  position: fixed;
  inset: 0;
  top: 80px;
  z-index: 40;
  padding: var(--space-6) var(--space-5);
  justify-content: space-between;
  background-color: var(--shell-surface);
  color: inherit;
  overflow-y: auto;
}

.drawer-nav {
  margin-top: var(--space-2);
  gap: var(--space-3);
  align-items: flex-start;
}

/* Highlight in from the left hover effect */
.drawer-link {
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-size: clamp(2.25rem, 8vw, 3.5rem);
  color: var(--shell-text);
  padding: 0.2rem 0;
  z-index: 1;
  transition:
    color 0.25s ease,
    padding 0.25s ease;
}

.drawer-link::before {
  content: "";
  position: absolute;
  inset: 0;
  width: 0;
  z-index: -1;
  transition: width 0.3s cubic-bezier(0.2, 0, 0, 1);
  border-radius: 4px;
}

.drawer-link-about::before {
  background-color: var(--shell-accent-gold);
}

.drawer-link-home::before {
  background-color: var(--shell-accent-coral);
}
.drawer-link-contact::before {
  background-color: var(--shell-accent-cyan);
}

.drawer-link:hover {
  color: #191919;
  padding-inline: var(--space-3);
}

.drawer-link:hover::before {
  width: 100%;
}

.drawer-bottom {
  border-top: 1px solid var(--shell-border);
  padding-top: var(--space-4);
  gap: var(--space-4);
}

.drawer-channels-section {
  gap: var(--space-2);
}

.drawer-section-label {
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: var(--shell-muted);
}

.drawer-channels-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.channel-pill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0.85rem;
  border-radius: 6px;
  text-decoration: none;
  transition:
    transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.2s ease;
}

.channel-pill:hover {
  transform: translateY(-2px);
  filter: brightness(1.08);
}

.channel-pill-left {
  gap: 0.45rem;
}

.channel-icon {
  font-size: 1rem;
}

.channel-name {
  font-size: 0.85rem;
  font-family: var(--font-body);
  line-height: 1;
}

.channel-arrow {
  font-size: 0.85rem;
  opacity: 0.7;
}

/* Color Tokens matching contact.vue */
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

.drawer-credit {
  color: var(--shell-muted);
  font-size: var(--text-xs);
}

/* Drawer Transitions */
.drawer-slide-enter-active {
  transition: transform 0.3s ease-out;
}

.drawer-slide-leave-active {
  transition: transform 0.2s ease-in;
}

.drawer-slide-enter-from,
.drawer-slide-leave-to {
  transform: translateX(100%);
}

.drawer-slide-enter-to,
.drawer-slide-leave-from {
  transform: translateX(0);
}

/* ==========================================================================
   BREAKPOINTS
   ========================================================================== */
@media (min-width: 425px) {
  .brand-tagline {
    display: block;
  }
}

@media (min-width: 640px) {
  .drawer-channels-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .desktop-links {
    display: flex;
  }

  .brand-tagline {
    font-size: var(--text-sm);
  }

  .brand-logo {
    height: 64px;
  }

  .desktop-theme-btn {
    display: flex;
    color: var(--shell-contrast-text);
  }

  .mobile-controls {
    display: none;
  }

  .mobile-drawer {
    display: none;
  }
}
</style>
