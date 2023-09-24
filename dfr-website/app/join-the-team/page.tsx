import DallasFormulaRacingGaragaeOutside from "@/public/assets/team/Dallas_Formula_Racing_Web-29 1.png";
import Image from "next/image";
import Link from "next/link";
import { QRCode, Space, Input } from "antd";

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
                    <h1 className="text-5xl md:text-8xl font-bold italic">
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
                <div className="absolute bottom-[15%] md:bottom-1/4 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="flex flex-row gap-4 justify-between">
                        <Link href="/about-us">
                            <button className="bg-accent-green text-wh-0 text-xs w-32 md:text-lg font-semibold md:w-48 h-14 rounded-md mt-8">
                                Becoming a Lead
                            </button>
                        </Link>
                        <Link href="/about-us">
                            <button className="bg-accent-green text-wh-0 text-xs w-32 md:text-lg font-semibold md:w-48 h-14 rounded-md mt-8">
                                Attending Competition
                            </button>
                        </Link>
                        <Link href="/about-us">
                            <button className="bg-accent-green text-wh-0 text-xs w-32  md:text-lg font-semibold md:w-48 h-14 rounded-md mt-8">
                                Becoming a Driver
                            </button>
                        </Link>
                    </div>

                    <div className="mt-8 text-xl md:text-3xl">
                        <Link href="/about-us">FAQ</Link>
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

                <div className="flex justify-center">
                    <Space direction="vertical">
                        <QRCode
                            value="https://forms.gle/6Z6Z1Z6Z6Z6Z6Z6Z6"
                            className="w-48 h-48"
                            icon="/dfr-logo-tyre.png"
                        />
                        <Link href="https://forms.gle/6Z6Z1Z6Z6Z6Z6Z6Z6">
                            Take me to the application!
                        </Link>
                    </Space>
                </div>
            </section>
        </main>
    );
}
