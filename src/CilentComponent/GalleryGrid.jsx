'use client';

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function GalleryGrid({ data }) {
  const [expanded, setExpanded] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleExpand = (title) => {
    setExpanded((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const openModal = (category, index) => {
    setCurrentCategory(category);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentCategory(null);
    setCurrentIndex(0);
  };

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? currentCategory.images.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === currentCategory.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="space-y-16">
        {data.map((category, index) => {
          const isExpanded = expanded[category.title];
          const visibleImages = isExpanded
            ? category.images
            : category.images.slice(0, 5);

          return (
            <div key={index}>
              <h3 className="text-2xl text-center font-semibold mb-6 text-pink-400">
                {category.title}
              </h3>
              <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {visibleImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${category.title} ${idx + 1}`}
                    className="w-full rounded-lg border border-pink-500 shadow-lg hover:shadow-pink-500/50 transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                    onClick={() => openModal(category, idx)}
                  />
                ))}
              </div>
              {category.images.length > 5 && (
                <div className="mt-4 text-center">
                  <button
                    onClick={() => toggleExpand(category.title)}
                    className="bg-pink-600 hover:bg-pink-500 cursor-pointer text-white font-semibold px-4 py-2 rounded-md transition"
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Fullscreen Modal */}
      {modalOpen && currentCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center top-18 z-50">
          <button
            className="absolute top-4 right-4 text-pink-400 hover:text-pink-500"
            onClick={closeModal}
          >
            <X size={30} />
          </button>
          <button
            className="absolute left-4 text-pink-400 hover:text-pink-500"
            onClick={showPrev}
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={currentCategory.images[currentIndex]}
            alt="Full"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
          />
          <button
            className="absolute right-4 text-pink-400 hover:text-pink-500"
            onClick={showNext}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
}
