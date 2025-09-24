"use client"; // Ensures this file works as a Client Component

import OfficerSection from "./OfficerSection";
import TitleSection from "./TitleSection";
import Image from "next/image";
import React from "react";


const OFFICERS = {
  leadership: [
    {
      bigTitle: "F1 Tenth",
      image: "/assets/team/Spring2025Officers/Rovin.png",
      name: "Rovin Raj",
      role: "F1 Tenth Lead",
      quote:"Building an automated car is not just about engineering; it's about pushing the boundaries of innovation and teamwork. As a leader of F1 Tenth, I have the privilege to guide a passionate group of individuals who are redefining the future of transportation with every line of code.",
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
      <TitleSection
        image= "/gallery/24comp.jpg"
        title=""
        subtitle=""
        position="BottomRight"
      />
    </main>
  );
}
