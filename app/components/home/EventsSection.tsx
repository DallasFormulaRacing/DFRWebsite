"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Halloween from "@/public/assets/events/HalloweenParty.png";
import cgd25 from "@/public/assets/events/cgd25.png";

const EventsSection = () => {
  return (
    <>
    <section className="px-8 md:px-24 py-20 flex flex-col gap-16 bg-white">
      

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="shadow-lg rounded-2xl p-8 bg-gray-50 flex flex-row gap-8 place-items-center"
      >
        <Image
          src={Halloween}
          alt="Cars and Comets Event Banner"
          className="w-full max-w-3xl mx-auto h-auto object-contain rounded-lg mb-6 "
          />
    <div>
        <h1 className="text-6xl font-bold text-accent-orange mb-4">
          The 2025 Halloween Party is Coming!!!
        </h1>
        <p className="text-xl mb-2">
        Rev your engines and get ready for a high-octane Halloween night like no other!         
        </p>
        <p className="text-xl mb-2">
        Join the Dallas Formula Racing crew as we trade in the race suits for costumes.
        </p>

        <ul className="text-lg mb-4">
          <li><strong>📅Date:</strong> 10/30/2025</li>
          <li><strong>🕕Time:</strong>7:00PM - 9:00pm  </li>
          <li><strong>📍Location:</strong>Shop and Courtyard ECSW </li>
        </ul>

        </div>
      </motion.div>

    </section>
    </>
  );
};

export default EventsSection;