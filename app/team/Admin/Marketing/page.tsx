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
        "At Dallas Formula Racing, marketing isn’t just about promotion—it’s about telling the story of a team built on passion, dedication, and engineering excellence. Every design, every sponsorship, and every social media post serves a purpose: to showcase the relentless effort our members put into building a competitive race car. We’re not just sharing content; we’re building a brand, engaging a community, and inspiring the next generation of innovators. The track is where we compete, but the impact of our brand extends far beyond it.",
    },
    {
      bigTitle: "Marketing",
      image: "/assets/team/Fall2025Officers/Bouvie.png",
      name: "Bhuvi T.",
      role: "Marketing Co-Lead",
      quote:
        "Dallas Formula Racing marketing is an opportunity to connect with like-minded individuals about a passion project! We are all interested in being helpful, creative, innovative. By being a part of this organization, I have realized the importance of every part of social media, brand presence, and presentation because it all reflects on our whole organization. It’s not just content that is being shared, it’s a community we are representing.",
    },
  ],
};



export default function Page() {
  const officer = OFFICERS.leadership[0];
  const mentee = OFFICERS.leadership[1];

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
      <br />
      <div className="hidden md:flex md:flex-row p-0 sm:p-16">
        <div className="w-2/3">
          <OfficerSection
            bigTitle={mentee.bigTitle}
            name={mentee.name}
            role={mentee.role}
            quote={mentee.quote}
          />
        </div>
        <div className="w-1/3 relative">
          <Image
            src={mentee.image}
            alt={mentee.role}
            fill={true}
            className="rounded-lg object-contain w-full md:-ml-36 lg:-ml-48"
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
          <center><InstagramEmbed url="https://www.instagram.com/p/DQCXb2hjYL7/?img_index=1" /></center>
        </div>
      </div>
    </main>
  );
}
