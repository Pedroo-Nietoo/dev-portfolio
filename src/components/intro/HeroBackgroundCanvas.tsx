"use client";

import { useEffect, useRef, type RefObject } from "react";

interface GridPoint {
  ox: number;
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
}

interface HeroBackgroundCanvasProps {
  sectionRef: RefObject<HTMLElement | null>;
  isLight: boolean;
}

export function HeroBackgroundCanvas({
  sectionRef,
  isLight,
}: HeroBackgroundCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    const spacing = 38;
    let points: GridPoint[] = [];

    const particleRgb = isLight ? "9, 9, 11" : "255, 255, 255";

    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      active: false,
    };

    const initGrid = () => {
      const rect = section.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / spacing) + 1;
      rows = Math.ceil(height / spacing) + 1;
      const offsetX = (width - (cols - 1) * spacing) / 2;
      const offsetY = (height - (rows - 1) * spacing) / 2;

      points = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ox = offsetX + c * spacing;
          const oy = offsetY + r * spacing;
          points.push({
            ox,
            oy,
            x: ox,
            y: oy,
            vx: 0,
            vy: 0,
            phase: (r * 0.35 + c * 0.25) % (Math.PI * 2),
          });
        }
      }
    };

    initGrid();

    const handleResize = () => {
      initGrid();
    };

    const handlePointerMove = (e: globalThis.MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (inside) {
        mouse.targetX = e.clientX - rect.left;
        mouse.targetY = e.clientY - rect.top;
        if (!mouse.active) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
          mouse.active = true;
        }
        if (spotlightRef.current) {
          spotlightRef.current.style.opacity = "1";
          spotlightRef.current.style.background = isLight
            ? `radial-gradient(560px circle at ${mouse.targetX}px ${mouse.targetY}px, rgba(${particleRgb}, 0.065), rgba(${particleRgb}, 0.018) 45%, transparent 70%)`
            : `radial-gradient(560px circle at ${mouse.targetX}px ${mouse.targetY}px, rgba(${particleRgb}, 0.085), rgba(${particleRgb}, 0.02) 45%, transparent 70%)`;
        }
      } else {
        mouse.active = false;
        if (spotlightRef.current) {
          spotlightRef.current.style.opacity = "0";
        }
      }
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = "0";
      }
    };

    let time = 0;
    const interactionRadius = 210;
    const interactionRadiusSq = interactionRadius * interactionRadius;

    const render = () => {
      time += 0.018;
      ctx.clearRect(0, 0, width, height);

      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.16;
        mouse.y += (mouse.targetY - mouse.y) * 0.16;
      } else {
        mouse.x += (-9999 - mouse.x) * 0.05;
        mouse.y += (-9999 - mouse.y) * 0.05;
      }

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        const ambientX = Math.sin(time + p.phase) * 1.1;
        const ambientY = Math.cos(time * 0.9 + p.phase) * 1.1;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < interactionRadiusSq && distSq > 0.01) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / interactionRadius) ** 2;
          const angle = Math.atan2(dy, dx);
          const push = force * 16;
          p.vx += Math.cos(angle) * push * 0.14;
          p.vy += Math.sin(angle) * push * 0.14;
        }

        p.vx += (p.ox + ambientX - p.x) * 0.09;
        p.vy += (p.oy + ambientY - p.y) * 0.09;

        p.vx *= 0.8;
        p.vy *= 0.8;

        p.x += p.vx;
        p.y += p.vy;
      }

      if (mouse.active) {
        ctx.lineWidth = 0.8;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const idx = r * cols + c;
            const p = points[idx];
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < interactionRadiusSq) {
              const proximity = 1 - Math.sqrt(distSq) / interactionRadius;
              const lineAlpha = proximity * proximity * (isLight ? 0.2 : 0.24);

              ctx.strokeStyle = `rgba(${particleRgb}, ${lineAlpha.toFixed(3)})`;

              if (c + 1 < cols) {
                const right = points[idx + 1];
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(right.x, right.y);
                ctx.stroke();
              }
              if (r + 1 < rows) {
                const bottom = points[idx + cols];
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(bottom.x, bottom.y);
                ctx.stroke();
              }
            }
          }
        }
      }

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distSq = dx * dx + dy * dy;

        let alpha =
          (isLight ? 0.12 : 0.11) + Math.sin(time * 1.4 + p.phase) * 0.03;
        let radius = 1.05;

        if (distSq < interactionRadiusSq) {
          const proximity = 1 - Math.sqrt(distSq) / interactionRadius;
          alpha += proximity * (isLight ? 0.52 : 0.62);
          radius += proximity * 1.45;
        }

        ctx.fillStyle = `rgba(${particleRgb}, ${Math.min(alpha, 0.85).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);
    animationFrameId = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isLight, sectionRef]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div
        className={
          isLight
            ? "absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,rgba(9,9,11,0.035),transparent_70%)]"
            : "absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,rgba(255,255,255,0.055),transparent_70%)]"
        }
      />

      <div
        ref={spotlightRef}
        className="absolute inset-0 opacity-0 transition-opacity duration-500"
      />

      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />

      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: isLight
            ? "repeating-linear-gradient(0deg, rgba(9,9,11,0.014) 0px, rgba(9,9,11,0.014) 1px, transparent 1px, transparent 3px)"
            : "repeating-linear-gradient(0deg, rgba(255,255,255,0.014) 0px, rgba(255,255,255,0.014) 1px, transparent 1px, transparent 3px)",
          backgroundSize: "100% 3px",
        }}
      />

      <div
        className={
          isLight
            ? "absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/70 via-transparent to-[#FAFAFA]"
            : "absolute inset-0 bg-gradient-to-b from-[#09090B]/70 via-transparent to-[#09090B]"
        }
      />
    </div>
  );
}

