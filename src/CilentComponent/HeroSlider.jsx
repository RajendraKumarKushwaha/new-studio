'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroSlider.css'; // import your styles here

const slides = [
  {
    title: 'Desert',
    subtitle: 'Lonliness',
    outline: 'Folio',
    image: 'https://imgpanda.com/upload/ib/QgDfPHowhf.jpg',
    layer: 'https://imgpanda.com/upload/ib/QTBKjzDqxD.png',
  },
  {
    title: 'Desert',
    subtitle: 'Lonliness',
    outline: 'Folio',
    image: 'https://imgpanda.com/upload/ib/sq4ALbEhIS.jpg',
    layer: 'https://imgpanda.com/upload/ib/QTBKjzDqxD.png',
  },
  {
    title: 'Desert',
    subtitle: 'Lonliness',
    outline: 'Folio',
    image: 'https://imgpanda.com/upload/ib/I4qmZchHEP.jpg',
    layer: 'https://imgpanda.com/upload/ib/QTBKjzDqxD.png',
  },
];

export default function PhotographySlider() {
  return (
    <section className="creative-photography--slider theme1">
      <Swiper
        loop
        parallax
        autoplay={{ delay: 5000 }}
        effect="fade"
        autoHeight
        speed={2500}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Autoplay, Parallax, Pagination, Navigation, EffectFade]}
        className="photography-swiper--slider"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="photography-slider--item">
              <div className="photography-slider--layer" data-swiper-parallax="-200">
                <img src={slide.layer} alt="Layer" />
              </div>
              <div className="photography-slider--content">
                <div className="photography-slider--image">
                  <img src={slide.image} alt="Main" />
                  <div className="photography-slider--inner">
                    {/* <div className="photography-heading">
                      <div className="photography-item--inner">
                        <h1 className="photography-item--title">
                          {slide.title} <br />
                          <span>{slide.subtitle}</span>
                        </h1>
                        <h1 className="photography-item--title-outline">{slide.outline}</h1>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Dots */}
        <div className="creative-swiper--dots">
          <div className="swiper-pagination"></div>
        </div>

        {/* Sidebar */}
        <div className="creative-photography--sidebar">
          <ul>
            <li><a href="#">Fb</a></li>
            <li><a href="#">In</a></li>
            <li><a href="#">Tw</a></li>
          </ul>
        </div>

        {/* Navigation Arrows */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </section>
  );
}
