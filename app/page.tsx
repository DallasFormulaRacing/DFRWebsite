import React from "react";
import Image from "next/image";
import AboutUs from "./(home)/AboutUs";
import Car2023 from "@/public/assets/car_gallery/2023Car.jpeg";
import Car2022 from "@/public/assets/Cars/2022Car.jpg";
import OldCar from "@/public/assets/Cars/oldcar.jpg";
import Sidebysidecars from "@/public/assets/Cars/2018_2019Cars.jpg";
import SampleProjects from "./(home)/SampleProjects";
import ImageBreaks from "./(shared-components)/ImageBreaks";
import { OrgInfo } from "./(home)/OrgInfo";
import Sponsors from "./sponsors/SponsorComponent";
import { Carousel } from "antd";
import GroupPhoto from "@/public/assets/team/group_photo.jpeg";
import car_blur from "@/public/assets/NewPictures/car_blur_in_motion.jpg";


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
]

export default function Home() {
    return (
        <main className={"px-0 leading-7"}>
            <div className="relative">
                <Carousel
                    autoplay={true}
                    autoplaySpeed={5000}
                    dotPosition="left"
                >
                    {CAROUSEL_GALLERY.map((image, index) => (
                        <div className="relative h-[90svh]">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover brightness-50"
                            />
                            <div className="absolute left-12 top-[42%] md:top-[40%] w-24">
                                <h1 className="text-5xl md:text-7xl font-bold text-wh-75">
                                    {image.text}
                                </h1>
                            </div>
                        </div>
                    ))}
                </Carousel>
                <div className="absolute left-12 top-10 w-1/2">
                    <h1 className="text-5xl md:text-8xl font-bold text-wh-75 italic">
                        <span className="text-green-600">DALLAS FORMULA</span> <span className="text-orange-600">RACING</span>
                    </h1>
                </div>
            </div>

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
