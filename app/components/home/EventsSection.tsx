"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import kickoff2025 from "@/public/assets/events/Kickoff2025fall.jpg";
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
          src={kickoff2025}
          alt="Cars and Comets Event Banner"
          className="w-full max-w-3xl mx-auto h-auto object-contain rounded-lg mb-6"
          />
        <h2 className="text-4xl font-bold text-accent-orange mb-4">
          The 2025 Kickoff is Here!!!
        </h2>
        <p className="text-xl mb-2">
        It’s finally here. After months of late nights, tight deadlines, and relentless drive…
        
        </p>
        <p className="text-xl mb-2">
        The 2025 IC/EV Dallas Formula Racing team is ready for new members!
        </p>

        <ul className="text-lg mb-4">
          <li><strong>📅Date:</strong> September 10, 2025</li>
          <li><strong>🕕Time:</strong> 7:00 PM – 9:00 PM</li>
          <li><strong>📍Location:</strong> UT Dallas – ECSW 1.315</li>
        </ul>

        <p className="text-xl mt-4">We can’t wait to see you there!</p>
      </motion.div>

    </section>
  );
};

export default EventsSection;
