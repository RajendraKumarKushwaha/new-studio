"use client"
import { motion } from "framer-motion"

export default function ServiceCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white/5 hover:bg-white/10 transition rounded-xl p-6 flex flex-col items-center text-center space-y-4"
    >
      {icon}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  )
}
