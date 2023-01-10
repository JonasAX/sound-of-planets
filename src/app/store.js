import { configureStore } from '@reduxjs/toolkit';
import toggleDarkModeReducer from "../features/toggleDarkMode/toggleDarkModeSlice";


export default configureStore({
  reducer: {
    darkMode: toggleDarkModeReducer
  },
});