import "./planet.css";

function Planet({ planetName, clicked, img, setIsPlanetClicked }) {
  function firstClick() {
    setIsPlanetClicked(true);
  }

  return (
    <div
      className="planetCard grow"
      onClick={() => {
        clicked(planetName);
        firstClick();
      }}
    >
      <p className="planetTitle">{planetName}</p>
      <div className="pictureWrapper">
        <img className="picture" src={img} alt={planetName} />
      </div>
    </div>
  );
}

export default Planet;
