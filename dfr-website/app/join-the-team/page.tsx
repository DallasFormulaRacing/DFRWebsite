import Image from "next/image";
import Link from "next/link";

import DallasFormulaRacingGaragaeOutside from "@/public/assets/team/Dallas_Formula_Racing_Web-29 1.png";

import OverviewSection from "./OverviewSection";
import BecomeALeadSection from "./BecomeALeadSection";
import DriverSeatSection from "./DriverSeatSection";
import AttendingCompetitionSection from "./AttendingCompetitionSection";
import FAQSection from "../(shared-components)/FAQSection";

const text = `Hayden Bell`;

const FAQ = [
    {
        key: "1",
        label: "What can I do as a member?",
        children: <p>{text}</p>,
    },
    {
        key: "2",
        label: "What if I'm not an Engineering major?",
        children: <p>{text}</p>,
    },
    {
        key: "3",
        label: "Where can I find out about meetings?",
        children: <p>{text}</p>,
    },
    {
        key: "4",
        label: "How do I get shop access?",
        children: <p>{text}</p>,
    },
    {
        key: "5",
        label: "If I am unavailable during the meetings, can I come in at another time?",
        children: <p>{text}</p>,
    },
    {
        key: "6",
        label: "How much does the car cost?",
        children: <p>{text}</p>,
    },
    {
        key: "7",
        label: "How fast are the cars?",
        children: <p>{text}</p>,
    },
    {
        key: "8",
        label: "How much does the car weigh?",
        children: <p>{text}</p>,
    },
    {
        key: "9",
        label: "What motor does the car use?",
        children: <p>{text}</p>,
    },
    {
        key: "10",
        label: "What is the red line on the car?",
        children: <p>{text}</p>,
    },
    {
        key: "11",
        label: "What kind of suspension does the car have?",
        children: <p>{text}</p>,
    },
    {
        key: "12",
        label: "Why do the tires not have grooves?",
        children: <p>{text}</p>,
    },
    {
        key: "13",
        label: "How much downforce do the wings give?",
        children: <p>{text}</p>,
    },
    {
        key: "14",
        label: "What parts are 3-D printed?",
        children: <p>{text}</p>,
    },
    {
        key: "15",
        label: "What parts of the car are not designed?",
        children: <p>{text}</p>,
    },
];

export default function Page() {
    return (
        <main className="tracking-wide">
            {/* hero section */}
            <div className="h-[80svh] relative text-white">
                <Image
                    src={DallasFormulaRacingGaragaeOutside.src}
                    alt="team image"
                    className="object-cover brightness-50"
                    fill
                />
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                    <h1 className="text-5xl sm:text-8xl font-bold italic">
                        Join the Team
                    </h1>
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
                    <div className="flex flex-row gap-4 justify-between">
                        <Link href="/about-us">
                            <button className="bg-accent-green text-wh-0 text-xs w-32 sm:text-lg font-semibold sm:w-48 h-14 rounded-md mt-8">
                                Becoming a Lead
                            </button>
                        </Link>
                        <Link href="/about-us">
                            <button className="bg-accent-green text-wh-0 text-xs w-32 sm:text-lg font-semibold sm:w-48 h-14 rounded-md mt-8">
                                Attending Competition
                            </button>
                        </Link>
                        <Link href="/about-us">
                            <button className="bg-accent-green text-wh-0 text-xs w-32  sm:text-lg font-semibold sm:w-48 h-14 rounded-md mt-8">
                                Becoming a Driver
                            </button>
                        </Link>
                    </div>

                    <div className="mt-8 text-xl sm:text-3xl">
                        <Link href="/join-the-team/#FAQ-Section">FAQ</Link>
                        <p className="mt-4">
                            Officer/Shop Location: ECSW RM 1.455
                        </p>
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
