"use client";
import React, { useEffect } from "react";
import { Card } from "./ui/card";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: Props) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  if (!isOpen) return null;
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 shadow-2xl z-40"
        onClick={onClose}
      />

      {/* Modal content */}
      <Card
        role="dialog"
        aria-modal="true"
        className="fixed p-4 bg-black z-50 h-80 w-72 sm:h-96 sm:w-80 md:h-[26rem] md:w-[23rem] xl:h-[27rem] xl:w-[25rem] 2xl:h-[28rem] 2xl:w-[26rem] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
        onClick={(e) => e.stopPropagation()} // Prevent close on modal click
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute text-emerald-500 text-2xl top-2 right-2 text-gray-00 hover:text-emerald-600"
        >
          ✕
        </button>
        {children}
      </Card>
    </>
  );
};

export default Modal;
