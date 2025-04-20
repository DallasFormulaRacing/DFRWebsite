"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import CarsComets25 from "@/public/assets/events/Cars_Comets25.png";
import cgd25 from "@/public/assets/events/cgd25.png";

const EventsSection = () => {
  return (
    <section className="px-8 md:px-24 py-20 flex flex-col gap-16 bg-white">
      

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="shadow-lg rounded-2xl p-8 bg-gray-50"
      >
        <Image
          src={CarsComets25}
          alt="Cars and Comets Event Banner"
          className="w-full max-w-3xl mx-auto h-auto object-contain rounded-lg mb-6"
          />
        <h2 className="text-4xl font-bold text-accent-orange mb-4">
          CARS AND COMETS IS BACKKKKK!!!
        </h2>
        <p className="text-xl mb-2">
          We’re bringing together car enthusiasts, collectors, and all-around fans of stunning rides for an unforgettable evening.
        </p>
        <p className="text-xl mb-2">
          This is your chance to showcase your pride and joy, or simply come out to admire some of the most impressive vehicles around.
        </p>
        <p className="text-xl mb-4">
          Whether you’re a gearhead or just love to check out classic, custom, and modern cars, you won’t want to miss this!
        </p>
        <ul className="text-lg mb-4">
          <li><strong>📅Date:</strong> April 18, 2025</li>
          <li><strong>🕕Time:</strong> 6:00 PM – 9:00 PM</li>
          <li><strong>📍Location:</strong> UT Dallas – Lot T Overflow</li>
        </ul>
        <Link
          href="https://forms.gle/nTZ2YyHDzPNasWPP9"
          target="_blank"
          className="text-lg text-blue-600 underline"
        >
          🔗 Register Here
        </Link>
        <p className="text-xl mt-4">We can’t wait to see you there!</p>
      </motion.div>

    </section>
  );
};

export default EventsSection;
