import { GalleryGrid } from "@/CilentComponent/GalleryGrid";

export default function GallerySection() {
  const galleryData = [
    {
      title: "Wedding Photography",
      backgroundImage: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/6.jpg",
      images: [
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/5.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/12.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/17.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/20.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/5.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/6.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/7.jpg",
        // more...
      ],
    },
    {
      title: "Pre-Wedding Photography",
      backgroundImage: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/7.jpg",
      images: [
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/7.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/8.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/9.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/51.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/52.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/53.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/15.jpg",
        // more...
      ],
    },
    {
      title: "Haldi Photography",
      backgroundImage: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/3.jpg",
      images: [
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/2.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/3.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/4.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/5.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/6.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/7.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/8.jpg",
      ],
    },
    {
      title: "Maternity Photography",
      backgroundImage: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/13.jpg",
      images: [
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/13.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/15.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/16.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/17.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/13.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/16.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/16.jpg",
      ],
    },
    {
      title: "Kids Photography",
      backgroundImage: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/1.jpg",
      images: [
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/1.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/4.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/2.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/1.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/2.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/4.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/1.jpg",
      ],
    },
    {
      title: "Fashion Photography",
      backgroundImage: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/1.jpg",
      images: [
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/1.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/2.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/5.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/8.jpg",
        "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/3.jpg",
      ],
    },
  ];

  return (
    <section className="w-full text-white">
      <GalleryGrid data={galleryData} />
    </section>
  );
}
