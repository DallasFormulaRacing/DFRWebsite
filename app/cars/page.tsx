import React from "react";
import Image from "next/image";
import ImageBreaks from "../components/ImageBreaks";
import { TeamHistory } from "./TeamHistory";
import Car2024 from "@/public/assets/Cars/2024/2024_2.png";
import DFRTyreLogo from "@/public/dfr-logo-tyre.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dallas Formula Racing - Cars',
  description: `
    Explore the history of the cars developed by Dallas Formula Racing, the SAE International chapter at UT Dallas. 
    Since its founding in 2014, the team has been committed to designing and building formula-style vehicles, 
    showcasing their engineering prowess and teamwork skills through participation in the Formula SAE competition.
  `,
}

export default function Cars() {
  return (
    <main className={"px-0 leading-7 min-h-screen"}>
      {/* <div className={"relative"}>
        <ImageBreaks
          image={Car2024.src}
          imageHeight={"h-224"}
          imageFit={"object-cover object-bottom"}
        />
        <div className={"absolute left-12 bottom-20"}>
          <Image
            fill
            src={DFRTyreLogo}
            alt={"DFRTyreLogo"}
            placeholder={"blur"}
            sizes={
              "(max-width: 480px) 100dvw, (max-width: 480px) 100dvw, (max-width: 768px) 75dvw, (max-width: 1060px) 50dvw, 25dvw"
            }
          />
        </div>
      </div> */}
      <TeamHistory />
    </main>
  );
}
