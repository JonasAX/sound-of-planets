import "./planet.css";
import { useEffect } from "react";
// images
import sunImage from "../../assets/sun.jpg"
import mercuryImage from "../../assets/mercury.jpg"
import venusImage from "../../assets/venus.jpg"
import earthImage from "../../assets/earth.webp"
import marsImage from "../../assets/mars.png"
import jupiterImage from "../../assets/jupiter.png"
import saturnImage from "../../assets/saturn.gif"
import uranusImage from "../../assets/uranus.png"
import neptuneImage from "../../assets/neptune.jpg"
import plutoImage from "../../assets/pluto.jpg"
// sounds
import sunSound from "../../assets/sun.mp3"
import mercurySound from "../../assets/mercury.mp3"
import venusSound from "../../assets/venus.mp3"
import earthSound from "../../assets/earth.mp3"
import marsSound from "../../assets/mars.mp3"
import jupiterSound from "../../assets/jupiter.mp3"
import saturnSound from "../../assets/saturn.mp3"
import uranusSound from "../../assets/uranus.mp3"
import neptuneSound from "../../assets/neptune.mp3"
import plutoSound from "../../assets/pluto.mp3"

function Planet({ planetName, planetSound, setPlanetSound }) {
    // Play the sound inserted in planetName
    useEffect(() => {
        // By default, every useEffect runs on mount. This should not happen here
        if (planetSound) {
            planetSound.play();
        }
    }, [planetSound]);

    const planets = {
        sun: {
            title: "sun",
            image: sunImage,
            sound: sunSound,
        },
        mercury: {
            title: "mercury",
            image: mercuryImage,
            sound: mercurySound,
        },
        venus: {
            title: "venus",
            image: venusImage,
            sound: venusSound,
        },
        mars: {
            title: "mars",
            image: marsImage,
            sound: marsSound,
        },
        earth: {
            title: "earth",
            image: earthImage,
            sound: earthSound,
        },
        jupiter: {
            title: "jupiter",
            image: jupiterImage,
            sound: jupiterSound,
        },
        saturn: {
            title: "saturn",
            image: saturnImage,
            sound: saturnSound,
        },
        uranus: {
            title: "uranus",
            image: uranusImage,
            sound: uranusSound,
        },
        neptune: {
            title: "neptune",
            image: neptuneImage,
            sound: neptuneSound,
        },
        pluto: {
            title: "pluto",
            image: plutoImage,
            sound: plutoSound,
        },
    };

    const playPlanetSound = () => {
        // Stop the current audio, if it exist.
        if (planetSound) {
            planetSound.load();
        }

        // Bring the audio file to useState, so the useEffect will play it.
        // The audio file is stored outside this component in order to make it stoppable by another component.
        setPlanetSound(new Audio(planets[planetName]["sound"]));
    };

    return (
        <div className="planet grow" onClick={() => playPlanetSound()} >
            <p className="planetTitle">{planets[planetName]["title"]}</p>
            <img
                className="picture"
                src={planets[planetName]["image"]}
                alt={planets[planetName]["title"]}
            />
        </div>
    );
}

export default Planet;
