"use client";
import React, { useRef } from "react";
import Card from "./Card";
import Modal from "./Modal";
import CreateNoteForm from "./CreateNoteForm";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { closeModal, openModal } from "@/redux/features/ModalFunctionsSlice";

function Foreground() {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const notes = useAppSelector((state) => state.createNote);
  const modalState = useAppSelector((state) => state.modalOpenState);
  const handleOnClose = () => {
    dispatch(closeModal());
  };
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap"
    >
      {notes.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
      <button
        onClick={() => dispatch(openModal())}
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-2xl font-semibold text-emerald-500 border border-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-700/20 transition-colors duration-300 ease-in-out"
      >
        <span className="">Create Note</span>
      </button>
      <Modal isOpen={modalState} onClose={handleOnClose}>
        {<CreateNoteForm />}
      </Modal>
    </div>
  );
}

export default Foreground;
