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
import { setPlay } from "./audioPlayerSlice";

const playlist = {
  sun: sunSound,
  moon: moonSound,
  mercury: mercurySound,
  venus: venusSound,
  earth: earthSound,
  mars: marsSound,
  jupiter: jupiterSound,
  saturn: saturnSound,
  uranus: uranusSound,
  neptune: neptuneSound,
  pluto: plutoSound,
};

let audio = new Audio();

export default function AudioPlayer() {
  const audioTrack = useSelector((state) => state.audioPlayer.audioTrack);
  const isPlaying = useSelector((state) => state.audioPlayer.isPlaying);
  const dispatch = useDispatch();

  function play() {
    dispatch(setPlay());
  }

  useEffect(() => {
    // audioTrack is undefined before the first click.
    // if statement is necessary to avoid a bug.
    if (audioTrack) {
      const mostRecentAudioSrc = playlist[audioTrack];
      audio.load();
      audio = new Audio(mostRecentAudioSrc);
      play();
    }
  }, [audioTrack]);

  useEffect(() => {
    if (audioTrack) {
      isPlaying ? audio.play() : audio.load();
    }
  }, [isPlaying]);

  // useEffect(() => {
  //   const userHasNotClickedYet = audioTrack === undefined;
  //   if (userHasNotClickedYet) {
  //     // do nothing
  //     return;
  //   } else {
  //     const audioAlreadyUpdated =
  //       audio.getAttribute("src") === mostRecentAudioSrc;
  //     const audioIsPlaying = !audio.paused;

  //     function play() {
  //       audio.play();
  //     }
  //     function stop() {
  //       audio.load();
  //     }
  //     function updateAudio() {
  //       stop();
  //       audio = new Audio(mostRecentAudioSrc);
  //       // audio.volume = planets[name]["volume"];
  //     }

  //     // The objective here is to make a play/pause behavior
  //     if (audioAlreadyUpdated && audioIsPlaying) {
  //       stop();
  //       console.log("Logic 1");
  //       return;
  //     } else if (audioAlreadyUpdated && !audioIsPlaying) {
  //       play();
  //       console.log("Logic 2");
  //       return;
  //     } else {
  //       updateAudio();
  //       play();
  //       console.log("Logic 3");
  //     }
  //   }
  // }, [audioTrack]);

  return;
}
