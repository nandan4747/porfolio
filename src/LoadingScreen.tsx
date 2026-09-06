// LoadingScreen.tsx
import Typewriter from "./Typewriter";

export default function LoadingScreen({ visible }: { visible: boolean }) {
  return (
    <div
      className={`loading-screen ${visible ? "" : "loading-screen-hidden"}`}
      aria-hidden={!visible}
    >
      <p className="loading-mark">NK</p>
      <p className="loading-status">
        <Typewriter
          text="booting portfolio environment"
          speed={35}
          startDelay={100}
        />
      </p>
      <div className="loading-bar">
        <div className="loading-bar-fill" />
      </div>
    </div>
  );
}
