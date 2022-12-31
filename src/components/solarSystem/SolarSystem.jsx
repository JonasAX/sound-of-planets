// images
import sunImage from "../../assets/sun.jpg";
import moonImage from "../../assets/moon.jpg";
import mercuryImage from "../../assets/mercury.jpg";
import venusImage from "../../assets/venus.jpg";
import earthImage from "../../assets/earth.webp";
import marsImage from "../../assets/mars.png";
import jupiterImage from "../../assets/jupiter.png";
import saturnImage from "../../assets/saturn.gif";
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
import { useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "animate.css";

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

let audio = new Audio();

const planetClicked = (name) => {
  // Check if the audio is playing and if it`s the same "src"
  const isPlaying = () => !audio.paused;
  const isTheSame = () =>
    audio.getAttribute("src") === planets[name]["sound"] ? true : false;

  // The following logic will add Play/Pause behavior
  if (isTheSame() && isPlaying()) {
    audio.load();
    return;
  } else if (isTheSame() && !isPlaying()) {
    audio.play();
    return;
  } else {
    audio.load();
    audio = new Audio(planets[name]["sound"]);
    audio.volume = planets[name]["volume"];
    audio.play();
  }
};

const SolarSystem = ({ pause, darkMode, setIsPlanetClicked }) => {
  const [sunOrMoon, setSunOrMoon] = useState(
    <Planet
      planetName="sun"
      clicked={planetClicked}
      img={planets["sun"]["image"]}
    />
  );

  // The following useEffect will change the first "planet" depending on the
  // "dark mode" selection
  useEffect(() => {
    if (darkMode === "sun") {
      setSunOrMoon(
        <Planet
          planetName="sun"
          setIsPlanetClicked={setIsPlanetClicked}
          clicked={planetClicked}
          img={planets["sun"]["image"]}
        />
      );
    } else if (darkMode === "moon") {
      setSunOrMoon(
        <Planet
          planetName="moon"
          setIsPlanetClicked={setIsPlanetClicked}
          clicked={planetClicked}
          img={planets["moon"]["image"]}
        />
      );
    }
  }, [darkMode]);

  // The following effect acts when the topbar button is clicked
  // It will play/pause the audio
  useEffect(() => {
    // The button have 3 states. "undefined" is necessary because browsers triggers an error
    // when audio.pause() is executed before user interaction.
    if (pause === undefined) {
      return;
    } else if (pause === true) {
      audio.pause();
    } else if (pause === false) {
      audio.play();
    }
  }, [pause]);

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
          key={darkMode}
          classNames={transitionClasses}
          timeout={1000}
        >
          {sunOrMoon}
        </CSSTransition>
      </SwitchTransition>

      <Planet
        planetName="mercury"
        setIsPlanetClicked={setIsPlanetClicked}
        clicked={planetClicked}
        img={planets["mercury"]["image"]}
      />
      <Planet
        planetName="venus"
        setIsPlanetClicked={setIsPlanetClicked}
        clicked={planetClicked}
        img={planets["venus"]["image"]}
      />
      <Planet
        planetName="mars"
        setIsPlanetClicked={setIsPlanetClicked}
        clicked={planetClicked}
        img={planets["mars"]["image"]}
      />
      <Planet
        planetName="earth"
        setIsPlanetClicked={setIsPlanetClicked}
        clicked={planetClicked}
        img={planets["earth"]["image"]}
      />
      <Planet
        planetName="jupiter"
        setIsPlanetClicked={setIsPlanetClicked}
        clicked={planetClicked}
        img={planets["jupiter"]["image"]}
      />
      <Planet
        planetName="saturn"
        setIsPlanetClicked={setIsPlanetClicked}
        clicked={planetClicked}
        img={planets["saturn"]["image"]}
      />
      <Planet
        planetName="uranus"
        setIsPlanetClicked={setIsPlanetClicked}
        clicked={planetClicked}
        img={planets["uranus"]["image"]}
      />
      <Planet
        planetName="neptune"
        setIsPlanetClicked={setIsPlanetClicked}
        clicked={planetClicked}
        img={planets["neptune"]["image"]}
      />
      <Planet
        planetName="pluto"
        setIsPlanetClicked={setIsPlanetClicked}
        clicked={planetClicked}
        img={planets["pluto"]["image"]}
      />
    </div>
  );
};

export default SolarSystem;
