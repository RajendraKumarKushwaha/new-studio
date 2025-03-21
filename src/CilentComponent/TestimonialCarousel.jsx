// CilentComponent/TestimonialCarousel.jsx

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function TestimonialsSlider({ testimonials }) {
  return (
    <div className="w-full py-6">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-zinc-900 rounded-2xl p-6 shadow-xl w-full h-full flex flex-col items-center text-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <p className="text-lg italic text-gray-300 mb-4">"{item.feedback}"</p>
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              <span className="text-pink-500 text-sm">{item.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
