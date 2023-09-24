import DallasFormulaRacingGaragaeOutside from "@/public/assets/team/Dallas_Formula_Racing_Web-29 1.png";
import Image from "next/image";
import Link from "next/link";
import { QRCode, Space, Card, Collapse } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

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

            {/* overview section */}
            <section className="py-24">
                <h1 className="font-bold text-center mb-8 text-4xl">
                    General Overview
                </h1>

                <Space className="w-full" direction="vertical" size={"large"}>
                    <Space
                        direction="vertical"
                        align="center"
                        size={"middle"}
                        className="w-full px-2"
                    >
                        <p className="text-center text-xl">
                            Join Slack for all club updates
                        </p>
                        <p className="text-center text-xl">
                            Slack Calendar has all sub-teams meeting times
                        </p>
                        <p className="text-center text-xl">
                            You can be on more than one sub-team
                        </p>
                    </Space>

                    <Space
                        direction="vertical"
                        align="center"
                        className="w-full"
                    >
                        <QRCode
                            value="https://forms.gle/6Z6Z1Z6Z6Z6Z6Z6Z6"
                            className="w-48 h-48"
                            icon="/dfr-logo-tyre.png"
                        />
                        <Link
                            href="https://forms.gle/6Z6Z1Z6Z6Z6Z6Z6Z6"
                            className="text-xl"
                        >
                            Let me join! (Click here)
                        </Link>
                        <p className="text-center px-2 mt-4 md:mx-24">
                            We have a zero sexually harassment tolerance and an
                            HR department if you ever have issues that need to
                            be resolved. Respect University of Texas at Dallas
                            Code of conduct.
                        </p>
                    </Space>
                </Space>
            </section>

            <div className="h-176 relative text-white">
                <Image
                    src={DallasFormulaRacingGaragaeOutside.src}
                    alt="team image"
                    className="object-cover brightness-50"
                    fill
                />
                <div className="absolute bottom-6 left-6">
                    <h1 className="text-6xl font-bold italic w-full break-before-all sm:text-9xl">
                        Become a Lead
                    </h1>
                </div>
            </div>

            <section className="p-12 sm:p-24">
                <div className="flex flex-row flex-wrap justify-evenly">
                    <Card className="w-full flex items-center justify-center h-[300px] border-none sm:w-1/3">
                        <h1 className="text-4xl font-bold text-center">
                            Experience
                        </h1>
                        <Space
                            direction="vertical"
                            align="center"
                            className="w-full px-2 mt-4 md:text-lg"
                        >
                            <p className="text-center">
                                Well versed in vehicle dynamics
                            </p>
                            <p className="text-center">
                                Understand system limits
                            </p>
                            <p className="text-center">
                                Effective engineering process
                            </p>
                        </Space>
                    </Card>
                    <Card className="w-full flex items-center justify-center h-[300px] border-none sm:w-1/3">
                        <h1 className="text-4xl font-bold text-center">
                            Leadership
                        </h1>
                        <Space
                            direction="vertical"
                            align="center"
                            className="w-full px-2 mt-4 md:text-lg"
                        >
                            <p className="text-center">
                                Be an effective teammate
                            </p>
                            <p className="text-center">
                                Work closely with all leads
                            </p>
                            <p className="text-center">
                                Communcation skills with your team
                            </p>
                        </Space>
                    </Card>
                    <Card className="w-full flex items-center justify-center h-[300px] border-none sm:w-1/3">
                        <h1 className="text-4xl font-bold text-center">
                            Dedication
                        </h1>
                        <Space
                            direction="vertical"
                            align="center"
                            className="w-full px-2 mt-4 md:text-lg"
                        >
                            <p className="text-center">
                                Be an active and hard-working member of DFR
                            </p>
                            <p className="text-center">
                                Take initiative on projects
                            </p>
                            <p className="text-center">
                                Contribute unique interpretations within FSAE
                                limits
                            </p>
                        </Space>
                    </Card>
                </div>
            </section>

            <div className="h-176 relative text-white">
                <Image
                    src={DallasFormulaRacingGaragaeOutside.src}
                    alt="team image"
                    className="object-cover brightness-50"
                    fill
                />
                <div className="absolute bottom-6 right-6 text-right">
                    <h1 className="text-6xl font-bold italic break-before-all sm:text-9xl">
                        Buckle up and Drive
                    </h1>
                </div>
            </div>

            <section className="p-12 sm:p-24">
                <Card className="w-full flex items-center justify-center h-[300px] border-none">
                    <h1 className="text-4xl font-bold text-center">
                        Hop in the Driver's Seat
                    </h1>
                    <Space
                        direction="vertical"
                        align="center"
                        className="w-full px-2 mt-4 md:text-lg"
                    >
                        <p className="text-center">
                            Be an active and dedicated member
                        </p>
                        <p className="text-center">
                            Practice hours on our racing simulator
                        </p>
                        <p className="text-center">
                            Effective engineering process
                        </p>
                    </Space>
                </Card>
            </section>

            <div className="h-176 relative text-white">
                <Image
                    src={DallasFormulaRacingGaragaeOutside.src}
                    alt="team image"
                    className="object-cover brightness-50"
                    fill
                />
                <div className="absolute bottom-6 right-6 text-right">
                    <h1 className="text-6xl font-bold italic break-before-all sm:text-9xl">
                        Attending Competition
                    </h1>
                </div>
            </div>

            <section className="p-12 sm:p-24">
                <Card className="w-full flex items-center justify-center h-[300px] border-none">
                    <h1 className="text-4xl font-bold text-center">
                        Invitations to Competition
                    </h1>
                    <Space
                        direction="vertical"
                        align="center"
                        className="w-full px-2 mt-4 md:text-lg"
                    >
                        <p className="text-center">
                            Being a leader of Dallas Formula Racing that
                            represents the organization and reflects our values
                        </p>
                        <p className="text-center">
                            Demonstrate soft and techincal skills that will
                            assist the team stand out
                        </p>
                        <p className="text-center">
                            Apply for positions when applications for
                            competition open
                        </p>
                    </Space>
                </Card>
            </section>

            <section id="FAQ-Section" className="p-12">
                <h1 className="font-bold text-center mb-8 text-4xl">FAQ</h1>
                <Collapse className="border-none bg-transparent text-lg" items={FAQ} />
            </section>
        </main>
    );
}
