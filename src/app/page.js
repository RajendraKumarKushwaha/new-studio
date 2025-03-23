
import PhotographySlider from "@/CilentComponent/HeroSlider";
import ContactSection from "@/components/Contact";
import WeddingGallery from "@/components/GallerySection";
import HeroCarousel from "@/components/HeroCarousel";
import PortfolioSection from "@/components/PortfolioSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialsSection from "@/components/TestimonialSection";
import MasonryGridIsotope from "@/GalleryComponent/masonryComponent";
import Image from "next/image";

export default function Home() {
  return (
   <>
   {/* <HeroCarousel/> */}
   <PhotographySlider/>
   <PortfolioSection/>
   {/* <WeddingGallery/> */}
   <MasonryGridIsotope/>
   <ServiceSection/>
   <TestimonialsSection/>
   <ContactSection/>
   
   
   </>
    
  )
}