import "./planet.css";

function Planet({ planetName }) {
    const planets = {
        sun: { title: "sun", image: '/planets/sun.jpg', sound: undefined },
        mercury: { title: "mercury", image: '/planets/mercury.jpg', sound: undefined },
        venus: { title: "venus", image: '/planets/venus.jpg', sound: undefined },
        mars: { title: "mars", image: '/planets/mars.png', sound: undefined },
        earth: { title: "earth", image: '/planets/earth.webp', sound: undefined },
        jupiter: { title: "jupiter", image: '/planets/jupiter.png', sound: undefined },
        saturn: { title: "saturn", image: '/planets/saturn.gif', sound: undefined },
        uranus: { title: "uranus", image: '/planets/uranus.png', sound: undefined },
        neptune: { title: "neptune", image: '/planets/neptune.jpg', sound: undefined },
    };
    console.log(planets[planetName]["image"])

    return (
        <div className="planet">
            <p className="planetTitle">{planets[planetName]["title"]}</p>
            <img className="picture" src={planets[planetName]["image"]} alt={planets[planetName]["title"]} srcset="" />
        </div>
    );
}

export default Planet;
