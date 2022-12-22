import "./App.css";
import Planet from "./components/planet/planet";
import { useEffect } from "react";


export default function App() {
  // Only one audio must be played. Therefore, it is placed outside of <Planet/>
  let audio = new Audio();

  return (
    <div className="app">
      <h1>Solar System Sounds</h1>
      <div className="planetContainer">
        <Planet planetName="sun" audio={audio} />
        <Planet planetName="mercury" audio={audio} />
        <Planet planetName="venus" audio={audio} />
        <Planet planetName="mars" audio={audio} />
        <Planet planetName="earth" audio={audio} />
        <Planet planetName="jupiter" audio={audio} />
        <Planet planetName="saturn" audio={audio} />
        <Planet planetName="uranus" audio={audio} />
        <Planet planetName="neptune" audio={audio} />
        <Planet planetName="pluto" audio={audio} />
      </div>
    </div>
  );
}
