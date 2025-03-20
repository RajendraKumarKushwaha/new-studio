import { FadeIn } from "@/CilentComponent/AnimationWrapper"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="w-full bg-black text-white px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-6">
          <FadeIn delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              We Don’t Just Click Pictures,<br />
              <span className="text-pink-500">We Capture Emotions.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-gray-300 text-lg leading-relaxed">
              Welcome to a place where your story takes center stage. Our studio goes beyond traditional photography — we breathe life into your moments, making them unforgettable.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-gray-400">
              From dreamy wedding frames to soulful maternity portraits, our lens finds magic in every detail. Backed by years of experience and a creative vision, we don’t just deliver photos — we deliver <em>memories</em>.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div>
              <a
                href="/portfolio"
                className="inline-block mt-4 bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition"
              >
                Explore Our Work
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Image with Layered Effect */}
        <FadeIn delay={0.3}>
          <div className="relative w-full h-[350px] md:h-[500px]">
            <div className="absolute top-6 left-6 w-full h-full border-4 border-pink-500 rounded-xl z-0" />
            <Image
              src="https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/hero/3.jpg"
              alt="Creative About Studio"
              fill
              className="object-cover rounded-xl relative z-10 shadow-lg"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
