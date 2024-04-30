import React from "react";
import Image from "next/image";
import AboutUs from "./components/home/AboutUs";
import Car2023 from "@/public/assets/car_gallery/2023Car.jpeg";
import Car2022 from "@/public/assets/Cars/2022Car.jpg";
import Sidebysidecars from "@/public/assets/Cars/2018_2019Cars.jpg";
import SampleProjects from "./components/home/SampleProjects";
import ImageBreaks from "./components/ImageBreaks";
import { OrgInfo } from "./components/home/OrgInfo";
import Sponsors from "./sponsors/SponsorComponent";
import Hero from "./components/home/Hero";
import GroupPhoto from "@/public/assets/team/group_photo.jpeg";
import car_blur from "@/public/assets/NewPictures/car_blur_in_motion.jpg";
import Head from "next/head";
import { motion } from "framer-motion";

const CAROUSEL_GALLERY = [
  {
    src: Car2022,
    alt: "2022 Car",
    text: "2022 Competition Car",
  },
  {
    src: Car2023,
    alt: "2023 Car",
    text: "2023 Competition Car",
  },
  {
    src: GroupPhoto,
    alt: "Group Photo",
    text: "2023 Competition Team",
  },
];

export default function Home() {
  return (
    <main className={"px-0 leading-7"}>
      <Hero />
      <AboutUs />
      <ImageBreaks
        image={Sidebysidecars.src}
        imageHeight={"h-176"}
        imageFit={"object-cover"}
      />
      <SampleProjects />
      <ImageBreaks
        image={Car2023.src}
        imageHeight={"h-160"}
        imageFit={"object-cover"}
      />
      <OrgInfo />
      <ImageBreaks
        image={car_blur.src}
        imageHeight={"h-144"}
        imageFit={"object-cover"}
      />
      <Sponsors />
    </main>
  );
}
