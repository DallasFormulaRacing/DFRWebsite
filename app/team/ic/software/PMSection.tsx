"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

export default function OfficerSection({
  image,
  image_2,
  image_3,
  name,
  name_2,
  name_3,
  role,
  role_2,
  role_3,
  quote,
  quote_2,
  quote_3,
}: {
  image?: StaticImageData | string;
  image_2?: StaticImageData | string;
  image_3?: StaticImageData | string;
  name?: string;
  name_2?: string;
  name_3?: string;
  role?: string;
  role_2?: string;
  role_3?: string;
  quote?: string;
  quote_2?: string;
  quote_3?: string;
}) {
  // State to track which div is active (null means none)
  const [activeDiv, setActiveDiv] = useState<"div1" | "div2" | "div3" | null>(
    null
  );

  type DivKey = "div1" | "div2" | "div3";

  const handleDivClick = (divKey: DivKey) => {
    // If the clicked div is already active, close it (set to null).
    // Otherwise, set it as the new active div.
    setActiveDiv((prevActive) => (prevActive === divKey ? null : divKey));
  };


  const quotes = {
    div1: quote,
    div2: quote_2,
    div3: quote_3,
  };

  return (
    <section className="min-h-[60svh] bg-wh-900 flex justify-center items-center">
      <div className="p-8 my-8 md:p-24 flex flex-col items-center justify-center gap-8 w-full">
        <div className="flex flex-row flex-wrap items-start justify-center gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleDivClick("div1")}
            className="flex flex-col items-center text-center cursor-pointer w-[300px]"
          >
            {image && (
              <Image
                width={300}
                height={300}
                src={image}
                alt="Officer headshot"
                className="rounded-lg"
              />
            )}
            <div className="text-white space-y-4 mt-4">
              <h1 className="text-4xl font-bold">{name}</h1>
              <h2 className="text-2xl font-semibold">{role}</h2>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleDivClick("div2")}
            className="flex flex-col items-center text-center cursor-pointer w-[300px]"
          >
            {image_2 && (
              <Image
                width={300}
                height={300}
                src={image_2}
                alt="Officer headshot"
                className="rounded-lg"
              />
            )}
            <div className="text-white space-y-4 mt-4">
              <h1 className="text-4xl font-bold">{name_2}</h1>
              <h2 className="text-2xl font-semibold">{role_2}</h2>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleDivClick("div3")}
            className="flex flex-col items-center text-center cursor-pointer w-[300px]"
          >
            {image_3 && (
              <Image
                width={300}
                height={300}
                src={image_3}
                alt="Officer headshot"
                className="rounded-lg"
              />
            )}
            <div className="text-white space-y-4 mt-4">
              <h1 className="text-4xl font-bold">{name_3}</h1>
              <h2 className="text-2xl font-semibold">{role_3}</h2>
            </div>
          </motion.div>
        </div>

        <div className="w-full max-w-6xl mt-4">
          <AnimatePresence mode="wait">
            {activeDiv && (
              <motion.div
                key={activeDiv}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-6xl mx-auto text-gray-800 bg-orange-100 border-l-4 border-orange-500 p-8 rounded-xl text-lg leading-relaxed overflow-hidden"
              >
                <p>{quotes[activeDiv]}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}