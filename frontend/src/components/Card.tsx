import React, { useState } from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { deleteNote } from "@/redux/features/NoteSlice";

interface Note {
  id: number;
  title: string;
  content: string;
}

type Props = {
  data: Note;
  reference: React.RefObject<HTMLDivElement | null>;
};

function Card({ data, reference }: Props) {
  const dispatch = useAppDispatch();
  const [detectedNote, setDetectedNote] = useState<Note | null>(null);

  const handleOpen = () => {
    setDetectedNote(data);
  };

  const handleClose = () => {
    setDetectedNote(null);
  };

  const handleDelete = () => {
    dispatch(deleteNote(data.id));
  };

  return (
    <>
      {/* Note Card */}
      <motion.div
        drag
        dragConstraints={reference}
        className="relative z-50 flex-shrink-0 w-56 h-64 bg-zinc-950/80 rounded-[45px] text-white p-5 overflow-hidden"
      >
        <p className="text-lg font-sans text-emerald-600">
          Title: {data.title}
        </p>
        <p className="text-sm leading-tight mt-5">{data.content}</p>
        <div className="footer absolute bottom-0 w-full h-[75px] left-0">
          <div className="flex items-center justify-between">
            <span className="h-8 w-10 flex justify-center items-center bg-emerald-500/20 rounded-r-full">
              <FaRegEdit className="text-emerald-500" />
            </span>
            <span
              onClick={handleDelete}
              className="h-8 w-10 flex justify-center items-center bg-red-500/20 rounded-l-full"
            >
              <FaTrashAlt className="text-red-500" />
            </span>
          </div>
          <div
            onClick={handleOpen}
            className="h-12 w-full bg-green-600/70 hover:bg-green-700/60 px-3 flex justify-center items-center transition-colors duration-200 ease-in-out cursor-pointer"
          >
            <h3 className="text-white pb-2">Open</h3>
          </div>
        </div>
      </motion.div>

      {detectedNote && (
        <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center">
          <div className="relative border border-red-600/20 bg-black text-white rounded-lg p-6 w-[90%] max-w-xl max-h-[85vh] shadow-xl">
            <h2 className="text-xl font-bold text-center mb-4 text-emerald-600">
              Title:{" "}
              <span className="text-emerald-500">{detectedNote.title}</span>
            </h2>
            {/* Scrollable content only */}
            <div className="overflow-y-auto border-2 py-2 border-emerald-600/20 custom-scroll max-h-[50vh] mb-6">
              <p className="whitespace-pre-line text-center leading-relaxed">
                {detectedNote.content}
              </p>
            </div>

            <div className="w-full flex justify-center">
              <button
                onClick={handleClose}
                className="bg-red-600/20 border border-red-600 text-white px-4 py-2 rounded hover:bg-red-600/50 transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
