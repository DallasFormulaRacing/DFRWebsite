import fs from "fs";
import path from "path";
import Image from "next/image";
import { Metadata } from "next";
import ImageCarousel from "../components/gallery/ImageCarousel";

export const metadata: Metadata = {
  title: "Dallas Formula Racing - Gallery",
  description: `
    Explore the Dallas Formula Racing gallery to see our journey through images capturing the excitement of 
    designing, building, and competing with formula-style vehicles. From team events to competition highlights, 
    our gallery showcases the dedication and passion of our members.
  `,
};

export default function Gallery() {
  const gallery = getGallery([
    'UTAutocross',
    '2024 Competition Year'
  ]);

  return (
    <div className="px-[2rem] py-12 space-y-12 min-h-screen">
      <div className="w-full md:px-8 space-y-20">
        {gallery.map(({folderName, images}) =>  <ImageCarousel title={folderName} images={images} />)}
      </div>
    </div>
  );
}

function getGallery(order: string[]) {
  const galleryDir = path.join(process.cwd(), "public/gallery");
  const folders = fs.readdirSync(galleryDir).filter(folder => 
    fs.statSync(path.join(galleryDir, folder)).isDirectory()
  );

  // Sort folders based on custom order
  folders.sort((a, b) => order.indexOf(a) - order.indexOf(b));

  const galleryData = folders.map(folder => {
    const folderPath = path.join(galleryDir, folder);
    const imageFiles = fs.readdirSync(folderPath);
    const images = imageFiles.map(file => ({ src: `/gallery/${folder}/${file}` }));

    return { folderName: folder, images };
  });

  return galleryData;
}


