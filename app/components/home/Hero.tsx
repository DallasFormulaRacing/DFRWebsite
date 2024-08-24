"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DFRLogo from "@/public/DFR-Logo.png";
import SAELogo from "@/public/sae_logo.png";
import DFRSAE from "@/public/dfr-sae.png";

export default function Header() {
  return (
    <div className="relative overflow-x-hidden">
      <video
        src="/assets/videos/BrollDriving.mp4"
        className="w-full min-h-[92svh] max-h-[92svh] object-cover"
        autoPlay
        muted
        loop
      ></video>

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <h1 className="text-5xl md:text-8xl font-extrabold text-wh-75 italic break-words">
          <motion.span
            className="inline-block"
            animate={{ x: [-200, 0] }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            UTD SAE
          </motion.span>{" "}
          <motion.span
            className="font-extrabold inline-block"
            animate={{ x: [200, 0] }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Student Chapter
          </motion.span>
        </h1>

        <div className="flex flex-row justify-evenly gap-8">
          <div className="w-48 md:w-96 aspect-square relative">
            <Image
              src={DFRLogo}
              alt="Dfr logo"
              fill
              className="object-contain"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            />
          </div>
          <div className="w-48 md:w-96 aspect-square relative">
            <Image
              src={DFRSAE}
              alt="Dfr logo"
              fill
              className="object-contain"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
