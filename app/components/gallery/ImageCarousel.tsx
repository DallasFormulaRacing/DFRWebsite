import React from "react";
import Image from "next/image"; // or your preferred image component
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ImageCarousel = ({
  title,
  images,
}: {
  title: string;
  images: {src: string}[];
}) => {
  return (
    <div className="w-full space-y-8">
      <h2 className="text-5xl font-bold text-accent-orange">{title}</h2>
      <div className="px-6">
      <Carousel>
        <CarouselContent className="">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="relative h-[32rem] md:basis-1/3">
              <Image
                src={image.src}
                alt={`Gallery photo ${index + 1}`}
                fill
                objectFit="cover"
                className="object-center px-4"
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
