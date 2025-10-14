import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
  id: number;
  title: string;
  content: string;
}

const initialState: Note[] = [];

export const createNoteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      return state.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, deleteNote } = createNoteSlice.actions;
export default createNoteSlice.reducer;
