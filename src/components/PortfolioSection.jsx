import { FadeIn } from "@/CilentComponent/AnimationWrapper"
import ImageSliderBox from "@/CilentComponent/ImageSliderBox"
import Image from "next/image"
import Link from "next/link"

const portfolioItems = [
  {
    title: "Wedding Moments",
    images: [
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/hero/9.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/hero/10.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/hero/11.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/hero/12.jpg",
    ],
    link: "/gallery",
  },
  {
    title: "Pre-Wedding Romance",
    images: [
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/7.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/8.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/hero/17.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/hero/18.jpg",
    ],
    link: "/gallery/",
  },
  {
    title: "Haldi Shoot",
    images: [
      'https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/2.jpg',
      'https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/3.jpg',
      'https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/4.jpg',
      'https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/5.jpg',
    ],
    link: "/gallery",
  },
  {
    title: "Maternity Photography",
    images: [
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/13.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/15.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/16.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/17.jpg",
    ],
    link: "/gallery",
  },
  // aur bhi items...
]


export default function PortfolioSection() {
  return (
    <section className="bg-black text-white   py-20 ">
      <div className="container px-4 mx-auto text-center space-y-6">
        <FadeIn delay={0}>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-[44px] font-semibold">
              Our <span className="text-pink-500 ">Portfolio</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Discover how we turn your special moments into timeless frames. Each project is a story, and we’re here to tell it beautifully.
            </p>
          </div>
        </FadeIn>

        <div className="grid bg-black sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
          {portfolioItems.map((item, index) => (
            <FadeIn delay={index * 0.2} key={item.title}>
              <ImageSliderBox
                images={item.images}
                title={item.title}
                link={item.link}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
