import { createSlice } from "@reduxjs/toolkit";

export const audioPlayerSlice = createSlice({
  name: "audioPlayer",
  initialState: {
    lastPlanetClicked: undefined,
    isPlaying: false,
    audioTrack: undefined,
  },
  reducers: {
    setAudioTrack: (state, action) => {
      // it will create a play/pause behaviour
      if ( state.audioTrack === action.payload ) {
        state.isPlaying = !state.isPlaying
      } else {
        state.audioTrack = action.payload
      }
      console.log('setAudioTrack')
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { setAudioTrack, togglePlay } = audioPlayerSlice.actions;

export default audioPlayerSlice.reducer;
