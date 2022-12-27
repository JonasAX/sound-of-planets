import "./App.css";
import SolarSystem from "./components/solarSystem/SolarSystem";
import Topbar from "./components/topbar/Topbar";
import { useState } from "react";

export default function App() {
  // This state is for the Topbar play/pause button
  // Then it is passed to SolarSystem
  const [pause, setPause] = useState(undefined);
  return (
    <div className="app">
      <Topbar setPause={setPause} pause={pause} />
      <SolarSystem pause={pause} />
    </div>
  );
}
