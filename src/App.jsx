import "./App.css";
import SolarSystem from "./components/solarSystem/SolarSystem";
import Topbar from "./components/topbar/Topbar";
import { useState } from "react";

export default function App() {
  // This state is for the Topbar play/pause button
  // Then it is passed to SolarSystem
  const [pause, setPause] = useState(undefined);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="app">
      <Topbar setPause={setPause} pause={pause} setDarkMode={setDarkMode} darkMode={darkMode}/>
      <SolarSystem pause={pause} darkMode={darkMode} />
    </div>
  );
}
