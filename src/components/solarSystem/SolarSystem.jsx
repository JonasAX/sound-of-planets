// images
import sunImage from "../../assets/sun.jpg";
import moonImage from "../../assets/moon.jpg";
import mercuryImage from "../../assets/mercury.jpg";
import venusImage from "../../assets/venus.jpg";
import earthImage from "../../assets/earth.webp";
import marsImage from "../../assets/mars.png";
import jupiterImage from "../../assets/jupiter.png";
import saturnImage from "../../assets/saturn.jpg";
import uranusImage from "../../assets/uranus.png";
import neptuneImage from "../../assets/neptune.jpg";
import plutoImage from "../../assets/pluto.jpg";
// sounds
import sunSound from "../../assets/sun.mp3";
import moonSound from "../../assets/moon.mp3";
import mercurySound from "../../assets/mercury.mp3";
import venusSound from "../../assets/venus.mp3";
import earthSound from "../../assets/earth.mp3";
import marsSound from "../../assets/mars.mp3";
import jupiterSound from "../../assets/jupiter.mp3";
import saturnSound from "../../assets/saturn.mp3";
import uranusSound from "../../assets/uranus.mp3";
import neptuneSound from "../../assets/neptune.mp3";
import plutoSound from "../../assets/pluto.mp3";

import Planet from "../planet/Planet";
import "./solarSystem.css";
import { useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "animate.css";

import { useSelector } from "react-redux";

const planets = {
  moon: {
    title: "moon",
    image: moonImage,
    sound: moonSound,
    volume: 1,
  },
  sun: {
    title: "sun",
    image: sunImage,
    sound: sunSound,
    volume: 0.6,
  },
  mercury: {
    title: "mercury",
    image: mercuryImage,
    sound: mercurySound,
    volume: 0.1,
  },
  venus: {
    title: "venus",
    image: venusImage,
    sound: venusSound,
    volume: 1,
  },
  mars: {
    title: "mars",
    image: marsImage,
    sound: marsSound,
    volume: 1,
  },
  earth: {
    title: "earth",
    image: earthImage,
    sound: earthSound,
    volume: 0.3,
  },
  jupiter: {
    title: "jupiter",
    image: jupiterImage,
    sound: jupiterSound,
    volume: 1,
  },
  saturn: {
    title: "saturn",
    image: saturnImage,
    sound: saturnSound,
    volume: 0.7,
  },
  uranus: {
    title: "uranus",
    image: uranusImage,
    sound: uranusSound,
    volume: 1,
  },
  neptune: {
    title: "neptune",
    image: neptuneImage,
    sound: neptuneSound,
    volume: 1,
  },
  pluto: {
    title: "pluto",
    image: plutoImage,
    sound: plutoSound,
    volume: 1,
  },
};

const SolarSystem = () => {
  const darkModeState = useSelector((state) => state.darkMode.value);

  const moonRef = useRef(null);
  const moon = (
    <Planet
      nodeRef={moonRef}
      planetName="moon"
      img={planets["moon"]["image"]}
    />
  );
  const sunRef = useRef(null);
  const sun = (
    <Planet nodeRef={sunRef} planetName="sun" img={planets["sun"]["image"]} />
  );
  const nodeRef = darkModeState ? moonRef : sunRef;

  function displaySunOrMoon() {
    if (darkModeState) {
      return moon;
    } else {
      return sun;
    }
  }

  // object required by react-transition-group
  const transitionClasses = {
    enter: "animate__animated",
    enterActive: "animate__fadeInTopRight",
    exit: "animate__animated",
    exitActive: "animate__fadeOutTopRight",
  };

  return (
    <div className="containerOfPlanets">
      <SwitchTransition mode={"out-in"}>
        <CSSTransition
          nodeRef={nodeRef}
          key={darkModeState}
          classNames={transitionClasses}
          timeout={1400}
        >
          {displaySunOrMoon()}
        </CSSTransition>
      </SwitchTransition>

      <Planet planetName="mercury" img={planets["mercury"]["image"]} />
      <Planet planetName="venus" img={planets["venus"]["image"]} />
      <Planet planetName="mars" img={planets["mars"]["image"]} />
      <Planet planetName="earth" img={planets["earth"]["image"]} />
      <Planet planetName="jupiter" img={planets["jupiter"]["image"]} />
      <Planet planetName="saturn" img={planets["saturn"]["image"]} />
      <Planet planetName="uranus" img={planets["uranus"]["image"]} />
      <Planet planetName="neptune" img={planets["neptune"]["image"]} />
      <Planet planetName="pluto" img={planets["pluto"]["image"]} />
    </div>
  );
};

export default SolarSystem;
