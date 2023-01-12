import "./App.css";
import SolarSystem from "./components/solarSystem/SolarSystem";
import Topbar from "./components/topbar/Topbar";
import InvisibleAudioPlayer from "./features/audioPlayer/AudioPlayer"
import { useState } from "react";

export default function App() {
  // This state is for the Topbar play/pause button
  // Then it is passed to SolarSystem
  const [pause, setPause] = useState(undefined);
  const [isPlanetClicked, setIsPlanetClicked] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="app">
      <InvisibleAudioPlayer/>
      <Topbar
        setPause={setPause}
        pause={pause}
        isPlanetClicked={isPlanetClicked}
      />
      <SolarSystem
        pause={pause}
        setIsPlanetClicked={setIsPlanetClicked}
      />
    </div>
  );
}
