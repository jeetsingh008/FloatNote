import { configureStore } from "@reduxjs/toolkit";
import createNoteSlice from "./features/NoteSlice";
import modalFunctionsSlice from "./features/ModalFunctionsSlice";

export const store = configureStore({
  reducer: {
    createNote: createNoteSlice,
    modalOpenState: modalFunctionsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
