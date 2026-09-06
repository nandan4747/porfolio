// RobotBG.tsx
import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

export default function RobotBG({ onReady }: { onReady?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    let cancelled = false;

    const spline = new Application(canvasRef.current);

    spline
      .load("https://prod.spline.design/aokt3kF7qZgc4Sjx/scene.splinecode")
      .then(() => {
        if (!cancelled) onReady?.();
      })
      .catch((err) => {
        console.error("Spline scene failed to load:", err);
        if (!cancelled) onReady?.(); // don't strand the user on a loader forever
      });

    return () => {
      cancelled = true;
      spline.dispose();
    };
  }, [onReady]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
