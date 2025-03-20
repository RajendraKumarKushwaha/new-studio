"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Amit Sharma",
    feedback: "Absolutely loved their photography! They captured our wedding beautifully.",
    designation: "Wedding Client",
  },
  {
    name: "Neha Verma",
    feedback: "The pre-wedding shoot was magical. Highly recommend their services!",
    designation: "Pre-Wedding Client",
  },
  {
    name: "Rahul & Priya",
    feedback: "Amazing maternity photos! Their creativity is just mind-blowing.",
    designation: "Maternity Client",
  },
]

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto space-y-4"
      >
        <p className="text-lg text-gray-300">"{testimonials[index].feedback}"</p>
        <h4 className="text-xl font-semibold text-pink-500">{testimonials[index].name}</h4>
        <span className="text-sm text-gray-400">{testimonials[index].designation}</span>
      </motion.div>
    </div>
  )
}
