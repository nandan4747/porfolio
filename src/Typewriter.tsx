// Typewriter.tsx
import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed = 45,
  startDelay = 500,
  className = "",
  showCursor = true,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  showCursor?: boolean;
}) {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTyped("");
    setDone(false);
    let i = 0;
    let interval: number;

    const startTimeout = window.setTimeout(() => {
      interval = window.setInterval(() => {
        i += 1;
        setTyped(text.slice(0, i));
        if (i >= text.length) {
          window.clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(startTimeout);
      window.clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={`typewriter ${className}`}>
      {typed}
      {showCursor && (
        <span
          className={`typewriter-cursor ${done ? "typewriter-cursor-idle" : ""}`}
        >
          |
        </span>
      )}
    </span>
  );
}
