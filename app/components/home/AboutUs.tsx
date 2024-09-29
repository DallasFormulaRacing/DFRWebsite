"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

export const AboutUs = (props: Props) => {
  return (
    <section className="px-8 md:px-24 py-28 min-h-screen flex flex-col justify-center items-center md:flex-row">
      <div className="w-full min-h-[500px] md:w-1/2">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl font-extrabold text-accent-orange">
          About Us
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="my-8 flex flex-col">
          <p className="text-3xl my-4 w-11/12 leading-10">
            Dallas Formula Racing is a student-led organization and is the
            chapter for SAE International at the University of Texas at Dallas.
            Our team was founded in 2014 and has successfully built three
            formula-style vehicles for the Formula SAE competition. The diverse
            array of projects on our team results in student collaboration among
            four different schools at UT Dallas.
          </p>
          <p className="text-3xl my-4 w-11/12 leading-10">
            We are dedicated to imparting our enthusiasm for engineering and
            math to aspiring individuals. We volunteer at STEM fairs in the DFW
            area to encourage new students to take similar paths. We leave a
            lasting impression on future innovators by demonstrating various
            STEM applications through our diverse group.
          </p>
          <Link href="/about">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#E87500] text-wh-0 text-lg font-semibold min-w-[10rem] rounded-md p-4 mt-8">
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </div>
      <iframe
        className="w-full h-[500px] md:w-1/2 aspect-video rounded-lg"
        src="https://www.youtube.com/embed/1C7s40Cisy8"
        title="Meet the UTD Team Behind Dallas Formula Racing"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
    </section>
  );
};

export default AboutUs;
