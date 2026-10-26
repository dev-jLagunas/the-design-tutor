<script setup lang="ts">
const isEducationMode = ref(false);

function toggleMode() {
  isEducationMode.value = !isEducationMode.value;
}
</script>

<template>
  <main class="tutor-shell flex-col">
    <!-- Test: .flex-between, .no-select -->
    <header class="tutor-header flex-between no-select">
      <div class="logo">The Design Tutor</div>

      <!-- Test: .transition-smooth -->
      <button
        class="mode-toggle-btn transition-smooth"
        :class="{ active: isEducationMode }"
        @click="toggleMode"
      >
        Mode: {{ isEducationMode ? "Educational Breakdown" : "Live Showcase" }}
      </button>
    </header>

    <div class="test-canvas flex-col">
      <h1 class="center-text">CSS Utilities Verification Sandbox</h1>
      <p class="center-text demo-desc">
        Verifying that global reset and functional utilities are loaded
        properly.
      </p>

      <div class="test-grid">
        <!-- Test: .center -->
        <div class="test-card center">
          <p><code>.center</code></p>
          <small>Placed dead-center via Grid</small>
        </div>

        <!-- Test: .flex-center -->
        <div class="test-card flex-center">
          <p><code>.flex-center</code></p>
          <small>Flex aligned & centered</small>
        </div>

        <!-- Test: .relative, .cover-absolute, .no-pointer -->
        <div class="test-card relative">
          <p>Parent is <code>.relative</code></p>
          <div class="cover-absolute flex-center test-overlay no-pointer">
            <span class="badge"
              ><code>.cover-absolute</code> + <code>.no-pointer</code></span
            >
          </div>
        </div>

        <!-- Test: .truncate -->
        <div class="test-card">
          <p><code>.truncate</code> (Single Line):</p>
          <div class="truncate-box truncate">
            This is a very long headline that will definitely get cut off with
            an ellipsis instead of wrapping to the next line.
          </div>
        </div>

        <!-- Test: .line-clamp -->
        <div class="test-card">
          <p><code>.line-clamp</code> (Multi-line):</p>
          <p class="line-clamp" style="--lines: 2">
            Line clamp allows you to limit text to a specific number of lines
            before clipping. This sentence is quite long to ensure it exceeds
            two full lines and triggers the native clamp ellipsis properly.
          </p>
        </div>

        <!-- Test: .sr-only -->
        <div class="test-card">
          <p><code>.sr-only</code> Test:</p>
          <span class="sr-only">Screen reader hidden text detected</span>
          <small
            >An invisible screen-reader label sits right here (inspect DOM to
            see it).</small
          >
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.tutor-shell {
  min-height: 100vh;
}

.tutor-header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--shell-border);
  background-color: var(--shell-surface);
}

.logo {
  font-weight: 700;
  letter-spacing: -0.02em;
}

.mode-toggle-btn {
  background: transparent;
  color: var(--shell-text);
  border: 1px solid var(--shell-border);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;

  &:hover {
    border-color: #555;
  }

  &.active {
    background: #ffffff;
    color: #000000;
  }
}

.test-canvas {
  flex: 1;
  padding: 2.5rem 1.5rem;
  gap: 1.5rem;
  max-width: 900px;
  margin-inline: auto;
  width: 100%;
}

.demo-desc {
  color: #8b949e;
  font-size: 0.95rem;
}

.test-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  margin-top: 1rem;
}

.test-card {
  background-color: var(--shell-surface);
  border: 1px solid var(--shell-border);
  border-radius: 6px;
  padding: 1.5rem;
  min-height: 140px;
  gap: 0.5rem;
}

.test-card code {
  color: var(--shell-accent);
  background: rgba(59, 130, 246, 0.1);
  padding: 0.15rem 0.35rem;
  border-radius: 3px;
  font-size: 0.85em;
}

.test-card small {
  color: #8b949e;
}

.test-overlay {
  background-color: rgba(59, 130, 246, 0.15);
  border-radius: 6px;
}

.badge {
  background: var(--shell-bg);
  border: 1px solid var(--shell-border);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.truncate-box {
  width: 100%;
  margin-top: 0.5rem;
  color: #cbd5e1;
}
</style>
