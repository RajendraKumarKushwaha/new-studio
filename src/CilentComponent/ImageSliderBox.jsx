"use client"
 // ya jahan bhi tune rakha ho
import Link from "next/link"
import { ImagesSlider } from "./ImageSlider"

export default function ImageSliderBox({ images, title, link }) {
  return (
    <Link
      href={link}
      className="group block relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform h-[300px]">
      <ImagesSlider images={images} className="object-cover  object-center" />
      <div className="absolute inset-0  bg-opacity-25 z-50 flex items-center justify-center">
        <h3 className="text-xl font-semibold text-pink-500">{title}</h3>
      </div>
    </Link>
  )
}
