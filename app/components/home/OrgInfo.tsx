"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CarVolunteering from "@/public/assets/Cars/volunteer_car.jpg";
import Image from "next/image";
import Sidebysidecars from "@/public/assets/Cars/2018_2019Cars.jpg";
import Car2024 from "@/public/assets/Cars/2024/2024_3.png";
import FrontCarNight from "@/public/assets/NewPictures/front_car_night.jpg";
import PersonInCar from "@/public/assets/NewPictures/person_in_car.jpg";
import CleaningCar from "@/public/assets/NewPictures/cleaning_car.jpg";
type Props = {};

export const OrgInfo = (props: Props) => {
  return (
    <section className="leading-7 mx-auto w-11/12 px-20 min-h-screen flex flex-col justify-evenly items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={"text-center"}
      >
        <h1 className={"text-6xl mb-20 font-extrabold text-accent-orange"}>
          Stats & Competition Teams
        </h1>
        <div className={"flex justify-evenly items-center flex-wrap"}>
          <p className={"my-8 text-3xl w-11/12 md:w-2/12 px-8"}>
            #1 in Texas for 2022 Business Presentation
          </p>
          <div className="w-full border-b-2 bg-wh-500 md:inline-block md:h-[150px] md:w-0.5"></div>
          <p className={"py-8 text-3xl w-11/12 md:w-2/12 px-8"}>
            Placed 29/108 teams in May 2024
          </p>
          <div className="w-full border-b-2 bg-wh-500 md:inline-block md:h-[150px] md:w-0.5"></div>
          <p className={"py-8 text-3xl w-11/12 md:w-2/12 px-8"}>
            18 different majors represented
          </p>
          <div className="w-full border-b-2 bg-wh-500 md:inline-block md:h-[150px] md:w-0.5"></div>
          <p className={"py-8 text-3xl w-11/12 md:w-2/12 px-8"}>
            10 years since establishment
          </p>
        </div>
      </motion.div>
      <div className="flex flex-row flex-wrap gap-8 mt-12 justify-evenly items-center w-full">
        <div className="relative group w-full max-w-[700px] aspect-video overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105">
          <div className="relative w-full h-full">
            <Image
              className="object-cover"
              alt="2022 Aero Package"
              placeholder="blur"
              src={CleaningCar}
              layout="fill"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 animate-glossy"></div>
          </div>
          <style jsx>{`
            @keyframes glossy-animation {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }

            .animate-glossy {
              animation: glossy-animation 4s infinite linear;
            }
          `}</style>
        </div>
        <div className="relative group w-full max-w-[700px] aspect-video overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105">
          <div className="relative w-full h-full">
            <Image
              className="object-cover"
              alt="2022 Aero Package"
              placeholder="blur"
              src={PersonInCar}
              layout="fill"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 animate-glossy"></div>
          </div>
          <style jsx>{`
            @keyframes glossy-animation {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }

            .animate-glossy {
              animation: glossy-animation 4s infinite linear;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};
