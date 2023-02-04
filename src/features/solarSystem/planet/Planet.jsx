import audioAnimation from "../../../assets/audio.gif";

import { useDispatch, useSelector } from "react-redux";
import { setAudioTrack } from "../../audioPlayer/audioPlayerSlice";
import "./planet.css";

export default function Planet({ planetName, img }) {
  const dispatch = useDispatch();

  const playThisPlanetAudio = () => {
    dispatch(setAudioTrack(planetName));
  };

  const whatAudioIsLoaded = useSelector(
    (state) => state.audioPlayer.audioTrack
  );

  const isItPlaying = useSelector(
    (state) => state.audioPlayer.isPlaying
  );

  const isThisAudioLoadedAndPlaying = () => {
    if (whatAudioIsLoaded === planetName && isItPlaying) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="planetCard grow" onClick={playThisPlanetAudio}>
      <p className="planetTitle">{planetName}</p>
      <div className="pictureWrapper">
        <img className="picture" src={img} alt={planetName} />
        {isThisAudioLoadedAndPlaying() && (
          <img
            className="equalizer"
            src={audioAnimation}
            alt="Audio animation"
          />
        )}
      </div>
    </div>
  );
}
