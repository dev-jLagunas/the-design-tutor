<!-- Drop into Design02Landing.vue for immediate route verification -->
<template>
  <main class="verify-canvas">
    <header class="verify-header">
      <div class="status-indicator">
        <span class="pulse-dot"></span>
        <span class="status-text">ROUTING SUCCESSFUL // CANVAS ACTIVE</span>
      </div>
      <span class="route-badge">PHASE 07 SCAFFOLD</span>
    </header>

    <section class="verify-hero">
      <div class="content-box">
        <span class="eyebrow">// DESIGN MOVEMENT 02</span>
        <h1>Movement Canvas <span class="accent">Online</span></h1>
        <p>
          This placeholder confirms dynamic routing to this style is
          operational. The page has mounted cleanly under
          <code>layout: "blank"</code> and is ready for section-by-section
          component assembly.
        </p>
      </div>
    </section>

    <div class="section-wireframes">
      <div class="wireframe-row">
        <span class="slot-idx">00</span>
        <div class="slot-info">
          <strong>SectionZero // Hero Hook</strong>
          <span>Ready for primary title, flash image, and stats</span>
        </div>
        <span class="slot-tag">UNWIRED</span>
      </div>

      <div class="wireframe-row">
        <span class="slot-idx">01</span>
        <div class="slot-info">
          <strong>SectionOne // Core Lineup</strong>
          <span>Ready for item cards and status tags</span>
        </div>
        <span class="slot-tag">UNWIRED</span>
      </div>

      <div class="wireframe-row">
        <span class="slot-idx">02</span>
        <div class="slot-info">
          <strong>SectionTwo // Atmosphere & Interaction</strong>
          <span>Ready for audio player or interactive widget</span>
        </div>
        <span class="slot-tag">UNWIRED</span>
      </div>

      <div class="wireframe-row">
        <span class="slot-idx">03</span>
        <div class="slot-info">
          <strong>SectionThree // Visual Proof</strong>
          <span>Ready for 35mm flash moments grid</span>
        </div>
        <span class="slot-tag">UNWIRED</span>
      </div>

      <div class="wireframe-row">
        <span class="slot-idx">04</span>
        <div class="slot-info">
          <strong>SectionFour // Brand Ethos & Origin</strong>
          <span>Ready for editorial story narrative</span>
        </div>
        <span class="slot-tag">UNWIRED</span>
      </div>

      <div class="wireframe-row">
        <span class="slot-idx">05</span>
        <div class="slot-info">
          <strong>SectionFive // Logistics & Protocol</strong>
          <span>Ready for walk-in policy and location essentials</span>
        </div>
        <span class="slot-tag">UNWIRED</span>
      </div>
    </div>

    <footer class="verify-footer">
      <span>END OF WIREFRAME CANVAS</span>
      <span>AWAITING COMPONENT POPULATION</span>
    </footer>
  </main>
</template>

<style scoped>
.verify-canvas {
  min-height: 100vh;
  background-color: #0d0d0d;
  color: #ededed;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace;
  padding: 3rem 2rem;
  box-sizing: border-box;
}

.verify-header {
  max-width: 960px;
  margin: 0 auto 3rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: #2e7d32;
  border-radius: 50%;
  box-shadow: 0 0 8px #2e7d32;
}

.status-text,
.route-badge {
  font-family: ui-monospace, SFMono-Regular, monospace;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: #a3a19b;
}

.route-badge {
  background: rgba(255, 255, 255, 0.06);
  padding: 4px 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.verify-hero {
  max-width: 960px;
  margin: 0 auto 3rem auto;
}

.content-box {
  background: #141414;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2.5rem;
}

.eyebrow {
  font-family: ui-monospace, SFMono-Regular, monospace;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: #e5a93c;
  display: block;
  margin-bottom: 0.75rem;
}

h1 {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 1rem;
}

h1 .accent {
  color: #e5a93c;
}

p {
  color: #9c9a95;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 640px;
}

code {
  font-family: ui-monospace, SFMono-Regular, monospace;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  padding: 2px 6px;
  font-size: 0.9em;
}

.section-wireframes {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.wireframe-row {
  display: flex;
  align-items: center;
  background: #121212;
  border: 1px dashed rgba(255, 255, 255, 0.14);
  padding: 1.25rem 1.5rem;
  gap: 1.5rem;
}

.slot-idx {
  font-family: ui-monospace, SFMono-Regular, monospace;
  font-size: 1.1rem;
  font-weight: 700;
  color: #e5a93c;
}

.slot-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.slot-info strong {
  font-size: 0.95rem;
  color: #ededed;
}

.slot-info span {
  font-size: 0.82rem;
  color: #7a7874;
}

.slot-tag {
  font-family: ui-monospace, SFMono-Regular, monospace;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: #666;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 3px 6px;
}

.verify-footer {
  max-width: 960px;
  margin: 3rem auto 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-family: ui-monospace, SFMono-Regular, monospace;
  font-size: 0.75rem;
  color: #555;
}

@media (max-width: 640px) {
  .verify-canvas {
    padding: 1.5rem 1rem;
  }
  .wireframe-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
