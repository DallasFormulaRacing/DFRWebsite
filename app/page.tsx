import React from "react";
import Image from "next/image";
import EventsSection from "./components/home/EventsSection";
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
import Car2024 from "@/public/assets/Cars/2024/2024_3.png";
import NewslettersPreview from "./components/home/Newsletters";
import EventsPreview from "./components/home/Events";
import MeetingTimes from "./components/home/MeetingTimes";

import Head from "next/head";
import { motion } from "framer-motion";
import { Metadata } from "next";

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
            {
     <EventsSection />
            }
      <AboutUs />
    
      <OrgInfo />
      {/* <ImageBreaks
        image={Sidebysidecars.src}
        imageHeight={"h-224"}
        imageFit={"object-cover"}
      /> */}
      <div className="min-h-screen">
        {/*
        <EventsPreview />
*/}
        <NewslettersPreview />
      </div>
      <MeetingTimes />
      {/* {/* <ImageBreaks
        image={Car2023.src}
        imageHeight={"h-224"}
        imageFit={"object-cover"}
      /> */}
      {/* <ImageBreaks
        image={Car2024.src}
        imageHeight={"h-224"}
        imageFit={"object-cover object-bottom"}
      /> */}
      <Sponsors />
    </main>
  );
}
