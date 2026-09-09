// Navbar.tsx
import { useEffect, useRef, useState } from "react";
import Typewriter from "./Typewriter";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function animatedScrollTo(
  container: HTMLElement,
  targetTop: number,
  duration = 700,
) {
  const startTop = container.scrollTop;
  const distance = targetTop - startTop;
  if (distance === 0) return;

  const startTime = performance.now();

  const step = (now: number) => {
    const elapsed = now - startTime;
    const t = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic

    const nextTop = startTop + distance * eased;
    const delta = nextTop - container.scrollTop;

    container.scrollTop = nextTop;

    // mimic real user input so Spline's scroll-linked trigger picks it up,
    // the same way it does during manual wheel scrolling
    window.dispatchEvent(
      new WheelEvent("wheel", { deltaY: delta, bubbles: true }),
    );

    if (t < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

export default function Navbar() {
  const [active, setActive] = useState("about");
  const clickLock = useRef(false);

  useEffect(() => {
    const container = document.querySelector(".content") as HTMLElement | null;
    if (!container) return;

    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        if (clickLock.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        root: container,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    const container = document.querySelector(".content") as HTMLElement | null;
    const target = document.getElementById(id);
    if (!container || !target) return;

    setActive(id);
    clickLock.current = true;

    animatedScrollTo(container, target.offsetTop, 700);

    window.setTimeout(() => {
      clickLock.current = false;
    }, 750);
  };

  return (
    <div className="navbar-holder">
      <nav className="navbar">
        <ul className="navbar-links">
          {links.map((l) => (
            <li key={l.id}>
              <button
                className={`navbar-link ${active === l.id ? "navbar-link-active" : ""}`}
                onClick={() => goTo(l.id)}
              >
                {l.id === active ? (
                  <Typewriter
                    text={l.label}
                    flashyMode={false}
                    flashyFontSize={15}
                    showCursor={false}
                  />
                ) : (
                  l.label
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
