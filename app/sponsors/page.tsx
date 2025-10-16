import React from "react";
import SponsorIcon from "./SponsorIcon";
import SponsorsComponent from "./SponsorComponent";
import EventsSection from "../components/home/EventsSection";
import { SponsorHeaderInfo } from "./SponsorHeaderInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dallas Formula Racing - Sponsors",
  description: `
    Discover the valued sponsors of Dallas Formula Racing, the SAE International chapter at UT Dallas. 
    Our sponsors play a crucial role in supporting our mission to design, build, and compete with formula-style vehicles. 
    Their contributions enable our team to foster innovation, enhance engineering skills, and excel in the Formula SAE competition.
  `,
};

export default function Sponsors() {
  return (
    <main className={"px-0 leading-7"}>
      <div>
        <SponsorHeaderInfo />
        <EventsSection />  
        <SponsorsComponent />
      </div>
    </main>
  );
}
