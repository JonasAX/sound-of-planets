import "./planet.css";
import { useEffect } from "react";

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
            image: "/planets/sun.jpg",
            sound: "/sounds/sample.mp3",
        },
        mercury: {
            title: "mercury",
            image: "/planets/mercury.jpg",
            sound: "/sounds/sample.mp3",
        },
        venus: {
            title: "venus",
            image: "/planets/venus.jpg",
            sound: "/sounds/sample.mp3",
        },
        mars: {
            title: "mars",
            image: "/planets/mars.png",
            sound: "/sounds/sample.mp3",
        },
        earth: {
            title: "earth",
            image: "/planets/earth.webp",
            sound: "/sounds/sample.mp3",
        },
        jupiter: {
            title: "jupiter",
            image: "/planets/jupiter.png",
            sound: "/sounds/sample.mp3",
        },
        saturn: {
            title: "saturn",
            image: "/planets/saturn.gif",
            sound: "/sounds/sample.mp3",
        },
        uranus: {
            title: "uranus",
            image: "/planets/uranus.png",
            sound: "/sounds/sample.mp3",
        },
        neptune: {
            title: "neptune",
            image: "/planets/neptune.jpg",
            sound: "/sounds/sample.mp3",
        },
    };

    const playPlanetSound = () => {
        // Stop the current audio, if it exist.
        if (planetSound) {
            planetSound.load();
        }

        // Bring the audio file to useState, so the useEffect will play it.
        // The audio file is stored outside this component in order to make it stoppable by another component.
        setPlanetSound(new Audio("/sounds/sample.mp3"));
    };

    return (
        <div className="planet">
            <p className="planetTitle">{planets[planetName]["title"]}</p>
            <img
                className="picture"
                src={planets[planetName]["image"]}
                alt={planets[planetName]["title"]}
            />
            <button onClick={() => playPlanetSound()}>Play</button>
        </div>
    );
}

export default Planet;
