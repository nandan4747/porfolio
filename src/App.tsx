// App.tsx
import { useState } from "react";
import Portfolio from "./Portfolio";
import RobotBG from "./RobotBG";
import Navbar from "./Navbar";
import LoadingScreen from "./LoadingScreen";

export default function App() {
  const [ready, setReady] = useState(false);

  return (
    <div className="view">
      <div className="robo-bg">
        <RobotBG onReady={() => setReady(true)} />
      </div>

      <LoadingScreen visible={!ready} />

      <div className={`app-shell ${ready ? "app-shell-ready" : ""}`}>
        <Navbar />
        <div className="content">
          <Portfolio />
        </div>
      </div>
    </div>
  );
}
