import "./App.css";
import SolarSystem from "./components/SolarSystem";
import Topbar from "./components/topbar/Topbar";

export default function App() {
  return (
    <div className="app">
      <Topbar />
      <SolarSystem />
    </div>
  );
}
