import { configureStore } from "@reduxjs/toolkit";
import toggleDarkModeReducer from "../features/toggleDarkMode/toggleDarkModeSlice";
import audioPlayerReducer from "../features/audioPlayer/audioPlayerSlice";

export default configureStore({
  reducer: {
    darkMode: toggleDarkModeReducer,
    audioPlayer: audioPlayerReducer,
  },
});
