"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Jsom from "@/public/assets/sponsors/jsomthanks.jpeg";
import cgd25 from "@/public/assets/events/cgd25.png";

const EventsSection = () => {
  return (
    <section className="px-8 md:px-24 py-20 flex flex-col gap-16 bg-white">
      

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="shadow-lg rounded-2xl p-8 bg-gray-50 flex flex-row gap-8 place-items-center"
      >
        
      
        <Image
          src={Jsom}
          alt="Cars and Comets Event Banner"
          className="w-full max-w-3xl mx-auto h-auto object-contain rounded-lg mb-6 "
          />


<div>
        <h2 className="text-4xl font-bold text-accent-orange mb-4">
          Thank you JSOM!
        </h2>
        

        <p className="text-xl mb-2">
        Dallas Formula Racing is proud to recognize the UT Dallas Executive MBA at Naveen Jindal School of Management, UT Dallas for their generous $2,500 contribution toward our team. This partnership came together after Varghese Jacob (JSOM Vice Dean) connected us with John Barden, CPA, CFE, CGMA (Dean of Executive Education), who kindly agreed to sponsor us. That same day, we also had the opportunity to meet with Hasan Pirkul (Dean of JSOM) to personally thank him for his support.
        </p>
        <br />
        <p className="text-xl mb-2">
        Their contribution plays a vital role in the design, production, and performance of our racecar, and the funds are already helping accelerate the progress of our IC car this season.
        </p>
        <br />
        <p className="text-xl mt-4">The UT Dallas Executive MBA empowers leaders through Executive MBA, Executive Master’s, Doctorate, Academic, and Professional Certificate programs, focusing on leadership, strategy, communication, and organizational management. Participants can also specialize in key areas such as supply chain, project management, healthcare management, professional coaching, and systems engineering, developing the skills to drive meaningful impact in their fields.</p>
        <br />
        <p className="text-xl mt-4">We’re incredibly thankful for their continued support of student-driven engineering and innovation. Partnerships like these not only fuel our car but also our mission to build, test, and compete at the highest level.</p>

        </div>

      </motion.div>

    </section>
  );
};

export default EventsSection;
