import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "sendMail",
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value; // Toggles between true and false
    },
    setOpen: (state) => {
      state.value = true; // Explicitly sets value to true
    },
    setClose: (state) => {
      state.value = false; // Explicitly sets value to false
    },
  },
});

// Export the actions
export const { toggle, setOpen, setClose } = slice.actions;

// Export the reducer
export default slice.reducer;
