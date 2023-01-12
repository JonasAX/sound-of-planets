import { useDispatch } from "react-redux";
import { setAudioTrack } from "../../audioPlayer/audioPlayerSlice"
import "./planet.css";

function Planet({ planetName, img, nodeRef }) {
  const dispatch = useDispatch();

  const playThisPlanetAudio = () => {
    dispatch(setAudioTrack(planetName))
  }

  return (
    <div
      ref={nodeRef}
      className="planetCard grow"
      onClick={() => {
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
