import { createSlice } from "@reduxjs/toolkit";

export const toggleDarkModeSlice = createSlice({
  name: "darkMode",
  initialState: { value: false },
  reducers: {
    toggleDarkMode: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleDarkMode } = toggleDarkModeSlice.actions;

export default toggleDarkModeSlice.reducer;
