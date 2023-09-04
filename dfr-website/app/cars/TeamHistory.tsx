import React from "react";
import Image from "next/image";
import Car2022 from "@/public/assets/Cars/2022Michigan.jpg";
import Car2021 from "@/public/assets/Cars/2021Car.jpg";
import Car2019 from "@/public/assets/Cars/Car2019.jpg";
import Car2018 from "@/public/assets/Cars/2018Car.jpg";

type Props = {};

export const TeamHistory = (props: Props) => {
    return (
        <section className={"mt-10 mx-12"}>
            <div
                className={
                    "sm:grid sm:h-[500px] grid-cols-3 grid-rows-1 text-center"
                }
            >
                <div className={"col-span-1 row-span-1"}>
                    <Image
                        alt={"2022AeroPackage"}
                        placeholder={"blur"}
                        src={Car2022}
                        sizes={
                            "(max-width: 480px) 100dvw, (max-width: 480px) 100dvw, (max-width: 768px) 75dvw, (max-width: 1060px) 50dvw, 33dvw"
                        }
                        style={{ objectFit: "cover" }}
                        unoptimized
                    />
                </div>
                <div className={"col-span-2 row-span-1"}>
                    <h1 className={"text-5xl font-bold mt-10"}>
                        2022 Michigan: Andromeda V2
                    </h1>
                    <p className={"w-4/5 mx-auto text-2xl mt-10"}>
                        Due to funding limitations, we reused the same chassis
                        for 2022 and made some major improvements to the car. We
                        were still feeling the aftermath of COVID this year with
                        mostly new members. Of the 22 people we had at comp,
                        only 4 of them had gone to a previous competiton. This
                        ws a huge learning curve for our members as many people
                        had no idea what was going on. We managed to pass tech
                        and complete Acceleration and Skidpad for the first
                        time. We also did Autocross again. Durign Autocross, our
                        rear wing broke and we were going to do endurance
                        without it and take the penalty of competing without it
                        even though we passed tech with it and needed to compete
                        with it. We weren’t able to do endurance because our
                        chain broke. RIP Our business team also managed to place
                        #1 amoung Texas schools for the business presentation
                        and #16 amoung all teams. We finished with 225.6 points
                        which was a 10% increase in points.
                    </p>
                </div>
            </div>
            <div
                className={
                    "sm:grid sm:h-[500px] grid-cols-3 grid-rows-1 text-center my-10"
                }
            >
                <div className={"col-span-2 row-span-1"}>
                    <h1 className={"text-5xl font-bold mt-10"}>
                        2021 Nevada: Andromeda V1
                    </h1>
                    <p className={"w-4/5 mx-auto text-2xl mt-10"}>
                        In 2021, we found developing the car to be an extremely
                        challenging endeavor. Due to the still significant
                        presence of Covid in the country, we did not receive
                        approval to manufacture our vehicle until a month before
                        the competition. Furthermore, we suffered to gain and
                        retain members as our only way to promote the team at
                        the time was virtually, which was not an effective
                        method. It also became difficult to motivate people to
                        learn about the car and the skills needed to build one
                        in an online environment. Then during the competition,
                        we were limited in the number of members we could bring,
                        leaving us with only ten members. Unfortunately, things
                        did not improve. Despite getting a car into the
                        competition, its half shaft popped out, and we could not
                        fix it properly, causing it to break in the middle of
                        endurance. Fortunately, some good did come out of all of
                        the struggles.We were able to compete in and complete
                        autocross for the first time and we still able to
                        improve our score with a 13.7% increase in points
                    </p>
                </div>
                <div className={"col-span-1 row-span-1"}>
                    <Image
                        alt={"2021Car"}
                        placeholder={"blur"}
                        src={Car2021}
                        sizes={
                            "(max-width: 480px) 100dvw, (max-width: 480px) 100dvw, (max-width: 768px) 75dvw, (max-width: 1060px) 50dvw, 33dvw"
                        }
                        style={{ objectFit: "cover" }}
                        unoptimized
                    />
                </div>
            </div>
            <div
                className={
                    "sm:grid sm:h-[500px] grid-cols-3 grid-rows-1 text-center"
                }
            >
                <div className={"col-span-1 row-span-1"}>
                    <Image
                        alt={"2019Car"}
                        placeholder={"blur"}
                        src={Car2019}
                        sizes={
                            "(max-width: 480px) 100dvw, (max-width: 480px) 100dvw, (max-width: 768px) 75dvw, (max-width: 1060px) 50dvw, 33dvw"
                        }
                        style={{ objectFit: "cover" }}
                        unoptimized
                    />
                </div>
                <div className={"col-span-2 row-span-1"}>
                    <h1 className={"text-5xl font-bold mt-10"}>
                        2019 Lincoln: Voyager
                    </h1>
                    <p className={"w-4/5 mx-auto text-2xl mt-10"}>
                        In 2019, we utilized our four years of accumulated
                        knowledge and development with our 2018 competition
                        vehicle and managed to build our 2019 vehicle, Voyager,
                        in only one year. Then during the competition, we
                        entered our car into the 22km endurance race, the only
                        dynamic event remaining at the time. Completing the
                        endurance race as a second-year team was unheard of, as
                        countless teams would not have possessed the process to
                        make their vehicles last long enough to complete it.
                        However, despite these obstacles, our car was able to
                        handle the strain, and we managed to complete the whole
                        thing. Ultimately, we finished the competition with a
                        20.7% increase in effectiveness, a significant
                        improvement from the previous year.
                    </p>
                </div>
            </div>
            <div
                className={
                    "sm:grid sm:h-[500px] grid-cols-3 grid-rows-1 text-center my-10"
                }
            >
                <div className={"col-span-2 row-span-1"}>
                    <h1 className={"text-5xl font-bold mt-10"}>
                        2018 Lincoln: Halley's Comet
                    </h1>
                    <p className={"w-4/5 mx-auto text-2xl mt-10"}>
                        Our team was founded in 2014 by a group of engineers and
                        gained an immediate massive interest with hundreds of
                        members. Then after four years of making up for our lack
                        of structure, knowledge, and sponsors, we finished
                        developing our first car, Halley's Comet. In Lincoln
                        2018, we passed the technical inspection and competed in
                        the static events for the first time.
                    </p>
                </div>
                <div className={"col-span-1 row-span-1"}>
                    <Image
                        alt={"2018Car"}
                        placeholder={"blur"}
                        src={Car2018}
                        sizes={
                            "(max-width: 480px) 100dvw, (max-width: 480px) 100dvw, (max-width: 768px) 75dvw, (max-width: 1060px) 50dvw, 33dvw"
                        }
                        style={{ objectFit: "cover" }}
                        unoptimized
                    />
                </div>
            </div>
        </section>
    );
};
