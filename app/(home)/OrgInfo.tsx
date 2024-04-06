"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

export const OrgInfo = (props: Props) => {
    return (
        <main className={"px-0 leading-7 mx-auto w-11/12 py-24 md:w-4/5"}>
            <section>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    div
                    className={"text-center my-4"}
                >
                    <h1 className={"font-bold text-5xl"}>Mission Statement</h1>
                    <p className={"my-8 text-2xl"}>
                        Our mission is to mtaintain the reputation of UT Dallas
                        as a top-tier university in the annual Formula SAE
                        competition and promote STEM in the local DFW community.
                    </p>
                </motion.div>
                <br />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    div
                    className={"text-center my-4"}
                >
                    <h1 className={"font-bold text-5xl"}>About Formula SAE</h1>
                    <p className={"mt-8  text-2xl"}>
                        Formula SAE is an international collegiate competition
                        hoseted by the Society of Automotive Engineers (SAE).
                        This Collegiate Design Series (CDS) competion pushes
                        students to go beyond classroom material by challenging
                        them to design, build, and test the performance of a
                        formula-style vehicle. Each vehicle is inspected in a
                        series of tests to comply with all competition rules to
                        ensure safety. Students are tested and scored on their
                        knowledge of their vehicle design by experts in various
                        industries and cars are tested on numerous metrics
                        including acceleration, autocross, endurance, and skid
                        pad.
                    </p>
                    <br />
                    <p className={"my-4 text-2xl"}>
                        Formula SAE promotes careers and excellence in
                        engineering as it encompasses all aspects of the
                        automotive industry including research, design,
                        manufacturing, testing, development, marketing,
                        management, and finances.
                    </p>
                </motion.div>
                <br />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    div
                    className={"text-center"}
                >
                    <h1 className={"font-bold text-5xl mb-8"}>Stats</h1>
                    <div
                        className={"flex flex-wrap justify-evenly items-center"}
                    >
                        <p className={"my-8 font-semibold text-xl"}>
                            #1 in Texas for 2022 Business Presentation
                        </p>
                        <div className="w-full border-b-2 bg-wh-500 md:inline-block md:h-[150px] md:w-0.5"></div>
                        <p className={"py-8 font-semibold text-xl"}>
                            Over 4 different UTD schools involved
                        </p>
                        <div className="w-full border-b-2 bg-wh-500 md:inline-block md:h-[150px] md:w-0.5"></div>
                        <p className={"py-8 font-semibold text-xl"}>
                            18 different majors represented
                        </p>
                        <div className="w-full border-b-2 bg-wh-500 md:inline-block md:h-[150px] md:w-0.5"></div>
                        <p className={"py-8 font-semibold text-xl"}>
                            8 years since establishment
                        </p>
                    </div>
                </motion.div>
                <div className="flex items-center justify-center mt-8 md:mt-16">
                    <Link href="/cars">
                        <motion.button
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            button
                            className="bg-accent-green text-wh-0 text-lg font-semibold w-40 h-12 rounded-md"
                        >
                            Our Cars
                        </motion.button>
                    </Link>
                </div>
            </section>
        </main>
    );
};
