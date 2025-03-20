'use client';

import { X } from "lucide-react";

export function FormModal({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="bg-zinc-900 text-white rounded-xl shadow-xl w-full max-w-lg mx-4 p-8 relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center text-pink-500">
          Send an Enquiry
        </h2>

        <form className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-gray-900 text-white px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-gray-900 text-white px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full bg-gray-900 text-white px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full bg-gray-900 text-white px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-xl transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
