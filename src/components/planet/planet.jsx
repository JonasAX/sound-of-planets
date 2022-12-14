import "./planet.css";

function Planet({ name }) {
    const planets = {
        jupiter: "jupiter",
    };

    return (
        <div className="planet">
            <p>{planets[name]}</p>
        </div>
    );
}

export default Planet;
