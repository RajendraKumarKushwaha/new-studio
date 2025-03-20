import TestimonialCarousel from "@/CilentComponent/TestimonialCarousel";


export default function TestimonialsSection() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          What Our <span className="text-pink-500">Clients Say</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Hear from our happy clients about their experiences with us.
        </p>

        <div className="pt-10 border-1">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  )
}
