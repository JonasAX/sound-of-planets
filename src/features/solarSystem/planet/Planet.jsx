import { useDispatch } from "react-redux";
import { setAudioTrack } from "../../audioPlayer/audioPlayerSlice";
import "./planet.css";

export default function Planet({ planetName, img }) {
  const dispatch = useDispatch();

  const playThisPlanetAudio = () => {
    dispatch(setAudioTrack(planetName));
  };

  return (
    <div
      className="planetCard grow"
      onClick={playThisPlanetAudio}
    >
      <p className="planetTitle">{planetName}</p>
      <div className="pictureWrapper">
        <img className="picture" src={img} alt={planetName} />
      </div>
    </div>
  );
}
