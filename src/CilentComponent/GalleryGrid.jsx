"use client";

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
      <div className="">
        {data.map((category, index) => {
          const isExpanded = expanded[category.title];
          const visibleImages = isExpanded
            ? category.images
            : category.images.slice(0, 6);

          return (
            <section
              key={index}
              className="relative bg-fixed bg-cover bg-center pt-[100vh] "
              style={{
                backgroundImage: `url('${category.images[0]}')`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0   z-0" />

              {/* Content */}
              <div className="bg-black w-full">
                <div className="relative py-20  z-10 px-4 container mx-auto text-white">
                  {/* <h3 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    {category.title}
                  </h3> */}
                  <h2 className="text-4xl md:text-[44px] text-center mb-10 font-semibold">
                     <span className="text-pink-500 "> {category.title}</span>
                  </h2>

                  <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="aspect-[5/5] overflow-hidden border border-pink-500 shadow-lg hover:shadow-pink-500/50 transform hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer"
                        onClick={() => openModal(category, idx)}
                      >
                        <img
                          src={img}
                          alt={`${category.title} ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {category.images.length > 6 && (
                    <div className="mt-6 text-center">
                      <button
                        onClick={() => toggleExpand(category.title)}
                        className="bg-pink-600 hover:bg-pink-500 text-white font-semibold px-4 py-2 rounded-md transition"
                      >
                        {isExpanded ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Modal */}
      {modalOpen && currentCategory && (
        <div className="fixed inset-0 bg-black pt-30 bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-20 right-4 text-pink-400 hover:text-pink-500"
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
