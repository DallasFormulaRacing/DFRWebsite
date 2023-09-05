import ImageBreaks from "@/app/(shared-components)/ImageBreaks";
import React from "react";
import Image from "next/image";
import OfficerCard from "./OfficerCard";



type Props = {};

const testOfficer = {
    name: "Test Officer",
    positions: "Test Position",
    image: "/assets/Officers Page/test.jpg",
    year: "1 year",
    major: "Test Major",
    yearsOnTeam: "1 year",
}

export default function Officers() {
    return (
        <div className={"style.team"}>
            <h1 className={"pt-4"}>Admins</h1>
            <div className={"style.officerCards"}>
                {/* <OfficerCard officer={testOfficer}/> */}
            </div>
        </div>
    );
}