"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SponsorIcon from "./SponsorIcon";
import SponsorData from "@/data/SponsorData.json";
import { motion } from "framer-motion";

export const Sponsors = () => {
  return (
    <div className={"py-24 px-2 md:mx-40 min-h-screen"}>
      <h1
        className={
          "text-6xl font-extrabold mt-8 text-accent-orange text-center mb-12"
        }>
        Sponsors
      </h1>
      <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}>
        {SponsorData.map((_, index) => (
          <div key={index} className="flex justify-center">
            <SponsorIcon index={index} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-8 md:mt-16">
        <Link
          href="/assets/sponsors/DFR_Sponsorship_Packet2024.pdf"
          target="_blank"
          rel="noopener">
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#E87500] text-wh-0 text-lg font-semibold min-w-[10rem] rounded-md p-4 mt-8">
            Learn More
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Sponsors;
