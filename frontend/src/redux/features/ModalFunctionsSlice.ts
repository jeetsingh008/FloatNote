import { createSlice } from "@reduxjs/toolkit";

export const modalFunctionsSlice = createSlice({
  name: "modalState",
  initialState: false,
  reducers: {
    openModal: (state: boolean) => {
      state = true;
      return state;
    },
    closeModal: (state: boolean) => {
      state = false;
      return state;
    },
  },
});

export const { openModal, closeModal } = modalFunctionsSlice.actions;
export default modalFunctionsSlice.reducer;
