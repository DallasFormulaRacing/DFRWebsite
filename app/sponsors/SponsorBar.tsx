"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SponsorIcon from "./SponsorIcon";
import SponsorData from "@/data/SponsorData.json";
import { motion } from "framer-motion";

export const Sponsors = () => {
  const sponsors = [...SponsorData, ...SponsorData];

  return (
    <div className="relative py-24 min-h-screen overflow-hidden">
      <h1 className="text-6xl font-extrabold mt-8 text-accent-orange text-center mb-12">
        Sponsors
      </h1>

      <div className="relative w-screen overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-12 w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 70,
            repeat: Infinity,
          }}
        >
          {sponsors.map((_, index) => (
            <div key={index} className="flex justify-center min-w-[200px]">
              <SponsorIcon index={index % SponsorData.length} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex items-center justify-center mt-16">
        <Link
          href="/assets/sponsors/DFR_Sponsor_Packet 2026.pdf"
          target="_blank"
          rel="noopener"
        >
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#E87500] text-wh-0 text-lg font-semibold min-w-[10rem] rounded-md p-4 mt-8"
          >
            Learn More
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Sponsors;
