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

import Planet from "./planet/Planet";
import "./solarSystem.css";
import { useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "animate.css";

import { useSelector } from "react-redux";

const planets = {
  moon: {
    title: "moon",
    image: moonImage,
  },
  sun: {
    title: "sun",
    image: sunImage,
  },
  mercury: {
    title: "mercury",
    image: mercuryImage,
  },
  venus: {
    title: "venus",
    image: venusImage,
  },
  earth: {
    title: "earth",
    image: earthImage,
  },
  mars: {
    title: "mars",
    image: marsImage,
  },
  jupiter: {
    title: "jupiter",
    image: jupiterImage,
  },
  saturn: {
    title: "saturn",
    image: saturnImage,
  },
  uranus: {
    title: "uranus",
    image: uranusImage,
  },
  neptune: {
    title: "neptune",
    image: neptuneImage,
  },
  pluto: {
    title: "pluto",
    image: plutoImage,
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
