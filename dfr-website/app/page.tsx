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
import ImageBreaks from "./(shared-components)/ImageBreaks";
import { OrgInfo } from "./(home)/OrgInfo";
import Sponsors from "./sponsors/SponsorComponent";
import SponsorImage from "@/public/assets/sponsors/Sponsors.png";
import ansys from "@/public/assets/sponsors/ansys.svg";

type Props = {};

export default function Home() {
    return (
        <main className={"px-0 leading-7"}>
            <div className={"relative"}>
                <ImageBreaks
                    image={Car2022.src}
                    imageHeight={"h-256"}
                    imageFit={"object-fill"}
                />
                <div className={"absolute left-12 bottom-20"}>
                    <h1 className={"sm:text-5xl md:text-8xl lg:text-10xl font-bold text-wh-75"}>
                        DALLAS FORMULA RACING
                    </h1>
                </div>
            </div>

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
            {/* <ImageBreaks image={ansys.src} imageHeight={"h-32"}/> */}
        </main>
    );
}
