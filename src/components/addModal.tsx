import appSelector from "@/lib/features/appSelector";
import {
  closeModal,
  increment,
  startAddNewNote,
} from "@/lib/features/appSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React from "react";

const Modal = () => {
  const modal = useAppSelector(appSelector.getModal);
  const dispatch = useAppDispatch();

  const handleClickAddNote = () => {
    dispatch(startAddNewNote());
    dispatch(increment());
    dispatch(closeModal());
  };
  const handleClickClose = () => dispatch(closeModal());
  return (
    <div>
      {modal && (
        <dialog className='modal modal-open '>
          <div className='modal-box bg-slate-300'>
            <h3 className='font-bold text-lg'>New Note</h3>
            <p className='py-4'>
              Press ESC key or click the button below to close
            </p>
            <div className='modal-action'>
              <form method='dialog'>
                <button className='btn' onClick={handleClickAddNote}>
                  Add
                </button>
                <button className='btn' onClick={handleClickClose}>
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Modal;
