import { Space, QRCode } from "antd";
import Link from "next/link";

export default function OverviewSections() {
    return (
        <section className="px-2 py-12 sm:p-24">
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
                        Join the Discord for all club updates
                    </p>
                    <p className="text-center text-xl">
                        Discord #about channel has all sub-teams meeting times
                    </p>
                    <p className="text-center text-xl">
                        You can be on more than one sub-team
                    </p>
                </Space>

                <Space direction="vertical" align="center" className="w-full">
                    <QRCode
                        value="https://forms.gle/8qWnfY84g6GSEjte6"
                        className="w-48 h-48"
                        icon="/dfr-logo-tyre.png"
                    />
                    <Link
                        href="https://forms.gle/8qWnfY84g6GSEjte6"
                        className="text-xl"
                    >
                        Interest form to join the discord
                    </Link>
                    <p className="text-center px-2 mt-4 md:mx-24">
                        We have a zero sexually harassment tolerance and an HR
                        department if you ever have issues that need to be
                        resolved. Respect University of Texas at Dallas Code of
                        conduct.
                    </p>
                </Space>
            </Space>
        </section>
    );
}
