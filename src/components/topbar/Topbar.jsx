// import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./topbar.css";
import DarkMode from "../../features/toggleDarkMode/ToggleDarkMode.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setPause, setPlay } from "../../features/audioPlayer/audioPlayerSlice";

const Topbar = () => {
  const dispatch = useDispatch();
  const audioNotAvailable = useSelector(
    (state) => !state.audioPlayer.audioTrack
  );
  const isPlaying = useSelector((state) => state.audioPlayer.isPlaying);

  return (
    <header>
      <h1>Solar System Sounds</h1>
      <button
        onClick={() => {
          if (audioNotAvailable) {
            toast.warning("Please click on a planet first");
            return;
          } else {
            if (isPlaying) {
              dispatch(setPause());
            } else {
              dispatch(setPlay());
            }
          }
        }}
      >
        Play/Pause
      </button>
      <ToastContainer
        icon={false}
        position="top-center"
        autoClose={5000}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      <DarkMode />
    </header>
  );
};

export default Topbar;
