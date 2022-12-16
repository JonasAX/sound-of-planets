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
            sound: "/sounds/sun.mp3",
        },
        mercury: {
            title: "mercury",
            image: "/planets/mercury.jpg",
            sound: "/sounds/mercury.mp3",
        },
        venus: {
            title: "venus",
            image: "/planets/venus.jpg",
            sound: "/sounds/venus.mp3",
        },
        mars: {
            title: "mars",
            image: "/planets/mars.png",
            sound: "/sounds/mars.mp3",
        },
        earth: {
            title: "earth",
            image: "/planets/earth.webp",
            sound: "/sounds/earth.mp3",
        },
        jupiter: {
            title: "jupiter",
            image: "/planets/jupiter.png",
            sound: "/sounds/jupiter.mp3",
        },
        saturn: {
            title: "saturn",
            image: "/planets/saturn.gif",
            sound: "/sounds/saturn.mp3",
        },
        uranus: {
            title: "uranus",
            image: "/planets/uranus.png",
            sound: "/sounds/uranus.mp3",
        },
        neptune: {
            title: "neptune",
            image: "/planets/neptune.jpg",
            sound: "/sounds/neptune.mp3",
        },
        pluto: {
            title: "pluto",
            image: "/planets/pluto.jpg",
            sound: "/sounds/pluto-real.mp3",
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
        <div className="planet" onClick={() => playPlanetSound()} >
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
