"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Impact from "@/public/assets/events/Impact.png";
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
            src={Impact}
            alt=""
            className="w-full max-w-3xl mx-auto h-auto object-contain rounded-lg mb-6"
          />
          <div>
            <h1 className="text-6xl font-bold text-accent-orange mb-4">
              Impact UTD 2025 Is Live!!!!
            </h1>
            <p className="text-xl mb-2">
              Dallas Formula Racing is raising funds for a new set of racing tires for our 2026 Formula SAE competition car!
            </p>
            <p className="text-xl mb-2">
              As the official Formula SAE team at UT Dallas, we’re a student-led organization of over 300 members from engineering, computer science, business and more, turning classroom knowledge into real-world innovation.
            </p>
            <a className="text-6xl font-bold text-accent-orange mb-4 underline" href="https://impact.utdallas.edu/project/48431?clid=jhTCFmJSPWXll1Go9ZcjOY&utm_campaign=site_share&utm_medium=plain&utm_source=scalefunder&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4CGNhbGxzaXRlAjE1AAGn61MRcDZS1-KpwSL-W-54OpsRBik0oczFFvBi8717zR4Zxxh5XjCju4Hm8HQ_aem_LI132fin7EsWU7prQoSIDw"> Donate here!</a>

          </div>
        </motion.div>
      </section>
    </>
  );
};

export default EventsSection;