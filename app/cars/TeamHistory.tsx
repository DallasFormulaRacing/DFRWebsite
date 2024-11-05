"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Car2024 from "@/public/assets/Cars/2024/2024_3.png";
import Car2023 from "@/public/assets/Cars/rescalepromo23pic.png";
import Car2022 from "@/public/assets/Cars/2022Michigan.jpg";
import Car2021 from "@/public/assets/Cars/2021Car.jpg";
import Car2019 from "@/public/assets/Cars/Car2019.jpg";
import Car2018 from "@/public/assets/Cars/2018Car.jpg";

import { Timeline } from "antd";

type Props = {};

const CAR_HISTORY_DATA = [
  {
    image: Car2024,
    title: "2024 Michigan",
    description:
      "Dallas Formula Racing had an incredible year at FSAE Michigan, hitting a record 29th place out of 108 teams! This season was packed with firsts: the car completed the endurance event for the first time in 5 years and finished all events for the first time in a decade. We also nailed our debut aero package and scored 2nd place for best visual design.",
  },
  {
    image: Car2023,
    title: "2023 Michigan",
    description: "",
  },
  {
    image: Car2022,
    title: "2022 Michigan: Andromeda V2",
    description: `With limited funding, we built on last year’s design and made major improvements, despite still feeling the impact of COVID with a mostly new team. Out of our 22 members, only four had been to FSAE before, making this a steep learning curve. For the first time, we passed tech inspection, completed Acceleration and Skidpad, and competed in Autocross. Though a broken rear wing and chain kept us from the endurance event, we still achieved a 10% boost in points. Our business team excelled, placing #1 among Texas schools and #16 overall. We wrapped up with 225.6 points—a strong finish!`,
  },
  {
    image: Car2021,
    title: "2021 Nevada: Andromeda V1",
    description: `2021 was a tough year for us. With COVID-19 still impacting the country, we only received approval to manufacture the car a month before competition. Recruiting and retaining members was challenging with virtual-only promotion, and it was hard to keep the team motivated in an online environment. At competition, we were limited to just ten members. Despite our best efforts, a half shaft failure cut our endurance run short. But there were wins: we completed a full autocross for the first time and improved our score by 13.7%!.`,
  },
  {
    image: Car2019,
    title: "2019 Lincoln: Voyager",
    description: `In 2019, we took everything we’d learned over four years—and from our 2018 car—to build our new vehicle, Voyager, in just one year. At competition, we tackled the 22km endurance race, the only dynamic event left. Completing endurance as a second-year team was nearly unheard of, but Voyager held up under the pressure, finishing strong. In the end, we boosted our performance by 20.7% over the previous year—a huge leap forward!`,
  },
  {
    image: Car2018,
    title: "2018 Lincoln: Halley's Comet",
    description: `Founded in 2014 by a group of dedicated engineers, our team quickly drew interest from hundreds of members. After four years of building structure, knowledge, and support, we completed our first car, Halley’s Comet. In Lincoln 2018, we passed technical inspection and competed in static events for the first time, finishing 61st out of 67. While modest, this achievement marked a huge milestone for our first-year team and showcased the incredible growth we’ve experienced since those early days.`,
  },
];

export const TeamHistory = (props: Props) => {
  return (
    <section>
      {CAR_HISTORY_DATA.map(({ image, title, description }) => {
        return (
          <TimelineItem
            key={title}
            image={image}
            title={title}
            description={description}
          />
        );
      })}
    </section>
  );
};

function TimelineItem({
  image,
  title,
  description,
}: {
  image?: StaticImageData;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative">
      <div className="relative h-[98svh] w-full overflow-hidden">
        {image && <TimelineImage image={image} />}
        <div className="absolute top-0 flex flex-col justify-center items-center bg-black bg-opacity-50 p-20 z-10 text-left">
          <h1 className="text-xl md:text-5xl font-bold mt-10 md:mt-0 text-accent-orange">
            {title}
          </h1>
          <p className="text-sm md:text-4xl text-white mt-4 max-w-[800px]">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function TimelineImage({ image }: { image: StaticImageData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative h-full w-full z-0">
      <Image
        alt={"2022AeroPackage"}
        placeholder={"blur"}
        src={image}
        fill
        className="object-cover"
        unoptimized
      />
    </motion.div>
  );
}
