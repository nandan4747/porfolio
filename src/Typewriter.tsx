// Typewriter.tsx
import { useEffect, useState } from "react";
import FlashyText from "./FlashyText";

export default function Typewriter({
  text,
  speed = 45,
  startDelay = 500,
  className = "",
  showCursor = true,
  flashyMode = true,
  flashyInterval = 250,
  flashyFontWeight = 700,
  flashyFontSize = 24,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  showCursor?: boolean;
  flashyMode?: boolean;
  flashyInterval?: number;
  flashyFontWeight?: number | string;
  flashyFontSize?: number | string;
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

  // Once typing finishes and flashyMode is on, hand the finished string
  // off to FlashyText instead of rendering the static typed span.
  if (done && flashyMode) {
    return (
      <span className={`typewriter ${className}`}>
        <FlashyText
          text={text}
          interval={flashyInterval}
          fontWeight={flashyFontWeight}
          fontSize={flashyFontSize}
        />
      </span>
    );
  }

  return (
    <span className={`typewriter ${className}`}>
      {typed}
      {showCursor && (
        <span
          className={`typewriter-cursor ${done ? "typewriter-cursor-idle" : ""}`}
        ></span>
      )}
    </span>
  );
}
