"use client";

import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import { StaticImageData } from "next/image";
import Car2022 from "@/public/assets/Cars/2022Michigan.jpg";
import Car2021 from "@/public/assets/Cars/2021Car.jpg";
import Car2019 from "@/public/assets/Cars/Car2019.jpg";
import Car2018 from "@/public/assets/Cars/2018Car.jpg";

import { Timeline } from "antd";

type Props = {};

const CAR_HISTORY_DATA = [
    {
        image: Car2022,
        title: "2022 Michigan: Andromeda V2",
        description: `Due to funding limitations, we reused as much from the previous year while still significantly improved the car. We were still feeling the aftermath of COVID this year with mostly new members. Only four of the 22 people at the competition had gone to a previous FSAE competition. This was a huge learning curve for our members; many needed to learn what was happening. We passed tech and completed Acceleration and Skidpad for the first time. We also competed in Autocross again. During Autocross, our rear wing broke, and we were going to do endurance without it and take the penalty of competing without it, although we passed tech with it and needed to compete with it. We were not able to do endurance because our chain had broken. Our business team also placed #1 among Texas schools for the business presentation and #16 among all teams. We finished with 225.6 points, a 10% increase in points.`,
    },
    {
        image: Car2021,
        title: "2021 Nevada: Andromeda V1",
        description: `In 2021, we found developing the car to be an extremely challenging endeavor. Due to the still significant presence of COVID-19 in the country, we received approval to manufacture our vehicle a month before the competition. Furthermore, we needed to gain and retain members as our only way to promote the team at the time was virtual, which was ineffective. It also became more work to motivate people to learn about the car and the skills needed to build one in an online environment. Then, during the competition, we were limited in the number of members we could bring, leaving us with only ten members. Unfortunately, things did not improve. Despite getting a car into the competition, the half shaft popped out, and we could not fix it properly, causing it to break in the middle of endurance. Fortunately, some good did come out of all of the struggles. We competed in a complete autocross for the first time and improved our score with a 13.7% increase in points.`,
    },
    {
        image: Car2019,
        title: "2019 Lincoln: Voyager",
        description: `In 2019, we utilized our four years of accumulated knowledge and development with our 2018 competition vehicle and managed to build our 2019 vehicle, Voyager, in only one year. Then, during the competition, we entered our car into the 22km endurance race, the only dynamic event remaining. Completing the endurance race as a second-year team was unheard of, as countless teams would have needed to possess the process to make their vehicles last long enough to complete it. However, despite these obstacles, our car could handle the strain, and we completed everything. Ultimately, we finished the competition with a 20.7% increase in effectiveness, a significant improvement from the previous year.`,
    },
    {
        image: Car2018,
        title: "2018 Lincoln: Halley's Comet",
        description: `Our team was founded in 2014 by a group of engineers and gained massive interest from hundreds of members. Then, after four years of making up for our lack of structure, knowledge, and sponsors, we finished developing our first car, Halley's Comet. In Lincoln 2018, we passed the technical inspection and competed in the static events for the first time. We were able to place 61 out of 67. While this may not seem great, this was a massive accomplishment for our first-year team, and it demonstrates the immense growth the team has seen since then.`,
    },
];

export const TeamHistory = (props: Props) => {
    return (
        <section className={"p-8 md:p-24"}>
            <Timeline
                items={CAR_HISTORY_DATA.map(({ image, title, description }) => {
                    return {
                        children: (
                            <TimelineItem
                                key={title}
                                image={image}
                                title={title}
                                description={description}
                            />
                        ),
                    };
                })}
                className="block md:hidden"
            />

            <Timeline
                mode="alternate"
                items={CAR_HISTORY_DATA.map(({ image, title, description }) => {
                    return {
                        label: <TimelineImage image={image} />,
                        children: (
                            <TimelineItem
                                title={title}
                                description={description}
                            />
                        ),
                    };
                })}
                className="hidden md:block"
            />
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
        viewport={{ once: true }} className="pb-32 min-h-[400px] px-2">
            {image && <TimelineImage image={image} />}
            <div>
                <h1 className={"text-5xl font-bold mt-10 md:mt-0"}>{title}</h1>
                <p className={"text-2xl mt-4"}>{description}</p>
            </div>
        </motion.div>
    );
}

function TimelineImage({ image }: { image: StaticImageData }) {
    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} className="relative h-[400px]">
            <Image
                alt={"2022AeroPackage"}
                placeholder={"blur"}
                src={image}
                fill
                className="object-cover rounded-xl"
                unoptimized
            />
        </motion.div>
    );
}
