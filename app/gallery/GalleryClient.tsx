// app/gallery/GalleryClient.tsx
"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

type ImageProp = {
  src: string;
};

export default function GalleryClient({ images }: { images: ImageProp[] }) {
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showDownload, setShowDownload] = useState(false);

  const closeModal = () => {
    setSelectedImage(null);
    setShowDownload(false);
  };

  return (
    <div className="px-[2rem] py-12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative h-[22rem] rounded-md overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(image.src)}
            layoutId={image.src}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={image.src}
              alt={`Gallery photo ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              className="object-center"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            />
          </motion.div>
        ))}
      </div>

     <AnimatePresence>
        {selectedImage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 z-40"
              onClick={closeModal}
            />

            {/* Modal Wrapper */}
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                layoutId={selectedImage}
                className="relative w-[90vw] h-[90vh] max-w-5xl" 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDownload(!showDownload);
                }}
              >
                <Image
                  src={selectedImage}
                  alt="Expanded gallery photo"
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />

                <AnimatePresence>
                  {showDownload && (
                    <motion.a
                      href={selectedImage}
                      download={selectedImage.split('/').pop() || 'gallery-image.jpg'}
                      className="absolute left-1/2 bottom-10 !-translate-x-1/2 z-10 bg-white text-black px-4 py-2 rounded-lg font-medium shadow-lg hover:bg-gray-200 transition-colors"
                     
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Download Image
                    </motion.a>
                  )}
                </AnimatePresence>

              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}