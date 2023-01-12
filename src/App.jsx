import "./App.css";
import SolarSystem from "./features/solarSystem/SolarSystem";
import Topbar from "./components/topbar/Topbar";
import InvisibleAudioPlayer from "./features/audioPlayer/AudioPlayer";

export default function App() {
  return (
    <div className="app">
      <InvisibleAudioPlayer />
      <Topbar />
      <SolarSystem />
    </div>
  );
}
