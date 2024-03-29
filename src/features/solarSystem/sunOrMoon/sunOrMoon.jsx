import sunImage from "../../../assets/sun.jpg";
import moonImage from "../../../assets/moon.jpg";
import audioAnimation from "../../../assets/audio.gif";

import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useRef } from "react";
import "animate.css";
import { useDispatch, useSelector } from "react-redux";
import { setAudioTrack } from "../../audioPlayer/audioPlayerSlice";

export default function SunOrMoon() {
  const darkModeState = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();
  const playThisPlanetAudio = (name) => {
    dispatch(setAudioTrack(name));
  };

  const whatAudioIsLoaded = useSelector(
    (state) => state.audioPlayer.audioTrack
  );

  const isItPlaying = useSelector(
    (state) => state.audioPlayer.isPlaying
  );

  const isMoonPlaying = () => {
    if (whatAudioIsLoaded === "moon" && isItPlaying) {
      return true;
    } else {
      return false;
    }
  };
  const isSunPlaying = () => {
    if (whatAudioIsLoaded === "sun" && isItPlaying) {
      return true;
    } else {
      return false;
    }
  };

  const moonRef = useRef();
  const moon = (
    <div
      ref={moonRef}
      className="planetCard grow"
      onClick={() => {
        playThisPlanetAudio("moon");
      }}
    >
      <p className="planetTitle">{"moon"}</p>
      <div className="pictureWrapper">
        <img className="picture" src={moonImage} alt="moon" />
        {isMoonPlaying() && (
          <img
            className="equalizer"
            src={audioAnimation}
            alt="Audio animation"
          />
        )}
      </div>
    </div>
  );

  const sunRef = useRef();
  const sun = (
    <div
      ref={sunRef}
      className="planetCard grow"
      onClick={() => {
        playThisPlanetAudio("sun");
      }}
    >
      <p className="planetTitle">{"sun"}</p>
      <div className="pictureWrapper">
        <img className="picture" src={sunImage} alt="sun" />
        {isSunPlaying() && (
          <img
            className="equalizer"
            src={audioAnimation}
            alt="Audio animation"
          />
        )}
      </div>
    </div>
  );

  const nodeRef = darkModeState ? moonRef : sunRef;

  // object required by react-transition-group
  const transitionClasses = {
    enter: "animate__animated",
    enterActive: "animate__fadeInTopRight",
    exit: "animate__animated",
    exitActive: "animate__fadeOutTopRight",
  };

  function displaySunOrMoon() {
    if (darkModeState) {
      return moon;
    } else {
      return sun;
    }
  }

  function goTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }

  return (
    <SwitchTransition mode={"out-in"}>
      <CSSTransition
        nodeRef={nodeRef}
        key={darkModeState}
        classNames={transitionClasses}
        timeout={1400}
        onExit={goTop}
      >
        {displaySunOrMoon()}
      </CSSTransition>
    </SwitchTransition>
  );
}
