import ImageBreaks from "@/app/components/ImageBreaks";
import React from "react";
import Image from "next/image";
import OfficerCard from "./OfficerCard";
import OfficerComponent from "./OfficerComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dallas Formula Racing - Officers',
  description: `
    Meet the dedicated officers of Dallas Formula Racing. Our leadership team is composed of passionate individuals 
    committed to guiding the organization, fostering collaboration, and driving innovation in formula-style vehicle 
    design and competition.
  `,
}

export default function Officers() {
  return (
    <main>
      <OfficerComponent />
    </main>
  );
}
