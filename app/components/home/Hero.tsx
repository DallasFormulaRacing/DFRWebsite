"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="relative overflow-x-hidden">
      <video
        src="/assets/videos/ParkingLot.mov"
        className="w-full h-[92svh] object-cover"
        autoPlay
        muted
        loop
      ></video>

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h1 className="text-5xl md:text-8xl font-bold text-wh-75 italic">
          <motion.span
            className="text-green-600 inline-block"
            animate={{ x: [-200, 0] }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            DALLAS FORMULA
          </motion.span>{" "}
          <motion.span
            className="text-orange-600 inline-block"
            animate={{ x: [200, 0] }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            RACING
          </motion.span>
        </h1>
      </motion.div>
    </div>
  );
}
