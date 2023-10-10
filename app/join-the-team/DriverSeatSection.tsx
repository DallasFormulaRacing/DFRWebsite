import { Card, Space } from "antd";
import Image from "next/image";
import BuckleUpAndDriveImage from "@/public/assets/team/20220303_115628 1.png";
import DrivingImage from "@/public/assets/NewPictures/car_driving.jpg"

export default function DriverSeatSection() {
    return (
        <>
            <div className="h-176 relative text-white">
                <Image
                    src={DrivingImage.src}
                    alt="team image"
                    className="object-cover"
                    fill
                />
                <div className="absolute bottom-6 right-6 text-right">
                    <h1 className="text-6xl font-bold break-before-all sm:text-9xl">
                        Buckle up and Drive
                    </h1>
                </div>
            </div>
            <section className="px-2 py-12 sm:p-24">
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
        </>
    )
}