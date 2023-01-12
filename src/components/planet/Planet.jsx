import { useDispatch } from "react-redux";
import { setAudioTrack } from "../../features/audioPlayer/audioPlayerSlice";
import "./planet.css";

function Planet({ planetName, clicked, img, nodeRef }) {
  const dispatch = useDispatch();

  const playThisPlanetAudio = () => {
    dispatch(setAudioTrack(planetName))
  }

  return (
    <div
      ref={nodeRef}
      className="planetCard grow"
      onClick={() => {
        clicked(planetName);
        playThisPlanetAudio();
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
