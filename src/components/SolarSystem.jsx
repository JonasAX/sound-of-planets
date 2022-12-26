// images
import sunImage from "../assets/sun.jpg";
import mercuryImage from "../assets/mercury.jpg";
import venusImage from "../assets/venus.jpg";
import earthImage from "../assets/earth.webp";
import marsImage from "../assets/mars.png";
import jupiterImage from "../assets/jupiter.png";
import saturnImage from "../assets/saturn.gif";
import uranusImage from "../assets/uranus.png";
import neptuneImage from "../assets/neptune.jpg";
import plutoImage from "../assets/pluto.jpg";
// sounds
import sunSound from "../assets/sun.mp3";
import mercurySound from "../assets/mercury.mp3";
import venusSound from "../assets/venus.mp3";
import earthSound from "../assets/earth.mp3";
import marsSound from "../assets/mars.mp3";
import jupiterSound from "../assets/jupiter.mp3";
import saturnSound from "../assets/saturn.mp3";
import uranusSound from "../assets/uranus.mp3";
import neptuneSound from "../assets/neptune.mp3";
import plutoSound from "../assets/pluto.mp3";

import Planet from "./planet/Planet";
import "./solarSystem.css";
import {useEffect} from 'react'

const planets = {
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

const SolarSystem = ({pause}) => {
  useEffect( ()=>{if (pause) {
    // audio.pause()
    console.log("Pause this")
  } else {
    console.log("Play this")
  }
}, [pause])

  let audio = new Audio();

  const planetClicked = (name) => {
    const isPlaying = () => !audio.paused;
    const isTheSame = () =>
      audio.getAttribute("src") === planets[name]["sound"] ? true : false;
  
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


  return (
    <div className="containerOfPlanets">
      <Planet
        planetName="sun"
        clicked={planetClicked}
        img={planets["sun"]["image"]}
      />
      <Planet
        planetName="mercury"
        clicked={planetClicked}
        img={planets["mercury"]["image"]}
      />
      <Planet
        planetName="venus"
        clicked={planetClicked}
        img={planets["venus"]["image"]}
      />
      <Planet
        planetName="mars"
        clicked={planetClicked}
        img={planets["mars"]["image"]}
      />
      <Planet
        planetName="earth"
        clicked={planetClicked}
        img={planets["earth"]["image"]}
      />
      <Planet
        planetName="jupiter"
        clicked={planetClicked}
        img={planets["jupiter"]["image"]}
      />
      <Planet
        planetName="saturn"
        clicked={planetClicked}
        img={planets["saturn"]["image"]}
      />
      <Planet
        planetName="uranus"
        clicked={planetClicked}
        img={planets["uranus"]["image"]}
      />
      <Planet
        planetName="neptune"
        clicked={planetClicked}
        img={planets["neptune"]["image"]}
      />
      <Planet
        planetName="pluto"
        clicked={planetClicked}
        img={planets["pluto"]["image"]}
      />
    </div>
  );
};

export default SolarSystem;
