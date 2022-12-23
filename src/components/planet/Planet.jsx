import "./planet.css";

function Planet({ planetName, clicked, img }) {
  return (
    <div className="planet" onClick={() => clicked(planetName)}>
      <p className="planetTitle">{planetName}</p>
      <img className="picture" src={img} alt={planetName} />
    </div>
  );
}

export default Planet;
