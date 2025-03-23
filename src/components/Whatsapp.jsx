"use client"
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const phoneNumber = "919179644717"; // 👈 yahan apna number daalna (country code ke saath)

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
