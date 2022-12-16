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
            image: "./sound-of-planets/planets/sun.jpg",
            sound: "./sound-of-planets/sounds/sun.mp3",
        },
        mercury: {
            title: "mercury",
            image: "./sound-of-planets/planets/mercury.jpg",
            sound: "./sound-of-planets/sounds/mercury.mp3",
        },
        venus: {
            title: "venus",
            image: "./sound-of-planets/planets/venus.jpg",
            sound: "./sound-of-planets/sounds/venus.mp3",
        },
        mars: {
            title: "mars",
            image: "./sound-of-planets/planets/mars.png",
            sound: "./sound-of-planets/sounds/mars.mp3",
        },
        earth: {
            title: "earth",
            image: "./sound-of-planets/planets/earth.webp",
            sound: "./sound-of-planets/sounds/earth.mp3",
        },
        jupiter: {
            title: "jupiter",
            image: "./sound-of-planets/planets/jupiter.png",
            sound: "./sound-of-planets/sounds/jupiter.mp3",
        },
        saturn: {
            title: "saturn",
            image: "./sound-of-planets/planets/saturn.gif",
            sound: "./sound-of-planets/sounds/saturn.mp3",
        },
        uranus: {
            title: "uranus",
            image: "./sound-of-planets/planets/uranus.png",
            sound: "./sound-of-planets/sounds/uranus.mp3",
        },
        neptune: {
            title: "neptune",
            image: "./sound-of-planets/planets/neptune.jpg",
            sound: "./sound-of-planets/sounds/neptune.mp3",
        },
        pluto: {
            title: "pluto",
            image: "./sound-of-planets/planets/pluto.jpg",
            sound: "./sound-of-planets/sounds/pluto-real.mp3",
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
