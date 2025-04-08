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
          src={cgd25}
          alt="Comets Giving Day 2025 Banner"
          className="w-full max-w-3xl mx-auto h-auto object-contain rounded-lg mb-6"
          />
        <h2 className="text-4xl font-bold text-accent-orange mb-4">
          Comets Giving Day 2025 💚🧡
        </h2>
        <p className="text-xl mb-4">
          For 8 years, UT Dallas alumni have run Comets Giving Day to support countless organizations on campus. Mark your calendars for <strong>April 9–10, 2025</strong> and stay tuned for Swift challenges in our stories!
        </p>
        <p className="text-xl mb-4">
          ✨ Use <strong>#COMETogetherUTD</strong> to share why you’re supporting Dallas Formula Racing, and you could win $50 in bonus funds!
        </p>
        <p className="text-xl mb-4">
          ✨ Use <strong>#InMyGivingEra</strong> to tell us why you’re joining our giving era in 2025, and you might just win another $50!
        </p>
        <p className="text-xl mb-4">
          Let’s show them that DFR is never going out of style. Every gift helps us build, race, and compete at full speed! So don’t blame me if you miss out on this chance to support the team! 💨🏁
        </p>
        <Link
          href="https://givingday.utdallas.edu/amb/dfr"
          target="_blank"
          className="text-lg text-blue-600 underline"
        >
          🔗 Support Us on Giving Day
        </Link>
        <p className="text-xl mt-4">
          (P.S. This year‘s Comets Giving Day is Taylor Swift themed 🐍)
        </p>
      </motion.div>
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
