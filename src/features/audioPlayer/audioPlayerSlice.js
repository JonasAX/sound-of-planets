import { createSlice } from "@reduxjs/toolkit";

export const audioPlayerSlice = createSlice({
  name: "audioPlayer",
  initialState: {
    // isPlaying: false,
    isPlaying: false,
    triggerForIsPlaying: 0,
    audioTrack: undefined,
  },
  reducers: {
    setAudioTrack: (state, action) => {
      // it will create a play/pause behaviour
      if (state.audioTrack === action.payload) {
        state.isPlaying = !state.isPlaying;
        state.triggerForIsPlaying++;
      } else {
        state.audioTrack = action.payload;
      }
    },
    setPause: (state) => {
      state.isPlaying = false;
      state.triggerForIsPlaying++;
    },
    setPlay: (state) => {
      state.isPlaying = true;
      state.triggerForIsPlaying++;
    },
    setPauseSilently: (state) => {
      state.isPlaying = false;
    },
  },
});

export const { setAudioTrack, setPause, setPlay, setPauseSilently } = audioPlayerSlice.actions;

export default audioPlayerSlice.reducer;
