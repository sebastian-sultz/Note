import { RootState } from "../store";

const getCount = (state: RootState) => state.app.value;
const getAddNewNote = (state: RootState) => state.app.addNewNote
const getModal = (state:RootState) => state.app.modal
const appSelector = {
  getCount,
  getAddNewNote,
  getModal
};

export default appSelector;
