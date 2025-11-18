import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Dallas Formula Racing - Gallery",
  description: `
    Explore the Dallas Formula Racing gallery to see our journey through images capturing the excitement of 
    designing, building, and competing with formula-style vehicles. From team events to competition highlights, 
    our gallery showcases the dedication and passion of our members.
  `,
};


export default function Gallery() {
  const images = getImages();

  return <GalleryClient images={images} />;
}

function getImages() {
  const galleryPath = path.join(process.cwd(), "public/gallery");
  const imageFiles = fs.readdirSync(galleryPath);
  return imageFiles.map((file) => ({ src: `/gallery/${file}` }));
}