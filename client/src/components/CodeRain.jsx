import { useEffect, useRef } from "react";

const CHARS = "01{}()<>/=;$#[]+*&|".split("");
const SIZE = 16;
const BG = "246,249,255";

// Falling code characters on a light background (decorative).
export default function CodeRain() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let cols = 0;
    let drops = [];
    let raf = 0;
    let last = 0;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = canvas.width = Math.max(1, Math.floor(rect.width));
      h = canvas.height = Math.max(1, Math.floor(rect.height));
      cols = Math.ceil(w / SIZE);
      drops = Array.from({ length: cols }, () => Math.random() * (h / SIZE));
      ctx.fillStyle = `rgb(${BG})`;
      ctx.fillRect(0, 0, w, h);
    }

    function step() {
      ctx.fillStyle = `rgba(${BG},0.14)`;
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${SIZE}px "JetBrains Mono", monospace`;
      for (let i = 0; i < cols; i++) {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        const y = drops[i] * SIZE;
        ctx.fillStyle = Math.random() > 0.975 ? "rgba(16,185,129,0.6)" : "rgba(37,99,235,0.38)";
        ctx.fillText(ch, i * SIZE, y);
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
    }

    function frame(ts) {
      raf = requestAnimationFrame(frame);
      if (ts - last < 70) return;
      last = ts;
      step();
    }

    resize();
    if (reduce) {
      for (let i = 0; i < 60; i++) step();
    } else {
      raf = requestAnimationFrame(frame);
    }
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="code-rain" aria-hidden="true" />;
}
