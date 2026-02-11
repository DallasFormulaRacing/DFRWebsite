"use client";
import React from "react";
import Image from "next/image";
import CarDash from "@/public/assets/NewPictures/car_dash.jpg";
import Car2024 from "@/public/assets/Cars/2024/2024_1.png";
import OrgChart from "@/public/assets/team/OrgChartFall2024.png";
import ImageBreaks from "../components/ImageBreaks";
import StatsSection from "../components/StatsSection";
import FAQSection from "../components/FAQSection";
import dynamic from "next/dynamic";
import Link from "next/link";
import { List, Space } from "antd";
import { Metadata } from "next";

const Demographics = dynamic(() => import("./Demographics"), { ssr: false });

type Props = {};

const memberTasks = [
  "Part Design",
  "Manufacturing",
  "Testing",
  "Marketing/Fundraising",
  "Data Analysis",
  "Simulation Modeling",
];

const joinTheTeam = [
  "1. Join our discord server by filling out this form, or come by the shop (ECSW 1.455)",
  "2. Join the channel(s) for the subteam(s) you are interested in",
  '3. Introduce yourself and ask any questions such as "How can I get involved? Are there any projects that need an extra hand? Here are my skills…"',
  "4. Find meeting dates for subteam meetings under the #about channel",
  "5. Attend the meeting and get started on projects!",
];

const becomeALead = [
  "Being well-versed in vehicle dynamics",
  "Understanding system limits",
  "Having an effective engineering process",
  "Being an effective teammate",
  "Working closely with other subsystems and leads",
  "Having proficient communication skills with your team",
  "Being an active and hard-working member of DFR",
  "Taking initative on projects",
  "Contributing unique interpretations withing FSAE limits",
  "Commiting more time to the team throughout the year",
  "Attending team volunteeting opportunities",
  "Taking on independent projects",
  "Learning new or needed skills for bettering the team",
];

const text = `something`;
const FAQ = [
  {
    key: "0",
    label: "How do I join?",
    children: (
      <List
        header={
          <Space
            direction="vertical"
            align="center"
            size={"middle"}
            className="w-full px-2">
            <p>
              Welcome to the team. We are excited to have you! We do not require
              any experience or requirements to join. Our leads will teach you
              everything you need to know.
            </p>
            <p>Here is how you can join the team and get involved:</p>
            <a
              href="https://forms.office.com/r/EACF3H7WbV"
              target="_blank"
              rel="noopener noreferrer">
              Interest Form to Join the Discord
            </a>
          </Space>
        }
        bordered
        dataSource={joinTheTeam}
        renderItem={(item) => <List.Item>{item}</List.Item>}></List>
    ),
  },
  {
    key: "1",
    label: "Can I still join if I don't have any experience?",
    children: (
      <p>
        Yes! We are open to all UT Dallas students at any skill level or major,
        and we will teach the skills needed to be successful on the team. All we
        ask for is the willingness to learn!
      </p>
    ),
  },
  {
    key: "2",
    label: "What can I do as a member?",
    children: (
      <List
        header={
          <div>
            It takes a village to build a car and requires months of dedication.
            The process includes, but is not limited to the following:
          </div>
        }
        bordered
        dataSource={memberTasks}
        renderItem={(item) => <List.Item>{item}</List.Item>}></List>
    ),
  },
  {
    key: "3",
    label: "What if I'm not an Engineering major?",
    children: (
      <Space>
        <p>
          All majors are welcome to join. If you do not have the skills or
          knowledge for a certain subsystem, you can be paired with an
          experienced member to learn from.
        </p>
        <br />
        <p>
          For those interested in joining, but would not like to contribute to
          the engineering side, we have a business sub-team as well that works
          on marketing, event planning, and fundraising.
        </p>
      </Space>
    ),
  },
  {
    key: "4",
    label: "Where can I find out about meetings?",
    children: (
      <p>
        Join our discord and check out the #about channel. If you can't find it
        there, the times are also posted outside the shop, or you can also ask a
        lead.
      </p>
    ),
  },
  {
    key: "5",
    label: "How do I get shop access?",
    children: <p>Only team leads are given card access to the shop.</p>,
  },
  {
    key: "6",
    label:
      "If I am unavailable during the meetings, can I come in at another time?",
    children: (
      <p>Schedule a time with the respective system lead to catch up.</p>
    ),
  },
  {
    key: "7",
    label: "How can I be successful on the team?",
    children: (
      <p>
        Some tips to be successful on the team are: 1. Be willing to learn, 2.
        Ask questions, 3. Take initiative
      </p>
    ),
  },
  {
    key: "8",
    label: "What is the time commitment?",
    children: (
      <p>
        There is not a required time commitment to the team, so you can decide
        what time commitment works best with your schedule. We recommend at
        least attending weekly sub team meetings and taking on projects to get
        the most of your experience.
      </p>
    ),
  },
  {
    key: "9",
    label: "How can I become a lead?",
    children: (
      <List
        header={
          <p>
            We will have applications for open lead positions when positions
            open up, typically after each competition season, where our
            Admin/System Leads will pick the best applicant. The following may
            increase your chances of getting selected:
          </p>
        }
        bordered
        dataSource={becomeALead}
        renderItem={(item) => <List.Item>{item}</List.Item>}></List>
    ),
  },
  {
    key: "10",
    label: "How can I become a driver?",
    children: (
      <Space
        direction="vertical"
        align="start"
        size={"middle"}
        className="w-full px-2">
        <p>
          Drivers are required to attend and assist testing day procedures. The
          seat is earned through commitment to the team and earning the trust of
          the leads and admin which must be kept to maintain the driver seat.
        </p>
        <br />
        <p>
          To drive at competition, there will be a form of tryouts conducted
          towards the end of the spring semester leading up to competition. You
          must already have earned the trust of the team and be cleared to drive
          beforehand.
        </p>
        <br />
        <p>
          Do not expect to show up to a testing session and drive your first
          time there.
        </p>
      </Space>
    ),
  },
];

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
            <button className="bg-accent-orange w-32 sm:text-lg font-semibold sm:w-48 h-14 rounded-md my-8 buttonEffect shadow-sm">
              Apply
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
      {/*<h1
        id="org-chart"
        className={
          "text-5xl font-bold col-span-1 row-span-1 text-center mt-40 text-accent-orange"
        }>
        Org Chart
      </h1>
      <div
        className={
          "basis-full relative w-full h-[24svh] md:h-[56svh] mt-8 mb-24"
        }>
        <Image
          fill
          alt={"OrgChart"}
          placeholder={"blur"}
          className="object-contain"
          src={OrgChart}
          unoptimized
        />
      </div>*/}
      <FAQSection faqItems={FAQ} />
    </main>
  );
}
