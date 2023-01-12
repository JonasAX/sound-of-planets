import { createSlice } from "@reduxjs/toolkit";

export const audioPlayerSlice = createSlice({
  name: "audioPlayer",
  initialState: {
    isPlaying: false,
    audioTrack: undefined,
  },
  reducers: {
    setAudioTrack: (state, action) => {
      // it will create a play/pause behaviour
      if (state.audioTrack === action.payload) {
        state.isPlaying = !state.isPlaying;
      } else {
        state.audioTrack = action.payload;
      }
    },
    setPause: (state) => {state.isPlaying = false},
    setPlay: (state) => {state.isPlaying = true}
  },
});

export const { setAudioTrack, setPause, setPlay } = audioPlayerSlice.actions;

export default audioPlayerSlice.reducer;
