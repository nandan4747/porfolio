// ScrollDownButton.tsx
export default function ScrollDownButton({
  targetId,
}: {
  targetId: string | undefined;
}) {
  const handleClick = () => {
    const container = document.querySelector(".content") as HTMLElement | null;
    const target = document.getElementById(targetId!);
    if (!container || !target) return;
    container.scrollTo({ top: target.offsetTop, behavior: "smooth" });
  };

  return (
    <button
      className="scroll-down-btn"
      onClick={handleClick}
      aria-label={`Scroll to ${targetId}`}
    >
      <span>Scroll down</span>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M2 5L7 10L12 5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
