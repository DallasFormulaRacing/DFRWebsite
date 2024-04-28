import ImageBreaks from "@/app/components/ImageBreaks";
import React from "react";
import Image from "next/image";
import OfficerCard from "./OfficerCard";
import OfficerComponent from "./OfficerComponent";

type Props = {};

const testOfficer = {
    name: "Test Officer",
    positions: "Test Position",
    image: "/assets/Officers Page/test.jpg",
    year: "1 year",
    major: "Test Major",
    yearsOnTeam: "1 year",
    linkedin: "https://www.linkedin.com/in/kevin-chen-1b1b1b1b1/",
};

export default function Officers() {
    return (
        <main className={"flex justify-center min-h-full items-center"}>
            <OfficerComponent />
        </main>
    );
}
