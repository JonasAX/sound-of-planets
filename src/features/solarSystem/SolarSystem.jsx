import mercuryImage from "../../assets/mercury.jpg";
import venusImage from "../../assets/venus.jpg";
import earthImage from "../../assets/earth.webp";
import marsImage from "../../assets/mars.png";
import jupiterImage from "../../assets/jupiter.png";
import saturnImage from "../../assets/saturn.jpg";
import uranusImage from "../../assets/uranus.png";
import neptuneImage from "../../assets/neptune.jpg";
import plutoImage from "../../assets/pluto.jpg";

import SunOrMoon from "./sunOrMoon/sunOrMoon";
import Planet from "./planet/Planet";
import "./solarSystem.css";

export default function SolarSystem() {
  return (
    <div className="containerOfPlanets">
      <SunOrMoon />
      <Planet planetName="mercury" img={mercuryImage} />
      <Planet planetName="venus" img={venusImage} />
      <Planet planetName="mars" img={marsImage} />
      <Planet planetName="earth" img={earthImage} />
      <Planet planetName="jupiter" img={jupiterImage} />
      <Planet planetName="saturn" img={saturnImage} />
      <Planet planetName="uranus" img={uranusImage} />
      <Planet planetName="neptune" img={neptuneImage} />
      <Planet planetName="pluto" img={plutoImage} />
    </div>
  );
};
