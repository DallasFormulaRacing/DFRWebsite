import React from "react";
import Image from "next/image";
import AboutUs from "./(home)/AboutUs";
import Car2023 from "@/public/assets/car_gallery/2023Car.jpeg";
import Car2022 from "@/public/assets/Cars/2022Car.jpg";
import AeroPackage2022 from "@/public/assets/Cars/2022AeroPackage.jpeg";
import Comp2023TeamPic from "@/public/assets/team/2023CompTeamPic.webp";
import OldCar from "@/public/assets/Cars/oldcar.jpg";
import Sidebysidecars from "@/public/assets/Cars/2018_2019Cars.jpg";
import About from "./car/page";
import SampleProjects from "./(home)/SampleProjects";
import ImageBreaks from "./(shared)/ImageBreaks";
import { OrgInfo } from "./(home)/OrgInfo";
import Sponsors from "./(shared)/Sponsors";
import SponsorImage from "@/public/assets/sponsors/Sponsors.png";

type Props = {};

export default function Home() {
  return (
    <main className={"px-0 leading-7"}>
      <ImageBreaks
        image={Car2022.src}
        imageHeight={"h-256"}
        imageFit={"object-fill"}
      />
      <AboutUs />
      <ImageBreaks
        image={Sidebysidecars.src}
        imageHeight={"h-176"}
        imageFit={"object-fill"}
      />
      <SampleProjects />
      <ImageBreaks
        image={Car2023.src}
        imageHeight={"h-160"}
        imageFit={"object-none"}
      />
      <OrgInfo />
      <ImageBreaks image={OldCar.src} imageHeight={"h-144"} />
      <Sponsors />
    </main>
  );
}
