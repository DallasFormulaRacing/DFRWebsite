import React from "react";
import Image from "next/image";
import Car2023 from "@/public/assets/car_gallery/2023Car.jpeg";
import LowCar from "@/public/assets/NewPictures/low_rh_car.jpg";
import OrgChart from "@/public/assets/team/Org-Chart-2023-scaled.webp";

type Props = {};

export default function About() {
    return (
        <main className={"px-0 leading-7"}>
            {/*<div className={"w-1/2 h-1/2"}>*/}
            {/*  <Car />*/}
            {/*</div>*/}
            <div className={"basis-full relative w-auto h-176 mt-0 mb-4"}>
                <Image
                    fill
                    alt={"LowCar"}
                    placeholder={"blur"}
                    src={LowCar}
                    sizes={
                        "(max-width: 480px) 100vw, (max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
                    }
                    style={{ objectFit: "cover" }}
                    unoptimized
                />
            </div>
            <section className={"mt-10"}>
                <div
                    className={
                        "sm:grid sm:h-[400px] grid-cols-1 grid-rows-4 text-center"
                    }
                >
                    <h1 className={"text-5xl font-bold col-span-1 row-span-1"}>
                        About Us
                    </h1>
                    <p
                        className={
                            "col-span-1 row-span-1 w-4/5 mx-auto text-2xl"
                        }
                    >
                        Dallas Formula Racing is a student-led orginization at
                        the University of Texas at Dallas. Our team was founded
                        in 2014 and has successfully built 3 formula style
                        vehicles for the Formula SAE competition. The diverse
                        array of projects on our team results in student
                        collaboration among 4 different schools at UT Dallas.
                    </p>
                    <p
                        className={
                            "col-span-1 row-span-1 w-4/5 mx-auto text-2xl"
                        }
                    >
                        We are commited to sharing our passion for engineering
                        and math with young minds. We volunteer at STEM fairs in
                        the DFW aera to encourage new students to take on
                        similar path by leavin a lasting impresssion on the
                        future generation of innovators by demonstarting various
                        STEM applications through our diverse group.
                    </p>
                    <button
                        className={
                            "bg-accent-green text-wh-0 text-lg font-semibold w-40 h-12 rounded-md mt-8 col-span-1 row-span-1 mx-auto"
                        }
                    >
                        Learn More
                    </button>
                </div>
            </section>
            <h1
                className={
                    "text-5xl font-bold col-span-1 row-span-1 text-center mt-40"
                }
            >
                Org Chart
            </h1>
            <div className={"basis-full relative w-400 h-256 mt-0 mb-4 ml-80"}>
                <Image
                    fill
                    alt={"OrgChart"}
                    placeholder={"blur"}
                    src={OrgChart}
                    sizes={
                        "(max-width: 480px) 100vw, (max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
                    }
                    style={{ objectFit: "contain" }}
                    unoptimized
                />
            </div>
        </main>
    );
}
