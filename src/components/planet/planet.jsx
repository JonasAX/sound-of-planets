import "./planet.css";
// images
import sunImage from "../../assets/sun.jpg";
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
import mercurySound from "../../assets/mercury.mp3";
import venusSound from "../../assets/venus.mp3";
import earthSound from "../../assets/earth.mp3";
import marsSound from "../../assets/mars.mp3";
import jupiterSound from "../../assets/jupiter.mp3";
import saturnSound from "../../assets/saturn.mp3";
import uranusSound from "../../assets/uranus.mp3";
import neptuneSound from "../../assets/neptune.mp3";
import plutoSound from "../../assets/pluto.mp3";

const planets = {
  sun: {
    title: "sun",
    image: sunImage,
    sound: sunSound,
    volume: 0.7,
  },
  mercury: {
    title: "mercury",
    image: mercuryImage,
    sound: mercurySound,
    volume: 0.2,
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

function Planet({ planetName, audio }) {
  const planetClicked = () => {
    //this "if" will add a "play/pause" behaviour, instead of just "play" behaviour
    if (
      audio?.getAttribute("src") === planets[planetName]["sound"] &&
      !audio.paused
    ) {
      console.log('if')
      audio.load();
      return;
    }
    audio.load();
    audio = new Audio(planets[planetName]["sound"]);
    audio.volume = planets[planetName]["volume"];
    audio.play();
  };


  return (
    <div className="planet ">
      <p className="planetTitle">{planets[planetName]["title"]}</p>
      <img
        onClick={() => planetClicked()}
        className="picture"
        src={planets[planetName]["image"]}
        alt={planets[planetName]["title"]}
      />
    </div>
  );
}

export default Planet;
