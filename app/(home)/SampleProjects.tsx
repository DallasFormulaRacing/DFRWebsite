import React from "react";
import Image from "next/image";
import CarVolunteering from "@/public/assets/Cars/volunteer_car.jpg";
import CarwithBaloons from "@/public/assets/Cars/car_baloons.jpg";
import Link from "next/link";

type Props = {};

export const SampleProjects = (props: Props) => {
    return (
        <section className="mt-10 py-24 mx-8 md:mx-24">
            <div className="sm:grid sm:h-[500px] grid-cols-3 grid-rows-1 gap-16">
                <div className="col-span-1 row-span-1 flex justify-center md:block">
                    <Image
                        alt={"2022AeroPackage"}
                        placeholder={"blur"}
                        src={CarwithBaloons}
                        style={{ objectFit: "cover" }}
                        unoptimized
                    />
                </div>
                <div className="col-span-2 row-span-1">
                    <h1 className="text-5xl font-bold mt-8">
                        2022 Aerodynamics Package
                    </h1>
                    <p className="indent-8 w-11/12 md:w-4/5 text-2xl mt-8">
                        Using Simens StarCCM+, hundreds of configurations were
                        analyzed and evaluated allowing us to estimate on track
                        performance impact. This aero package was the catalyst
                        to expanding the team's aerodynamics capabilities, and
                        with continued devlopment, increasing vehicle
                        performance while allowing us to validate our simulation
                        model and estimate on-track performance in many more
                        dynamic conditions.
                    </p>
                </div>
            </div>
            <div className="sm:grid sm:h-[500px] grid-cols-3 grid-rows-1 my-10">
                <div className="col-span-2 row-span-1">
                    <h1 className="text-5xl font-bold mt-8">
                        STEM Volunteering
                    </h1>
                    <p className="indent-8 w-11/12 text-2xl mt-8 md:w-4/5">
                        Dallas Formula Racing attends various STEM events to
                        further the impact that our team has on a wider range of
                        students. Some of the events we have attended include
                        Westwood Jr High's Math, Science & Technology
                        Celebration Day, STEM in the Park, eWeeek, and the Young
                        WISE kick-off meeting.
                    </p>

                    <p className="indent-8 w-11/12 text-2xl mt-8 md:w-4/5">
                        We talk to K-12 students at these events about the engineering that is needed to build our car and talk about the unique experiences they can gain in higher education. Through these event we hope to get them excited about math and science and encourage them to continue their education in the STEM field.
                    </p>

                    <div className="w-11/12 md:w-4/5 text-right mt-12 md:mt-24">
                    <Link href="/join-the-team">
                        <button className="bg-accent-green text-wh-0 text-lg font-semibold w-40 h-12 rounded-md">
                            Join the Team
                        </button>
                    </Link>
                    </div>
                </div>
                <div className="col-span-1 row-span-1 mt-8 flex justify-center md:block md:mt-0">
                    <Image
                        alt={"2022AeroPackage"}
                        placeholder={"blur"}
                        src={CarVolunteering}
                        style={{ objectFit: "cover" }}
                        unoptimized
                    />
                </div>
            </div>
        </section>
    );
};

export default SampleProjects;
