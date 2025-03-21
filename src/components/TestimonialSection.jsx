// components/testimonials/Testimonials.js

import TestimonialsSlider from "@/CilentComponent/TestimonialCarousel";

const testimonials = [
  {
    name: "Ravi Sharma",
    role: "Founder, Memories World Studio",
    feedback: "TechYard Web Solutions ne humara studio website itna beautiful banaya!",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Aman Gupta",
    role: "CEO, EVFix.in",
    feedback: "Inka design or SEO dono top-notch hai. Within weeks, traffic double ho gaya!",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Neha Verma",
    role: "Owner, HardwareMetals",
    feedback: "Catalog website perfect bana. clients ko dikhane me classy hai.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Ravi Sharma",
    role: "Founder, Memories World Studio",
    feedback: "TechYard Web Solutions ne humara studio website itna beautiful banaya!",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Aman Gupta",
    role: "CEO, EVFix.in",
    feedback: "Inka design or SEO dono top-notch hai. Within weeks, traffic double ho gaya!",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Neha Verma",
    role: "Owner, HardwareMetals",
    feedback: "Catalog website perfect bana. clients ko dikhane me classy hai.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-900 text-white text-center py-20">
      <div className="space-y-6">
        <h2 className="text-4xl md:text-[44px] font-semibold">
          Our <span className="text-pink-500 ">Clients</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto pb-6">
          Real feedback from real partners we've worked with
        </p>
      </div>
     
      <TestimonialsSlider testimonials={testimonials} />
    </div>
   
  );
}
