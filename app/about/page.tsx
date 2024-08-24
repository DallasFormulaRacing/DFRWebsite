"use client";
import React from "react";
import Image from "next/image";
import CarDash from "@/public/assets/NewPictures/car_dash.jpg";
import Car2024 from "@/public/assets/Cars/2024/2024_1.png";
import OrgChart from "@/public/assets/team/OrgChart2024.png";
import ImageBreaks from "../components/ImageBreaks";
import StatsSection from "../components/StatsSection";
import dynamic from "next/dynamic";
import Link from "next/link";

const Demographics = dynamic(() => import("./Demographics"), { ssr: false });

type Props = {};

export default function About() {
  return (
    <main className={"px-0 leading-7"}>
      <div className="relative h-224">
        <Image
          src={Car2024.src}
          alt={"2024 Car"}
          className="w-full object-cover object-bottom"
          fill
        />
      </div>

      <section id="about-us" className={"mt-10 py-24"}>
        <div className={"text-center space-y-8"}>
          <h1 className={"text-5xl font-bold text-accent-orange"}>About Us</h1>
          <p className={"w-4/5 mx-auto text-2xl"}>
            Dallas Formula Racing is a student-led organization and is the
            chapter for SAE International at the University of Texas at Dallas.
            Our team was founded in 2014 and has successfully built three
            formula-style vehicles for the Formula SAE competition. The diverse
            array of projects on our team results in student collaboration from
            all backgrounds and experience.
          </p>
          <p className={"w-4/5 mx-auto text-2xl"}>
            We are dedicated to imparting our enthusiasm for engineering and
            math to aspiring individuals. We volunteer at STEM fairs in the DFW
            area to encourage new students to take similar paths. We leave a
            lasting impression on future innovators by demonstrating various
            STEM applications through our diverse group.
          </p>
        </div>
      </section>
      <section id="Mission Statement" className={"my-14"}>
        <div className={"text-center space-y-8"}>
          <h1 className={"text-5xl font-bold text-accent-orange"}>
            Mission Statement
          </h1>
          <p className={"w-4/5 mx-auto text-2xl"}>
            Our goal is to cultivate well-rounded engineers by fostering
            technical skills, teamwork, and business acumen through the entire
            engineering and design cycle. We strive to challenge and inspire
            students to pursue their passions while giving them a platform to
            showcase their abilities through participation in the Formula SAE
            competition.
          </p>
          <Link href="/team/join-the-team">
            <button className="bg-accent-green w-32 sm:text-lg font-semibold sm:w-48 h-14 rounded-md my-8 buttonEffect shadow-sm">
              Join
            </button>
          </Link>
        </div>
      </section>
      <ImageBreaks
        image={CarDash.src}
        imageFit={"object-cover"}
        imageHeight={"h-144"}
      />
      {/* <StatsSection /> */}
      {/* <Demographics /> */}
      <section id="about-us" className={"mt-10"}>
        <div className={"text-center space-y-8"}>
          <h1 className={"text-5xl font-bold text-accent-orange"}>
            About Formula SAE
          </h1>
          <p className={"w-4/5 mx-auto text-2xl"}>
            Formula SAE is an international competition hosted by the Society of
            Automotive Engineers (SAE). This Collegiate Design Series (CDS)
            competition pushes students to go beyond classroom material by
            challenging them to design, build, and test the performance of a
            formula-style vehicle. Each vehicle is inspected in a series of
            tests to comply with all competition rules to ensure safety.
            Students are tested and scored on their knowledge of their vehicle
            design by experts in various industries and cars are tested on
            numerous tracks including acceleration, autocross, endurance, and
            skid pad.
          </p>
          <p className={"w-4/5 mx-auto text-2xl"}>
            Formula SAE promotes careers and excellence in engineering as it
            encompasses all aspects of the automotive industry including
            research, design, manufacturing, testing, developing, marketing,
            management, and finances.
          </p>
        </div>
      </section>
      <h1
        id="org-chart"
        className={
          "text-5xl font-bold col-span-1 row-span-1 text-center mt-40 text-accent-orange"
        }
      >
        Org Chart
      </h1>
      <div
        className={
          "basis-full relative w-full h-[24svh] md:h-[56svh] mt-8 mb-24"
        }
      >
        <Image
          fill
          alt={"OrgChart"}
          placeholder={"blur"}
          className="object-contain"
          src={OrgChart}
          unoptimized
        />
      </div>
    </main>
  );
}
