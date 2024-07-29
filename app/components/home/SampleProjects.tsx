"use client";

import React from "react";
import Image from "next/image";
import CarVolunteering from "@/public/assets/Cars/volunteer_car.jpg";
import CarwithBaloons from "@/public/assets/Cars/car_baloons.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

export const SampleProjects = (props: Props) => {
    return (
        <section className="mt-10 py-24 mx-8 min-h-screen md:mx-24">
         <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl font-extrabold text-[#045295] mb-20"
          >
            Sample Projects
          </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sm:grid sm:min-h-[500px] grid-cols-3 grid-rows-1 gap-16"
            >
                <div className="col-span-1 row-span-1 justify-center hidden md:block">
                    <Image
                        alt={"2022AeroPackage"}
                        placeholder={"blur"}
                        src={CarwithBaloons}
                        style={{ objectFit: "cover" }}
                        unoptimized
                        className="rounded-lg"
                    />
                </div>
                <div className="col-span-3 md:col-span-2 row-span-1">
                    <h1 className="text-5xl font-bold text-[#045295]">
                        2022 Aerodynamics Package
                    </h1>
                    <p className="indent-8 leading-10 w-11/12 md:w-4/5 text-3xl mt-8">
                        Using Siemens StarCCM+, hundreds of configurations were
                        analyzed and evaluated, allowing us to estimate the
                        impact on on-track performance. This aero package was
                        the catalyst for expanding the team's aerodynamics
                        capabilities and, with continued development, increasing
                        vehicle performance while allowing us to validate our
                        simulation model and estimate on-track performance in
                        many more dynamic conditions.
                    </p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sm:grid sm:min-h-[500px] grid-cols-3 grid-rows-1 my-10"
            >
                <div className="col-span-3 md:col-span-2 row-span-1">
                    <h1 className="text-5xl font-bold text-[#045295]">
                        STEM Volunteering
                    </h1>
                    <p className="indent-8 w-11/12 text-3xl mt-8 md:w-4/5 leading-10">
                        Dallas Formula Racing attends various STEM events to
                        further our team's impact on a broader range of
                        students. Some of the events we have attended include
                        Westwood Jr High's Math, Science & Technology
                        Celebration Day, STEM in the Park, eWeek, and the Young
                        WISE kick-off meeting.
                    </p>

                    <p className="indent-8 w-11/12 text-3xl mt-8 md:w-4/5 leading-10">
                        We talk to K-12 students at these events about the
                        engineering needed to build our car and the unique
                        experiences they can gain in higher education. Through
                        this event, we aim to get them excited about math and
                        science and encourage them to continue their education
                        in the STEM field.
                    </p>

                    <div className="w-11/12 md:w-4/5 text-right mt-12 md:mt-24">
                        <Link href="/team/join-the-team">
                            <motion.button
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#E87500] text-wh-0 text-lg font-semibold min-w-[10rem] rounded-md p-4 mt-8"
                            >
                                Join the team
                            </motion.button>
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 row-span-1 mt-8  justify-center hidden md:block md:mt-0">
                    <Image
                        alt={"2022AeroPackage"}
                        placeholder={"blur"}
                        src={CarVolunteering}
                        style={{ objectFit: "cover" }}
                        unoptimized
                        className="rounded-lg"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default SampleProjects;
