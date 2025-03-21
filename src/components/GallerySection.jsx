import { GalleryGrid } from "@/CilentComponent/GalleryGrid";


const galleryData = [
  {
    title: "Wedding Photography",
    images: [
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/10.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/12.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/17.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/20.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/5.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/55.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/49.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/43.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/46.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/40.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/42.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/44.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/54.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/58.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/59.jpg"
    ],
  },
  {
    title: "Pre-Wedding Photography",
    images: [
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/7.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/8.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/9.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/51.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/52.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/48.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/49.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/50.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/4.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/19.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/20.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/16.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/17.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/18.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/11.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/13.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/12.jpg"
    ],
  },
  {
    title: "Haldi Photography",
    images: [
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/2.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/3.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/4.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/5.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/6.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/7.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/8.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/9.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/10.jpg"
    ],
  },
  {
    title: "Maternity Photography",
    images: [
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/13.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/15.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/16.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/17.jpg"
    ],
  },
  {
    title: "Kids Photography",
    images: [
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/1.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/4.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/2.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/5.jpg"
    ],
  },
  {
    title: "Fashion Photography",
    images: [
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/1.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/2.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/5.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/8.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/3.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/4.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/6.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/7.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/9.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/10.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/11.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/12.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/13.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/14.jpg",
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/15.jpg"
    ],
  },
];

export default function GallerySection() {
  return (
    <section className="w-full bg-gray-900  text-white  py-20 ">
      <div className="container px-4 text-center space-y-6 mx-auto">
        <h2 className="text-4xl md:text-[44px] font-semibold">
          Our <span className="text-pink-500 ">Gallery</span>
        </h2>
        <div className="">
          <GalleryGrid data={galleryData} />
        </div>
      </div>
    </section>
  );
}
