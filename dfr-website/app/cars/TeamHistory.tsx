import React from 'react'
import Image from 'next/image'
import Car2022 from '@/public/assets/Cars/2022Michigan.jpg'
import Car2021 from '@/public/assets/Cars/2021Car.jpg'
import Car2019 from '@/public/assets/Cars/2019Car.jpg'
import Car2018 from '@/public/assets/Cars/2018Car.jpg'


type Props = {}

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
                            "(max-width: 480px) 100vw, (max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
                        }
                        style={{ objectFit: "cover" }}
                        unoptimized
                    />
                </div>
                <div className={"col-span-2 row-span-1"}>
                    <h1 className={"text-5xl font-bold mt-10"}>
                        2022 Aerodynamics Package
                    </h1>
                    <p className={"w-4/5 mx-auto text-2xl mt-10"}>
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
            <div
                className={
                    "sm:grid sm:h-[500px] grid-cols-3 grid-rows-1 text-center my-10"
                }
            >
                <div className={"col-span-2 row-span-1"}>
                    <h1 className={"text-5xl font-bold mt-10"}>
                        STEM Volunterring
                    </h1>
                    <p className={"w-4/5 mx-auto text-2xl mt-10"}>
                        Dallas Formula Racing attends various STEM events to
                        further the impact that our team has on a wider range of
                        students. Some of the events we have attended include
                        Westwood Jr High's Math, Science & Technology
                        Celebration Day, STEM in the Park, eWeeek, and the Young
                        WISE kick-off meeting.
                    </p>
                </div>
                <div className={"col-span-1 row-span-1"}>
                    <Image
                        alt={"2022AeroPackage"}
                        placeholder={"blur"}
                        src={Car2021}
                        sizes={
                            "(max-width: 480px) 100vw, (max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
                        }
                        style={{ objectFit: "cover" }}
                        unoptimized
                    />
                </div>
            </div>
    </section>
  )
}
