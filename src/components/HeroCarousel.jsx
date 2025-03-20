"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const images = [
    "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/hero/2.jpg",
    "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/hero/27.jpg",
    "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/hero/23.jpg",

]

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative h-[50vh] md:h-[100vh] w-full overflow-hidden">

            {images.map((src, i) => (
                <Image
                    key={i}
                    src={src}
                    alt={`Slide ${i + 1}`}
                    fill
                    className={` object-cover transition-opacity duration-1000 ease-in-out ${current === i ? "opacity-100" : "opacity-0"
                        }`}
                    priority={i === 0}
                />
            ))}

            {/* Optional Overlay Text */}
            {/* <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center">
                <div className="text-white px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Capturing Life’s Beautiful Moments</h1>
                    <p className="text-lg md:text-xl mb-6">Wedding • Pre-Wedding • Maternity • Fashion</p>
                    <a
                        href="/portfolio"
                        className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition"
                    >
                        View Portfolio
                    </a>
                </div>
            </div> */}
        </div>
    )
}
