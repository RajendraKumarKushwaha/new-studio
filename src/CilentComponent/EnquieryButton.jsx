'use client';

import { useState } from "react";
import Link from "next/link";
import { FormModal } from "./FormModal";

export function EnquiryButton({ isHome }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex">
        <button
          onClick={() => setOpen(true)}
          className={`px-4 py-2 rounded-md transition
            ${isHome
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-black text-white hover:bg-gray-800"
            }`}
        >
          Enquiry Now
        </button>
      </div>

      <FormModal open={open} setOpen={setOpen} />
    </>
  );
}
