"use client"; // Ensures this file works as a Client Component

import OfficerSection from "./OfficerSection";
import TitleSection from "./TitleSection";
import Image from "next/image";
import InstagramEmbed from "./InstagramEmbed";
import React from "react";


const OFFICERS = {
  leadership: [
    {
      bigTitle: "Marketing",
      image: "/assets/team/Spring2025Officers/rithvik.png",
      name: "Rithvik Kaniganti",
      role: "Marketing Director",
      quote:
        "At Dallas Formula Racing, marketing isn’t just about promotion—it’s about telling the story of a team built on passion, dedication, and engineering excellence. Every design, every sponsorship, and every social media post serves a purpose: to showcase the relentless effort our members put into building a competitive race car. We’re not just sharing content; we’re building a brand, engaging a community, and inspiring the next generation of innovators. The track is where we compete, but the impact of our brand extends far beyond it",
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

      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="flex-1">
          <InstagramEmbed url="https://www.instagram.com/p/DQCXb2hjYL7/?img_index=1" />
        </div>

      </div>
    </main>
  );
}
