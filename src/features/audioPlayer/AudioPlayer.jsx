// sounds
import sunSound from "../../assets/sun.mp3";
import moonSound from "../../assets/moon.mp3";
import mercurySound from "../../assets/mercury.mp3";
import venusSound from "../../assets/venus.mp3";
import earthSound from "../../assets/earth.mp3";
import marsSound from "../../assets/mars.mp3";
import jupiterSound from "../../assets/jupiter.mp3";
import saturnSound from "../../assets/saturn.mp3";
import uranusSound from "../../assets/uranus.mp3";
import neptuneSound from "../../assets/neptune.mp3";
import plutoSound from "../../assets/pluto.mp3";
// end of sounds

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPlay, setPause, setPauseSilently } from "./audioPlayerSlice";

const playlist = {
  sun: { source: sunSound, volume: 0.6 },
  moon: { source: moonSound, volume: 1 },
  mercury: { source: mercurySound, volume: 0.1 },
  venus: { source: venusSound, volume: 1 },
  earth: { source: earthSound, volume: 0.3 },
  mars: { source: marsSound, volume: 1 },
  jupiter: { source: jupiterSound, volume: 1 },
  saturn: { source: saturnSound, volume: 0.6 },
  uranus: { source: uranusSound, volume: 1 },
  neptune: { source: neptuneSound, volume: 1 },
  pluto: { source: plutoSound, volume: 1 },
};

let audio = new Audio();

export default function AudioPlayer() {
  const audioTrack = useSelector((state) => state.audioPlayer.audioTrack);
  const isPlaying = useSelector((state) => state.audioPlayer.isPlaying);
  const triggerForIsPlaying = useSelector((state) => state.audioPlayer.triggerForIsPlaying);

  const dispatch = useDispatch();

  useEffect(() => {
    // audioTrack is undefined before the first click.
    // Put code inside if statement is necessary to avoid a bug.
    if (audioTrack) {
      const mostRecentAudioSrc = playlist[audioTrack]["source"];
      dispatch(setPause())
      audio.load();
      audio = new Audio(mostRecentAudioSrc);
      audio.volume = playlist[audioTrack]["volume"]
      audio.onended = () => dispatch(setPauseSilently())
      dispatch(setPlay());
    }
  }, [audioTrack]);

  useEffect(() => {
    if (audioTrack) {
      isPlaying ? audio.play() : audio.pause();
    }
  }, [triggerForIsPlaying]);

  return;
}
