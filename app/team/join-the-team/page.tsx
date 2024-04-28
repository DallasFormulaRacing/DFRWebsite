"use client";
import Image from "next/image";
import Link from "next/link";

import DallasFormulaRacingGaragaeOutside from "@/public/assets/team/Dallas_Formula_Racing_Web-29 1.png";
import AutoCrossTeamPic from "@/public/assets/team/AutoCrossTeamPic.jpg";

import OverviewSection from "./OverviewSection";
import BecomeALeadSection from "./BecomeALeadSection";
import DriverSeatSection from "./DriverSeatSection";
import AttendingCompetitionSection from "./AttendingCompetitionSection";
import FAQSection from "../../components/FAQSection";
import { List, Space } from "antd";

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
                        className="w-full px-2"
                    >
                        <p>
                            Welcome to the team. We are excited to have you! We
                            do not require any experience or requirements to
                            join. Our leads will teach you everything you need
                            to know.
                        </p>
                        <p>
                            Here is how you can join the team and get involved:
                        </p>
                        <a
                            href="https://forms.gle/8qWnfY84g6GSEjte6"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Interest Form to Join the Discord
                        </a>
                    </Space>
                }
                bordered
                dataSource={joinTheTeam}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            ></List>
        ),
    },
    {
        key: "1",
        label: "Can I still join if I don't have any experience?",
        children: (
            <p>
                Yes! We are open to all UT Dallas students at any skill level or
                major, and we will teach the skills needed to be successful on
                the team. All we ask for is the willingness to learn!
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
                        It takes a village to build a car and requires months of
                        dedication. The process includes, but is not limited to
                        the following:
                    </div>
                }
                bordered
                dataSource={memberTasks}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            ></List>
        ),
    },
    {
        key: "3",
        label: "What if I'm not an Engineering major?",
        children: (
            <Space>
                <p>
                    All majors are welcome to join. If you do not have the
                    skills or knowledge for a certain subsystem, you can be
                    paired with an experienced member to learn from.
                </p>
                <br />
                <p>
                    For those interested in joining, but would not like to
                    contribute to the engineering side, we have a business
                    sub-team as well that works on marketing, event planning,
                    and fundraising.
                </p>
            </Space>
        ),
    },
    {
        key: "4",
        label: "Where can I find out about meetings?",
        children: (
            <p>
                Join our discord and check out the #about channel. If you can't
                find it there, the times are also posted outside the shop, or
                you can also ask a lead.
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
        label: "If I am unavailable during the meetings, can I come in at another time?",
        children: (
            <p>Schedule a time with the respective system lead to catch up.</p>
        ),
    },
    {
        key: "7",
        label: "How Can I be successful on the team?",
        children: (
            <p>
                Some tips to be successful on the team are: 1. Be willing to
                learn, 2. Ask questions, 3. Take initiative
            </p>
        ),
    },
    {
        key: "8",
        label: "What is the time commitment?",
        children: (
            <p>
                There is not a required time commitment to the team, so you can
                decide what time commitment works best with your schedule. We
                recommend at least attending weekly sub team meetings and taking
                on projects to get the most of your experience.
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
                        We will have applications for open lead positions when
                        positions open up, typically after each competition
                        season, where our Admin/System Leads will pick the best
                        applicant. The following may increase your chances of
                        getting selected:
                    </p>
                }
                bordered
                dataSource={becomeALead}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            ></List>
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
                className="w-full px-2"
            >
                <p>
                    Drivers are required to attend and assist testing day
                    procedures. The seat is earned through commitment to the
                    team and earning the trust of the leads and admin which must
                    be kept to maintain the driver seat.
                </p>
                <br />
                <p>
                    To drive at competition, there will be a form of tryouts
                    conducted towards the end of the spring semester leading up
                    to competition. You must already have earned the trust of
                    the team and be cleared to drive beforehand.
                </p>
                <br />
                <p>
                    Do not expect to show up to a testing session and drive your
                    first time there.
                </p>
            </Space>
        ),
    },
];

export default function Page() {
    return (
        <main className="tracking-wide">
            {/* hero section */}
            <div className="h-[80svh] relative text-white">
                <Image
                    src={AutoCrossTeamPic.src}
                    alt="team image"
                    className="object-cover brightness-50"
                    fill
                />
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-5xl sm:text-8xl font-bold">
                            Join the Team
                        </h1>
                        <Link href="https://forms.office.com/Pages/ResponsePage.aspx?id=HR0ojU2c90uxbgMtFd6fbGDVZ4AHaLJJuusb0JoC9oNUQllFVjc0MUVHUFNBRFJZVzhNVTlKOFNSQS4u">
                            <button className="bg-accent-green w-32 sm:text-lg font-semibold sm:w-48 h-14 rounded-md mt-8 buttonEffect shadow-sm">
                                Apply Now
                            </button>
                        </Link>
                    </div>

                    <div className="flex flex-row justify-center mt-8 text-xs sm:text-xl">
                        <p className="px-4 border-r-2">
                            No previous experience needed
                        </p>
                        <p className="px-4 border-r-2">Join multiple teams</p>
                        <p className="px-4 border-r-2">Open to all majors</p>
                        <p className="px-4">No time commitment</p>
                    </div>
                </div>
                <div className="absolute bottom-[15%] sm:bottom-1/4 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="mt-4 text-xl sm:text-3xl">
                        <Link
                            className="text-accent-orange underline"
                            href="/join-the-team/#FAQ-Section"
                        >
                            FAQ
                        </Link>
                        <p className="mt-4">Shop Location: ECSW RM 1.455</p>
                    </div>
                </div>
            </div>

            <OverviewSection />
            <BecomeALeadSection />
            <DriverSeatSection />
            <AttendingCompetitionSection />
            <FAQSection faqItems={FAQ} />
        </main>
    );
}
