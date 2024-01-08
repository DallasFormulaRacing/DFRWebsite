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
                        Open to students of all majors and skill levels at UTD
                    </p>
                    <p className="text-center text-xl">
                        Join the Discord for all team updates
                    </p>
                </Space>

                <Space direction="vertical" align="center" className="w-full">
                    <QRCode
                        value="https://forms.office.com/Pages/ResponsePage.aspx?id=HR0ojU2c90uxbgMtFd6fbGDVZ4AHaLJJuusb0JoC9oNUQllFVjc0MUVHUFNBRFJZVzhNVTlKOFNSQS4u"
                        className="w-48 h-48"
                        icon="/dfr-logo-tyre.png"
                    />
                    <Link
                        href="https://forms.office.com/Pages/ResponsePage.aspx?id=HR0ojU2c90uxbgMtFd6fbGDVZ4AHaLJJuusb0JoC9oNUQllFVjc0MUVHUFNBRFJZVzhNVTlKOFNSQS4u"
                        className="text-xl"
                    >
                        Interest form to join the team
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
