import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export default function Gallery() {
  const images = getImages();

  return (
    <div className="px-[2rem] py-12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="relative h-[22rem] rounded-md overflow-hidden">
            <Image
              src={image.src}
              alt={`Gallery photo ${index + 1}`}
              fill
              objectFit="cover"
              className="object-center"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function getImages() {
  const galleryPath = path.join(process.cwd(), 'public/gallery');
  const imageFiles = fs.readdirSync(galleryPath);
  return imageFiles.map((file) => ({ src: `/gallery/${file}` }));
}