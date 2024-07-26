import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ICounterState } from "./appTypes";

// Define the initial state using that type
const initialState: ICounterState = {
  value: 0,
  addNewNote: false,
  modal: false,
};

export const appSlice = createSlice({
  name: "appSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    startAddNewNote: (state) => {
      state.addNewNote = true;
    },
    finishAddNewNote: (state) => {
      state.addNewNote = initialState.addNewNote;
    },
    openModal: (state) => {
      state.modal = true;
    },
    closeModal: (state) => {
      state.modal = initialState.modal;
    },
    editModal: (state) => {},
    deleteModal: (state) => {},
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  startAddNewNote,
  finishAddNewNote,
  openModal,
  closeModal,
} = appSlice.actions;
export default appSlice.reducer;
// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.app.value
