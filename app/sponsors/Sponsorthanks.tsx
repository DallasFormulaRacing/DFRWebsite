"use client";

import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Jsom from "@/public/assets/sponsors/jsomthanks.jpeg";
import CarsAndComets from "@/public/assets/events/carsandcomets.png";
import { motion, AnimatePresence } from "framer-motion";
import mayor from "@/public/assets/NewPictures/mayor.png";

import cgd25 from "@/public/assets/events/cgd25.png";

export default function MotionDivCarousel() {

  const slides = [
    {
      id: 1,
      image: Jsom,
      title: "Thank you JSOM!",
      content: `Dallas Formula Racing is proud to recognize the UT Dallas Executive MBA at Naveen Jindal School of Management, UT Dallas for their generous $2,500 contribution toward our team. This partnership came together after Varghese Jacob (JSOM Vice Dean) connected us with John Barden, CPA, CFE, CGMA (Dean of Executive Education), who kindly agreed to sponsor us. That same day, we also had the opportunity to meet with Hasan Pirkul (Dean of JSOM) to personally thank him for his support.
      Their contribution plays a vital role in the design, production, and performance of our racecar, and the funds are already helping accelerate the progress of our IC car this season.
      The UT Dallas Executive MBA empowers leaders through Executive MBA, Executive Master’s, Doctorate, Academic, and Professional Certificate programs, focusing on leadership, strategy, communication, and organizational management. Participants can also specialize in key areas such as supply chain, project management, healthcare management, professional coaching, and systems engineering, developing the skills to drive meaningful impact in their fields.
      We’re incredibly thankful for their continued support of student-driven engineering and innovation. Partnerships like these not only fuel our car but also our mission to build, test, and compete at the highest level.`,
    },
    {
      id: 2,
      image: mayor,
      title: "Mayor Amir Omar visits DFR",
      content: `Dallas Formula Racing recently had the distinct pleasure of welcoming Mayor Amir Omar of Richardson to our workshop! 🚗⚡

During his visit, Mayor Omar met with members of both our Electric Vehicle (EV) and Internal Combustion (IC) engineering teams. He got a firsthand look at our cutting-edge cars, learned about our design and engineering processes, and gained insight into the competitions we participate in and the innovative projects our team is currently working on.

It was an exciting opportunity to showcase the dedication, creativity, and technical expertise of our student engineers. The conversation also highlighted how initiatives like Dallas Formula Racing contribute to STEM education, local innovation, and community engagement.

We look forward to continuing to work closely with Mayor Omar and the City of Richardson as we expand our presence, inspire future engineers, and contribute to the growth of our local community.
`,
    },

  ];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="shadow-lg rounded-2xl p-8 bg-gray-50 flex flex-col md:flex-row gap-8 place-items-center"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full max-w-3xl mx-auto h-auto object-contain rounded-lg mb-6 md:mb-0"
          />

          <div>
            <h2 className="text-4xl font-bold text-accent-orange mb-4">
              {slides[current].title}
            </h2>
            <p className="text-xl mb-2">{slides[current].content}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full font-bold transition shadow-lg"
      >
        ‹
      </button>

      <button
  onClick={nextSlide}
  className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full font-bold transition shadow-lg">
  ›
</button>


\      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-accent-orange" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
export { MotionDivCarousel };

