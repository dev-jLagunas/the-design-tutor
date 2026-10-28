// plugins/sparkler.client.ts
export default defineNuxtPlugin(() => {
  const container = document.createElement("div");
  container.id = "global-sparkler-stage";
  container.style.position = "fixed";
  container.style.inset = "0";
  container.style.width = "100vw";
  container.style.height = "100vh";
  container.style.pointerEvents = "none";
  container.style.zIndex = "999999";
  container.style.overflow = "hidden";
  document.body.appendChild(container);

  let lastX = 0;
  let lastY = 0;
  let isThrottled = false;

  const characters = ["✦", "✧", "✦", "✴", "⋆"];
  const colors = ["#ffffff", "#fff4c2", "#ffd166", "#f5b942"];

  const spawnSparkle = (x: number, y: number) => {
    const el = document.createElement("span");
    const char = characters[Math.floor(Math.random() * characters.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const size = Math.random() * 10 + 14; // 14px–24px
    const driftX = (Math.random() - 0.5) * 60;
    const driftY = -(Math.random() * 35 + 15); // Float upward

    el.innerText = char ?? "✦";
    el.style.position = "absolute";
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.color = color ?? "#ffffff";
    el.style.fontSize = `${size}px`;
    el.style.fontWeight = "bold";
    el.style.lineHeight = "1";
    el.style.pointerEvents = "none";
    el.style.userSelect = "none";
    el.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
    el.style.transition =
      "transform 1.1s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.1s ease-out";
    el.style.opacity = "1";
    el.style.textShadow = `
      0 0 4px #ffffff,
      0 0 10px ${color},
      0 0 20px ${color},
      0 0 30px ${color}
    `;
    el.style.filter = "brightness(1.4)";

    container.appendChild(el);

    requestAnimationFrame(() => {
      el.style.transform = `translate(
        calc(-50% + ${driftX}px),
        calc(-50% + ${driftY}px)
      ) scale(0) rotate(${(Math.random() - 0.5) * 120}deg)`;
      el.style.opacity = "0";
    });

    setTimeout(() => {
      el.remove();
    }, 1100);
  };

  window.addEventListener(
    "mousemove",
    (e: MouseEvent) => {
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);

      if (dist < 5 || isThrottled) return;

      lastX = e.clientX;
      lastY = e.clientY;
      isThrottled = true;

      spawnSparkle(e.clientX, e.clientY);

      setTimeout(() => {
        isThrottled = false;
      }, 25); // Up to ~40 particles/sec
    },
    { passive: true },
  );
});
