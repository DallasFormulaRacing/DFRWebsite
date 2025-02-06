"use client"; // Ensures this file works as a Client Component

import OfficerSection from "./OfficerSection";
import TitleSection from "./TitleSection";
import Image from "next/image";
import InstagramEmbed from "./InstagramEmbed";
import Link from "next/link"; // Import Link from next/link

const OFFICERS = {
  leadership: [
    {
      bigTitle: "Creative Media",
      image: "/assets/team/Spring2025Officers/cristobal.png",
      name: "Cristobal Santamaria",
      role: "Creative Media Director",
      quote:
        "Events and Logistics is the backbone of team operations, handling everything from planning team events to coordinating outreach and competitions. We ensure every event runs smoothly through careful preparation, logistical support, and collaboration with all sub-teams.",
    },
  ],
};

export default function Page() {
  const officer = OFFICERS.leadership[0];

  return (
    <main className="p-4">
      <div className="hidden md:flex md:flex-row gap-4 p-0 sm:p-16">
        <div className="w-1/3 relative">
          <Image
            src={officer.image}
            alt={officer.role}
            fill={true}
            className="rounded-lg object-contain w-full md:ml-36 lg:ml-48"
          />
        </div>
        <div className="w-2/3">
          <OfficerSection
            bigTitle={officer.bigTitle}
            name={officer.name}
            role={officer.role}
            quote={officer.quote}
          />
        </div>
      </div>

      <div className="md:hidden">
        <OfficerSection
          bigTitle={officer.bigTitle}
          image={officer.image}
          name={officer.name}
          role={officer.role}
          quote={officer.quote}
        />
      </div>

      {/* Flex container for Instagram and LinkedIn */}
      <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center items-center">
        {/* Instagram Embed */}
        <div className="flex-1 flex justify-center items-center">
          <InstagramEmbed url="https://www.instagram.com/dallasformularacing/" />
        </div>

        
      </div>
    </main>
  );
}
