import "./planet.css";

function Planet({ planetName, clicked, img, setIsPlanetClicked }) {
  function firstClick() {
    setIsPlanetClicked(true)
  }

  return (
    <div className="planet grow" onClick={() => {clicked(planetName);firstClick()} }>
      <p className="planetTitle">{planetName}</p>
      <img className="picture" src={img} alt={planetName} />
    </div>
  );
}

export default Planet;
