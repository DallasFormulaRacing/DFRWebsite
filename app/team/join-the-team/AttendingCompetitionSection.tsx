import { Card, Space } from "antd";
import Image from "next/image";
import AttendingCompetitionImage from "@/public/assets/team/DSC_0093 1.png";

export default function AttendingCompetition() {
  return (
    <>
      <div className="h-176 relative text-white">
        <Image
          src={AttendingCompetitionImage.src}
          alt="team image"
          className="object-cover"
          fill
        />
        <div className="absolute bottom-6 right-6 text-right">
          <h1 className="text-6xl font-bold break-before-all sm:text-9xl">
            Attending Competition
          </h1>
        </div>
      </div>
      <section className="px-2 py-24 min-h-[68svh] flex justify-center items-center">
        <Card
          className="w-full flex items-center justify-center h-[300px] border-none"
          bordered={false}
        >
          <h1 className="text-4xl font-bold text-center">
            Invitations to Competition
          </h1>
          <Space
            direction="vertical"
            align="center"
            className="w-full px-2 mt-4 md:text-lg"
          >
            <p className="text-center">
              Being a leader of Dallas Formula Racing that represents the
              organization and reflects our values
            </p>
            <p className="text-center">
              Demonstrate soft and technical skills that will help the team
              stand out
            </p>
            <p className="text-center">
              Apply for positions when applications for competition open
            </p>
          </Space>
        </Card>
      </section>
    </>
  );
}
