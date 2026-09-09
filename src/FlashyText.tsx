import { useEffect, useState } from "react";

interface FontOption {
  family: string;
  weight?: number | string; // per-font weight override
}

const DEFAULT_FONTS: FontOption[] = [
  { family: "Arial, sans-serif", weight: 400 },
  { family: "Hind, sans-serif", weight: 300 },
  { family: "'Courier Prime', monospace", weight: 400 },
  { family: "'Josefin Sans', sans-serif", weight: 600 },
  { family: "Lexend, sans-serif", weight: 700 },
  { family: "Lobster, cursive", weight: 400 },
];

interface FlashyTextProps {
  text: string;
  interval?: number;
  fontWeight?: number | string; // fallback weight, used if a font has no override
  fontSize?: number | string;
  fonts?: FontOption[];
  style?: React.CSSProperties;
}

export default function FlashyText({
  text,
  interval = 250,
  fontWeight = 700,
  fontSize = 24,
  fonts = DEFAULT_FONTS,
  style,
}: FlashyTextProps) {
  const [current, setCurrent] = useState<FontOption>(fonts[0]);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => {
        let next = prev;
        while (next.family === prev.family && fonts.length > 1) {
          next = fonts[Math.floor(Math.random() * fonts.length)];
        }
        return next;
      });
    }, interval);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval]);

  return (
    <span
      style={{
        fontFamily: current.family,
        fontWeight: current.weight ?? fontWeight,
        fontSize,
        display: "inline-block",
        ...style,
      }}
    >
      {text}
    </span>
  );
}
