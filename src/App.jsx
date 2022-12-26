import "./App.css";
import SolarSystem from "./components/SolarSystem";
import Topbar from "./components/topbar/Topbar";
import { useState } from "react";

export default function App() {
  const [pause, setPause] = useState(false);
  return (
    <div className="app">
      <Topbar setPause={setPause} pause={pause} />
      <SolarSystem pause={pause} />
    </div>
  );
}
