
import ServiceCard from "@/CilentComponent/ServiceCard"
import { CameraIcon, BrushIcon, VideoIcon, ImageIcon } from "lucide-react"

const services = [
  {
    title: "Wedding Photography",
    icon: <CameraIcon className="w-10 h-10 text-pink-500" />,
    description: "Capturing your big day with elegance, emotions, and unforgettable moments.",
  },
  {
    title: "Pre-Wedding Shoots",
    icon: <ImageIcon className="w-10 h-10 text-pink-500" />,
    description: "Stylized sessions that tell your love story before the wedding day.",
  },
  {
    title: "Creative Editing",
    icon: <BrushIcon className="w-10 h-10 text-pink-500" />,
    description: "Bringing life to images with premium retouching and cinematic tones.",
  },
  {
    title: "Video Shoots",
    icon: <VideoIcon className="w-10 h-10 text-pink-500" />,
    description: "Professional video coverage with storytelling edits and cinematic quality.",
  },
]

export default function ServiceSection() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-pink-500">Services</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Whether you're celebrating love, family, or milestones — we’ve got the perfect creative solution for you.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
