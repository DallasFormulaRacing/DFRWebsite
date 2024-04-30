"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

export const AboutUs = (props: Props) => {
  return (
    <main className="px-0 leading-7 py-24">
      <section>
        <div className="flex flex-col justify-center items-center min-h-[500px] p-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold"
          >
            About Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="my-8 text-center flex flex-col items-center"
          >
            <p className="text-2xl my-4 md:w-4/5 md:text-3xl">
              Dallas Formula Racing is a student-led organization at the
              University of Texas in Dallas. Our team was founded in 2014 and
              has successfully built three formula-style vehicles for the
              Formula SAE competition. The diverse array of projects on our team
              results in student collaboration among four different schools at
              UT Dallas.
            </p>
            <p className="text-2xl my-4 md:w-4/5 md:text-3xl">
              We are dedicated to imparting our enthusiasm for engineering and
              math to aspiring individuals. We volunteer at STEM fairs in the
              DFW area to encourage new students to take similar paths. We leave
              a lasting impression on future innovators by demonstrating various
              STEM applications through our diverse group.
            </p>
          </motion.div>

          <iframe
            className="w-full md:w-1/2 h-144 rounded-xl hover:scale-105 transition-transform duration-300"
            src="https://www.youtube.com/embed/vZLfhvGu2Mg"
            title="Dallas Formula Racing | FSAE Michigan 2023"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <Link href="/about">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-accent-green text-wh-0 text-lg font-semibold w-40 h-12 rounded-md mt-8"
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
