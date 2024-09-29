import { Card, Space } from "antd";
import Image from "next/image";
import BecomeALeadSectionImage from "@/public/assets/team/Dallas Formula Racing Web-32 1.png";

export default function BecomeALeadSection() {
  return (
    <>
      <div className="h-176 relative text-white">
        <Image
          src={BecomeALeadSectionImage.src}
          alt="team image"
          className="object-cover"
          fill
        />
        <div className="absolute bottom-6 left-6">
          <h1 className="text-6xl font-bold w-full break-before-all sm:text-9xl">
            Become a Lead
          </h1>
        </div>
      </div>
      <section className="px-2 py-24 min-h-[68svh] flex justify-center items-center">
        <div className="flex flex-row flex-wrap justify-center gap-4 w-full">
          <Card
            className="flex items-center justify-center h-[300px] border-none w-full md:w-1/4"
            bordered={false}>
            <h1 className="text-4xl font-bold text-center">Experience</h1>
            <Space
              direction="vertical"
              align="center"
              className="w-full px-2 mt-4 md:text-lg">
              <p className="text-center">Well versed in vehicle dynamics</p>
              <p className="text-center">Understand system limits</p>
              <p className="text-center">Effective engineering process</p>
            </Space>
          </Card>
          <Card
            className="flex items-center justify-center h-[300px] border-none w-full md:w-1/4"
            bordered={false}>
            <h1 className="text-4xl font-bold text-center">Leadership</h1>
            <Space
              direction="vertical"
              align="center"
              className="w-full px-2 mt-4 md:text-lg">
              <p className="text-center">Be an effective teammate</p>
              <p className="text-center">Work closely with all leads</p>
              <p className="text-center">Communcation skills with your team</p>
            </Space>
          </Card>
          <Card
            className="flex items-center justify-center h-[300px] border-none w-full md:w-1/4"
            bordered={false}>
            <h1 className="text-4xl font-bold text-center">Dedication</h1>
            <Space
              direction="vertical"
              align="center"
              className="w-full px-2 mt-4 md:text-lg">
              <p className="text-center">
                Be an active and hard-working member of DFR
              </p>
              <p className="text-center">Take initiative on projects</p>
              <p className="text-center">
                Contribute unique interpretations within FSAE limits
              </p>
            </Space>
          </Card>
        </div>
      </section>
    </>
  );
}
