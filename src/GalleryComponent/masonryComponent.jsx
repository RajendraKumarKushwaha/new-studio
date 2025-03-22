'use client'

import { useEffect, useRef } from 'react'
import imagesLoaded from 'imagesloaded'

const imageUrls = [
  "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/5.jpg",
  "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/12.jpg",
  "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/17.jpg",
  "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/20.jpg",
  "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/5.jpg",
  "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/6.jpg",
  "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/7.jpg",
  "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/7.jpg",
  "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/8.jpg",
  "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/9.jpg",
  "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/51.jpg",
  "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/52.jpg",
  "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/53.jpg",
  "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/15.jpg",
]

export default function MasonryGridIsotope() {
  const gridRef = useRef(null)

  useEffect(() => {
    const loadIsotope = async () => {
      const Isotope = (await import('isotope-layout')).default
      const iso = new Isotope(gridRef.current, {
        itemSelector: '.grid-item',
        masonry: {
          columnWidth: '.grid-sizer',
          gutter: 16,
        },
      })

      imagesLoaded(gridRef.current, () => {
        iso.layout()
      })
    }

    loadIsotope()
  }, [])

  return (
    <div className="w-full bg-black py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-[44px] font-semibold text-white">
          Our <span className="text-pink-500">Gallery</span>
        </h2>
        <p className="text-gray-400 mt-2 text-lg">A glimpse into our creative world</p>
      </div>

      {/* Gallery */}
      <div className="container px-4 mx-auto">
        <div className="grid relative" ref={gridRef}>
          {/* Grid sizer */}
          <div className="grid-sizer hidden lg:block w-[calc(33.333%-10.66px)]"></div>
          <div className="grid-sizer hidden md:block lg:hidden w-[calc(50%-8px)]"></div>
          <div className="grid-sizer block md:hidden w-full"></div>

          {imageUrls.map((url, i) => (
            <div
              key={i}
              className="grid-item w-[calc(33.333%-10.66px)] lg:w-[calc(33.333%-10.66px)] md:w-[calc(50%-8px)] w-full mb-4 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              <img
                src={url}
                alt={`Gallery Image ${i + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
