<script setup lang="ts">
import { ref } from "vue";

const isDrawerOpen = ref(false);
const { isDark, toggleTheme } = useTheme();

function closeDrawer() {
  isDrawerOpen.value = false;
}
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

      <!-- Interactive Group: Search, Nav Links, Theme & Mobile Controls -->
      <div class="nav-utility-group flex-center">
        <!-- Desktop Search Bar (>= 768px) -->
        <div class="nav-search-desktop">
          <div class="search-input-wrapper flex-between">
            <input
              type="search"
              placeholder="Search Styles..."
              aria-label="Search design styles"
            />
            <span class="search-icon">⚲</span>
          </div>
        </div>

        <!-- Desktop Navigation Links (>= 1024px) -->
        <nav class="desktop-links" aria-label="Main Navigation">
          <NuxtLink
            to="/about"
            class="nav-link nav-link-about font-display transition-smooth"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="nav-link nav-link-contact font-display transition-smooth"
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
      <div v-if="isDrawerOpen" class="mobile-drawer flex-col">
        <div class="drawer-top flex-col">
          <nav class="drawer-nav flex-col" aria-label="Mobile Navigation">
            <NuxtLink
              to="/about"
              class="drawer-link drawer-link-about font-display"
              @click="closeDrawer"
            >
              About
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="drawer-link drawer-link-contact font-display"
              @click="closeDrawer"
            >
              Contact
            </NuxtLink>
          </nav>
        </div>

        <div class="drawer-bottom flex-col">
          <div class="drawer-search-wrapper flex-between">
            <input
              type="search"
              placeholder="Search Styles..."
              aria-label="Search design styles mobile"
              class="font-body"
            />
            <span class="search-icon-lg">⚲</span>
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
  height: 80px;
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
  gap: var(--space-4);
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

.brand-tagline {
  display: none;
  font-size: var(--text-xs);
  color: var(--shell-contrast-muted);
}

/* ==========================================================================
   INTERACTIVE UTILITY GROUP (SEARCH + LINKS + CONTROLS)
   ========================================================================== */
.nav-utility-group {
  gap: var(--space-5);
  flex-shrink: 0;
}

/* Desktop Search Bar */
.nav-search-desktop {
  display: none;
  width: 300px;
}

.search-input-wrapper {
  width: 100%;
  border-bottom: 1px solid var(--shell-contrast-border);
  padding-bottom: var(--space-1);
}

.search-input-wrapper input {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: var(--shell-text);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  letter-spacing: 0.04em;
}

.search-icon {
  font-size: var(--text-sm);
  opacity: 0.5;
  transform: rotate(-45deg);
  display: inline-block;
  margin-left: var(--space-2);
}

/* Desktop Nav Links */
.desktop-links {
  display: none;
  align-items: center;
  gap: var(--space-5);
}

.nav-link {
  color: var(--shell-contrast-text);
  text-decoration: none;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
}

.nav-link-about:hover {
  color: var(--shell-accent-gold);
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
}

.drawer-badge {
  color: var(--shell-accent-coral);
}

.drawer-nav {
  margin-top: var(--space-4);
  gap: var(--space-4);
}

.drawer-link {
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: var(--text-display-size);
  color: var(--shell-text);
}

.drawer-link-about:hover {
  color: var(--shell-accent-gold);
}

.drawer-link-contact:hover {
  color: var(--shell-accent-cyan);
}

.drawer-bottom {
  border-top: 1px solid var(--shell-border);
  padding-top: var(--space-5);
  gap: var(--space-4);
}

.drawer-search-wrapper {
  border-bottom: 1px solid var(--shell-border);
  padding-bottom: var(--space-3);
}

.drawer-search-wrapper input {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: var(--text-2xl);
  color: var(--shell-text);
}

.search-icon-lg {
  font-size: 1.5rem;
  opacity: 0.5;
  transform: rotate(-45deg);
  display: inline-block;
}

.drawer-credit {
  color: var(--shell-muted);
  font-size: var(--text-sm);
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
@media (min-width: 768px) {
  .nav-search-desktop {
    display: block;
  }

  .brand-tagline {
    display: block;
  }
}

@media (min-width: 1024px) {
  .desktop-links {
    display: flex;
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
